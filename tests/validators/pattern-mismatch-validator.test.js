import { BaseElement } from "./base-element.js";
import {assert} from '@esm-bundle/chai'
import {html, fixture} from '@open-wc/testing-helpers'
import {PatternMismatchValidator} from '../../exports/validators/pattern-mismatch-validator.js'

test("Should display a patternMismatch validation message with default arguments", async () => {
  class TestEl extends BaseElement {
    static validators = [
      PatternMismatchValidator()
    ]
  }

  if (!customElements.get("test-el-1")) {
    customElements.define(`test-el-1`, TestEl)
  }

  const el = await fixture(html`<test-el-1 pattern="asdf"></test-el-1>`)
  el.updateValidity()

  const invalidInput = Object.assign(
    document.createElement("input"),
    {
      value: "not-blah",
      pattern: "blah",
    }
  )

  assert.equal(el.validationMessage, invalidInput.validationMessage)
  assert.match(el.validationMessage, /requested format/)
})

test("Should display a patternMismatch validation message with a custom validatorElement", async () => {
  const invalidInput = Object.assign(
    document.createElement("input"),
    {
      value: "not-blah",
      pattern: "blah",
    }
  )

  class TestEl extends BaseElement {
    static validators = [
      Object.assign(PatternMismatchValidator(), { message: invalidInput.validationMessage })
    ]
  }

  if (!customElements.get("test-el-2")) {
    customElements.define(`test-el-2`, TestEl)
  }

  const el = await fixture(html`<test-el-2 pattern="asdf"></test-el-2>`)
  el.updateValidity()

  assert.equal(el.validationMessage, invalidInput.validationMessage)
})

test("Customizing final message statically", async () => {
  const validationMessage = "You shall not pass"

  class TestEl extends BaseElement {
    static validators = [
      Object.assign(PatternMismatchValidator(), { message: validationMessage })
    ]
  }

  if (!customElements.get("test-el-3")) {
    customElements.define(`test-el-3`, TestEl)
  }

  const el = await fixture(html`<test-el-3 pattern="asdf"></test-el-3>`)
  el.updateValidity()

  assert.equal(el.validationMessage, validationMessage)
})


test("Customizing final message statically", async () => {
  const validationMessage = "You shall not pass"

  class TestEl extends BaseElement {
    static validators = [
      Object.assign(PatternMismatchValidator(), { message () { return validationMessage }})
    ]
  }

  if (!customElements.get("test-el-4")) {
    customElements.define(`test-el-4`, TestEl)
  }

  const el = await fixture(html`<test-el-4 pattern="asdf"></test-el-4>`)
  el.updateValidity()

  assert.equal(el.validationMessage, validationMessage)
})
