import{d as n}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";function i(t){var e;return e=class extends t{constructor(...r){if(super(...r),typeof this.attachInternals!="function"){console.error("Element Internals are not supported in your browser.");return}try{this.internals=this.attachInternals()}catch(s){console.error(s)}o(this)}connectedCallback(){this.internals!=null&&typeof super.connectedCallback=="function"&&(super.connectedCallback(),o(this))}},n(e,"formAssociated",!0),e}function o(t){if(t.shadowRoot&&t.shadowRoot.delegatesFocus!==!0){let e=t.getAttribute("tabindex")?.trim(),r=e?Number(e):null;if(r==null||isNaN(r))return console.error(`FormAssociated custom elements need a "tabindex" or to be registered with "{ delegatesFocus: true }".
The following element is in violation: `),console.error(t),!1}return!0}export{i as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-PPFFNU7C.js.map
