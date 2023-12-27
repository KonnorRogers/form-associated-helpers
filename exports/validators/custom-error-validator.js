/**
 * A validator for custom errors. This will check if there is an `.error` property or an `error` attribute
 *   and append it to the ValidityState of the custom element.
 * @type {import("../types.js").Validator<HTMLElement & { error?: string | boolean }>}
 */
export const CustomErrorValidator = {
  observedAttributes: ["error"],
  checkValidity (element) {
    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    if (element.error === true || element.hasAttribute("error")) {
      const defaultErrorMessage = "An error has occurred."
      let message = element.error ?? element.getAttribute("error")

      if (!message || message === true) {
        message = defaultErrorMessage
      }

      validity.invalidKeys.push("customError")
      validity.isValid = false
      validity.message = message
      return validity
    }

    return validity
  }
}

