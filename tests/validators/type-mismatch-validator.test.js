import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { TypeMismatchValidator } from "../../exports/validators/type-mismatch-validator.js";

test("Should display a 'typeMismatch' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      TypeMismatchValidator()
    ]
    constructor () {
      super()
      this.shadowRoot.innerHTML = `
        <input type="email" value="1">
      `
    }

    get formControl () {
      return this.shadowRoot?.querySelector("input")
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1></test-el-1>`))
  el.updateValidity()


  const badInput = Object.assign(document.createElement("input"), {
    type: "email",
    value: "1"
  })

  const { validationMessage } = badInput

  assert.isOk(el.validationMessage)
  assert.equal(el.validationMessage, validationMessage)
})
