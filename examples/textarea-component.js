import { LitElement, html } from "lit"
import { ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { TextareaMixin } from "../exports/mixins/textarea-mixin.js"

export default class TextareaComponent extends TextareaMixin(LitElement) {
  /**
   * @override
   * Without delegatesFocus, we get this fun message:
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
  }

  render () {
    return html`
      <textarea
        ${ref(this.formControlChanged)}
        .defaultValue=${this.defaultValue}
        .value=${live(this.value)}
        @input=${(e) => this.value = e.target.value}
        @change=${(e) => this.value = e.target.value}
        @keydown=${(e) => this.value = e.target.value}
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
