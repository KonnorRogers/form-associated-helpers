
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

        if (typeof this.attachInternals !== "function") {
          console.error(`Element Internals are not supported in your browser.`)
          return
        }

        try {
          /**
          * We dont make it private like #internals because then its not available in the mixin.
          * @type {ReturnType<HTMLElement["attachInternals"]>}
          */
          this.internals = this.attachInternals()
        } catch (err) {
          // Perhaps already attached?
          console.error(err)
        }

        checkFocusability(this)
      }

      connectedCallback () {
        if (this.internals == null) return

        // @ts-expect-error
        if (typeof super.connectedCallback === "function") {
          // @ts-expect-error
          super.connectedCallback()
          checkFocusability(this)
        }
      }
    }
  )
}
/**
 * @param {HTMLElement} element
 * @return {boolean}
 */
function checkFocusability (element) {
  if (element.shadowRoot && element.shadowRoot.delegatesFocus !== true) {
    // FormAssociated custom elements either need to have delegatedFocus, or need to have a tabindex on the host.
    const tabindexAttr = element.getAttribute("tabindex")?.trim()
    const tabindex = tabindexAttr ? Number(tabindexAttr) : null

    if (tabindex == null || isNaN(tabindex)) {
      console.error(`FormAssociated custom elements need a "tabindex" or to be registered with "{ delegatesFocus: true }".\nThe following element is in violation: `)
      console.error(element)
      return false
    }
  }
  return true
}

