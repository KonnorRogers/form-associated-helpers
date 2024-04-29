// @ts-check

/**
 * @type {() => import("../types.js").Validator<HTMLElement & {max?: number}> & { message: (element: HTMLElement, max: number) => string }}
 */
export const RangeOverflowValidator = () => {
  /**
   * @type {ReturnType<RangeOverflowValidator>}
   */
  const obj = {
    observedAttributes: ["max"],
    message (_element, max) {
      return `Please select a value that is less than or equal to ${max}.`
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
      const value = element.value

      // If it's not a number, we can't compare.
      if (typeof value !== "number") return validity

      if (value > max) {
        validity.message = (typeof obj.message === "function" ? obj.message(element, max) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("rangeOverflow")
      }

      return validity
    }
  }

  return obj
}
