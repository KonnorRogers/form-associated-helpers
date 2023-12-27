/**
 * "The read-only badInput property of a ValidityState object indicates if the user has provided input that the browser is unable to convert. For example, if you have a number input element whose content is a string."
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/badInput}
 * @type {import("../types.js").Validator<HTMLElement & { formControl?: HTMLElement & ElementInternals }>}
 */
export const BadInputValidator = {
  // observedAttributes: [],
  checkValidity (element) {
    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }
    const formControl = element.formControl

    if (!formControl) return validity

    formControl.checkValidity()
    if (formControl.validity.badInput === true) {
      validity.invalidKeys.push("badInput")
      validity.isValid = false
      validity.message = formControl.validationMessage
      return validity
    }

    return validity
  }
}

