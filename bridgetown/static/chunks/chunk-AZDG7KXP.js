import{a as s,b as h,c as i}from"/form-associated-helpers/bridgetown/static/chunks/chunk-RW4ENKIO.js";import{d as p}from"/form-associated-helpers/bridgetown/static/chunks/chunk-J3E7IENR.js";import{b}from"/form-associated-helpers/bridgetown/static/chunks/chunk-27CYA6SY.js";import{a as l,g as a,h as r,i as c,j as u,k as d}from"/form-associated-helpers/bridgetown/static/chunks/chunk-FQ3KH6NF.js";import{c as e}from"/form-associated-helpers/bridgetown/static/chunks/chunk-GB5AZ5YQ.js";var f=l`
  ${a}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var t=class extends d{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){let o=!!this.href,n=o?s`a`:s`button`;return h`
      <${n}
        part="base"
        class=${p({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${i(o?void 0:this.disabled)}
        type=${i(o?void 0:"button")}
        href=${i(o?this.href:void 0)}
        target=${i(o?this.target:void 0)}
        download=${i(o?this.download:void 0)}
        rel=${i(o&&this.target?"noreferrer noopener":void 0)}
        role=${i(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${i(this.name)}
          library=${i(this.library)}
          src=${i(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${n}>
    `}};t.styles=f;t.dependencies={"sl-icon":b};e([u(".icon-button")],t.prototype,"button",2);e([c()],t.prototype,"hasFocus",2);e([r()],t.prototype,"name",2);e([r()],t.prototype,"library",2);e([r()],t.prototype,"src",2);e([r()],t.prototype,"href",2);e([r()],t.prototype,"target",2);e([r()],t.prototype,"download",2);e([r()],t.prototype,"label",2);e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);export{t as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-AZDG7KXP.js.map