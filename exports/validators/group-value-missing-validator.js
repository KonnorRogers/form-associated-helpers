import { uuidv4 } from '../../internal/uuid-v4.js'
/**
 * @typedef {"radio" | "checkbox" | HTMLElement & { validationMessage: string }} ValidateableElement
 */

/**
 * @template {ValidateableElement} T
 * @typedef {Object} GroupValueMissingValidatorOptions
 * @property {T} validatorElement - A "validatorElement" is used to grab the appropriate `validationMessage` so we get free translations strings. Generally for `GroupValueMissingValidator` this will be either a `radio` or `checkbox` element with required true, and some name that wont conflict on the page. Generally a `uuid` would be good for this. There are 2 built-in defaults, "radio" and "checkbox", but if you need to pass in your own element, you're free to do so.
 */

/**
 * @template {ValidateableElement} T
 * @type {(options: GroupValueMissingValidatorOptions<T>) => import("../types.js").Validator<HTMLElement & { required?: boolean, form: HTMLFormElement, name?: string }>}
 * @example Creating a validator for a radio form associated element.
 *   class MyEl {
 *     static validators = [
 *        GroupValueMissingValidator({
 *          validatorElement: "radio"
 *        })
 *     ]
 *   }
 *
 * @example Creating a validator for a radio validator element the "long" way.
 *   class MyEl {
 *     static validators = [
 *        GroupValueMissingValidator({
 *          validatorElement: Object.assign(document.createElement("input"), {
 *             required: true,
 *             type: "radio",
 *             name: "__unguessable-unique-name__"
 *          }
 *        })
 *     ]
 *   }
 */
export const GroupValueMissingValidator = ({
  validatorElement
}) => {
  const validateableTypes = /** @type {const} */ (["checkbox", "radio"])

  /**
   * @type {HTMLElement & { validationMessage: string }}
   */
  let finalElement

  if (!(validatorElement instanceof HTMLElement) && !validateableTypes.includes((validatorElement))) {
    throw Error(`Please provide an HTMLElement or use a prebuilt validatorElement such as "checkbox" or "radio"`)
  }

  if (validatorElement instanceof HTMLElement) {
    finalElement = validatorElement
  } else {
    finalElement = createValidatorElement(validatorElement)
  }

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

      if (!formData.get(element.name)) {
        return validity
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
