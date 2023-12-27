/**
 * @type {import("../types.js").Validator<HTMLElement & { maxLength?: number, length?: number }>}
 */
export const TooLongValidator = {
  observedAttributes: ["maxlength"],
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

    const maxLength = Number(element.maxLength || element.getAttribute("maxlength"))

    if (!maxLength) { return validity}

    if (maxLength > value.length) {
      validity.message = `Please use less than or equal to ${maxLength} characters. You are currently using ${value.length} characters.`;
      validity.isValid = false
      validity.invalidKeys.push("tooLong")
    }

    return validity;
  }}

