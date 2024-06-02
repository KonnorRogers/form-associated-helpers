/**
 * @typedef {import("../types.js").FormValue} FormValue
 */

/**
 * @template {HTMLElement & { maxLength?: number, value: FormValue }} [T=(HTMLElement & { maxLength?: number, value: FormValue })]
 */
export const TooLongValidator = () => {
  const obj = {
    observedAttributes: ["maxlength"],
    /**
     * @param {T} _hostElement
     * @param {number} maxLength
     * @param {number} stringLength
     */
    message (_hostElement, maxLength, stringLength) {
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
    /**
     * @param {T} element
     */
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

