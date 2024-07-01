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
  get labels (): NodeListOf<HTMLLabelElement>
  get validity (): ElementInternals["validity"]
  get validationMessage (): ElementInternals["validationMessage"]
  get willValidate (): ElementInternals["willValidate"]

  /**
    * `validationTarget` is used for displaying native validation popups as the "anchor".
    * override this to choose what to "anchor" your validation popups from.
    */
  get validationTarget (): null | undefined | HTMLElement

  /**
   * Returns the form element attached to the element
   */
  get form (): ElementInternals["form"]

  /**
    * Tracks whether or not an element meets custom criteria for `:user-invalid`. NOTE: this will not set `:user-invalid`, but instead set `:state(user-invalid)`. `:user-invalid` is inconsistent and has not been specced for Form Associated Custom Elements.
    *    By default this getter will always returns false. It is up to you to add logic.
    */
   get isUserInvalid (): boolean
}
