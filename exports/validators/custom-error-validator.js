/**
 * A validator for custom errors. This will check if there is an `.customError` property or an `custom-error` attribute
 *   and append it to the ValidityState of the custom element.
 * @template {HTMLElement & { customError?: string | boolean }} T
 * @type {() => import("../types.js").Validator<T> & { fallbackMessage: ((element: T) => string) | string } }
 */
export const CustomErrorValidator = () => {
  /**
   * @type {ReturnType<CustomErrorValidator<T>>}
   */
 const obj = {
    observedAttributes: ["custom-error"],
    fallbackMessage: "An error occurred",
   /**
    * @param {T} element
    */
    message (element) {
      let errorMsg = element.customError ?? element.getAttribute("custom-error")

      if (!errorMsg || errorMsg === true) {
        errorMsg = typeof obj.fallbackMessage === "function" ? obj.fallbackMessage(element) : obj.fallbackMessage
      }

      return errorMsg
    },
    checkValidity (element) {
      /**
      * @type {ReturnType<import("../types.js").Validator["checkValidity"]>}
      */
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      }

      if (Boolean(element.customError) || element.hasAttribute("custom-error")) {
        validity.invalidKeys.push("customError")
        validity.isValid = false
        const fallbackMessage = () => typeof obj.fallbackMessage === "function" ? obj.fallbackMessage(element) : obj.fallbackMessage

        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || fallbackMessage()
        return validity
      }

      return validity
    }
  }
  return obj
}

