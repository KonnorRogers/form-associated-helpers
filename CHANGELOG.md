## v0.0.10

- Introduce a pattern for easier translations of error messages
- Fixed checks to make sure `this.internals` and `superclass.formAssociated` aren't already defined.

## v0.0.9 - 04/30/2024

- BREAKING_CHANGE: Validators are now functions. Because of shared objects, we don't want mutations to override objects. This also opens up the possibility of allowing "options" in the future.

- Feature: `this.updateInteractionState()` is now exposed on the host element.
- Feature: `this.updateValidity()` is now exposed on elements and replaces the old private `runValidators(element)` function.
- Feature: Added CustomStatesMixin to allow setting custom states even if the element is not formAssociated.

- Bug: remove `runValidators` from `formDisabledCallback`.
- Bug: Fixed a bug in `tabindex` detection in the constructor.
- Bug(types): Loosened Lit version for types for better deduping.
- Bug: Removed `checkFocusability`

- Deprecated: No longer run validators prior to `setFormValue`
- Deprecated: Remove `set form(value: string)` it's confusing because browsers dont do this, and you should set the attribute manually.

## v0.0.7 - 3/14/2024

- Bug Fix(types): Fixed a bug in types for LitFormAssociated.

## v0.0.6 - 3/14/2024

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

