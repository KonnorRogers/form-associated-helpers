import { PatternMismatchValidator } from "../validators/pattern-mismatch-validator.js"
import { TooLongValidator } from "../validators/too-long-validator.js"
import { TooShortValidator } from "../validators/too-short-validator.js"
import { LitFormAssociatedMixin } from "./lit-form-associated-mixin.js"

LitTextareaMixin.formProperties = Object.freeze(
  Object.assign(
    {
      autocomplete: {},
      wrap: {},
      readOnly: {attribute: "readonly", type: Boolean, reflect: true},
      placeholder: {},
      dirName: {},
      rows: {type: Number},
      cols: {type: Number},

      // Validation
      maxLength: {attribute: "maxlength", type: Number},
      minLength: {attribute: "minlength", type: Number},
      pattern: {},
    },
    LitFormAssociatedMixin.formProperties
  )
)

/**
 * A mixin for textareas
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement> & {observedAttributes?: string[]}} T
 * @param {T} superclass
 */
export function LitTextareaMixin(superclass) {
  return (
    /**
     * @implements {HTMLTextAreaElement}
     */
    class extends LitFormAssociatedMixin(superclass) {
      /**
       * @override
       */
      static get validators () {
        return [
          ...super.validators,
          TooLongValidator,
          TooShortValidator,
          PatternMismatchValidator
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
         * @type {null | HTMLTextAreaElement}
         */
        this.formControl = null

        /**
         * @type {HTMLTextAreaElement["dirName"]}
         */
        this.dirName = ""

        /** @type {HTMLTextAreaElement["selectionDirection"]} */
        this.selectionDirection = "forward"

        /**
         * @type {string}
         */
        this.pattern = ""

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
       * @param {Parameters<HTMLTextAreaElement["setSelectionRange"]>} args
       */
      setSelectionRange (...args) {
        const formControl = this.formControl

        if (formControl && "selectionRange" in formControl) {
          /** @type {HTMLTextAreaElement} */ (/** @type {unknown} */ (formControl)).setSelectionRange(...args)
        }
      }

      /**
       * @param {[replacement: string, start: number, end: number, selectionMode?: SelectionMode] | [replacement: string]} args
       */
      setRangeText (...args) {
        const formControl = this.formControl

        if (formControl && "setRangeText" in formControl) {
          // @ts-expect-error
          /** @type {HTMLTextAreaElement} */ (/** @type {unknown} */ (formControl)).setRangeText(...args)
        }
      }

      /**
       * @returns {HTMLTextAreaElement["textLength"]}
       */
      get textLength () {
        const formControl = /** @type {HTMLTextAreaElement} */ (this.formControl)

        if (formControl && "textLength" in formControl) {
          return formControl.textLength
        }

        return 0
      }

      /**
       * @returns {HTMLTextAreaElement["selectionStart"]}
       */
      get selectionStart () {
        const formControl = /** @type {HTMLTextAreaElement} */ (this.formControl)

        if (formControl && "selectionStart" in formControl) {
          return formControl.selectionStart
        }

        return 0
      }

      /**
       * @returns {HTMLTextAreaElement["selectionStart"]}
       */
      get selectionEnd () {
        const formControl = /** @type {HTMLTextAreaElement} */ (this.formControl)

        if (formControl && "selectionEnd" in formControl) {
          return formControl.selectionEnd
        }

        return 0
      }

      /**
       * @type {HTMLTextAreaElement["select"]}
       */
      select () {
        const formControl = this.formControl

        if (formControl) {
          /** @type {HTMLTextAreaElement} */ (formControl).select?.()
        }
      }
    }
  )
}
