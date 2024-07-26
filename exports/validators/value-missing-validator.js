/**
 * @typedef {{validationMessage: string }} Validateable
 */

/**
 * @typedef {object} ValidationOptions
 * @property {(element: HTMLElement) => boolean} validateElement - Adds the ability to determine what is considered a "value missing". A use case would be checkboxes. `ValueMissingValidator({ validateElement: (element) => Boolean(element.checked) })`
 */

/**
 * @param {Partial<ValidationOptions>} [options]
 */
export const ValueMissingValidator = (options = {}) => {
  if (!options.validateElement) {
    options.validateElement = (element) => Boolean(/** @type {HTMLInputElement} */(element).value)
  }

  /**
   * @type {ValidationOptions["validateElement"]}
   */
  const validateElement = options.validateElement

  /**
   * @type {import("../types.js").Validator<HTMLElement & { required?: boolean }>}
   */
  const obj = {
    observedAttributes: ["required"],
    message: Object.assign(document.createElement("input"), {
      required: true,
    }).validationMessage,
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

      if (!validateElement(element)) {
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("valueMissing")
      }

      return validity
    }
  }

  return obj
}

