import"/form-associated-helpers/pull/2/bridgetown/static/chunks/chunk-QEMWCF5H.js";function u(t,i,s){return(i-t)%s===0}function o(t,i,s){let a=i+(i-t)%s,e=a-s;return{high:a,low:e}}var c={observedAttributes:["min","step"],checkValidity(t){let i=Number(t.min??t.getAttribute("min")),s=Number(t.value??t.getAttribute("value")),a=Number(t.step??t.getAttribute("step")),e={message:"",isValid:!0,invalidKeys:[]};if(isNaN(i)||isNaN(s)||isNaN(a)||u(i,s,a))return e;let{low:r,high:n}=o(i,s,a);return e.message=`Please select a valid value. The two nearest valid values are ${r} and ${n}`,e.isValid=!1,e.invalidKeys.push("stepMismatch"),e}};export{c as StepMismatchValidator};
//# sourceMappingURL=/form-associated-helpers/pull/2/bridgetown/static/step-mismatch-validator.js.XIJYTLUQ.js.map
