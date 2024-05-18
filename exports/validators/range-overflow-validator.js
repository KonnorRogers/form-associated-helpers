// @ts-check

/**
 * @template {HTMLElement & { validationMessage: string }} [T=HTMLElement & { validationMessage: string }]
 * @typedef {(hostElement: HTMLElement & {value: unknown, max?: number}) => T} ValidatorElementFunction
 */

/**
 * @template {HTMLElement & { validationMessage: string }} [T=HTMLElement & { validationMessage: string }]
 * @typedef {object} RangeOverflowValidatorOptions
 * @property {ValidatorElementFunction<T>} validatorElementFunction
 */

/**
 * @template {HTMLElement & { validationMessage: string }} T
 * @type {(options?: Partial<RangeOverflowValidatorOptions>) => import("../types.js").Validator<HTMLElement & {max?: number}> & { message: (element: HTMLElement, max: number) => string }}
 */
export const RangeOverflowValidator = (options = {}) => {
  if (!options) { options = {} }
  if (options.validatorElementFunction == null) {
    options.validatorElementFunction = (hostElement) => {
      return Object.assign(document.createElement("input"), {
        max: hostElement.max ?? Number(hostElement.getAttribute("max")),
        value: hostElement.value
      })
    }
  }

  /**
   * @type {ReturnType<RangeOverflowValidator>}
   */
  const obj = {
    observedAttributes: ["max"],
    message (hostElement, _max) {
      if (!options.validatorElementFunction) return ""

      const validatorElement = options.validatorElementFunction(/** @type {HTMLElement & { max?: number, value: unknown }} */ (hostElement))
      return validatorElement.validationMessage
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
