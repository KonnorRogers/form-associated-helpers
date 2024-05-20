// @ts-check

/**
 * @type {() => import("../types.js").Validator<HTMLElement & { value?: string | null | File | FormData, pattern?: string }>}
 * @example Creating a validator for an input form associated element.
 *   class MyEl {
 *     static validators = [
 *        PatternMismatchValidator()
 *        // Creates a `<input type="text" required="">` element and grabs its `validationMessage`
 *     ]
 *   }
 */
export const PatternMismatchValidator = () => {
  const validatorElement = Object.assign(
    document.createElement("input"),
    { type: "text", pattern: "wrong-pattern", value: "bad-value" }
  )

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

      const invalidate = () => {
        validity.isValid = false
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
        validity.invalidKeys.push("patternMismatch")
        return validity
      }

      if (element.value == null) {
        return invalidate()
      }


      const pattern = element.pattern ?? element.getAttribute("pattern")
      /** If no value is provided, this validator should return true */
      if (!(typeof element.value === "string") || !pattern) {
        return validity;
      }

      const regExp = new RegExp(pattern);
      const isValid = !!regExp.exec(element.value);

      if (isValid) { return validity }

      return invalidate()
    }
  }
  return obj
}
