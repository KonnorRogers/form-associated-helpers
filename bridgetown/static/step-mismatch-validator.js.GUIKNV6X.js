import"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";function c(i,t,s){return(t-i)%s===0}function l(i,t,s){let e=t+(t-i)%s,n=e-s;return{high:e,low:n}}function u(i){try{return Number(i)}catch{return null}}var d=()=>{let i={observedAttributes:["min","step"],message(t){let s=u(t.value),e=u(t.step??t.getAttribute("step"));return Object.assign(document.createElement("input"),{type:"number",value:s,step:e}).validationMessage},checkValidity(t){let s={message:"",isValid:!0,invalidKeys:[]},e=u(t.min??t.getAttribute("min")),n=u(t.value),a=u(t.step??t.getAttribute("step"));if(e==null||n==null||a==null||isNaN(e)||isNaN(n)||isNaN(a)||c(e,n,a))return s;let{low:r,high:o}=l(e,n,a);return s.message=(typeof i.message=="function"?i.message(t,{low:r,high:o}):i.message)||"",s.isValid=!1,s.invalidKeys.push("stepMismatch"),s}};return i};export{d as StepMismatchValidator};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/step-mismatch-validator.js.GUIKNV6X.js.map