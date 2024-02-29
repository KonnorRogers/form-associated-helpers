import{a as o}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ZL6FUDOL.js";import{a as h}from"/form-associated-helpers/bridgetown/static/chunks/chunk-PPFFNU7C.js";import{d}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";function s(i){if(i.disabled||i.getAttribute("disabled")){i.setValidity({});return}let l=i.allValidators;if(!l){i.setValidity({});return}let t={customError:i.validity.customError},a=i.formControl||void 0,e="";for(let r of l){let{isValid:n,message:v,invalidKeys:u}=r.checkValidity(i);n||(e||(e=v),u?.length>=0&&u.forEach(c=>t[c]=!0))}e||(e=i.validationMessage),i.setValidity(t,e,a)}function V(i){return class extends h(i){constructor(...t){super(...t);d(this,"handleInvalid",t=>{t.target===this&&(this.disabled===!0||this.hasAttribute("disabled")||(this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.hasInteracted=!0,f(this)))});d(this,"handleInteraction",t=>{this.disabled===!0||this.hasAttribute("disabled")||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),s(this))});this.role=null,this.value="",this.previousValue=this.value,this.defaultValue="",this.name="",this.type=this.localName||"",this.disabled=!1,this.required=!1,this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid)}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let a of this.validators)if(a.observedAttributes)for(let e of a.observedAttributes)t.add(e);return[...t]}static get validators(){return[o]}addCustomState(t){try{this.internals.states.add(t)}catch{}finally{this.setAttribute(`data-${t}`,"")}}deleteCustomState(t){try{this.internals.states.delete(t)}catch{}finally{this.removeAttribute(`data-${t}`)}}toggleCustomState(t,a){if(a===!0){this.addCustomState(t);return}if(a===!1){this.deleteCustomState(t);return}this.toggleCustomState(t,!this.hasCustomState(t))}hasCustomState(t){try{return this.internals.states.has(t)}catch{}finally{return this.hasAttribute(`data-${t}`)}}get allValidators(){let t=this.constructor.validators||[],a=this.validators||[];return[...t,...a]}get willShowValidationMessage(){return this.disabled!==!0&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(t){if(this.setValidity({}),t){this.setValidity({customError:!0},t);return}}attributeChangedCallback(t,a,e){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(t,a,e),e!==a&&(t==="role"&&(this.internals.role=e||null),t==="value"&&(this.defaultValue=this.getAttribute("value")||"",!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue,this.setFormValue(this.value,this.value))),s(this))}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.setValidity({}),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,s(this),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(t){this.disabled=t,this.setValidity({}),s(this)}formStateRestoreCallback(t,a){this.value=t,this.setValidity({}),this.formControl&&(this.formControl.value=t)}setValidity(...t){let a=t[0],e=t[1],r=t[2];r||(r=this.validationTarget),this.internals.setValidity(a,e,r),f(this)}reportValidity(){return s(this),this.internals.reportValidity()}checkValidity(){return s(this),this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...t){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...t),s(this)}get form(){return this.internals.form}set form(t){this.setAttribute("form",t)}}}function f(i){if(i.disabled||i.hasAttribute("disabled")){i.deleteCustomState("invalid"),i.deleteCustomState("user-invalid"),i.deleteCustomState("valid"),i.deleteCustomState("user-valid");return}i.validity.valid?(i.deleteCustomState("invalid"),i.deleteCustomState("user-invalid"),i.addCustomState("valid"),i.toggleCustomState("user-valid",i.hasInteracted&&i.valueHasChanged)):(i.deleteCustomState("valid"),i.deleteCustomState("user-valid"),i.addCustomState("invalid"),i.toggleCustomState("user-invalid",i.hasInteracted&&i.valueHasChanged))}export{V as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-WT65LY6C.js.map
