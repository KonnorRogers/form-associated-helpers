import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import {BadInputValidator} from '../../exports/validators/bad-input-validator.js'
import { sendKeys } from "@web/test-runner-commands";

test("Should display a badInput validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      BadInputValidator()
    ]

    connectedCallback () {
      this.shadowRoot.innerHTML = `<input type="number">`
    }

    get formControl () {
      return this.shadowRoot?.querySelector("input")
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1></test-el-1>`))

  const input = el.shadowRoot?.querySelector("input")

  input?.focus()
  await sendKeys({ type: "234e21424" })
  el.updateValidity()

  const invalidInput = /** @type {HTMLInputElement} */ (await fixture(html`<input type="number">`))
  invalidInput?.focus()
  await sendKeys({ type: "234e21424" })

  assert.equal(el.validationMessage, invalidInput.validationMessage)
  assert.match(el.validationMessage, /enter a number/i)
})
