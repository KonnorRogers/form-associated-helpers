import{a as p,b as m,c as g}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-5S3NTMW5.js";import{d as H,e as G,f as N}from"/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-CPCUEDBY.js";var{I:L}=N;var V=t=>t.strings===void 0,S=()=>document.createComment(""),_=(t,i,e)=>{var s;let o=t._$AA.parentNode,l=i===void 0?t._$AB:i._$AA;if(e===void 0){let r=o.insertBefore(S(),l),c=o.insertBefore(S(),l);e=new L(r,c,t,t.options)}else{let r=e._$AB.nextSibling,c=e._$AM,u=c!==t;if(u){let d;(s=e._$AQ)===null||s===void 0||s.call(e,t),e._$AM=t,e._$AP!==void 0&&(d=t._$AU)!==c._$AU&&e._$AP(d)}if(r!==l||u){let d=e._$AA;for(;d!==r;){let A=d.nextSibling;o.insertBefore(d,l),d=A}}}return e},$=(t,i,e=t)=>(t._$AI(i,e),t),E={},k=(t,i=E)=>t._$AH=i,B=t=>t._$AH,C=t=>{var i;(i=t._$AP)===null||i===void 0||i.call(t,!1,!0);let e=t._$AA,s=t._$AB.nextSibling;for(;e!==s;){let o=e.nextSibling;e.remove(),e=o}};var y=(t,i)=>{var e,s;let o=t._$AN;if(o===void 0)return!1;for(let l of o)(s=(e=l)._$AO)===null||s===void 0||s.call(e,i,!1),y(l,i);return!0},x=t=>{let i,e;do{if((i=t._$AM)===void 0)break;e=i._$AN,e.delete(t),t=i}while(e?.size===0)},I=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),j(i)}};function Q(t){this._$AN!==void 0?(x(this),this._$AM=t,I(this)):this._$AM=t}function U(t,i=!1,e=0){let s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(i)if(Array.isArray(s))for(let l=e;l<s.length;l++)y(s[l],!1),x(s[l]);else s!=null&&(y(s,!1),x(s));else y(this,t)}var j=t=>{var i,e,s,o;t.type==p.CHILD&&((i=(s=t)._$AP)!==null&&i!==void 0||(s._$AP=U),(e=(o=t)._$AQ)!==null&&e!==void 0||(o._$AQ=Q))},P=class extends g{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,s){super._$AT(i,e,s),I(this),this.isConnected=i._$AU}_$AO(i,e=!0){var s,o;i!==this.isConnected&&(this.isConnected=i,i?(s=this.reconnected)===null||s===void 0||s.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(y(this,i),x(this))}setValue(i){if(V(this._$Ct))this._$Ct._$AI(i,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Z=()=>new b,b=class{},D=new WeakMap,tt=m(class extends P{render(t){return G}update(t,[i]){var e;let s=i!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=i,this.dt=(e=t.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=t.element)),G}ot(t){var i;if(typeof this.G=="function"){let e=(i=this.dt)!==null&&i!==void 0?i:globalThis,s=D.get(e);s===void 0&&(s=new WeakMap,D.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,i,e;return typeof this.G=="function"?(i=D.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||i===void 0?void 0:i.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var R=(t,i,e)=>{let s=new Map;for(let o=i;o<=e;o++)s.set(t[o],o);return s},at=m(class extends g{constructor(t){if(super(t),t.type!==p.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,i,e){let s;e===void 0?e=i:i!==void 0&&(s=i);let o=[],l=[],r=0;for(let c of t)o[r]=s?s(c,r):r,l[r]=e(c,r),r++;return{values:l,keys:o}}render(t,i,e){return this.ct(t,i,e).values}update(t,[i,e,s]){var o;let l=B(t),{values:r,keys:c}=this.ct(i,e,s);if(!Array.isArray(l))return this.ut=c,r;let u=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],d=[],A,M,n=0,v=l.length-1,a=0,h=r.length-1;for(;n<=v&&a<=h;)if(l[n]===null)n++;else if(l[v]===null)v--;else if(u[n]===c[a])d[a]=$(l[n],r[a]),n++,a++;else if(u[v]===c[h])d[h]=$(l[v],r[h]),v--,h--;else if(u[n]===c[h])d[h]=$(l[n],r[h]),_(t,d[h+1],l[n]),n++,h--;else if(u[v]===c[a])d[a]=$(l[v],r[a]),_(t,l[n],l[v]),v--,a++;else if(A===void 0&&(A=R(c,a,h),M=R(u,n,v)),A.has(u[n]))if(A.has(u[v])){let f=M.get(c[a]),T=f!==void 0?l[f]:null;if(T===null){let w=_(t,l[n]);$(w,r[a]),d[a]=w}else d[a]=$(T,r[a]),_(t,l[n],T),l[f]=null;a++}else C(l[v]),v--;else C(l[n]),n++;for(;a<=h;){let f=_(t,d[h+1]);$(f,r[a]),d[a++]=f}for(;n<=v;){let f=l[n++];f!==null&&C(f)}return this.ut=c,k(t,d),H}});export{V as a,k as b,Z as c,tt as d,at as e};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-RX5B3IFJ.js.map
