/**
 * This file is purely for adding getters to `VanillaFormAssociatedMixin`. It's a hacky workaround until this gets resolved in TypeScript:
 * <https://github.com/microsoft/TypeScript/issues/58790>
 */

import type {Validator} from "../exports/types.js"

/**
 * Defines getters for VanillaFormAssociated.
 */
export type AbstractGetters<T extends typeof HTMLElement> = {
  get allValidators (): Array<Validator<HTMLElement & InstanceType<T>>>
  get willShowValidationMessage (): boolean
  get labels (): NodeListOf<HTMLLabelElement>
  get validity (): ElementInternals["validity"]
  get validationMessage (): ElementInternals["validationMessage"]
  get willValidate (): ElementInternals["willValidate"]

  /**
    * `validationTarget` is used for displaying native validation popups as the "anchor"
    */
  get validationTarget (): null | undefined | HTMLElement

  /**
   * Returns the form element attached to the element
   */
  get form (): ElementInternals["form"]
}
