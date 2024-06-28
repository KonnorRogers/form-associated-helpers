/**
 * @template {{ new (...args: any[]): HTMLElement }} T
 * @typedef {InstanceType<T> & { internals: ElementInternals }} WithElementInternals
 */

/**
 * A mixin for using custom states without calling `this.internals.add()`
 * @template {{ new (...args: any[]): HTMLElement }} T
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
          /** @type {WithElementInternals<T>} */ (this).internals.states.add(state)
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
          /** @type {WithElementInternals<T>} */ (this).internals.states.delete(state)
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
        if (bool) {
          this.addCustomState(state)
          return
        }

        if (!bool) {
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
          /** @type {WithElementInternals<T>} */ (this).internals.states.has(state)
        } catch (_) {
          // Without this, test suite errors.
        } finally {
          return this.hasAttribute(`data-${state}`)
        }
      }
    }
  )
}

