/**
 * This validator is for if you have an exact copy of your element in the shadow DOM. Rather than needing
 *   custom translations and error messages, you can simply rely on the element "formControl" in your shadow dom.
 * @type {import("../types.js").Validator<HTMLElement & { formControl?: HTMLElement & ElementInternals }>}
 */
export const MirrorValidator = {
  checkValidity (element) {
    const formControl = element.formControl

    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    if (!formControl) return validity

    const isValid = formControl.checkValidity()
    if (isValid) return validity

    validity.isValid = false
    validity.message = formControl.validationMessage
    for (let key in formControl.validity) {
      if (key === "valid") {
        continue
      }

      const checkedKey = /** @type {Exclude<keyof ValidityState, "valid">} */ (/** @type {unknown} */ (key))

      if (formControl.validity[checkedKey] === true) {
        validity.invalidKeys.push(checkedKey)
      }
    }

    return validity
  }
}
