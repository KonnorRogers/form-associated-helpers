var i=()=>{let s={observedAttributes:["minlength"],message(t,e,r){return`Please use greater than or equal to ${e} characters. You are currently using ${r} characters.`},checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},r=t.value??"";if(typeof r!="string")return e;let a=Number(t.minLength||t.getAttribute("minlength"));return a&&a>r.length&&(e.message=(typeof s.message=="function"?s.message(t,a,r.length):s.message)||"",e.isValid=!1,e.invalidKeys.push("tooShort")),e}};return s};export{i as a};
//# sourceMappingURL=/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-S22C57CN.js.map
