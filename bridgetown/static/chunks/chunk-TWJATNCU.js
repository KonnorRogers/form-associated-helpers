var r={observedAttributes:["maxlength"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},a=t.value??"";if(typeof a!="string")return e;let s=Number(t.maxLength||t.getAttribute("maxlength"));return s&&s>a.length&&(e.message=`Please use less than or equal to ${s} characters. You are currently using ${a.length} characters.`,e.isValid=!1,e.invalidKeys.push("tooLong")),e}};export{r as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-TWJATNCU.js.map