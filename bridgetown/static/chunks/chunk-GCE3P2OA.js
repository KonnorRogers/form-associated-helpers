var a={observedAttributes:["maxlength"],errorMessage(t,e){return`Please use less than or equal to ${t} characters. You are currently using ${e} characters.`},checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},r=t.value??"";if(typeof r!="string")return e;let s=Number(t.maxLength||t.getAttribute("maxlength"));return s&&s>r.length&&(e.message=this.errorMessage(s,r.length),e.isValid=!1,e.invalidKeys.push("tooLong")),e}};export{a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-GCE3P2OA.js.map
