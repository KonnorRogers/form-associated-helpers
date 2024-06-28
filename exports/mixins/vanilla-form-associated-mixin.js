import { ValueMissingValidator } from "../validators/value-missing-validator.js"
import { CustomStatesMixin } from "./custom-states-mixin.js"
import { FormAssociatedMixin } from "./form-associated-mixin.js"

/**
 * @typedef {Object} FormAssociatedInstanceProperties
 * @property {null | undefined | (HTMLElement & { value: any, defaultValue: any })} [formControl]
 * @property {ElementInternals} internals
 * @property {boolean} disabled
 * @property {boolean} hasInteracted: boolean
 * @property {Array<import("../types.js").Validator>} validators
 */


/**
 * @param {HTMLElement & { disabled: boolean }} el
 */
function isDisabled (el) {
  return Boolean(el.matches(":disabled") || el.disabled)
}

/**
 * @template T
 * @template U
 * @param {T} val
 * @param {U} fallback
 */
function fallbackValue (val, fallback) {
  if (val !== undefined) {
    return val
  }

  return fallback
}

/**
 * @template {typeof HTMLElement} T
 * @typedef {import("../../internal/form-associated-getters.js").AbstractGetters<T>} AbstractGetters
 */

/**
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @typedef {InstanceType<T> & {
    internals: ElementInternals;
    validators: Array<import("../types.js").Validator>;
    hasInteracted: boolean;
    formControl: null | undefined | HTMLElement;
    disabled: boolean;
  }} FormAssociatedProperties
 */

/**
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @param {T} superclass
 */
function _VanillaFormAssociatedGettersMixin(superclass) {
  return (
    /**
     * @implements {AbstractGetters<T>}
     */
    class extends superclass {
      get allValidators () {
        /**
         * @type {Array<import("../types.js").Validator>}
         */
        // @ts-expect-error
        const staticValidators = this.constructor.validators || []

        /**
         * @type {Array<import("../types.js").Validator>}
         */
        const validators = /** @type {FormAssociatedProperties<T>} */ (this).validators || []
        return [...staticValidators, ...validators]
      }

      get willShowValidationMessage () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return isDisabled(self) && self.hasInteracted === true
      }

      get labels () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return /** @type {NodeListOf<HTMLLabelElement>} */ (self.internals.labels)
      }

      get validity () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return self.internals.validity
      }

      get validationMessage () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return self.internals.validationMessage
      }

      get willValidate () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return self.internals.willValidate
      }

      /**
        * `validationTarget` is used for displaying native validation popups as the "anchor"
        * @type {null | undefined | HTMLElement}
        */
      get validationTarget () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return self.formControl || undefined
      }

      /**
       * Returns the form attached to the element
       * @returns {ReturnType<ElementInternals["form"]>}
       */
      get form () {
        const self = /** @type {FormAssociatedProperties<T>} */ (this)
        return self.internals.form
      }
  })
}

/**
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @param {T} superclass
 */
export function VanillaFormAssociatedGettersMixin(superclass) {
  return /** @type {T & { new (...args: any[]): AbstractGetters<T>}} */ (_VanillaFormAssociatedGettersMixin(superclass))
}


/**
 * A mixin of form associated helpers that get added to a class with attachInternals.
 * This opinionated version extends the above formAssociated and handles common conventions I like.
 * Required properties: { value, disabled, formControl, validationTarget }
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @param {T} superclass
 */
export function VanillaFormAssociatedMixin(superclass) {
    return class extends CustomStatesMixin(VanillaFormAssociatedGettersMixin(FormAssociatedMixin(superclass))) {
      static get observedAttributes () {
        /**
         * @type {undefined | string[]}
         */
        // @ts-expect-error
        const parentObservedAttributes = super.observedAttributes
        const parentAttrs = new Set(parentObservedAttributes || [])

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
          ValueMissingValidator()
        ]
      }

      /**
       * Events to listen for that will mark the element as "hasInteracted" for setting the `:state(user-valid)`
       * @default ["focusout", "blur"]
       * @type {string[]}
       */
      // static assumeInteractionOn =
      //   /** @type {{ assumeInteractionOn: string[] }} */ (/** @type {unknown} */ (this.constructor)).assumeInteractionOn || [
      //   "focusout",
      //   "blur"
      // ]

      /**
       * @param {...any} args
       */
      constructor (...args) {
        super(...args)

        /**
         * @type {ElementInternals["role"]}
         */
        this.role = fallbackValue(this.role, this.getAttribute("role") || null)

        /**
         * @type {unknown}
         */
        this.value = fallbackValue(this.value, this.getAttribute("value") || null)

        /**
         * @type {null | string}
         */
        this.defaultValue = fallbackValue(this.defaultValue, this.getAttribute("value") || null)

        /**
         * @type {HTMLInputElement["name"]}
         */
        this.name = fallbackValue(this.name, (this.getAttribute("name") || ""))

        /**
         * `this.type` is used by ElementInternals.
         * @type {string}
         */
        this.type = fallbackValue(this.type, (this.getAttribute("type") || this.localName || ""))

        /**
         * Make sure if you're using a library that "reflects" properties to attributes, you don't reflect this `disabled.`
         * @type {boolean}
         */
        this.disabled = fallbackValue(this.disabled, isDisabled(this))

        /**
         * Generally form controls can have "required", this may not be necessary here, but is a nice convention.
         * @type {boolean}
         */
        this.required = fallbackValue(this.required, this.hasAttribute("required"))

        /**
         * Tracks when a user blurs from a form control.
         * @type {boolean}
         */
        this.hasInteracted = fallbackValue(this.hasInteracted, false)

        /**
         * Dirty tracks if the value has been changed.
         * @type {boolean}
         */
        this.valueHasChanged = fallbackValue(this.valueHasChanged, false)

        /**
         * While not generally encouraged, you can add instance level validators.
         *   These validators should not rely on an attribute, or should already have a "watched" attribute
         *   to know when to re-run the validator.
         * @type {Array<import("../types.js").Validator>}
         */
        this.validators = fallbackValue(this.validators, [])

        this.addEventListener("focusout", this.handleInteraction)
        this.addEventListener("blur", this.handleInteraction)
        this.addEventListener("invalid", this.handleInvalid)

        // Private

        /** These are dirty checks for custom errors. In Safari, {customError: true} always happens with `setValidity()`. This is the workaround. */

        /**
         * @private
         */
        this.__hasCustomError = false

        /**
         * @private
         */
        this.__customErrorMessage = ""
      }

      /**
       * @param {Event} e
       */
      handleInvalid = (e) => {
        if (e.target !== this) return
        if (isDisabled(this)) return

        if (this.value !== this.defaultValue) {
          this.valueHasChanged = true
        }

        this.hasInteracted = true

        this.updateInteractionState()
      }

      /**
       * Sets `this.hasInteracted = true` to true when the users focus / clicks the element.
       * @param {Event} e
       */
      handleInteraction = (e) => {
        if (isDisabled(this)) return

        if (!this.matches(":focus-within") && this.valueHasChanged) {
          this.hasInteracted = true
        }
        this.updateValidity()
      }

      /**
       * This function technically does not exist with internals, but exists on native form elements.
       *   This is backported for users familiar with the API.
       * @param {string} message
       */
      setCustomValidity (message) {
        if (!message) {
          this.__hasCustomError = false
          this.__customErrorMessage = ""
          this.setValidity({})
          return
        }

        this.__hasCustomError = true
        this.__customErrorMessage = message
        this.internals.setValidity({customError: true}, message)
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
          this.defaultValue = newVal

          if (!this.hasInteracted && !this.valueHasChanged) {
            this.value = this.defaultValue
            this.setFormValue(/** @type {any} */ (this.getFormValue()), /** @type {any} */ (this.value))
          }
        }

        if (name === "disabled") {
          this.disabled = Boolean(newVal)
        }

        this.updateValidity()
      }

      /**
      * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
      * @returns {void}
      */
      formResetCallback() {
        if ("formControl" in this && this.formControl) {
          /** @type {HTMLElement & { value: unknown }} */ (this.formControl).value = this.defaultValue
        }

        this.resetValidity()
        this.value = this.defaultValue
        this.hasInteracted = false
        this.valueHasChanged = false
        this.updateValidity()
        this.setFormValue(this.getFormValue(), this.value)
      }

      /**
      * Called when the disabled state of the form changes
      * @param {boolean} isDisabled
      * @returns {void}
      */
      formDisabledCallback(isDisabled) {
        this.disabled = isDisabled
        this.resetValidity()
        this.updateValidity()
      }

      /**
      * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
      * @param {string | File | FormData | null} state
      * @param {string} reason
      * @returns {void}
      */
      formStateRestoreCallback(state, reason) {
        this.value = state

        if ("formControl" in this && this.formControl) {
          /** @type {HTMLElement & { value: unknown }} */ (this.formControl).value = state
        }

        this.resetValidity()
        this.updateValidity()
      }

      // Additional things not added by the `attachInternals()` call.

      /**
       * This should generally not be used by end users. This is intended for custom validators.
       * @param {Parameters<ElementInternals["setValidity"]>} params
       */
      setValidity (...params) {
        let flags = params[0]
        let message = params[1]

        let anchor = params[2]

        if (!anchor) {
          const validationTarget = this.validationTarget
          anchor = validationTarget || undefined
        }

        this.internals.setValidity(flags, message, anchor)
        this.updateInteractionState()
      }

      reportValidity () {
        this.updateValidity()
        return this.internals.reportValidity()
      }

      checkValidity () {
        this.updateValidity()
        return this.internals.checkValidity()
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
        this.updateValidity()
      }

      /**
       * This function generally just returns `this.value`. Occasionally, you may want to apply transforms to your `this.value` prior to setting it on the form. This is the place to do that.
       * @example
       *    class MyElement extends VanillaFormAssociatedMixin(HTMLElement) {
       *       getFormValue () {
       *         const elementValue = this.value // => ["1", "2", "3"]
       *         // Transform elementValue array into a comma separated string.
       *         return elementValue.join(", ")
       *       }
       *    }
       */
      getFormValue () {
        return this.value
      }

      resetValidity () {
        this.setCustomValidity("")
        this.setValidity({})
      }

      updateValidity () {
        if (isDisabled(this)) {
          this.resetValidity()
          // We don't run validators on disabled thiss to be inline with native HTMLElements.
          // https://codepen.io/paramagicdev/pen/PoLogeL
          return
        }

        const validators = /** @type {{allValidators?: Array<import("../types.js").Validator>}} */ (/** @type {unknown} */ (this)).allValidators

        if (!validators) {
          this.setValidity({})
          return
        }

        const customError = Boolean(this.__hasCustomError)
        const flags = {
          customError
        }

        let formControl = undefined
        if ("formControl" in this && this.formControl) {
          formControl = /** @type {HTMLElement} */ (this.formControl) || undefined
        }

        let finalMessage = ""

        for (const validator of validators) {
          const { isValid, message, invalidKeys } = validator.checkValidity(this)

          if (isValid) { continue }

          if (!finalMessage) {
            finalMessage = message
          }

          if (invalidKeys?.length >= 0) {
            // @ts-expect-error
            invalidKeys.forEach((str) => flags[str] = true)
          }
        }

        // This is a workaround for preserving custom errors
        if (!finalMessage) {
          finalMessage = this.validationMessage || this.__customErrorMessage
        }

        this.setValidity(flags, finalMessage, formControl)
      }

      updateInteractionState () {
        // if (isDisabled(this)) {
        //   this.addCustomState("disabled")
        //   this.deleteCustomState("invalid")
        //   this.deleteCustomState("user-invalid")
        //   this.deleteCustomState("valid")
        //   this.deleteCustomState("user-valid")
        //   return
        // }

        // this.deleteCustomState("disabled")

        // if (this.validity.valid) {
        //   this.deleteCustomState("invalid")
        //   this.deleteCustomState("user-invalid")
        //   this.addCustomState("valid")
        //   this.toggleCustomState("user-valid", this.hasInteracted && this.valueHasChanged)
        // } else {
        //   this.deleteCustomState("valid")
        //   this.deleteCustomState("user-valid")
        //   this.addCustomState("invalid")
        //   this.toggleCustomState("user-invalid", this.hasInteracted && this.valueHasChanged)
        // }
      }
    }
}

