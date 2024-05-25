import{d as s}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ZQN7PWWQ.js";import{a as i}from"/form-associated-helpers/bridgetown/static/chunks/chunk-6BQY5CG2.js";import{a as l,b as a,e as p}from"/form-associated-helpers/bridgetown/static/chunks/chunk-U74YYMN2.js";import{c as e,e as r,h as o}from"/form-associated-helpers/bridgetown/static/chunks/chunk-VXW5OIF2.js";import"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";var n=r`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var m=0,t=class extends p{constructor(){super(...arguments),this.attrId=++m,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return o`
      <slot
        part="base"
        class=${s({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};t.styles=[l,n];e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([i("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/tab-panel-LFZ5FQ5D.js.map
