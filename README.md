**This package is still in beta. Proceed with caution.**

If you are looking for a more fully-fledged solution, check out the inspiration for this package:

<https://github.com/open-wc/form-participation>

# Purpose

A collection of reusable mixins + helpers for working with form associated custom elements.

## Foreword

This package is currently considered an "alpha" package. Use at your own risk.

Most of these mixins have been tested and intended to work with Lit. Other custom element implementations
may work, but is not the purpose of this library (currently).


## Documentation

Documentation can be found here:

<https://konnorrogers.github.io/form-associated-helpers/>

## Local Development

### Prerequisites

- Ruby 3.2
- NodeJS v20
- PNPM

### Setup

```bash
git clone https://github.com/konnorrogers/form-associated-helpers
cd form-associated-helpers
pnpm run setup # This will install the main package dependencies, and the documentation dependencies
```

### Starting the dev server

```bash
pnpm run start:docs

# OR

cd docs && bin/bridgetown start
```

