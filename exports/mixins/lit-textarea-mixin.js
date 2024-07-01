import { TooLongValidator } from "../validators/too-long-validator.js"
import { TooShortValidator } from "../validators/too-short-validator.js"
import { LitFormAssociatedMixin } from "./lit-form-associated-mixin.js"

const formProperties = () => Object.assign(
  {
    autocomplete: {},
    wrap: {},
    readOnly: {attribute: "readonly", type: Boolean, reflect: true},
    placeholder: {},
    dirName: {},
    rows: {type: Number},
    cols: {type: Number},

    defaultValue: {attribute: "value", reflect: true},
    valueHasChanged: {type: Boolean, attribute: false, state: true},
    value: {attribute: false, state: true},

    // Validation
    maxLength: {attribute: "maxlength", type: Number},
    minLength: {attribute: "minlength", type: Number},
  },
  // structuredClone so we dont have mutable properties.
  LitFormAssociatedMixin.formProperties
)

Object.defineProperty(LitTextareaMixin, "formProperties", {
  get () {
    return formProperties()
  }
})

/**
 * @typedef {import("./lit-textarea-mixin-types.js").TextareaGetters} TextareaGetters
 */

/**
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @param {T} superclass
 */
export function TextareaGettersMixin(superclass) {
  return /** @type {T & { new (...args: any[]): TextareaGetters}} */ (_TextareaGettersMixin(superclass))
}

/**
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @param {T} superclass
 */
function _TextareaGettersMixin(superclass) {
  return (
    /**
     * @implements {TextareaGetters}
     */
    class extends superclass {
      /**
        * @returns {HTMLTextAreaElement["textLength"]}
        */
      get textLength () {
        const formControl = /** @type {any} */(this).formControl

        if (formControl && "textLength" in formControl) {
          return /** @type {HTMLTextAreaElement} */ (formControl).textLength
        }

        return 0
      }

      /**
        * @returns {HTMLTextAreaElement["selectionStart"]}
        */
      get selectionStart () {
        const formControl = /** @type {any} */ (this).formControl

        if (formControl && "selectionStart" in formControl) {
          return formControl.selectionStart
        }

        return 0
      }

      /**
        * @returns {HTMLTextAreaElement["selectionEnd"]}
        */
      get selectionEnd () {
        const formControl = /** @type {any} */ (this).formControl

        if (formControl && "selectionEnd" in formControl) {
          return formControl.selectionEnd
        }

        return 0
      }

      /**
      * @returns {boolean}
      */
      get isUserInvalid () {
        return /** @type {any} */ (this).hasInteracted && /** @type {any} */ (this).valueHasChanged
      }
    }
  )
}

/**
 * A mixin for build a `<textarea>` specifically for Lit.
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @param {T} superclass
 */
export function LitTextareaMixin(superclass) {
  return (
    /**
    * @implements HTMLTextAreaElement
    */
    class LitFormAssociatedClass extends TextareaGettersMixin(LitFormAssociatedMixin(superclass)) {
      /**
      * @override
      * @type {Array<import("../types.js").Validator>}
      */
      static get validators () {
        return [
          ...super.validators,
          TooLongValidator(),
          TooShortValidator(),
        ]
      }

      static get properties () {
        /**
          * @type {null | import("lit").PropertyValues}
          */
        // @ts-expect-error
        const properties = super.properties
        if (properties) {
          return {...LitTextareaMixin.formProperties, ...properties}
        }

        return LitTextareaMixin.formProperties
      }

      /**
        * @param {...any} args
        */
      constructor (...args) {
        super(...args)

        /**
          * @type {HTMLTextAreaElement["autocomplete"]}
          */
        this.autocomplete = ""

        /**
          * @type {HTMLTextAreaElement["wrap"]}
          */
        this.wrap = ""

        /**
          * @type {string}
          */
        this.value = ""

        /**
          * @type {string}
          */
        this.defaultValue = ""

        /**
         * @type {boolean}
         */
        this.valueHasChanged = false

        /**
          * @type {HTMLTextAreaElement["maxLength"]}
          */
        this.maxLength = -1

        /**
          * @type {HTMLTextAreaElement["minLength"]}
          */
        this.minLength = -1

        /**
          * @type {HTMLTextAreaElement["readOnly"]}
          */
        this.readOnly = false

        /**
          * @type {HTMLTextAreaElement["placeholder"]}
          */
        this.placeholder = ""

        /**
          * @type {HTMLTextAreaElement["required"]}
          */
        this.required = false

        /**
          * @type {HTMLTextAreaElement["dirName"]}
          */
        this.dirName = ""

        /** @type {HTMLTextAreaElement["selectionDirection"]} */
        this.selectionDirection = "forward"

        /**
          * @type {number}
          */
        this.rows = 2

        /**
          * @type {number}
          */
        this.cols = 20

      }

      /**
       * @override
       * @param {Event} e
       */
      handleInvalid = (e) => {
        if (e.target !== this) return
        if (this.isDisabled) return

        if (this.value !== this.defaultValue) {
          this.valueHasChanged = true
        }

        this.hasInteracted = true
        this.updateInteractionState()
      }

      /**
       * @override
       * Sets `this.hasInteracted = true` to true when the users focus / clicks the element.
       * @param {Event} e
       */
      handleInteraction = (e) => {
        if (this.isDisabled) return

        if (!this.matches(":focus-within") && this.valueHasChanged) {
          this.hasInteracted = true
        }
        this.updateValidity()
      }

      /**
       * @param {string} name
       * @param {null | string} oldVal
       * @param {null | string} newVal
       */
      attributeChangedCallback (name, oldVal, newVal) {
        if (name === "value") {
          this.defaultValue = newVal || ""

          if (!this.hasInteracted && !this.valueHasChanged) {
            this.value = this.defaultValue
            this.setFormValue(/** @type {any} */ (this.toFormValue()), /** @type {any} */ (this.value))
          }
        }
        super.attributeChangedCallback(name, oldVal, newVal)
      }


      /**
        * @param {Parameters<HTMLTextAreaElement["setSelectionRange"]>} args
        */
      setSelectionRange (...args) {
        const formControl = /** @type {any} */(this).formControl

        if (formControl && "selectionRange" in formControl) {
          /** @type {HTMLTextAreaElement} */ (/** @type {unknown} */ (formControl)).setSelectionRange?.(...args)
        }
      }

      /**
        * @param {[replacement: string, start: number, end: number, selectionMode?: SelectionMode] | [replacement: string]} args
        */
      setRangeText (...args) {
        const formControl = /** @type {any} */ (this).formControl

        if (formControl && "setRangeText" in formControl) {
          // @ts-expect-error
          /** @type {HTMLTextAreaElement} */ (/** @type {unknown} */ (formControl)).setRangeText(...args)
        }
      }

      /**
        * @type {HTMLTextAreaElement["select"]}
        */
      select () {
        const formControl = /** @type {HTMLTextAreaElement} */ (/** @type {any} */ (this).formControl)

        if (formControl) {
          formControl.select?.()
        }
      }

      /**
       * @override
       */
      formResetCallback () {
        this.value = this.defaultValue

        super.formResetCallback()
      }

      /**
       * @param {Parameters<import("lit").LitElement["willUpdate"]>[0]} changedProperties
       */
      willUpdate (changedProperties) {
        if (changedProperties.has("value") && this.hasInteracted) {
          this.valueHasChanged = true
        }

        if (changedProperties.has("defaultValue")) {
          if (!this.hasInteracted && !this.valueHasChanged) {
            this.value = this.defaultValue
            this.setFormValue(/** @type {any} */ (this.toFormValue()), /** @type {any} */ (this.value))
          }
        }

        super.willUpdate(changedProperties)
      }
    }
  )
}
