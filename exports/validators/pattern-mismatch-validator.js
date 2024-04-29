/**
 * @type {() => import("../types.js").Validator<HTMLElement & { value?: string | null | File | FormData } & { pattern?: string }>}
 */
export const PatternMismatchValidator = () => {
  return {
    observedAttributes: ["pattern"],
    message: "Please match the requested format.",
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
      validity.message = (typeof this.message === "function" ? this.message(element) : this.message) || ""
      validity.invalidKeys.push("patternMismatch")
      return validity
    }
  }
}
