import{a as x,b as y,d as k,e as f,f as C,g as h,h as $,i as z}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-ZE3AZW5O.js";import{d as w,e as L}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-QZPST5DN.js";import{d as v}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-MARFTL4X.js";import{a as b,c as p,g as m}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-R3NRZCRT.js";import{d as u}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-N23D4TWV.js";var T=b`
  [part~="base"] {
	  font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: black;
    counter-reset: linenumber 0;
    display: grid;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
  }

  /* Include "pre" if line numbers are disabled */
  [part~="textarea"], .light-line {
    padding: 0px;
    padding-inline-start: 6px;
  }

  /** @TODO: If line numbers disabled */
  :host([line-numbers="disabled"]) .light-line {
    padding-inline-start: 0px;
  }

  :host([line-numbers="disabled"]) [part~="pre"] {
    padding-inline-start: 6px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
  }

  [part~="pre"] {
    border-color: transparent;
    position: relative;
  }

  [part~="base"]:focus-within {
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  [part~="pre"], [part~="textarea"], [part~="code"], [part~="gutter"] {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;

    /* This would remove line-wrapping */
	  /* word-break: break-all; */
    /* white-space: pre; */
  }

  /** Hide scrollbars for the gutter */
  [part~="gutter"]::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

  [part~="gutter-cell"] {
    padding-inline-end: 16px;
    padding-inline-start: 12px;
  }

  [part~="gutter"] {
    color: rgba(0,0,0,0.35);
	  background-color: rgba(50,50,50,0.08);
    font-variant-numeric: tabular-nums;
    border-inline-end: 1px solid darkgray;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;
    text-align: end;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  .light-line {
    display: inline-block;
    width: 100%;
  }

  [part~="base"]:focus-within .light-line.is-active {
    background-color: rgba(255,255,209,1);
  }

  /* We don't want to show the focus position if the user hasn't interacted with the textarea. */
  :where(:host([has-interacted]) .light-line.is-active) {
    background-color: rgba(0,0,0,0.05);
  }

  [part~="gutter-cell"][part~="gutter-cell--active"] {
    background-color: rgba(0,0,0,0.05);
  }


  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="pre"],
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: 1px solid transparent;
  }

  [part~="pre"] {
	  color: #272727;
  }

  [part~="gutter"],
  [part~="pre"] {
	  background-color: #f7f7f7;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var g=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var d=class extends g{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var R=/\r\n|\r|\n/;function H(a={}){return function(t){t.tokens=S(t.tokens).map(r=>(r.length<=0&&r.push(" "),new h("light-line",r)))}}function j(a){return Array.isArray(a)?a:[a]}function A(a){return a.length===0?"":a.length===1&&typeof a[0]=="string"?a[0]:a}function S(a){let e=[],t=[e];for(let r=0;r<a.length;r++){let i=a[r];if(typeof i=="string"){let s=i.split(R);for(let n=0;n<s.length;n++){n>0&&t.push(e=[]);let l=s[n];l&&e.push(l)}}else{let s=S(j(i.content));if(s.length>1)for(let n=0;n<s.length;n++){n>0&&t.push(e=[]);let l=s[n];if(l.length){let c=new h(i.type,A(l),i.alias);c.length=l.reduce((E,N)=>E+N.length,0),e.push(c)}}else e.push(i)}}return t}var I=/\r\n?|\n/g,o=class extends x{constructor(){super(),this.language="html",this.value="",this.initialValue="",this.textarea=null,this.hasInteracted=!1,this.preserveWhitespace=!1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.initialValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=f(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(e){e.has("value")&&this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),super.willUpdate(e)}click(){this.textarea&&this.textarea.click()}focus(e){this.textarea&&this.textarea.focus(e)}render(){let e=this.language,t=v(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),p`
			<div part="base">
        <!-- Super important to not have white space here due to how white space is handled -->
			  <div part="gutter"
			    @focus=${()=>{this.textarea?.focus()}}
			    @click=${r=>{this.textarea?.focus()}}
			  ></div>
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
				  <pre
            id="pre-${e}"
            data-code-lang=${e}
            aria-hidden="true"
            part="pre pre-${e}"
            class="language-${e}"
            tabindex="-1"
			      @focus=${()=>{this.textarea?.focus()}}
			      @click=${r=>{this.textarea?.focus()}}
          ><code
              part="code code-${e}"
              class="language-${e}"
            >${t}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
				  <textarea
				    aria-labelledby="label"
            id="textarea-${e}"
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            translate="no"
            value=${this.initialValue}
            .value=${this.value}
            ${w(this.textareaChanged)}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasInteracted=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${r=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${r=>{this.value=r.currentTarget.value,this.injectGutterCells(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${r=>{this.value=r.currentTarget.value,this.injectGutterCells(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @scroll=${r=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:i,top:s,bottom:n}=e[0].contentRect,l=r+i,c=s+n;this.dispatchEvent(new d("light-resize",{height:c,width:l})),this.syncScroll(),this.injectGutterCells()}updated(e){super.updated(e),this.syncScroll(),this.injectGutterCells(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let e=this.textarea;if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),i=f(this.unescapeTags(C(...r)).trim());i&&(this.value=i,this.initialValue=i,this.setAttribute("value",this.initialValue),setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code"),t=this.shadowRoot?.querySelector("[part~='gutter']"),r=this.getCurrentLineNumber();if(this.currentLineNumber===r)return;let i=this.currentLineNumber;if(this.currentLineNumber=r,r!=null&&r>=0){let s=e?.children[r],n=t?.children[r];s&&(e.children[i]?.classList?.remove("is-active"),s.classList.add("is-active")),n&&(t.children[i]?.part?.remove("gutter-cell--active"),n.part.add("gutter-cell--active"))}}highlightCode(e){let{code:t,language:r}=e;return t=this.injectNewLine(t),t=this.unescapeTags(t),t=z(t,$.languages[r],r,{afterTokenize:[H(),i=>{let s=i.tokens[this.currentLineNumber];s&&s instanceof h&&(s.type=s.type+" is-active")}]}),t}injectGutterCells(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&m(this.renderGutterCells(),e)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(I).length-1:void 0}renderGutterCells(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=Array.from(e);return L(t,(r,i)=>{let s=r.offsetHeight,n=i===this.currentLineNumber;return i+s+n.toString()},(r,i)=>{let s=r.offsetHeight,l=`gutter-cell ${i===this.currentLineNumber?"gutter-cell--active":""}`;return s?p`<span part=${l} style="${`height: ${s}px`}">${i}</span>`:p`<span part=${l}>${i}</span>`})}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};u(o,"baseName","light-editor"),u(o,"styles",[y,T,k]),u(o,"properties",{value:{attribute:!1},initialValue:{attribute:"value"},language:{reflect:!0},hasInteracted:{type:Boolean,attribute:"has-interacted",reflect:!0},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"}});export{o as a};
//# sourceMappingURL=/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-UHSCBPV7.js.map
