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

The first step is to "import" the [LitTextareaMixin](/references/lit-textarea-mixin). There are many mixins which you can find here: [Mixins](/references/mixins/)

The `LitTextareaMixin` is an opinionated mixin that provides all the same functions a `<textarea>` has out of the box.

There are less opinionated mixins, that do less, but we'll cover that at a later time. For now, let's get something up and running.

```js
import { LitElement, css, html } from "lit"
+ import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js"

- export default class TextareaComponent extends LitElement {
+ export default class TextareaComponent extends LitTextareaMixin(LitElement) {
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

You'll notice we import the [LitTextareaMixin](/references/lit-textarea-mixin) and add
it to our `LitElement`. This mixin will provide all the same functions as a regular `textarea`

Up next, we need to add a `delegatesFocus: true` option to our custom textarea. The reason
is if we don't add this, when validations fail, the browser will throw a "form control element is not focusable" error.

The other option is to add a `tabindex` to the host element, but that's generally not recommended since you're usually trying to focus something _inside_ of the custom element, and not the custom element itself.

```js
import { LitElement, css, html } from "lit"
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js"

export default class TextareaComponent extends LitTextareaMixin(LitElement) {
+   /**
+    * Without delegatesFocus, or manually setting a `tabindex`, we get this fun message from the browser:
+    *  "The invalid form control with name=‘editor’ is not focusable.
+    */
+   static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};

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

With our delegated focus out of the way, now we start looking at some of the "conventions" of the `LitTextareaMixin`.
Because it is an opinionated component, it expects to find a `this.formControl`. This is used for things like `validationTarget`
which tells you where to "anchor" native constraint validation popups for when `element.reportValidity()` is called.

The easiest way to do this in Lit is to use a `ref` and when the shadow dom element connects, we
assign it to `this.formControl`. Like so:

```js
import { LitElement, css, html } from "lit"
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js"
+ import { ref } from 'lit/directives/ref.js';

export default class TextareaComponent extends LitTextareaMixin(LitElement) {
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};

  static styles = css`
    :host {
      display: inline-block;
    }
  `
  render () {
    + return html`
      <textarea
        part="form-control"
        ${ref(this.formControlChanged)}
      ></textarea>
    `
  }

+  formControlChanged (el) {
+    this.formControl = el
+  }
}
```

We should start now having validations working and anchored off of our textarea!!

Final component:

```js
import { LitElement, css, html } from "lit"
import { ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js"
import { MirrorValidator } from "form-associated-helpers/exports/validators/mirror-validator.js";

export default class TextareaComponent extends LitTextareaMixin(LitElement) {
  /**
   * Without delegatesFocus, or manually setting a `tabindex`, we get this fun message from the browser:
   *  "The invalid form control with name=‘editor’ is not focusable.
   */
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};

  static validators get () {
    return [
      // Contains validators for `required`, `minlength`, and `maxlength`
      ...super.validators,
      // Additional validators here:
    ]
  }

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
      this.formControl = undefined
      return
    }

    this.formControl = /** @type {HTMLTextAreaElement} */ (textarea)
  }
}
```
