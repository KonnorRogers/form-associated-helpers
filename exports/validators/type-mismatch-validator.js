/**
 * TypeMismatchValidator is very rarely used and generally only applies to `<input type="url">` and `<input type="email">`. TypeMismatchValidator is very similar to MirrorValidator in that it expects a `customElement.formControl` property to be present.
 * @type {() => import("../types.js").Validator<HTMLElement & { formControl?: HTMLElement & ElementInternals }>}
 */
export const TypeMismatchValidator = () => {
  return {
    observedAttributes: ["type"],
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
