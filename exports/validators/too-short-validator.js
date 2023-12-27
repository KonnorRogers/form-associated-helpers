/**
 * @type {import("../types.js").Validator<HTMLElement & { minLength?: number, length?: number }>}
 */
export const TooShortValidator = {
  observedAttributes: ["minlength"],
  checkValidity (element) {
    /**
     * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
     */
    const validity = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    /** if its not a string, we really can't compare. */
    let value = element.value ?? ""
    if (typeof value !== "string") { return validity }

    const minLength = Number(element.minLength || element.getAttribute("minlength"))

    if (!minLength) { return validity }

    if (minLength > value.length) {
      validity.message = `Please use greater than or equal to ${minLength} characters. You are currently using ${value.length} characters.`;
      validity.isValid = false
      validity.invalidKeys.push("tooShort")
    }

    return validity;
  }}
