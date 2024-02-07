---
title: Creating a Lit textarea
---

The first step to building a Lit textarea is to create a component with some minimal markup.

```js
import { LitElement, css, html } from "lit"

export default class TextareaComponent extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `
  render () {
    return html`
      <textarea part="form-control"></textarea>
    `
  }
}
```

Now that we have initial parts in place, let's look at how we can "enhance" the
component to work with form association.

Final component:

```js
import { LitElement, css, html } from "lit"
import { ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js"
import { MirrorValidator } from "form-associated-helpers/exports/validators/mirror-validator.js";

export default class TextareaComponent extends LitTextareaMixin(LitElement) {
  /**
   * @override
   * Without delegatesFocus, or manually setting a `tabindex`, we get this fun message from the browser:
   *  "The invalid form control with name=‘editor’ is not focusable."textarea-componen
   */
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};

  static validators = [MirrorValidator]

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

  static styles = css`
    :host {
      display: inline-block;
    }
  `

  /**
   * @template {Event | string} T
   * @param {T} eventNameOrEvent
   * @param {null | undefined | EventInit} [options]
   */
  emit(eventNameOrEvent, options = {}) {
    if (eventNameOrEvent instanceof Event) {
      this.dispatchEvent(eventNameOrEvent)
      return eventNameOrEvent
    }

    if (!options) {
      options = {}
    }

    if (options.bubbles == null) options.bubbles = true
    if (options.composed == null) options.composed = true

    const event = new CustomEvent(eventNameOrEvent, options)
    this.dispatchEvent(event)
    return event
  }

  render () {
    return html`
      <textarea
        part="form-control"
        ${ref(this.formControlChanged)}
        .defaultValue=${this.defaultValue}
        .value=${live(this.value)}
        rows=${this.rows}
        cols=${this.cols}
        maxlength=${this.maxLength}
        minlength=${this.minLength}
        dirname=${this.dirName}
        placeholder=${this.placeholder}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        wrap=${this.wrap}
        autocomplete=${this.autocomplete}
        @input=${(/** @type {Event} */ e) => {
          this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
          this.emit("input")
        }}
        @change=${(/** @type {Event} */ e) => {
          this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
          this.emit("change")
        }}
        @keydown=${(/** @type {Event} */ e) => {
          this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
          this.emit("keydown")
        }}
      ></textarea>
    `
  }

  /**
   * @param {FocusOptions} options
   */
  focus (options) {
    if (this.formControl) {
      this.formControl.focus(options)
      return
    }

    super.focus(options)
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
```