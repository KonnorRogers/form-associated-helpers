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
          <code>[data-valid]</code>,
          <code>:state(valid)</code>
        </td>
        <td>
          When a form associated element is meets all of it's validator requirements.
          <br>
          Equivalent to <code>:valid</code>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:valid">https://developer.mozilla.org/en-US/docs/Web/CSS/:valid</a>
        </td>
      </tr>
      <tr>
        <td>
          <code>[data-invalid]</code>,
          <code>:state(invalid)</code>
        </td>
        <td>
          When a form associated element does not meet all of it's validator requirements.
          <br>
          Equivalent to <code>:invalid</code>
          <br>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid">https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid</a>
        </td>
      </tr>
      <tr>
        <td>
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

<style>
  .form-state-preview::part(preview) {
    min-height: 400px;
  }
</style>

<light-preview class="form-state-preview">
  <template slot="code">
    <style>
      textarea:focus-visible,
      textarea-component::part(form-control):focus-visible {
        outline: transparent;
      }

      textarea,
      textarea-component::part(form-control) {
        border: 2px solid gray;
      }


      textarea:valid,
      [data-valid]::part(form-control) {
        background-color: rgba(0, 255, 0, 0.1);
      }

      textarea:user-valid,
      [data-user-valid]::part(form-control) {
        border-color: blue;
      }

      label.required::after {
        content: "*";
        color: red;
        font-size: 1em;
      }

      textarea:invalid,
      [data-invalid]::part(form-control) {
        background-color: rgba(255, 0, 0, 0.1);
      }

      textarea:user-invalid,
      [data-user-invalid]::part(form-control) {
        border-color: red;
      }
    </style>

    <form>
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
          ></textarea>
        </div>
      </div>

      <br>

      <button type="reset">Reset</button>

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
          setTimeout(() => state().innerText = getState(document.querySelector("textarea-component")))
        })

        document.addEventListener("input", (e) => {
          setTimeout(() => state().innerText = getState(document.querySelector("textarea-component")))
        })

        document.addEventListener("focusout", (e) => {
          setTimeout(() => state().innerText = getState(document.querySelector("textarea-component")))
        })

        document.addEventListener("reset", () => {
          setTimeout(() => state().innerText = getState(document.querySelector("textarea-component")))
        })

        setTimeout(() => state().innerText = getState(document.querySelector("textarea-component")))

        function getState (formControl) {
          let states = []
          if (formControl.hasAttribute("data-user-valid")) {
            states.push("has-interacted")
            states.push("user-valid")
          }

          if (formControl.hasAttribute("data-user-invalid")) {
            states.push("has-interacted")
            states.push("user-invalid")
          }

          if (formControl.hasAttribute("data-valid")) {
            states.push("valid")
          }
          if (formControl.hasAttribute("data-invalid")) {
            states.push("invalid")
          }

          return states.join(", ")
        }
      </script>
    </form>
  </template>
</light-preview>
