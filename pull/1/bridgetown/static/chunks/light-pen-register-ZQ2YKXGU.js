import{a as m}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-NZQ5BRPV.js";import{a as d,b as u,c as b,d as f}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-UZ6H6SB2.js";import{a as p,b as c,c as h}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-NWWBFL7N.js";import"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-RX5B3IFJ.js";import{a as n}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-PN4K5M5I.js";import"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-5S3NTMW5.js";import{a as l,c as o}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-CPCUEDBY.js";import{d as i}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-RIJORYKN.js";var x=l`
[part~="sandbox-iframe"] {
  width: 100%;
  height: 100%;
  border: 1px solid darkgray;
}

[part~="sandbox-editor"] {
  padding: 4px;
}

[part~="sandbox-editor"]::part(base):focus-within {
  border-color: dodgerblue;
}

[part~="sandbox-editor"]::part(base) {
  resize: vertical;
  border: 2px solid gray;
  border-radius: 8px;
}

[part~="sandbox"] {
  color:#272727;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, auto) minmax(0, 1fr);
}

[part~="summary"] {
  display: inline-block;
  margin: 6px 0px;
}

[part~="disclosure"]::part(summary) {
  margin: 6px 0px;
}

[part~="base"] {
	word-wrap: break-word;
	color: inherit;
	font-size: 1em;
}

[part~="details"] {
  padding: 4px;
}

[part~="details"]:not(:first-child) {
}

[part~="sandbox"],
[part~="base"] {
  height: 100%;
}

[part~="sandbox-iframe"] {
  aspect-ratio:auto;
  background-color: #fff;
  margin-bottom: 0;
}

[part~="base"],
[part~="pre"],
[part~="code"],
[part~="sandbox-iframe"] {
  border-radius:.25rem;
}

[part~='sandbox-header'],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  background-color:#343d4d;
  color: #fff;
}

[part~="sandbox-header"] {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8125em;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

[part~="sandbox-console"],
[part~="sandbox-content"] {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background-color: #e5e5e5;
}


[part~='sandbox-controls'] button {
  margin-bottom: 0;
}

[part~="sandbox-console-log"] {
  font-family: Menlo,Monaco,"Courier New",monospace;
  font-size: 0.875em;
  min-height: 1.2em;
}

.log-warn {
  color:#f9d767
}

.log-error {
  color:#f9c8c8
}

[part~="sandbox-header"],
[part~="sandbox-code"],
[part~="sandbox-iframe-wrapper"],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  padding: 0.5em;
}

[part~="sandbox-code"] {
  max-height: 100%;
  overflow-y: auto;
}

[part~="sandbox-code"] > *:not(:first-child) {
  margin-top: 6px;
}


button:where([part~="panel-resizer"]) {
  height: calc(100% - 0.5em);
  cursor: col-resize;
  background-color: white;
}

button[part~="panel-resizer"]:is(:active, :hover, .is-active) {
  cursor: col-resize;
}

[resizing],
[part~="panel-resizer"].is-active {
  cursor: col-resize;
}

[part~="sandbox-content"] {
  display:grid;
  grid-template-columns: minmax(var(--start-panel-min-width, 30px),var(--start-panel-width, 1fr)) minmax(0, auto) minmax(var(--end-panel-min-width, 30px), var(--end-panel-width, 1fr));
  grid-template-rows: minmax(0, 1fr);
}

[part~="sandbox-console-result"] {
  border-top:1px solid #1f252f;
  border-bottom-left-radius:0;
}
`;var r=class extends p{constructor(){super(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.resizePosition=50,this.openLanguages="",this.languages=["html","css","js"],this.console="disabled",this.consoleText="",this.cachedWidth=0,this.sandboxSettings="",this._resizing=!1,this.cssCode="",this.htmlCode="",this.jsCode=""}get jsEditor(){return this.shadowRoot?.querySelector("#editor-js")}get cssEditor(){return this.shadowRoot?.querySelector("#editor-css")}get htmlEditor(){return this.shadowRoot?.querySelector("#editor-html")}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this)})}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),s=e+t;this.cachedWidth=s}handleResize(e){let{left:t,right:s}=e[0].contentRect,a=t+s;this.cachedWidth=a}get iframeElem(){return this.shadowRoot?.querySelector("iframe")}updateIframeContent(){let e=this.iframeElem;if(e==null)return;let t=`
      <!doctype html><html>
        <head><meta charset="utf-8">
          <style>${this.cssCode}</style>
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          <\/script>
        </body>
      </html>
    `;e.contentWindow?.document.open(),e.contentWindow?.document.writeln(t),e.contentWindow?.document.close()}willUpdate(e){["cssCode","htmlCode","jsCode"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,s=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=s),e.key==="ArrowRight"&&(t+=s),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=d(t,0,100)}}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let s=100-t;this.style.setProperty("--start-panel-width",`${t}%`),this.style.setProperty("--end-panel-width",`${s}%`)}}resetValues(){this.htmlCode=this.htmlEditor?.getAttribute("value")||"",this.cssCode=this.cssEditor?.getAttribute("value")||"",this.jsCode=this.jsEditor?.getAttribute("value")||"",this.requestUpdate()}renderConsole(){return o`<div part="sandbox-console-log"></div>`}render(){return o`
      <!-- Where users can declaratively provide templates -->
      <div part="base" ?resizing=${this._resizing}>
			  <div part="sandbox">
				  <div part="sandbox-header">
            <slot name="title">
					    <strong>
                Code Editor
              </strong>
            </slot>

					  <span part="sandbox-controls">
						  <button part="sandbox-controls-button sandbox-reset" @click=${this.resetValues}>
                Reset
              </button>

						  ${n(this.console==="enabled",()=>o`<button @click={}>Clear Console</button>`)}
					  </span>
				</div>
				<div part="sandbox-content">
					<div part="sandbox-code">
            ${this.renderDetails("html")}
            ${this.renderDetails("css")}
            ${this.renderDetails("js")}
					</div>

          <button
            id="panel-resizer"
            part="panel-resizer"
            role="separator"
            aria-valuenow=${this.resizePosition}
            aria-valuemin="0"
            aria-valuemax="100"
            @keydown=${this.handleResizerKeydown}
            @pointerdown=${this.handleDrag}
            @touchstart=${this.handleDrag}
            class=${this._resizing?"is-active":""}
          >
            <slot name="panel-resize-icon">
              ${b}
            </slot>
            <span class="visually-hidden">Resize Panel. Pull to left or right to resize.</span>
          </button>

					<div part="sandbox-iframe-wrapper">
						<iframe
              part="sandbox-iframe"
              frameborder="0"
             ></iframe>
					</div>
				</div>

        <!--
        ${n(this.console==="enabled",()=>o`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">Console</summary>
                ${this.consoleText}
              </details>
            `)}
        -->
			</div>
		</div>`}handleDrag(e){e.cancelable&&e.preventDefault(),this.iframeElem&&(this.iframeElem.style.pointerEvents="none"),this._resizing=!0,u(this,{onMove:(t,s)=>{this._resizing=!0;let a=t;this.resizePosition=d(0,this.pixelsToPercentage(a),100),this.updateResizePosition()},onStop:()=>{this.iframeElem&&(this.iframeElem.style.pointerEvents="auto"),this._resizing=!1},initialEvent:e})}pixelsToPercentage(e){return e/this.cachedWidth*100}renderEditor(e){return o`
      <light-editor
        id=${`editor-${e}`}
        part=${`sandbox-editor sandbox-editor--${e}`}
        exportparts="
          base:sandbox-editor__base,
          pre:sandbox-editor__pre,
          code:sandbox-editor__code,
          textarea:sandbox-editor__textarea
        "
        language=${e}
        .value=${this[`${e}Code`]}
        @light-value-change=${t=>{this[`${e}Code`]=t.currentTarget.value}}
      ><slot name=${e}></slot></light-editor>
    `}renderDetails(e){let t=e.toUpperCase();return o`
      <light-disclosure part="disclosure disclosure-${e}">
        <span part="summary" slot="summary"><slot name=${`summary-${e}`}>${t}</slot></span>

        ${this.renderEditor(e)}
			</light-disclosure>
		`}};i(r,"baseName","light-pen"),i(r,"styles",[c,h,x]),i(r,"dependencies",{"light-editor":m,"light-disclosure":f}),i(r,"properties",{openLanguages:{reflect:!0,attribute:"open-languages"},resizePosition:{attribute:"resize-position",reflect:!0,type:Number},console:{reflect:!0},languages:{attribute:!1,type:Array},cssCode:{attribute:!1},htmlCode:{attribute:!1},jsCode:{attribute:!1},htmlResizeObserver:{attribute:!1},jsResizeObserver:{attribute:!1},cssResizeObserver:{attribute:!1},_resizing:{attribute:!1}});var T=r;r.define();export{T as default};
//# sourceMappingURL=/form-associated-helpers/pull/1/bridgetown/static/chunks/light-pen-register-ZQ2YKXGU.js.map
