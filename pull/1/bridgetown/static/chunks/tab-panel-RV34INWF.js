import{d as s}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-IP4NLKUO.js";import{a as l}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-IWBDLXWS.js";import{a as r,b as o,g as i,h as a,k as p}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-PYQM5LDU.js";import{c as e}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-APL3J72T.js";import"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-RIJORYKN.js";var n=r`
  ${i}

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
    `}};t.styles=n;e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([l("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/form-associated-helpers/pull/1/bridgetown/static/chunks/tab-panel-RV34INWF.js.map
