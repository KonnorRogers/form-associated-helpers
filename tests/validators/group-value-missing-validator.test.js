// @ts-check
import { BaseElement } from "../fixtures/base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import {GroupValueMissingValidator} from '../../exports/validators/group-value-missing-validator.js'
import { uuidv4 } from "../../internal/uuid-v4.js";

test("Should display a 'valueMissing' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      GroupValueMissingValidator({
        validatorType: "radio"
      })
    ]
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-1 required name="blah1"></test-el-1>`))

  el.updateValidity()

  const invalidInput = Object.assign(
    document.createElement("input"),
    {
      type: "radio",
      name: "unguessable-name-" + uuidv4(),
      required: true,
    }
  )

  assert.equal(el.validationMessage, invalidInput.validationMessage)
})


test("Should display a 'valueMissing' validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      GroupValueMissingValidator({
        validatorType: "radio"
      })
    ]
  }

  if (!customElements.get("test-el-2")) {
    customElements.define(`test-el-2`, TestEl)
  }

  const el = /** @type {TestEl} */ (await fixture(html`<test-el-2 required name="blah2"></test-el-2>`))
  el.updateValidity()

  const invalidInput = Object.assign(
    document.createElement("input"),
    {
      type: "radio",
      name: "unguessable-name-" + uuidv4(),
      required: true,
    }
  )

  assert.equal(el.validationMessage, invalidInput.validationMessage)
})
