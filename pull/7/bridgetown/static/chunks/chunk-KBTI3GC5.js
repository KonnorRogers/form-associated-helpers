var d=(a={})=>{a.validateElement||(a.validateElement=e=>!!e.value);let t=a.validateElement,s={observedAttributes:["required"],message:Object.assign(document.createElement("input"),{required:!0}).validationMessage,checkValidity(e){let i={message:"",isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute("required"))&&(t(e)||(i.message=(typeof s.message=="function"?s.message(e):s.message)||"",i.isValid=!1,i.invalidKeys.push("valueMissing"))),i}};return s};export{d as a};
//# sourceMappingURL=/form-associated-helpers/pull/7/bridgetown/static/chunks/chunk-KBTI3GC5.js.map
