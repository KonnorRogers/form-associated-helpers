/**
 * @typedef {{validationMessage: string }} Validateable
 */

/**
 * @type {() => import("../types.js").Validator<HTMLElement & { required?: boolean }>}
 */
export const ValueMissingValidator = () => {
  /**
   * @type {ReturnType<ValueMissingValidator>}
   */
  const obj = {
    observedAttributes: ["required"],
    message: Object.assign(document.createElement("input"), {
      required: true,
    }).validationMessage,
    checkValidity (element) {
      /**
      * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
      */
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      }

      const isRequired = element.required ?? element.hasAttribute("required")

      // Always true if the element isn't required.
      if (!isRequired) {
        return validity
      }

      if (!element.value) {
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("valueMissing")
      }

      return validity
    }
  }

  return obj
}

