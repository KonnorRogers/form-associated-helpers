/**
 * @type {import("../types.js").Validator<HTMLElement & { required?: boolean }>}
 */
export const ValueMissingValidator = {
  observedAttributes: ["required"],
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
      validity.message = "Please fill out this field."
      validity.isValid = false
      validity.invalidKeys.push("valueMissing")
    }

    return validity
  }
}

