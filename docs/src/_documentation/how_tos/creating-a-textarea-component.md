---
title: Creating a textarea component
permalink: /how-tos/creating-a-textarea-component/
---

<style>
  .form-state-preview::part(preview) {
    min-height: 400px;
  }
</style>

<light-preview class="form-state-preview">
  <template slot="code">
    <style>
      textarea-component::part(form-control):focus-visible {
        outline: transparent;
      }

      textarea-component::part(form-control) {
        border: 2px solid gray;
      }

      [data-valid]::part(form-control) {
        border-color: green;
      }

      [data-user-valid]::part(form-control) {
        border-color: blue;
      }

      label.required::after {
        content: "*";
        color: red;
        font-size: 1em;
      }

      [data-invalid]::part(form-control) {
        border-color: rebeccapurple;
      }

      [data-user-invalid]::part(form-control) {
        border-color: red;
      }
    </style>

    <form>
      <label class="required" for="textarea-example">
        Write something nice.
      </label>
      <br>
      <textarea-component
        id="textarea-example"
        name="textarea-example"
        aria-describedby="help-text form-state"
        required
      ></textarea-component>
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

        if (!window.customElements.get("textarea-component")) {
          window.customElements.define("textarea-component", TextareaComponent)
        }
        document.addEventListener("submit", (e) => {
          e.preventDefault()
          setTimeout(() => document.querySelector("#state").innerText = getState(document.querySelector("textarea-component")))
        })

        document.addEventListener("input", (e) => {
          setTimeout(() => document.querySelector("#state").innerText = getState(document.querySelector("textarea-component")))
        })

        document.addEventListener("focusout", (e) => {
          setTimeout(() => document.querySelector("#state").innerText = getState(document.querySelector("textarea-component")))
        })

        setTimeout(() => document.querySelector("#state").innerText = getState(document.querySelector("textarea-component")))

        function getState (formControl) {
          let text = ""
          if (formControl.hasAttribute("data-user-valid")) {
            text += "has-interacted, user-valid"
          }

          if (formControl.hasAttribute("data-user-invalid")) {
            text += "has-interacted, user-invalid"
          }

          if (formControl.hasAttribute("data-valid")) {
            text += " valid"
          }
          if (formControl.hasAttribute("data-invalid")) {
            text += " invalid"
          }

          return text
        }
      </script>
    </form>
  </template>
</light-preview>
