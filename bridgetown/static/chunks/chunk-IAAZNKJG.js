import{b,c as A,d as f,e as H,f as I,g as C}from"/form-associated-helpers/bridgetown/static/chunks/chunk-CHH53GTP.js";import{a as _,b as $,c as m}from"/form-associated-helpers/bridgetown/static/chunks/chunk-TEBU7AIK.js";import{e as T,f as P}from"/form-associated-helpers/bridgetown/static/chunks/chunk-26IRHIRD.js";var y=(t,e)=>{var s,i;let r=t._$AN;if(r===void 0)return!1;for(let o of r)(i=(s=o)._$AO)===null||i===void 0||i.call(s,e,!1),y(o,e);return!0},x=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},V=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),O(e)}};function E(t){this._$AN!==void 0?(x(this),this._$AM=t,V(this)):this._$AM=t}function L(t,e=!1,s=0){let i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)y(i[o],!1),x(i[o]);else i!=null&&(y(i,!1),x(i));else y(this,t)}var O=t=>{var e,s,i,r;t.type==_.CHILD&&((e=(i=t)._$AP)!==null&&e!==void 0||(i._$AP=L),(s=(r=t)._$AQ)!==null&&s!==void 0||(r._$AQ=E))},G=class extends m{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),V(this),this.isConnected=e._$AU}_$AO(e,s=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),s&&(y(this,e),x(this))}setValue(e){if(b(this._$Ct))this._$Ct._$AI(e,this);else{let s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};var B=()=>new D,D=class{},k=new WeakMap,F=$(class extends G{render(t){return P}update(t,[e]){var s;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(s=t.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=t.element)),P}ot(t){var e;if(typeof this.G=="function"){let s=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=k.get(s);i===void 0&&(i=new WeakMap,k.set(s,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return typeof this.G=="function"?(e=k.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var z=(t,e,s)=>{let i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},st=$(class extends m{constructor(t){if(super(t),t.type!==_.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);let r=[],o=[],a=0;for(let c of t)r[a]=i?i(c,a):a,o[a]=s(c,a),a++;return{values:o,keys:r}}render(t,e,s){return this.ct(t,e,s).values}update(t,[e,s,i]){var r;let o=I(t),{values:a,keys:c}=this.ct(e,s,i);if(!Array.isArray(o))return this.ut=c,a;let p=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],u=[],g,M,n=0,h=o.length-1,l=0,d=a.length-1;for(;n<=h&&l<=d;)if(o[n]===null)n++;else if(o[h]===null)h--;else if(p[n]===c[l])u[l]=f(o[n],a[l]),n++,l++;else if(p[h]===c[d])u[d]=f(o[h],a[d]),h--,d--;else if(p[n]===c[d])u[d]=f(o[n],a[d]),A(t,u[d+1],o[n]),n++,d--;else if(p[h]===c[l])u[l]=f(o[h],a[l]),A(t,o[n],o[h]),h--,l++;else if(g===void 0&&(g=z(c,l,d),M=z(p,n,h)),g.has(p[n]))if(g.has(p[h])){let v=M.get(c[l]),w=v!==void 0?o[v]:null;if(w===null){let N=A(t,o[n]);f(N,a[l]),u[l]=N}else u[l]=f(w,a[l]),A(t,o[n],w),o[v]=null;l++}else C(o[h]),h--;else C(o[n]),n++;for(;l<=d;){let v=A(t,u[d+1]);f(v,a[l]),u[l++]=v}for(;n<=h;){let v=o[n++];v!==null&&C(v)}return this.ut=c,H(t,u),T}});export{B as a,F as b,st as c};
/*! Bundled license information:

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

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-IAAZNKJG.js.map
