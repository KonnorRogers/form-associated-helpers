// @ts-check

/**
 * @type {() => import("../types.js").Validator<HTMLElement & {max?: number}>}
 */
export const RangeOverflowValidator = () => {
  /**
   * @type {ReturnType<RangeOverflowValidator>}
   */
  const obj = {
    observedAttributes: ["max"],
    message (hostElement) {
      const badInput = Object.assign(document.createElement("input"), {
        type: "number",
        max: hostElement.max ?? Number(hostElement.getAttribute("max")),
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

      const max = Number(element.max ?? element.getAttribute("max"))
      const value = Number(element.value)

      // If it's not a number, we can't compare.
      if (isNaN(value) || typeof value !== "number") return validity

      if (value > max) {
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("rangeOverflow")
      }

      return validity
    }
  }

  return obj
}
