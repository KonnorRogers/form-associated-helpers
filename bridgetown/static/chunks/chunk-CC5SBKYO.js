var n=()=>{let r={observedAttributes:["maxlength"],message(t,e,s){return`Please shorten this text to ${e} characters or less. (You are currently using ${s} characters).`},checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},s=t.value??"";if(typeof s!="string")return e;let a=Number(t.maxLength??t.getAttribute("maxlength"));return isNaN(a)||a==null||a<=0||s.length>a&&(e.message=(typeof r.message=="function"?r.message(t,a,s.length):r.message)||"",e.isValid=!1,e.invalidKeys.push("tooLong")),e}};return r};export{n as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-CC5SBKYO.js.map