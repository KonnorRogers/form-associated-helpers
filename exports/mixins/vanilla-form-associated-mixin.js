import { runValidators } from "../../internal/run-validators.js"
import { ValueMissingValidator } from "../validators/value-missing-validator.js"
import { CustomStatesMixin } from "./custom-states-mixin.js"
import { FormAssociatedMixin } from "./form-associated-mixin.js"

/**
 * @typedef {import("./types.js").GConstructable<HTMLElement & Partial<{ formControl?: null | undefined | (HTMLElement & { value: any, defaultValue: any })}>> & { observedAttributes?: string[] }} FormAssociatedElement
 */

/**
 * A mixin of form associated helpers that get added to a class with attachInternals.
 * This opinionated version extends the above formAssociated and handles common conventions I like.
 * Required properties: { value, disabled, formControl, validationTarget }
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {FormAssociatedElement} T
 * @param {T} superclass
 */
export function VanillaFormAssociatedMixin(superclass) {
  return (
    /**
     * @implements {ElementInternals}
     */
    class extends CustomStatesMixin(FormAssociatedMixin(superclass)) {
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
         * @type {FormData | string | File | null}
         */
        this.value = null

        /**
         * @type {FormData | string | File | null}
         */
        this.previousValue = this.value

        /**
         * @type {string}
         */
        this.defaultValue = ""

        /**
         * @type {HTMLInputElement["name"]}
         */
        this.name = ""

        /**
         * `this.type` is used by ElementInternals.
         * @type {string}
         */
        this.type = this.localName || ""

        /**
         * Make sure if you're using a library that "reflects" properties to attributes, you don't reflect this `disabled.`
         * @type {boolean}
         */
        this.disabled = false

        /**
         * Generally forms can have "required", this may not be necessary here, but is a nice convention.
         * @type {boolean}
         */
        this.required = false

        /**
         * Tracks when a user blurs from a form control.
         * @type {boolean}
         */
        this.hasInteracted = this.hasInteracted ?? false

        /**
         * Dirty tracks if the value has been changed.
         * @type {boolean}
         */
        this.valueHasChanged = this.valueHasChanged ?? false

        /**
         * While not generally encouraged, you can add instance level validators.
         *   These validators should not rely on an attribute, or should already have a "watched" attribute
         *   to know when to re-run the validator.
         * @type {Array<import("../types.js").Validator>}
         */
        this.validators = []

        // this.setFormValue(null)

        // this.addEventListener("focusin", this.handleInteraction)
        this.addEventListener("focusout", this.handleInteraction)
        this.addEventListener("blur", this.handleInteraction)
        this.addEventListener("invalid", this.handleInvalid)
      }

      /**
       * @param {Event} e
       */
      handleInvalid = (e) => {
        if (e.target !== this) return
        if (this.disabled === true || this.hasAttribute("disabled")) return

        if (this.value !== this.defaultValue) {
          this.valueHasChanged = true
        }

        this.hasInteracted = true

        updateInteractionState(this)
      }

      /**
       * Sets `this.hasInteracted = true` to true when the users focus / clicks the element.
       * @param {Event} e
       */
      handleInteraction = (e) => {
        if (this.disabled === true || this.hasAttribute("disabled")) return

        if (!this.matches(":focus-within") && this.valueHasChanged) {
          this.hasInteracted = true
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
        this.setValidity({})
        if (message) {
          this.setValidity({customError: true}, message)
          return
        }
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

        if (name === "value") {
          this.defaultValue = this.getAttribute("value") || ""

          if (!this.hasInteracted && !this.valueHasChanged) {
            this.value = this.defaultValue
            this.setFormValue(this.value, this.value)
          }
        }

        runValidators(this)
      }

      /**
      * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
      * @returns {void}
      */
      formResetCallback() {
        if ("formControl" in this && this.formControl) {
          this.formControl.value = this.defaultValue
        }

        this.setValidity({})
        this.value = this.defaultValue
        this.hasInteracted = false
        this.valueHasChanged = false
        runValidators(this)
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
        runValidators(this) // Removes validations.
      }

      /**
      * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
      * @param {string | File | FormData | null} state
      * @param {string} reason
      * @returns {void}
      */
      formStateRestoreCallback(state, reason) {
        this.value = state

        this.setValidity({})
        if (this.formControl) {
          this.formControl.value = state
        }
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
          const validationTarget = this.validationTarget
          anchor = validationTarget
        }

        this.internals.setValidity(flags, message, anchor)
        updateInteractionState(this)
      }

      reportValidity () {
        runValidators(this)
        return this.internals.reportValidity()
      }

      checkValidity () {
        runValidators(this)
        return this.internals.checkValidity()
      }


      /**
        * `validationTarget` is used for displaying native validation popups as the "anchor"
        * @type {undefined | HTMLElement}
        */
      get validationTarget () {
        return this.formControl || undefined
      }

      /**
        * @param {Parameters<ElementInternals["setFormValue"]>} args
        */
      setFormValue (...args) {
        // Dirty tracking of values.
        if (this.value !== this.defaultValue) {
          this.valueHasChanged = true
        }

        this.internals.setFormValue(...args)
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


/**
 * @param {HTMLElement & { disabled: boolean, validity: ValidityState, hasInteracted: boolean, valueHasChanged: boolean } & InstanceType<ReturnType<typeof VanillaFormAssociatedMixin<FormAssociatedElement>>>} el
 */
function updateInteractionState (el) {
  if (el.disabled || el.hasAttribute("disabled")) {
    el.deleteCustomState("invalid")
    el.deleteCustomState("user-invalid")
    el.deleteCustomState("valid")
    el.deleteCustomState("user-valid")
    return
  }

  if (el.validity.valid) {
    el.deleteCustomState("invalid")
    el.deleteCustomState("user-invalid")
    el.addCustomState("valid")
    el.toggleCustomState("user-valid", el.hasInteracted && el.valueHasChanged)
  } else {
    el.deleteCustomState("valid")
    el.deleteCustomState("user-valid")
    el.addCustomState("invalid")
    el.toggleCustomState("user-invalid", el.hasInteracted && el.valueHasChanged)
  }
}

