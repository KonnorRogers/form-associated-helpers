import"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";var u=()=>{let e={observedAttributes:["required"],message:"Please fill out this field",checkValidity(s){let i={message:"",isValid:!0,invalidKeys:[]};if(!(s.required??s.hasAttribute("required")))return i;let r=s.form;return!r||!s.name?(s.value||(i.message=(typeof e.message=="function"?e.message(s):e.message)||"",i.isValid=!1,i.invalidKeys.push("valueMissing")),i):(new FormData(r).get(s.name),i)}};return e};export{u as GroupValueMissingValidator};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/group-value-missing-validator.js.JNC7OQJ2.js.map
