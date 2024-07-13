// @ts-check

/**
 * @param {number} min
 * @param {number} value
 * @param {number} step
 * @return {boolean}
 */
function isValidStep (min, value, step) {
  return (value - min) % step === 0
}

/**
 * @param {number} min
 * @param {number} value
 * @param {number} step
 * @returns {{ high: number, low: number }}
 */
function findClosestSteps (min, value, step) {
  const high = value + ((value - min) % step)
  const low = high - step

  return { high, low }
}

/**
 * @param {any} maybeNum
 */
function toNumberOrNull (maybeNum) {
  try {
    return Number(maybeNum)
  } catch (_e) {
    return null
  }
}

/**
 * @typedef {HTMLElement & { min?: number, step?: number, value?: null | string | File | FormData }} RangeElement
 */

/**
 * @template {RangeElement} [T=RangeElement]
 * @returns {import("../types.js").Validator<T>}
 */
export const StepMismatchValidator = () => {
  /**
   * @type {ReturnType<StepMismatchValidator<T>>}
   */
  const obj = {
    observedAttributes: ["min", "step"],
    /**
     * @param {T} element
     */
    message (element) {
      // Don't need min here.
      // const min = Number(element.min ?? element.getAttribute("min"))
      const value = toNumberOrNull(element.value)
      const step = toNumberOrNull(element.step ?? element.getAttribute("step"))

      const badInput = Object.assign(document.createElement("input"), {
        type: "number",
        // min,
        value,
        step,
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

      const min = toNumberOrNull(element.min ?? element.getAttribute("min"))
      const value = toNumberOrNull(element.value)
      const step = toNumberOrNull(element.step ?? element.getAttribute("step"))

      if (min == null || value == null || step == null) {
        return validity
      }

      if (isNaN(min) || isNaN(value) || isNaN(step)) {
        return validity
      }

      const isValid = isValidStep(min, value, step)

      if (isValid) return validity

      const {low, high} = findClosestSteps(min, value, step)

      validity.message = (typeof obj.message === "function" ? obj.message(element, { low, high }) : obj.message) || ""
      validity.isValid = false
      validity.invalidKeys.push("stepMismatch")

      return validity
    }
  }

  return obj
}
