import"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-WQOWVNO2.js";var n=()=>{let t={observedAttributes:["min"],message(e){return Object.assign(document.createElement("input"),{type:"number",min:e.min??Number(e.getAttribute("min")),value:e.value}).validationMessage},checkValidity(e){let i={message:"",isValid:!0,invalidKeys:[]},s=Number(e.min??e.getAttribute("min")),a=Number(e.value);return isNaN(a)||typeof a!="number"||a<s&&(i.message=(typeof t.message=="function"?t.message(e):t.message)||"",i.isValid=!1,i.invalidKeys.push("rangeOverflow")),i}};return t};export{n as RangeUnderflowValidator};
//# sourceMappingURL=/form-associated-helpers/pull/5/bridgetown/static/range-underflow-validator.js.GC57MTVA.js.map
