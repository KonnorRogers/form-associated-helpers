---
title: Creating a textarea component
permalink: /how-tos/creating-a-textarea-component/
---

<light-preview style="min-height: 1000px;">
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
        })

        function getState (formControl) {
          let text = ""
          if (e.hasAttribute("data-user-valid")) {
            text = ""
          }
        }
      </script>
    </form>
  </template>
</light-preview>
