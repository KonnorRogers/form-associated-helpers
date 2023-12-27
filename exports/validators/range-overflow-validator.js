/**
 * @type {import("../types.js").Validator<HTMLElement & {max?: number}>}
 */
export const RangeOverflowValidator = {
  observedAttributes: ["max"],
  checkValidity (element) {
    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    const max = Number(element.max ?? element.getAttribute("max"))
    const value = element.value

    // If it's not a number, we can't compare.
    if (typeof value !== "number") return validity

    if (value > max) {
      validity.message = `Please select a value that is less than or equal to ${max}.`
      validity.isValid = false
      validity.invalidKeys.push("rangeOverflow")
    }

    return validity
  }
}
