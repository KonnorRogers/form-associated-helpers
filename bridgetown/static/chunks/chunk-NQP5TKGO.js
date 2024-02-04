import{a as ht}from"/form-associated-helpers/bridgetown/static/chunks/chunk-W7X356WX.js";import{a as nt}from"/form-associated-helpers/bridgetown/static/chunks/chunk-KZCWLEVN.js";import{d as k}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";var I=globalThis,z=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),at=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&at.set(e,t))}return t}toString(){return this.cssText}},lt=i=>new P(typeof i=="string"?i:i+"",void 0,F),X=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new P(e,i,F)},tt=(i,t)=>{if(z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=I.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},V=z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return lt(e)})(i):i;var{is:Nt,defineProperty:Ht,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Lt,getPrototypeOf:Bt}=Object,v=globalThis,ct=v.trustedTypes,Dt=ct?ct.emptyScript:"",kt=v.reactiveElementPolyfillSupport,R=(i,t)=>i,et={toAttribute(i,t){switch(t){case Boolean:i=i?Dt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},pt=(i,t)=>!Nt(i,t),dt={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ht(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=Mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){let p=r?.call(this);o.call(this,n),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let t=Bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let e=this.properties,s=[...Ot(e),...Lt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(V(r))}else t!==void 0&&e.push(V(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:et).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:et;this._$Em=r,this[r]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??pt)(r?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[R("elementProperties")]=new Map,f[R("finalized")]=new Map,kt?.({ReactiveElement:f}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.2");var N=globalThis,G=N.trustedTypes,ut=G?G.createPolicy("lit-html",{createHTML:i=>i}):void 0,it="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+A,It=`<${rt}>`,S=document,H=()=>S.createComment(""),M=i=>i===null||typeof i!="object"&&typeof i!="function",gt=Array.isArray,vt=i=>gt(i)||typeof i?.[Symbol.iterator]=="function",st=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,_t=/>/g,y=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,At=/"/g,yt=/^(?:script|style|textarea|title)$/i,Et=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),St=Et(1),Qt=Et(2),u=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),mt=new WeakMap,E=S.createTreeWalker(S,129);function bt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}var Ct=(i,t)=>{let e=i.length-1,s=[],r,o=t===2?"<svg>":"",n=U;for(let p=0;p<e;p++){let h=i[p],c,d,a=-1,_=0;for(;_<h.length&&(n.lastIndex=_,d=n.exec(h),d!==null);)_=n.lastIndex,n===U?d[1]==="!--"?n=$t:d[1]!==void 0?n=_t:d[2]!==void 0?(yt.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=r??U,a=-1):d[1]===void 0?a=-2:(a=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?y:d[3]==='"'?At:ft):n===At||n===ft?n=y:n===$t||n===_t?n=U:(n=y,r=void 0);let g=n===y&&i[p+1].startsWith("/>")?" ":"";o+=n===U?h+It:a>=0?(s.push(c),h.slice(0,a)+it+h.slice(a)+A+g):h+A+(a===-2?p:g)}return[bt(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),s]},O=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0,p=t.length-1,h=this.parts,[c,d]=Ct(t,e);if(this.el=i.createElement(c,s),E.currentNode=this.el.content,e===2){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=E.nextNode())!==null&&h.length<p;){if(r.nodeType===1){if(r.hasAttributes())for(let a of r.getAttributeNames())if(a.endsWith(it)){let _=d[n++],g=r.getAttribute(a).split(A),D=/([.?@])?(.*)/.exec(_);h.push({type:1,index:o,name:D[2],strings:g,ctor:D[1]==="."?W:D[1]==="?"?q:D[1]==="@"?K:C}),r.removeAttribute(a)}else a.startsWith(A)&&(h.push({type:6,index:o}),r.removeAttribute(a));if(yt.test(r.tagName)){let a=r.textContent.split(A),_=a.length-1;if(_>0){r.textContent=G?G.emptyScript:"";for(let g=0;g<_;g++)r.append(a[g],H()),E.nextNode(),h.push({type:2,index:++o});r.append(a[_],H())}}}else if(r.nodeType===8)if(r.data===rt)h.push({type:2,index:o});else{let a=-1;for(;(a=r.data.indexOf(A,a+1))!==-1;)h.push({type:7,index:o}),a+=A.length-1}o++}}static createElement(t,e){let s=S.createElement("template");return s.innerHTML=t,s}};function b(i,t,e=i,s){if(t===u)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,o=M(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=b(i,r._$AS(i,t.values),r,s)),t}var j=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??S).importNode(e,!0);E.currentNode=r;let o=E.nextNode(),n=0,p=0,h=s[0];for(;h!==void 0;){if(n===h.index){let c;h.type===2?c=new x(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new Y(o,this,t)),this._$AV.push(c),h=s[++p]}n!==h?.index&&(o=E.nextNode(),n++)}return E.currentNode=S,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},x=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),M(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==u&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==l&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(bt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let o=new j(r,this),n=o.u(this.options);o.p(e),this.$(n),this._$AH=o}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new O(t)),e}T(t){gt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new i(this.k(H()),this.k(H()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(t,e=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=b(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==u,n&&(this._$AH=t);else{let p=t,h,c;for(t=o[0],h=0;h<o.length-1;h++)c=b(this,p[s+h],e,h),c===u&&(c=this._$AH[h]),n||(n=!M(c)||c!==this._$AH[h]),c===l?t=l:t!==l&&(t+=(c??"")+o[h+1]),this._$AH[h]=c}n&&!r&&this.O(t)}O(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},W=class extends C{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===l?void 0:t}},q=class extends C{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}},K=class extends C{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??l)===u)return;let s=this._$AH,r=t===l&&s!==l||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==l&&(s===l||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Y=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}},Tt={j:it,P:A,A:rt,C:1,M:Ct,L:j,R:vt,V:b,D:x,I:C,H:q,N:K,U:W,B:Y},zt=N.litHtmlPolyfillSupport;zt?.(O,x),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.1.0");var xt=(i,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let o=e?.renderBefore??null;s._$litPart$=r=new x(t.insertBefore(H(),o),o,void 0,e??{})}return r._$AI(i),r};var m=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return u}};m._$litElement$=!0,m["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:m});var Vt=globalThis.litElementPolyfillSupport;Vt?.({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");var{D:de}=Tt;var Z=i=>i.strings===void 0;var Gt={},wt=(i,t=Gt)=>i._$AH=t;var $={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},L=i=>(...t)=>({_$litDirective$:i,values:t}),T=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var B=(i,t)=>{let e=i._$AN;if(e===void 0)return!1;for(let s of e)s._$AO?.(t,!1),B(s,t);return!0},J=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Pt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),qt(t)}};function jt(i){this._$AN!==void 0?(J(this),this._$AM=i,Pt(this)):this._$AM=i}function Wt(i,t=!1,e=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)B(s[o],!1),J(s[o]);else s!=null&&(B(s,!1),J(s));else B(this,i)}var qt=i=>{i.type==$.CHILD&&(i._$AP??(i._$AP=Wt),i._$AQ??(i._$AQ=jt))},Q=class extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Pt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(B(this,t),J(this))}setValue(t){if(Z(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var ot=new WeakMap,Rt=L(class extends Q{render(i){return l}update(i,[t]){let e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=i.options?.host,this.ot(this.lt=i.element)),l}ot(i){if(typeof this.G=="function"){let t=this.ct??globalThis,e=ot.get(t);e===void 0&&(e=new WeakMap,ot.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){return typeof this.G=="function"?ot.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Ut=L(class extends T{constructor(i){if(super(i),i.type!==$.PROPERTY&&i.type!==$.ATTRIBUTE&&i.type!==$.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Z(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===u||t===l)return t;let e=i.element,s=i.name;if(i.type===$.PROPERTY){if(t===e[s])return u}else if(i.type===$.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(s))return u}else if(i.type===$.ATTRIBUTE&&e.getAttribute(s)===t+"")return u;return wt(i),t}});var w=class extends nt(m){static get properties(){return{...super.properties}}constructor(){super()}emit(t,e={}){if(t instanceof Event)return this.dispatchEvent(t),t;e||(e={}),e.bubbles==null&&(e.bubbles=!0),e.composed==null&&(e.composed=!0);let s=new CustomEvent(t,e);return this.dispatchEvent(s),s}render(){return St`
      <textarea
        part="form-control"
        ${Rt(this.formControlChanged)}
        .defaultValue=${this.defaultValue}
        .value=${Ut(this.value)}
        rows=${this.rows}
        cols=${this.cols}
        maxlength=${this.maxLength}
        minlength=${this.minLength}
        dirname=${this.dirName}
        placeholder=${this.placeholder}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        wrap=${this.wrap}
        autocomplete=${this.autocomplete}
        @input=${t=>{this.value=t.currentTarget.value,this.emit("input")}}
        @change=${t=>{this.value=t.currentTarget.value,this.emit("change")}}
        @keydown=${t=>{this.value=t.currentTarget.value,this.emit("keydown")}}
      ></textarea>
    `}focus(t){if(this.formControl){this.formControl.focus(t);return}super.focus(t)}formControlChanged(t){if(!t){this.formControl=null;return}this.formControl=t}};k(w,"shadowRootOptions",{...m.shadowRootOptions,delegatesFocus:!0}),k(w,"validators",[ht]),k(w,"styles",X`
    :host {
      display: inline-block;
    }
  `);export{w as a};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-NQP5TKGO.js.map
