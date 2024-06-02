import { uuidv4 } from '../../internal/uuid-v4.js'

/**
 * @template {HTMLElement & { required?: boolean, form: HTMLFormElement, name?: string }} [T=HTMLElement & { required?: boolean, form: HTMLFormElement, name?: string }]
 * @type {() => import("../types.js").Validator<T>}
 * @example Creating a validator for a radio form associated element.
 *   class MyEl {
 *     static validators = [
 *        GroupValueMissingValidator()
 *     ]
 *   }
 */
export const GroupValueMissingValidator = () => {
  /**
   * @type {ReturnType<GroupValueMissingValidator>}
   */
  const obj = {
    observedAttributes: ["required", "name"],
    /**
     * Only radios currently conform to the `"GroupValueMissingValidator", `
     */
    message: Object.assign(document.createElement("input"), {
      type: "radio",
      required: true,
      name: `unguessable-name-${uuidv4()}`
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
