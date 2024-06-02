import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import { CustomErrorValidator } from "../../exports/validators/custom-error-validator.js";

test("Should display a badInput validation message with an attribute", async () => {
  class TestEl extends BaseElement {
    static validators = [
      CustomErrorValidator()
    ]
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 custom-error="I'm a custom error."></test-el-1>`))
  el.updateValidity()

  assert.equal(el.validationMessage, "I'm a custom error.")
})


test("Should display a badInput validation message with an attribute", async () => {
  class TestEl extends BaseElement {
    static validators = [
      CustomErrorValidator()
    ]

    constructor () {
      super()

      /** @type {boolean | string | null} */
      this.customError = null
    }
  }

  if (!customElements.get("test-el-2")) {
    customElements.define(`test-el-2`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-2></test-el-2>`))
  el.customError = "I'm a custom error."
  el.updateValidity()

  assert.equal(el.validationMessage, "I'm a custom error.")
})

