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
      // @TODO: This is an edge case with minlength. maxlength has the same issue.
      // const maxLength = Number(element.minLength || element.getAttribute("minlength"))
      // const value = element.value
      // const badInput = Object.assign(document.createElement("input"), {
      //   value,
      //   maxLength
      // })

      // return badInput.validationMessage
      return `Please lengthen this text to ${minLength} characters or more. (You are currently using ${stringLength} characters).`
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

      if (isNaN(minLength) || minLength == null || minLength <= 0) { return validity }

      if (value.length < minLength) {
        validity.message = (typeof obj.message === "function" ? obj.message(element, minLength, value.length) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("tooShort")
      }

      return validity;
    }
  }

  return obj
}
