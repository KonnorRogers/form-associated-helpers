/**
 * @type {() => import("../types.js").Validator<HTMLElement & {min?: number}> & { message: (element: HTMLElement, min: number) => string }}
 */
export const RangeUnderflowValidator = () => {
  /**
   * @type {ReturnType<RangeUnderflowValidator>}
   */
  const obj = {
    observedAttributes: ["min"],
    message (_element, min) {
      return `Please select a value that is more than or equal to ${min}.`
    },
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
        validity.message = (typeof obj.message === "function" ? obj.message(element, min) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("rangeUnderflow")
      }

      return validity
    }
  }

  return obj
}
