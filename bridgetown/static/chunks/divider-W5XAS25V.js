import{a as i}from"/form-associated-helpers/bridgetown/static/chunks/chunk-GY3QAKX3.js";import{a as e,g as o,h as a,k as l}from"/form-associated-helpers/bridgetown/static/chunks/chunk-FQ3KH6NF.js";import{c as t}from"/form-associated-helpers/bridgetown/static/chunks/chunk-GB5AZ5YQ.js";import"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";var s=e`
  ${o}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=s;t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([i("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/divider-W5XAS25V.js.map