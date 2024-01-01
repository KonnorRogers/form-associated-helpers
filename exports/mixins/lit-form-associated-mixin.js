import { VanillaFormAssociatedMixin } from "./vanilla-form-associated-mixin.js"
import { runValidators } from "../../internal/run-validators.js"

const formProperties = Object.freeze({
  role: {reflect: true},
  name: {reflect: true},
  type: {reflect: true},
  disabled: {reflect: true, type: Boolean},
  required: {reflect: true, type: Boolean},
  hasInteracted: {type: Boolean, attribute: "has-interacted", reflect: true},
  formControl: {attribute: false, state: true},
  value: {attribute: false, state: true},
  defaultValue: {attribute: "value", reflect: true},
  valueHasChanged: {type: Boolean, attribute: false},
})

LitFormAssociatedMixin.formProperties = formProperties

/**
 * An extension of the VanillaFormAssociatedMixin intended for LitElement by providing formProperties and willUpdate() callbacks with the appropriate properties.
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement> & {observedAttributes?: string[]}} T
 * @param {T} superclass
 */
export function LitFormAssociatedMixin(superclass) {
  return (
    class extends VanillaFormAssociatedMixin(superclass) {
      /**
       * @protected
       * @param {import("lit").PropertyValues} changedProperties
       */
      willUpdate (changedProperties) {
        // @ts-expect-error
        if (typeof super.willUpdate !== "function") {
          return
        }

        if (changedProperties.has("role")) {
          this.internals.role = changedProperties.get("role") || null
        }

        if (changedProperties.has("formControl")) {
          this.formControl?.addEventListener("focusin", this.handleInteraction)
          this.formControl?.addEventListener("focusout", this.handleInteraction)
          this.formControl?.addEventListener("click", this.handleInteraction)
        }

        if (
          changedProperties.has("formControl")
          || changedProperties.has("defaultValue")
          || changedProperties.has("value")
        ) {
          if (this.valueHasChanged === false) {
            this.value = this.defaultValue
          }

          this.setFormValue(this.value, this.value)
        }

        // @ts-expect-error
        super.willUpdate(changedProperties)
      }
    }
  )
}

