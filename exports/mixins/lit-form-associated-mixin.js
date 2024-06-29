import { VanillaFormAssociatedMixin } from "./vanilla-form-associated-mixin.js"

const formProperties = Object.freeze({
  role: {reflect: true},
  name: {reflect: true},
  type: {reflect: true},
  /**
   * Don't reflect "disabled". It breaks the `formDisabledCallback` on formAssociated elements when used with `<fieldset disabled>`.
   *   https://github.com/whatwg/html/issues/8365
   */
  disabled: {type: Boolean},
  required: {reflect: true, type: Boolean},
  defaultValue: {attribute: "value", reflect: true},
  valueHasChanged: {type: Boolean, attribute: false, state: true},
  hasInteracted: {attribute: false, type: Boolean, state: true},
  formControl: {attribute: false, state: true},
  value: {attribute: false, state: true},
})

LitFormAssociatedMixin.formProperties = formProperties

/**
 * An extension of the VanillaFormAssociatedMixin intended for LitElement by providing formProperties and willUpdate() callbacks with the appropriate properties.
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {{
    new (...args: any[]): HTMLElement
  }} T
 * @param {T} superclass
 */
export function LitFormAssociatedMixin(superclass) {
  return class extends VanillaFormAssociatedMixin(superclass) {
    /**
      * @param {...any} args
      */
    constructor (...args) {
      super(...args)

      const ctor = /** @type {{properties?: { disabled?: { reflect?: boolean }}}} */ (/** @type {unknown} */ (this.constructor))
      if (ctor.properties?.disabled?.reflect === true) {
        console.warn(`The following element has their "disabled" property set to reflect.`)
        console.warn(this)
        console.warn("For further reading: https://github.com/whatwg/html/issues/8365")
      }
    }


    /**
     * @protected
     * @type {import("lit").LitElement["willUpdate"]}
     */
    willUpdate (changedProperties) {
      // @ts-expect-error
      if (typeof super.willUpdate !== "function") {
        return
      }

      if (changedProperties.has("formControl")) {
        changedProperties.get("formControl")?.removeEventListener("focusout", this.handleInteraction)
        changedProperties.get("formControl")?.removeEventListener("blur", this.handleInteraction)
        changedProperties.get("formControl")?.removeEventListener("click", this.handleInteraction)

        /**
         * @type {typeof this & { formControl?: HTMLElement | null | undefined }}
         */
        const self = this
        self.formControl?.addEventListener("focusout", this.handleInteraction)
        self.formControl?.addEventListener("blur", this.handleInteraction)
        self.formControl?.addEventListener("click", this.handleInteraction)
      }

      if (
        changedProperties.has("value")
      ) {
        this.setFormValue(/** @type {any} */ (this.getFormValue()), /** @type {any} */ (this.value))
      }

      // @ts-expect-error
      super.willUpdate(changedProperties)
    }
  }
}

