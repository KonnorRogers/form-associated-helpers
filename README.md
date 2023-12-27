**This package is still in alpha. Proceed with caution.**

If you are looking for a more fully-fledged solution, check out the inspiration for this package:

<https://github.com/open-wc/form-participation>

# Purpose

A collection of reusable mixins + helpers for working with form associated custom elements.

## Foreword

Most of these mixins have been tested and intended to work with Lit. Other custom element implementations
may work, but is not the purpose of this library (currently).

## Mixins

The following mixins are available:

```js
import { FormAssociatedMixin } from "form-associated-helpers/exports/mixins/form-associated-mixin.js"
import { OpinionatedFormAssociatedMixin } from "form-associated-helpers/exports/mixins/opinionated-form-associated-mixin.js"
import { TextareaMixin } from "form-associated-helpers/exports/mixins/textarea-mixin.js"
```

## Validators

The following validators are available:

```js
import { BadInputValidator } from "exports/validators/bad-input-validator.js"
import { CustomErrorValidator } from "exports/validators/custom-error-validator.js"
import { MirrorValidator } from "exports/validators/mirror-validator-validator.js"
import { PatternMismatchValidator } from "exports/validators/pattern-mismatch-validator.js"
import { RangeOverflowValidator } from "exports/validators/range-overflow-validator.js"
import { RangeUnderflowValidator } from "exports/validators/range-underflow-validator.js"
import { StepMismatchValidator } from "exports/validators/step-mismatch-validator.js"
import { TooLongValidator } from "exports/validators/too-long-validator.js"
import { TooShortValidator } from "exports/validators/too-short-validator.js"
import { TypeMismatchValidator } from "exports/validators/type-mismatch-validator.js"
import { ValueMissingValidator} from "exports/validators/value-missing-validator.js"
```

## Using validators
