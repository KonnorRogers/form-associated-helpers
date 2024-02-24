import{a as u}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ZL6FUDOL.js";import{a as h}from"/form-associated-helpers/bridgetown/static/chunks/chunk-PPFFNU7C.js";import{d}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";function r(e){if(e.disabled||e.getAttribute("disabled")){e.setValidity({});return}let l=e.allValidators;if(!l){e.setValidity({});return}let t={},a=e.formControl||void 0,i="";for(let s of l){let{isValid:n,message:c,invalidKeys:o}=s.checkValidity(e);n||(i||(i=c),o?.length>=0&&o.forEach(v=>t[v]=!0))}e.setValidity(t,i,a)}function V(e){return class extends h(e){constructor(...t){super(...t);d(this,"handleInvalid",t=>{t.target===this&&(this.disabled===!0||this.hasAttribute("disabled")||(this.valueHasChanged=!0,this.hasInteracted=!0,f(this)))});d(this,"handleInteraction",t=>{this.disabled===!0||this.hasAttribute("disabled")||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),r(this))});this.role=null,this.value="",this.previousValue=this.value,this.defaultValue="",this.name="",this.type=this.localName||"",this.disabled=!1,this.required=!1,this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid)}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let a of this.validators)if(a.observedAttributes)for(let i of a.observedAttributes)t.add(i);return[...t]}static get validators(){return[u]}addCustomState(t){try{this.internals.states.add(t)}catch{}finally{this.setAttribute(`data-${t}`,"")}}deleteCustomState(t){try{this.internals.states.delete(t)}catch{}finally{this.removeAttribute(`data-${t}`)}}toggleCustomState(t,a){if(a===!0){this.addCustomState(t);return}if(a===!1){this.deleteCustomState(t);return}this.toggleCustomState(t,!this.hasCustomState(t))}hasCustomState(t){try{return this.internals.states.has(t)}catch{}finally{return this.hasAttribute(`data-${t}`)}}get allValidators(){let t=this.constructor.validators||[],a=this.validators||[];return[...t,...a]}get willShowValidationMessage(){return this.disabled!==!0&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(t){if(t){this.setValidity({customError:!0},t);return}this.setValidity({})}attributeChangedCallback(t,a,i){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(t,a,i),i!==a&&(t==="role"&&(this.internals.role=i||null),t==="value"&&(!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue),this.setFormValue(this.value,this.value)))}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,r(this),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(t){this.disabled=t,r(this)}formStateRestoreCallback(t,a){this.value=t,this.formControl&&(this.formControl.value=t)}setValidity(...t){let a=t[0],i=t[1],s=t[2];s||(s=this.validationTarget),this.internals.setValidity(a,i,s),f(this)}reportValidity(){return this.internals.reportValidity()}checkValidity(){return this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...t){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...t),r(this)}get form(){return this.internals.form}}}function f(e){if(e.disabled||e.hasAttribute("disabled")){e.deleteCustomState("invalid"),e.deleteCustomState("user-invalid"),e.deleteCustomState("valid"),e.deleteCustomState("user-valid");return}e.validity.valid?(e.deleteCustomState("invalid"),e.deleteCustomState("user-invalid"),e.addCustomState("valid"),e.toggleCustomState("user-valid",e.hasInteracted&&e.valueHasChanged)):(e.deleteCustomState("valid"),e.deleteCustomState("user-valid"),e.addCustomState("invalid"),e.toggleCustomState("user-invalid",e.hasInteracted&&e.valueHasChanged))}export{V as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-IWXUVUN6.js.map
