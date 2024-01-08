import { LitElement, html } from "lit"
import { ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { LitTextareaMixin } from "../exports/mixins/lit-textarea-mixin.js"

export default class TextareaComponent extends LitTextareaMixin(LitElement) {
  /**
   * @override
   * Without delegatesFocus, or manually setting a `tabindex`, we get this fun message from the browser:
   *  "The invalid form control with name=‘editor’ is not focusable."
   */
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};

  static get properties () {
    return {
      ...super.properties,
      // Your properties here.
    }
  }

  constructor () {
    super()
    // ...
  }

  render () {
    return html`
      <textarea
        ${ref(this.formControlChanged)}
        .defaultValue=${this.defaultValue}
        .value=${live(this.value)}
        @input=${(/** @type {Event} */ e) => this.value = /** @type {HTMLTextAreaElement} */ (e.target).value}
        @change=${(/** @type {Event} */ e) => this.value = /** @type {HTMLTextAreaElement} */ (e.target).value}
        @keydown=${(/** @type {Event} */ e) => this.value = /** @type {HTMLTextAreaElement} */ (e.target).value}
      ></textarea>
    `
  }

  /**
   * @param {Element | undefined} textarea
   */
  formControlChanged(textarea) {
    if (!textarea) {
      this.formControl = null
      return
    }

    this.formControl = /** @type {HTMLTextAreaElement} */ (textarea)
  }
}
