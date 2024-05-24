import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { TooShortValidator } from "../../exports/validators/too-short-validator.js";

test("Should display a 'tooShort' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      TooShortValidator()
    ]
    constructor () {
      super()
      this.value = ""
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 minlength="5"></test-el-1>`))
  el.updateValidity()


  const validationMessage = TooShortValidator().message(document.createElement("div"), 5, "".length)

  assert.isOk(el.validationMessage)
  assert.equal(el.validationMessage, validationMessage)
})
