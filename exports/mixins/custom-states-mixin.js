/**
 * @typedef {import("./types.js").GConstructable<HTMLElement & { internals: ElementInternals }> & { observedAttributes?: string[] }} ElementInternalsElement
 */

/**
 * A mixin for using custom states without calling `this.internals.add()`
 * @template {ElementInternalsElement} T
 * @param {T} superclass
 */
export function CustomStatesMixin(superclass) {
  return (
    class extends superclass {
      /**
       * @param {string} state
       */
      addCustomState (state) {
        try {
          // @ts-expect-error
          this.internals.states.add(state)
        } catch (_) {
          // Without this, test suite errors.
        } finally {
          this.setAttribute(`data-${state}`, "")
        }
      }

      /**
       * @param {string} state
       */
      deleteCustomState (state) {
        try {
          // @ts-expect-error
          this.internals.states.delete(state)
        } catch (_) {
          // Without this, test suite errors.
        } finally {
          this.removeAttribute(`data-${state}`)
        }
      }

      /**
       * @param {string} state
       * @param {boolean} bool
       */
      toggleCustomState (state, bool) {
        if (bool === true) {
          this.addCustomState(state)
          return
        }

        if (bool === false) {
          this.deleteCustomState(state)
          return
        }

        this.toggleCustomState(state, !this.hasCustomState(state))
      }

      /**
       * @param {string} state
       * @returns {boolean}
       */
      hasCustomState (state) {
        try {
          // @ts-expect-error
          return this.internals.states.has(state)
        } catch (_) {
          // Without this, test suite errors.
        } finally {
          return this.hasAttribute(`data-${state}`)
        }
      }
    }
  )
}

