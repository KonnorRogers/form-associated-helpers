import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { TypeMismatchValidator } from "../../exports/validators/type-mismatch-validator.js";
import { ValueMissingValidator } from "../../exports/validators/value-missing-validator.js";

test("Should display a 'valueMissing' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      ValueMissingValidator()
    ]
    constructor () {
      super()

      /**
       * @type {string | null}
       */
      this.value = null
    }
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 required></test-el-1>`))
  el.updateValidity()

  const badInput = Object.assign(document.createElement("input"), {
    required: true,
  })

  const { validationMessage } = badInput

  assert.isOk(el.validationMessage)
  assert.equal(el.validationMessage, validationMessage)
})
