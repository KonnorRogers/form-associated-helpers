import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { RangeOverflowValidator } from "../../exports/validators/range-overflow-validator.js";

test("Should display a badInput validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      RangeOverflowValidator()
    ]

    constructor () {
      super()
      this.value = "6"
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 max="5"></test-el-1>`))
  el.updateValidity()

  const invalidInput = Object.assign(document.createElement("input"), {
    type: "number",
    max: 5,
    value: 6
  })

  assert.isOk(el.validationMessage)
  assert.equal(el.validationMessage, invalidInput.validationMessage)
})
