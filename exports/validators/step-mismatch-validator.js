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
 * @type {import("../types.js").Validator<HTMLElement & { min?: number, step?: number }>}
 */
export const StepMismatchValidator = {
  observedAttributes: ["min", "step"],
  checkValidity (element) {
    const min = Number(element.min ?? element.getAttribute("min"))
    const value = Number(element.value ?? element.getAttribute("value"))
    const step = Number(element.step ?? element.getAttribute("step"))

    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    if (isNaN(min) || isNaN(value) || isNaN(step)) {
      return validity
    }

    const isValid = isValidStep(min, value, step)

    if (isValid) return validity

    const {low, high} = findClosestSteps(min, value, step)

    validity.message = `Please select a valid value. The two nearest valid values are ${low} and ${high}`
    validity.isValid = false
    validity.invalidKeys.push("stepMismatch")

    return validity
  }
}
