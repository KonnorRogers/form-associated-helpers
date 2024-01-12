import { runValidators } from "../../internal/run-validators.js"
import { ValueMissingValidator } from "../validators/value-missing-validator.js"
import { FormAssociatedMixin } from "./form-associated-mixin.js"


/**
 * A mixin of form associated helpers that get added to a class with attachInternals.
 * This opinionated version extends the above formAssociated and handles common conventions I like.
 * Required properties: { value, disabled, formControl }
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement> & { observedAttributes?: string[] }} T
 * @param {T} superclass
 */
export function VanillaFormAssociatedMixin(superclass) {
  return (
    /**
     * @implements {ElementInternals}
     */
    class extends FormAssociatedMixin(superclass) {
      /**
       * @override
       */
      static get observedAttributes () {
        const parentAttrs = new Set(/** @type {string[]} */ (super.observedAttributes) || [])

        for (const validator of this.validators) {
          if (!validator.observedAttributes) { continue }

          for (const attr of validator.observedAttributes) {
            parentAttrs.add(attr)
          }
        }

        return [...parentAttrs]
      }


      /**
       * Validators are static because they have `observedAttributes`, essentially attributes to "watch"
       * for changes. Whenever these attributes change, we want to be notified and update the validator.
       * @type {Array<import("../types.js").Validator>}
       */
      static get validators () {
        return [
          ValueMissingValidator
        ]
      }

      /**
       * @param {...any} args
       */
      constructor (...args) {
        super(...args)

        /**
         * @type {ElementInternals["role"]}
         */
        this.role = null

        /**
         * @type {string}
         */
        this.value = ""

        /**
         * @type {string}
         */
        this.defaultValue = ""

        /**
         * @type {HTMLInputElement["name"]}
         */
        this.name = ""

        /**
         * @type {null | (HTMLElement & { defaultValue: any, value: any })}
         */
        this.formControl = null

        /**
         * @type {string}
         */
        this.type = this.localName || ""

        /**
         * @type {boolean}
         */
        this.disabled = false

        /**
         * @type {boolean}
         */
        this.required = false

        /**
         * @type {boolean}
         */
        this.hasInteracted = this.hasInteracted ?? false

        /**
         * @type {boolean}
         */
        this.valueHasChanged = this.valueHasChanged ?? false

        /**
         * @type {boolean}
         */
        this.shouldTrackInteractions = this.shouldTrackInteractions ?? true

        /**
         * While not generally encouraged, you can add instance level validators.
         *   These validators should not rely on an attribute, or should already have a "watched" attribute
         *   to know when to re-run the validator.
         * @type {Array<import("../types.js").Validator>}
         */
        this.validators = []

        if (this.shouldTrackInteractions) {
          // this.addEventListener("focusin", this.handleInteraction)
          this.addEventListener("focusout", this.handleInteraction)
          this.addEventListener("blur", this.handleInteraction)
        }
      }

      /**
       * Sets `this.hasInteracted = true` to true when the users focus / clicks the element.
       * @param {Event} e
       */
      handleInteraction = (e) => {
        if (this.disabled !== true && !this.matches(":focus-within")) {
          this.hasInteracted = true
          this.setAttribute("data-has-interacted", "")
        }

        runValidators(this)
      }

      get allValidators () {
        /**
         * @type {Array<import("../types.js").Validator>}
         */
        // @ts-expect-error
        const staticValidators = this.constructor.validators || []

        /**
         * @type {Array<import("../types.js").Validator>}
         */
        const validators = this.validators || []
        return [...staticValidators, ...validators]
      }

      get willShowValidationMessage () {
        return this.disabled !== true && this.hasInteracted === true
      }

      get labels () {
        return /** @type {NodeListOf<HTMLLabelElement>} */ (this.internals.labels)
      }

      get validity () {
        return this.internals.validity
      }

      get validationMessage () {
        return this.internals.validationMessage
      }

      get willValidate () {
        return this.internals.willValidate
      }

      /**
       * This function technically does not exist with internals, but exists on native form elements.
       *   This is backported for users familiar with the API.
       * @param {string} message
       */
      setCustomValidity (message) {
        if (message) {
          this.setValidity({customError: true}, message)
          return
        }

        this.setValidity({})
      }

      /**
       * @param {string} name
       * @param {string} oldVal
       * @param {string} newVal
       */
      attributeChangedCallback(name, oldVal, newVal) {
        // @ts-expect-error
        if (typeof super.attributeChangedCallback === "function") {
          // @ts-expect-error
          super.attributeChangedCallback(name, oldVal, newVal)
        }

        if (newVal === oldVal) {
          return
        }

        if (name === "role") {
          this.internals.role = newVal || null
        }

        if (
          name === "formControl"
          || name === "value"
        ) {
          if (this.valueHasChanged === false) {
            this.value = this.defaultValue
          }
          this.setFormValue(this.value, this.value)
        }
      }

      /**
      * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
      * @returns {void}
      */
      formResetCallback() {
        if ("formControl" in this && this.formControl) {
          this.formControl.value = this.defaultValue
        }

        this.value = this.defaultValue
        this.hasInteracted = false
        this.removeAttribute("data-has-interacted")
        this.valueHasChanged = false
        this.setValidity({})
        this.setFormValue(this.defaultValue, this.defaultValue)
      }

      /**
      * Called when the disabled state of the form changes
      * @param {boolean} isDisabled
      * @returns {void}
      */
      formDisabledCallback(isDisabled) {
        this.disabled = isDisabled
        this.setValidity({})
        this.hasInteracted = false
        this.removeAttribute("data-has-interacted")
      }

      /**
      * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
      * @param {string | File | FormData} state
      * @param {string} reason
      * @returns {void}
      */
      formStateRestoreCallback(state, reason) {
        // @ts-expect-error
        this.value = state
        this.valueHasChanged = false
      }

      // Additional things not added by the `attachInternals()` call.

      /**
      * @param {Parameters<ElementInternals["setValidity"]>} params
      */
      setValidity (...params) {
        let flags = params[0]
        let message = params[1]

        let anchor = params[2]

        if (!anchor) {
          const formControl = /** @type {{formControl: undefined | HTMLElement}} */ (/** @type {unknown} */ (this)).formControl
          anchor = formControl || undefined
        }

        this.internals.setValidity(flags, message, anchor)

        if (this.validity.valid) {
          this.removeAttribute("data-invalid")
          this.removeAttribute("data-user-invalid")
          this.setAttribute("data-valid", "")
          if (this.hasInteracted) {
            this.setAttribute("data-valid", "")
          }
        } else {
          this.removeAttribute("data-valid")
          this.removeAttribute("data-user-valid")
          this.setAttribute("data-invalid", "")
          if (this.hasInteracted) {
            this.setAttribute("data-user-invalid", "")
          }
        }
      }

      reportValidity () {
        return this.internals.reportValidity()
      }

      checkValidity () {
        return this.internals.checkValidity()
      }

      /**
        * @param {Parameters<ElementInternals["setFormValue"]>} args
        */
      setFormValue (...args) {
        this.internals.setFormValue(...args)
        runValidators(this)
        this.valueHasChanged = true
      }

      /**
       * Returns the form attached to the element
       * @returns {ReturnType<ElementInternals["form"]>}
       */
      get form () {
        return this.internals.form
      }
    }
  )
}

