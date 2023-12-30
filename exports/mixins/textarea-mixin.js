import { PatternMismatchValidator } from "../validators/pattern-mismatch-validator.js"
import { TooLongValidator } from "../validators/too-long-validator.js"
import { TooShortValidator } from "../validators/too-short-validator.js"
import { LitFormAssociatedMixin } from "./lit-form-associated-mixin.js"


TextareaMixin.formProperties = Object.freeze(
  Object.assign(
    {
      autocomplete: {reflect: true},
      wrap: {reflect: true},
      readOnly: {attribute: "readonly", type: Boolean, reflect: true},
      placeholder: {reflect: true},
      dirName: {attribute: "dirname", reflect: true},

      // Validation
      maxLength: {attribute: "maxlength", type: Number, reflect: true},
      minLength: {attribute: "minlength", type: Number, reflect: true},
      pattern: {reflect: true},
    },
    LitFormAssociatedMixin.formProperties
  )
)

/**
 * A mixin for textareas
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<import("lit").LitElement> & { properties?: import("lit").PropertyValues }} T
 * @param {T} superclass
 */
export function TextareaMixin(superclass) {
  return (
    /**
     * @implements {Omit<HTMLTextAreaElement, "cols" | "rows">}
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
        if (super.properties) {
          return {...TextareaMixin.formProperties, ...super.properties}
        }


        return TextareaMixin.formProperties
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
