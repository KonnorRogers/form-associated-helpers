// @ts-check


/**
 * @template {HTMLElement & { min?: number, value: null | string | File | FormData }} T
 * @returns {import("../types.js").Validator<T>}
 */
export const RangeUnderflowValidator = () => {
  /**
   * @type {ReturnType<RangeUnderflowValidator<T>>}
   */
  const obj = {
    observedAttributes: ["min"],
    message (hostElement) {
      const badInput = Object.assign(document.createElement("input"), {
        type: "number",
        min: hostElement.min ?? Number(hostElement.getAttribute("min")),
        value: hostElement.value
      })

      return badInput.validationMessage
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

      const min = Number(element.min ?? element.getAttribute("min"))
      const value = Number(element.value)

      // If it's not a number, we can't compare.
      if (isNaN(value) || typeof value !== "number") return validity

      if (value < min) {
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("rangeOverflow")
      }

      return validity
    }
  }

  return obj
}
