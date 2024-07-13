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

## Adding the LitTextareaMixin

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

## Setting `delegatesFocus`

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

## Setting `this.formControl`

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

It's important to note, under the hood there is a `get validationTarget() {}` getter that
returns the `this.formControl`. This doesn't mean much right now, but if you did want to change where native
validations are anchored, it is important to know.

## Validations

Moving on, The `LitTextareaMixin` contains some "prebuilt" validators. The 3 supported out of the box validators
are `minlength`, `maxlength` and `required`.

So for example we could do the following:

```html
<example-textarea required minlength="5" maxlength="10">
</example-textarea>
```

And the native constraint validations will kick in when the user goes to "submit" the form,
or if you call `customTextarea.reportValidity()`

The `LitTextareaMixin` does quite a bit out of the box, for example, it will call `setFormValue` any time the `this.value`
is changed in a Lit `willUpdate` lifecycle callback. The hope is that by setting up these conventions, it is easy to add
formAssociation to your elements and you generally won't have to think about it except for edge cases.

## Final Component

Here's what our final component might look like:

```js
import { LitElement, css, html } from "lit"
import { ref } from 'lit/directives/ref.js';
import { live } from 'lit/directives/live.js';
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js"

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
        }}
        @change=${(/** @type {Event} */ e) => {
          this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
        }}
        @keydown=${(/** @type {Event} */ e) => {
          this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
        }}
      >
      </textarea>
    `
  }

  formControlChanged(textarea) {
    this.formControl = /** @type {HTMLTextAreaElement} */ (textarea)
  }
}
```

You'll notice the component above has a number of properties we never defined such as:

```js
`
        rows=${this.rows}
        cols=${this.cols}
`
```

The reason is that these are pre-baked into the `LitTextareaMixin`. They're intended to "mirror" all the native
properties and functions a "native" textarea would have.

## Final Component Preview

And here's a preview of it in action:

<light-preview>
  <template slot="code">
    <style>
      textarea-component::part(form-control):focus-visible {
        outline: transparent;
      }

      textarea-component::part(form-control) {
        border: 3px solid gray;
      }

      :is(:valid, [data-valid])::part(form-control) {
        background-color: rgba(0, 255, 0, 0.1);
      }

      :is([data-user-valid])::part(form-control) {
        border-color: rgba(0, 255, 0, 1);
      }

      label.required::after {
        content: "*";
        color: red;
        font-size: 1em;
      }

      :is(:invalid)::part(form-control) {
        background-color: rgba(255, 0, 0, 0.1);
      }

      :is([data-user-invalid])::part(form-control) {
        border-color: red;
      }

      :disabled {
        opacity: 0.5;
      }
    </style>

    <form>
      <fieldset>
        <label class="required" for="textarea-component">
          This is a custom textarea
        </label>
        <br>
        <textarea-component
          id="textarea-component"
          name="textarea-component"
          aria-describedby="help-text form-state"
          required
          minlength="5"
          maxlength="7"
          value="def"
        ></textarea-component>
      </fieldset>

      <br>

      <button type="reset">Reset</button>
      <button type="button" id="disable">Disable</button>
      <button>Submit</button>

      <script type="module">
        import TextareaComponent from "<%= find_asset("../examples/textarea-component.js") %>"

        if (!window.customElements.get("textarea-component")) {
          window.customElements.define("textarea-component", TextareaComponent)
        }

        document.querySelector("form").addEventListener("submit", (event) => {
          event.preventDefault()
          const customTextarea = document.querySelector("textarea-component")

          // Simulate a submission.
          customTextarea.hasInteracted = true
          customTextarea.valueHasChanged = true
          customTextarea.setFormValue(customTextarea.value)
        })
      </script>
    </form>
  </template>

</light-preview>

You'll notice the `<textarea-component>` changes colors based on the form's state. To read more about
the form's state, check out the docs for [Understanding Form States](/references/understanding-form-states/)
