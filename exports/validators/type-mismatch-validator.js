/**
 * @type {() => import("../types.js").Validator<HTMLElement & { formControl?: HTMLElement & ElementInternals }>}
 */
export const TypeMismatchValidator = () => {
  return {
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
      if (formControl.validity.typeMismatch === true) {
        validity.invalidKeys.push("typeMismatch")
        validity.isValid = false
        validity.message = formControl.validationMessage
        return validity
      }

      return validity
    }
  }
}
