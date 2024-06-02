import{a as s}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-ZBZ6GWZP.js";import{a as i}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-RSZ7ZHIR.js";import{a as l,b as a,e as p}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-NMXFLFBR.js";import"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-44Y375VS.js";import{c as e}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-NADZLL4S.js";import{a as r,d as o}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-LKE63TLK.js";import"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-WQOWVNO2.js";var n=r`
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
//# sourceMappingURL=/form-associated-helpers/pull/5/bridgetown/static/chunks/tab-panel-QKVWV7X2.js.map
