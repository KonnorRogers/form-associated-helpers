import TextareaComponent from "../../examples/textarea-component.js"
import { assert, expect } from "@esm-bundle/chai"
import { aTimeout, elementUpdated, html } from "@open-wc/testing-helpers"
import { fixture } from "@open-wc/testing-helpers"
import { sendKeys } from "@web/test-runner-commands"

if (!window.customElements.get("textarea-component")) {
  window.customElements.define("textarea-component", class extends TextareaComponent {})
}

// https://github.com/whatwg/html/issues/8365
test("Should emit a warning when 'disabled' is used with 'reflect: true'", async () => {
  // Make sure we get the warning.
  if (!window.customElements.get("textarea-component-disable-check")) {
    window.customElements.define("textarea-component-disable-check", class extends TextareaComponent {
      static properties = {
        ...TextareaComponent.properties,
        disabled: { reflect: true, type: Boolean }
      }
    })
  }

  const originalWarn = console.warn

  let logs = ""
  console.warn = function(...args) {
    originalWarn.apply(console, args);

    logs += "\n" + args.join("\n")
  }

  await fixture(html`<textarea-component-disable-check name="yo" value="hi"></textarea-component>`)
  assert.include(logs, "The following element has their \"disabled\" property set to reflect.")

  console.warn = originalWarn
})

test("Should be role of textbox", async () => {
  const editor = await fixture(html`<textarea-component name="yo" value="hi"></textarea-component>`)

  assert.equal(editor.role, null)
  assert.equal(editor.getAttribute("role"), null)

  editor.role = "combobox"
  await elementUpdated(editor)
  assert.equal(editor.role, "combobox")
  assert.equal(editor.getAttribute("role"), "combobox")

  editor.setAttribute("role", "textbox")
  await elementUpdated(editor)
  assert.equal(editor.role, "textbox")
  assert.equal(editor.getAttribute("role"), "textbox")
})

test("Should properly set its form value", async () => {
  const form = await fixture(html`
    <form>
      <textarea-component name="test" value="hi"></textarea-component>
      <button>Submit</button>
    </form>
  `)

  const editor = form.querySelector("textarea-component")
  let formData = new FormData(form)

  assert.equal(formData.get("test"), editor.value)

  editor.value = "yo"
  await editor.updateComplete

  formData = new FormData(form)
  assert.equal(formData.get("test"), editor.value)
})

test("Should prevent submission with custom validity and reset validity", async () => {
  const form = await fixture(html`
    <form>
      <textarea-component name="test" value="sup dude"></textarea-component>
      <button>Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)

  const editor = form.querySelector("textarea-component")
  const button = form.querySelector("button")
  const resetButton = form.querySelector("button[type='reset']")

  let called = 0

  form.addEventListener("submit", () => {
    called += 1
  })

  editor.setCustomValidity("Custom Error Message")

  assert.equal(editor.validationMessage, "Custom Error Message")
  assert.equal(editor.validity.customError, true)
  assert.equal(editor.validity.valid, false)

  button.click()

  await aTimeout(1)

  assert.equal(called, 0)
  assert.equal(editor.validationMessage, "Custom Error Message")

  editor.setCustomValidity("Custom Error Message")
  assert.equal(editor.validity.customError, true)
  assert.equal(editor.validity.valid, false)

  editor.value = "Not default value"
  resetButton.click()
  await aTimeout(1)

  assert.equal(editor.validationMessage, "")
  assert.equal(editor.validity.customError, false)
  assert.equal(editor.validity.valid, true)
  assert.equal(editor.getAttribute("value"), "sup dude")
})

test("Should properly reset to defaultValue", async () => {
  const form = await fixture(html`
    <form>
      <textarea-component required name="test"></textarea-component>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)
})

test("Should set :user-invalid when attempting to submit", async () => {
  const form = await fixture(html`
    <form>
      <textarea-component required name="test"></textarea-component>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)

  const resetButton = form.querySelector("[type='reset']")
  const submitButton = form.querySelector("[type='submit']")
})

test("Should fail validity check with required and no value", async () => {
  const form = await fixture(html`
    <form>
      <textarea-component required name="test"></textarea-component>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)

  const editor = form.querySelector("textarea-component")
  const resetButton = form.querySelector("[type='reset']")
  const submitButton = form.querySelector("[type='submit']")

  let called = 0

  form.addEventListener("submit", () => {
    called += 1
  })

  resetButton.click()

  await aTimeout(1)

  assert.equal(called, 0)

  assert.equal(editor.hasAttribute("data-invalid"), true)
  // These are false until we "blur"
  assert.equal(editor.hasAttribute("data-has-interacted"), false)
  assert.equal(editor.hasAttribute("data-user-invalid"), false)
  assert.equal(editor.hasAttribute("data-valid"), false)
  assert.equal(editor.hasAttribute("data-user-valid"), false)

  editor.focus()

  const tabKey = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('HeadlessChrome') ? 'Alt+Tab' : 'Tab';
  await sendKeys({ press: tabKey })
  await aTimeout(0)

  const nativeTextarea = Object.assign(document.createElement("textarea"), {
    required: true
  })

  // These are false until we change the value or "submit"
  assert.equal(editor.hasAttribute("data-has-interacted"), false)
  assert.equal(editor.hasAttribute("data-user-invalid"), false)

  submitButton.click()

  // Takes an event loop to propagate.
  await aTimeout(0)

  // These are false until we change the value or "submit"
  assert.equal(editor.hasAttribute("data-has-interacted"), true)
  assert.equal(editor.hasAttribute("data-user-invalid"), true)

  assert.equal(editor.validationMessage, nativeTextarea.validationMessage)
  assert.equal(editor.validity.valueMissing, true)
  assert.equal(editor.validity.valid, false)
})

test("Should properly transition states based on interactions", async () => {
})
