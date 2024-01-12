---
title: Vanilla Form Associated Mixin
permalink: /references/mixins/vanilla-form-associated-mixin/
---

<style>
textarea-component::part(form-control):focus-visible {
  outline: transparent;
}
  textarea-component::part(form-control) {
    border: 2px solid gray;
  }

  [data-valid]::part(form-control) {
    border-color: green;
  }

  [data-user-valid]::part(form-control) {
    border-color: blue;
  }

  [data-invalid]::part(form-control) {
    border-color: rebeccapurple;
  }

  [data-user-invalid]::part(form-control) {
    border-color: red;
  }
</style>

<form>
  <textarea-component required></textarea-component>
</form>
