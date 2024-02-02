---
title: Understanding Different States
permalink: /guides/understanding-different-states/
---

There are a number of distinct "states" a form associated component can be in. The
following are the CSS selectors available and what they mean.

<table-container>
  <table>
    <thead>
      <tr>
        <th>
          States
        </th>
        <th>
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>:valid</code>,
          <code>[data-valid]</code>,
          <code>:state(valid)</code>
        </td>
        <td>
          When a form associated element meets all of it's validator requirements, regardless of if
          the control has been interacted with.
          <br>
          Equivalent to <code>:valid</code>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:valid">https://developer.mozilla.org/en-US/docs/Web/CSS/:valid</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>:invalid</code>,
          <code>[data-invalid]</code>,
          <code>:state(invalid)</code>
        </td>
        <td>
          When a form associated element does not meet all of it's validator requirements,
          regardless of if the form control has been interacted with.
          <br>
          Equivalent to <code>:invalid</code>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid">https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid</a>
        </td>
      </tr>
      <tr>
        <td>
          <!-- <code>:user-valid</code>, -->
          <code>[data-user-valid]</code>,
          <code>:state(user-valid)</code>
        </td>
        <td>
          When a form associated element does not meet all of it's validator requirements
          and it has been meaningfully attempted to be interacted with.
          <br>
          Equivalent to <code>:user-invalid</code>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid">https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid</a>
        </td>
      </tr>
      <tr>
        <td>
          <!-- <code>:user-invalid</code>, -->
          <code>[data-user-invalid]</code>,
          <code>:state(user-invalid)</code>
        </td>
        <td>
          When a form associated does not meet all of it's validator requirements,
          and it has been meaningfully attempted to be interacted with.
          <br>
          Equivalent to <code>:user-invalid</code>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid">https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid</a>
        </td>
      </tr>
    </tbody>
  </table>
</table-container>


In more simplistic terms, here's the difference between states with the `user-*` prefix, and those without.

`user-*` is active when you `"focusout"` out of the form control, and the `value` of the element is **NOT** equal to the `"defaultValue"`.

<style>
  .form-state-preview::part(preview) {
    min-height: 400px;
  }
</style>

<light-preview class="form-state-preview">
  <template slot="code">
    <style>
      :is(textarea, input):focus-visible,
      textarea-component::part(form-control):focus-visible {
        outline: transparent;
      }

      :is(input, textarea),
      textarea-component::part(form-control) {
        border: 3px solid gray;
      }

      :is(textarea, input):valid,
      :is(:valid, [data-valid])::part(form-control) {
        background-color: rgba(0, 255, 0, 0.1);
      }

      :is(textarea, input):user-valid,
      :is([data-user-valid])::part(form-control) {
        border-color: rgba(0, 255, 0, 1);
      }

      label.required::after {
        content: "*";
        color: red;
        font-size: 1em;
      }

      :is(textarea, input):invalid,
      :is(:invalid)::part(form-control) {
        background-color: rgba(255, 0, 0, 0.1);
      }

      :is(textarea, input):user-invalid,
      :is([data-user-invalid])::part(form-control) {
        border-color: red;
      }

      :disabled {
        opacity: 0.5;
      }

    </style>

    <form>
      <fieldset>
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));">
          <div>
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
            ></textarea-component>
          </div>

          <div>
            <label class="required" for="textarea">
              This is a regular textarea
            </label>
            <br>
            <textarea
              id="textarea"
              name="textarea"
              aria-describedby="help-text"
              required
              minlength="5"
              maxlength="7"
            >default</textarea>
          </div>
        </div>
      </fieldset>

      <br>

      <button type="reset">Reset</button>
      <button type="button" id="disable">Disable</button>
      <button>Submit</button>

      <br>

      <p id="help-text">
        This textarea has different "states" based on interactions.
      </p>
      <br>
      <p id="form-state">
        Current Form State: <span id="state"></span>
      </p>

      <script type="module">
        import TextareaComponent from "<%= find_asset("../examples/textarea-component.js") %>"

        const state = () => document.querySelector("#state")

        if (!window.customElements.get("textarea-component")) {
          window.customElements.define("textarea-component", TextareaComponent)
        }

        document.addEventListener("submit", (e) => {
          e.preventDefault()
          updateState()
        })

        document.addEventListener("input", (e) => {
          updateState()
        })

        document.addEventListener("click", (e) => {
          const btn = e.target.closest("#disable")

          if (btn) {
            const fieldset = document.querySelector("fieldset")
            const isDisabled = !fieldset.hasAttribute("disabled")
            fieldset.toggleAttribute("disabled", isDisabled)

            btn.innerText = isDisabled ? "Enable" : "Disable"
          }
        })

        document.addEventListener("focusout", (e) => {
          updateState()
        })

        document.addEventListener("reset", () => {
          updateState()
        })


        function updateState () {
          if (!state()) return
          setTimeout(() => state().innerText = getState(document.querySelector("textarea-component")))
        }

        function getState (formControl) {
          let states = []
          if (formControl?.hasAttribute("data-user-valid")) {
            states.push("has-interacted")
            states.push("user-valid")
          }

          if (formControl?.hasAttribute("data-user-invalid")) {
            states.push("has-interacted")
            states.push("user-invalid")
          }

          if (formControl?.hasAttribute("data-valid")) {
            states.push("valid")
          }
          if (formControl?.hasAttribute("data-invalid")) {
            states.push("invalid")
          }

          return states.join(", ")
        }
      </script>
    </form>
  </template>
</light-preview>

`:user-valid`: Need to have changed the value. If you're in a `user-valid` state, and then start changing the value to an `invalid` value, then it becomes `:invalid`, but not `:user-invalid` until the user `blurs` from the form control.

`:user-invalid`: If we go from `:user-invalid` to a valid state, we become `:user-valid`, unlike `:user-valid` -> `:invalid`

`:user-invalid` -> `:user-valid`
`:user-valid` -> `:invalid` until `blur` then `:user-invalid`

On a form reset, a form control is only ever `:valid` or `:invalid`. Never `:user-*`.

When disabled, it is neither `:valid` or `:invalid`. Instead it is `:disabled`
