var n=()=>{let i={observedAttributes:["minlength"],message(t,e,s){return`Please lengthen this text to ${e} characters or more. (You are currently using ${s} characters).`},checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},s=t.value??"";if(typeof s!="string")return e;let r=Number(t.minLength||t.getAttribute("minlength"));return isNaN(r)||r==null||r<=0||s.length<r&&(e.message=(typeof i.message=="function"?i.message(t,r,s.length):i.message)||"",e.isValid=!1,e.invalidKeys.push("tooShort")),e}};return i};export{n as a};
//# sourceMappingURL=/form-associated-helpers/pull/6/bridgetown/static/chunks/chunk-O7VELVJK.js.map
