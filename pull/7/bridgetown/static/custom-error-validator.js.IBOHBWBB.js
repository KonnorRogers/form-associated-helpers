import"/form-associated-helpers/pull/7/bridgetown/static/chunks/chunk-35BCUYCN.js";var o=()=>{let s={observedAttributes:["custom-error"],fallbackMessage:"An error occurred",message(a){let r=a.customError??a.getAttribute("custom-error");return(!r||r===!0)&&(r=typeof s.fallbackMessage=="function"?s.fallbackMessage(a):s.fallbackMessage),r},checkValidity(a){let r={message:"",isValid:!0,invalidKeys:[]};if(a.customError||a.hasAttribute("custom-error")){r.invalidKeys.push("customError"),r.isValid=!1;let e=()=>typeof s.fallbackMessage=="function"?s.fallbackMessage(a):s.fallbackMessage;return r.message=(typeof s.message=="function"?s.message(a):s.message)||e(),r}return r}};return s};export{o as CustomErrorValidator};
//# sourceMappingURL=/form-associated-helpers/pull/7/bridgetown/static/custom-error-validator.js.IBOHBWBB.js.map
