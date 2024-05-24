import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { TooLongValidator } from "../../exports/validators/too-long-validator.js";

test("Should display a 'tooLong' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      TooLongValidator()
    ]
    constructor () {
      super()
      this.value = "Hello World"
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 maxlength="5"></test-el-1>`))
  el.updateValidity()


  const validationMessage = TooLongValidator().message(document.createElement("div"), 5, "Hello World".length)

  assert.isOk(el.validationMessage)
  assert.equal(el.validationMessage, validationMessage)
})
