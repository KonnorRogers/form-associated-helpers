import{a as o}from"/form-associated-helpers/bridgetown/static/chunks/chunk-6BQY5CG2.js";import{a as i,b as a,e as l}from"/form-associated-helpers/bridgetown/static/chunks/chunk-U74YYMN2.js";import{c as t,e}from"/form-associated-helpers/bridgetown/static/chunks/chunk-VXW5OIF2.js";import"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";var s=e`
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
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=[i,s];t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([o("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/divider-GJESC2FF.js.map
