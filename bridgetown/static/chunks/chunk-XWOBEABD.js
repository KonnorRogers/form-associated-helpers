var a={observedAttributes:["minlength"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]},r=e.value??"";if(typeof r!="string")return t;let i=Number(e.minLength||e.getAttribute("minlength"));return i&&i>r.length&&(t.message=`Please use greater than or equal to ${i} characters. You are currently using ${r.length} characters.`,t.isValid=!1,t.invalidKeys.push("tooShort")),t}};export{a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-XWOBEABD.js.map
