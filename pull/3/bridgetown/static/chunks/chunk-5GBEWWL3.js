var l=()=>({checkValidity(r){let e=r.formControl,i={message:"",isValid:!0,invalidKeys:[]};if(!e||e.checkValidity())return i;i.isValid=!1,i.message=e.validationMessage;for(let t in e.validity){if(t==="valid")continue;let a=t;e.validity[a]===!0&&i.invalidKeys.push(a)}return i}});export{l as a};
//# sourceMappingURL=/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-5GBEWWL3.js.map
