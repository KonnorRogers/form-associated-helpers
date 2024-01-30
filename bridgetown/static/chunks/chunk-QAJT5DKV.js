import{a as d,b as h,c as l}from"/form-associated-helpers/bridgetown/static/chunks/chunk-TEBU7AIK.js";import{e as a}from"/form-associated-helpers/bridgetown/static/chunks/chunk-26IRHIRD.js";var u=h(class extends l{constructor(e){var i;if(super(e),e.type!==d.ATTRIBUTE||e.name!=="class"||((i=e.strings)===null||i===void 0?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(i=>e[i]).join(" ")+" "}update(e,[i]){var s,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in i)i[t]&&!(!((s=this.nt)===null||s===void 0)&&s.has(t))&&this.it.add(t);return this.render(i)}let n=e.element.classList;this.it.forEach(t=>{t in i||(n.remove(t),this.it.delete(t))});for(let t in i){let o=!!i[t];o===this.it.has(t)||!((r=this.nt)===null||r===void 0)&&r.has(t)||(o?(n.add(t),this.it.add(t)):(n.remove(t),this.it.delete(t)))}return a}});export{u as a};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-QAJT5DKV.js.map
