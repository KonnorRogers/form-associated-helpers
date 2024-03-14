## TODO

- Introduce a pattern for easier translations of error messages

## v0.0.06 - 3/14/2024

- Bug Fix(types): Fixed a bug in types for LitFormAssociated.

## v0.0.5 - 02/29/2024

- Feature: Added the following functions for custom states to `VanillaFormAssociatedMixin`:

```js
addCustomState (state) {}
deleteCustomState (state) {}
hasCustomState (state) {}
toggleCustomState (state, force) {}
```

With fallbacks for unsupported browsers.

- Bug Fix: `runValidators()` now preserves custom errors, and will also run prior to checkValidity() and reportValidity().


## v0.0.4 - 02/13/2024

- `validationTarget` is defined as a `getter` and falls back to the value of `this.formControl`

## v0.0.3 - 02/13/2024

- Added multiple tests around states.

