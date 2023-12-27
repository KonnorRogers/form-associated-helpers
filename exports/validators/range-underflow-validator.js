/**
 * @type {import("../types.js").Validator<HTMLElement & {min?: number}>}
 */
export const RangeUnderflowValidator = {
  observedAttributes: ["min"],
  checkValidity(element) {
    const min = Number(element.min ?? element.getAttribute("min"))
    const value = element.value

    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    if (typeof value !== "number") return validity

    if (value < min) {
      validity.message = `Please select a value that is more than or equal to ${min}.`
      validity.isValid = false
      validity.invalidKeys.push("rangeUnderflow")
    }

    return validity
  }
}
