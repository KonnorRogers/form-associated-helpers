## TODO

- Introduce a pattern for easier translations of error messages

## 0.0.5

- Feature: Added the following functions for custom states to `VanillaFormAssociatedMixin`:

```js
addCustomState (state) {}
deleteCustomState (state) {}
hasCustomState (state) {}
toggleCustomState (state, force) {}
```

With fallbacks for unsupported browsers.

- Bug Fix: `runValidators()` now preserves custom errors, and will also run prior to checkValidity() and reportValidity().


## 0.0.4 02/13/2024

- `validationTarget` is defined as a `getter` and falls back to the value of `this.formControl`

## 0.0.3 02/13/2024

- Added multiple tests around states.

