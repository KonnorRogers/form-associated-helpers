import { uuidv4 } from '../../internal/uuid-v4.js'
/**
 * @typedef {Object} GroupValueMissingValidatorOptions
 * @property {"radio" | "checkbox"} validatorType - A "validatorType" is used to grab the appropriate `validationMessage` so we get free translations strings. This will be either a `radio` or `checkbox`. Checkboxes and radios have different messages, so be sure to test which one you want.
 */

/**
 * @type {(options?: Partial<GroupValueMissingValidatorOptions>) => import("../types.js").Validator<HTMLElement & { required?: boolean, form: HTMLFormElement, name?: string }>}
 * @example Creating a validator for a radio form associated element.
 *   class MyEl {
 *     static validators = [
 *        GroupValueMissingValidator({
 *          validatorType: "radio"
 *        })
 *     ]
 *   }
 */
export const GroupValueMissingValidator = (options) => {
  if (!options) { options = {} }
  const { validatorType } = options
  const validateableTypes = /** @type {const} */ (["checkbox", "radio"])

  if (!validatorType || !validateableTypes.includes(validatorType)) {
    throw Error(`Only "radio" or "checkbox" are accepted types`)
  }

  const finalElement = createValidatorElement(validatorType)

  /**
   * @type {ReturnType<GroupValueMissingValidator>}
   */
  const obj = {
    observedAttributes: ["required", "name"],
    message: finalElement.validationMessage,
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

      const form = element.form

      if (!form || !element.name) {
        if (!element.value) {
          validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
          validity.isValid = false
          validity.invalidKeys.push("valueMissing")
        }
        return validity
      }

      const formData = new FormData(form)

      if (formData.getAll(element.name).length < 1) {
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || ""
        validity.isValid = false
        validity.invalidKeys.push("valueMissing")
      }

      return validity
    }
  }

  return obj
}

/**
  * Shortcut function for creating pre-defined validator elements.
  * @param {"radio" | "checkbox"} type
  */
function createValidatorElement (type) {
  return Object.assign(document.createElement("input"), {
    type,
    required: true,
    name: `unguessable-name-${uuidv4()}`
  })
}
