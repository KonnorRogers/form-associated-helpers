/**
 * @template {HTMLElement & { value?: string | null, maxLength?: number, length?: number }} [T=HTMLElement & { value?: string | null, maxLength?: number, length?: number }]
 * @type {() => import("../types.js").Validator<T> & {message: (element: HTMLElement, maxLength: number, stringLength: number) => string}}
 */
export const TooLongValidator = () => {
  /**
   * @type {ReturnType<TooLongValidator<T>>}
   */
  const obj = {
    observedAttributes: ["maxlength"],
    message (_element, maxLength, stringLength) {
      // @TODO: This is an edge case with maxlength. minlength has the same issue.
      // const maxLength = Number(element.maxLength || element.getAttribute("maxlength"))
      // const value = element.value
      // const badInput = Object.assign(document.createElement("input"), {
      //   value,
      //   maxLength
      // })

      // return badInput.validationMessage
      return `Please shorten this text to ${maxLength} characters or less. (You are currently using ${stringLength} characters).`
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

      const maxLength = Number(element.maxLength ?? element.getAttribute("maxlength"))

      if (isNaN(maxLength) || maxLength == null || maxLength <= 0) { return validity }

      if (value.length > maxLength) {
        validity.message = (typeof obj.message === "function" ? obj.message(element, maxLength, value.length) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("tooLong")
      }

      return validity;
    }
  }

  return obj
}

