import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { StepMismatchValidator } from "../../exports/validators/step-mismatch-validator.js";

test("Should display a 'stepMismatch' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      StepMismatchValidator()
    ]

    constructor () {
      super()
      this.value = "0.25"
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 value="0.25" step="0.5"></test-el-1>`))
  el.updateValidity()

  const invalidInput = Object.assign(document.createElement("input"), {
    type: "number",
    step: 0.5,
    value: 0.25
  })

  assert.isOk(el.validationMessage)
  assert.equal(el.validationMessage, invalidInput.validationMessage)
})
