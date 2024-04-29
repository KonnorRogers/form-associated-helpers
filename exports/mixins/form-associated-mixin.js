/**
 * Global type to add ElementInternals.states
 * Can go away when TS ships proper support.
 * @type {import("../../types/index.d.ts")}
 */

/**
 * A mixin to call `attachInternals()`
 * This is merely an implementation that sets the `formAssociated` static class property and calls `attachInternals()`. It doesn't do anything else. It is intentionally minimal.
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement> & {observedAttributes?: string[]}} T
 * @param {T} superclass
 */
export function FormAssociatedMixin(superclass) {
  return (
    /**
     */
    class extends superclass {
      static formAssociated = true

      /**
      * @param {...any} args
      */
      constructor(...args) {
        super(...args)

        /**
        * We dont make it private like #internals because then its not available in the mixin.
        * @type {ReturnType<HTMLElement["attachInternals"]>}
        */
        this.internals = this.attachInternals()
      }
    }
  )
}
