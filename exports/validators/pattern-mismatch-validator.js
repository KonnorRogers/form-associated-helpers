// @ts-check

/**
 * @typedef {HTMLElement & { validationMessage: string }} ValidateableElement
 */

/**
 * @template {ValidateableElement} T
 * @typedef {Object} PatternMismatchValidatorOptions
 * @property {T} [validatorElement=HTMLInputElement] - A "validatorElement" is used to grab the appropriate `validationMessage` so we get free translations strings. Generally for `PatternMismatchValidator` this will be `<input type="text">` element with required set to `true`. */

/**
 * @template {ValidateableElement} T
 * @type {(options: PatternMismatchValidatorOptions<T>) => import("../types.js").Validator<HTMLElement & { value?: string | null | File | FormData, pattern?: string }>}
 * @example Creating a validator for an input form associated element.
 *   class MyEl {
 *     static validators = [
 *        PatternMismatchValidator()
 *        // Creates a `<input type="text" required="">` element and grabs its `validationMessage`
 *     ]
 *   }
 *
 * @example Creating a validator for an `input` validator element the "long" way.
 *   class MyEl {
 *     static validators = [
 *        PatternMismatchValidator({
 *          validatorElement: Object.assign(document.createElement("input"), {
 *             required: true,
 *             type: "text",
 *             pattern: "wrong-pattern",
 *          }
 *        })
 *     ]
 *   }
 */
export const PatternMismatchValidator = ({
  validatorElement = Object.assign(document.createElement("input"), { type: "text", pattern: "wrong-pattern", value: "bad-value" })
}) => {
  /**
   * @type {ReturnType<PatternMismatchValidator>}
   */
  const obj = {
    observedAttributes: ["pattern"],
    message: validatorElement.validationMessage,
    checkValidity (element) {
      /**
      * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
      */
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      }

      const pattern = element.pattern ?? element.getAttribute("pattern")
      /** If no value is provided, this validator should return true */
      if (!(typeof element.value === "string") || !pattern) {
        return validity;
      }

      const regExp = new RegExp(pattern);
      const isValid = !!regExp.exec(element.value);

      if (isValid) return validity

      validity.isValid = false
      validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
      validity.invalidKeys.push("patternMismatch")
      return validity
    }
  }
  return obj
}
