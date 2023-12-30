import { LitElement, html } from "lit"
import { ref } from 'lit/directives/ref.js';
import { TextareaMixin } from "../exports/mixins/textarea-mixin.js"

export default class TextareaComponent extends TextareaMixin(LitElement) {
  /**
   * @override
   * Without delegatesFocus, we get this fun message:
   *  "The invalid form control with name=‘editor’ is not focusable."
   */
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};

  constructor () {
    super()
    this.value = ""
  }

  render () {
    return html`
      <textarea ${ref(this.formControlChanged)}></textarea>
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
