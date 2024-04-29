/**
 * @type {() => import("../types.js").Validator<HTMLElement & { required?: boolean, form: HTMLFormElement, name?: string }>}
 */
export const GroupValueMissingValidator = () => {
  return {
    observedAttributes: ["required"],
    message: "Please fill out this field",
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
          validity.message = (typeof this.message === "function" ? this.message(element) : this.message) || ""
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
}

