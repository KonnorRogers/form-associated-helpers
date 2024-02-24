var r={checkValidity(s){let e=s.formControl,i={message:"",isValid:!0,invalidKeys:[]};if(!e||e.checkValidity())return i;i.isValid=!1,i.message=e.validationMessage;for(let t in e.validity){if(t==="valid")continue;let a=t;e.validity[a]===!0&&i.invalidKeys.push(a)}return i}};export{r as a};
//# sourceMappingURL=/form-associated-helpers/pull/1/bridgetown/static/chunks/chunk-ZO36QIUV.js.map
