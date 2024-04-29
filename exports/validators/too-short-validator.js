/**
 * @type {() => import("../types.js").Validator<HTMLElement & { minLength?: number, length?: number }> & { message: (element: HTMLElement, minLength: number, stringLength: number) => string}}
 * }}
 */
export const TooShortValidator = () => {
  /**
   * @type {ReturnType<TooShortValidator>}
   */
  const obj = {
    observedAttributes: ["minlength"],
    message (_element, minLength, stringLength) {
      return `Please use greater than or equal to ${minLength} characters. You are currently using ${stringLength} characters.`;
    },
    checkValidity (element) {
      /**
      * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
      */
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      }

      /** if its not a string, we really can't compare. */
      let value = element.value ?? ""
      if (typeof value !== "string") { return validity }

      const minLength = Number(element.minLength || element.getAttribute("minlength"))

      if (!minLength) { return validity }

      if (minLength > value.length) {
        validity.message = (typeof obj.message === "function" ? obj.message(element, minLength, value.length) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("tooShort")
      }

      return validity;
    }
  }

  return obj
}
