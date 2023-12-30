/**
 * @template {HTMLElement & ElementInternals & { formControl?: any, disabled?: boolean }} T
 * @param {T} element
 */
export function runValidators (element) {
  element.setValidity({})

  if (element.disabled || element.getAttribute("disabled")) {
    // We don't run validators on disabled elements to be inline with native HTMLElements.
    // https://codepen.io/paramagicdev/pen/PoLogeL
    return
  }

  const validators = /** @type {{allValidators?: Array<import("../exports/types.js").Validator>}} */ (/** @type {unknown} */ (element)).allValidators

  if (!validators) return

  const flags = {}

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

  element.setValidity(flags, finalMessage, formControl)
}
