/**
 * @template {HTMLElement & ElementInternals & { formControl?: any, disabled?: boolean }} T
 * @param {T} element
 */
export function runValidators (element) {
  if (element.disabled || element.getAttribute("disabled")) {
    element.setValidity({})
    // We don't run validators on disabled elements to be inline with native HTMLElements.
    // https://codepen.io/paramagicdev/pen/PoLogeL
    return
  }

  const validators = /** @type {{allValidators?: Array<import("../exports/types.js").Validator>}} */ (/** @type {unknown} */ (element)).allValidators

  if (!validators) {
    element.setValidity({})
    return
  }

  const flags = {
    customError: element.validity.customError
  }

  const formControl = element.formControl || undefined

  let finalMessage = ""

  for (const validator of validators) {
    const { isValid, message, invalidKeys } = validator.checkValidity(element)

    if (isValid) { continue }

    if (!finalMessage) {
      finalMessage = message
    }

    if (invalidKeys?.length >= 0) {
      // @ts-expect-error
      invalidKeys.forEach((str) => flags[str] = true)
    }
  }

  // This is a workaround for preserving custom errors
  if (!finalMessage) {
    finalMessage = element.validationMessage
  }
  element.setValidity(flags, finalMessage, formControl)
}
