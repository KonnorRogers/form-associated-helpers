import{a as o}from"/form-associated-helpers/bridgetown/static/chunks/chunk-G7CULCW7.js";import{a as u}from"/form-associated-helpers/bridgetown/static/chunks/chunk-6KWDOTFC.js";import{a as n}from"/form-associated-helpers/bridgetown/static/chunks/chunk-3KIXULAD.js";import{d as h}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";function a(l){return!!(l.matches(":disabled")||l.disabled)}function y(l){return class extends u(n(l)){constructor(...t){super(...t);h(this,"handleInvalid",t=>{t.target===this&&(a(this)||(this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.hasInteracted=!0,this.updateInteractionState()))});h(this,"handleInteraction",t=>{a(this)||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),this.updateValidity())});this.role=this.getAttribute("role")||null,this.value=this.getAttribute("value")||null,this.previousValue=this.value,this.defaultValue=this.getAttribute("value")||null,this.name=this.getAttribute("name")||"",this.type=this.getAttribute("type")||this.localName||"",this.disabled=a(this),this.required=this.hasAttribute("required"),this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid),this.__hasCustomError=!1,this.__customErrorMessage=""}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let i of e.observedAttributes)t.add(i);return[...t]}static get validators(){return[o()]}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}get willShowValidationMessage(){return a(this)&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(t){if(!t){this.__hasCustomError=!1,this.__customErrorMessage="",this.setValidity({});return}this.__hasCustomError=!0,this.__customErrorMessage=t,this.internals.setValidity({customError:!0},t)}attributeChangedCallback(t,e,i){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(t,e,i),i!==e&&(t==="role"&&(this.internals.role=i||null),t==="value"&&(this.defaultValue=i,!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue,this.setFormValue(this.value,this.value))),t==="disabled"&&(this.disabled=!!i),this.updateValidity())}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.resetValidity(),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,this.updateValidity(),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(t){this.disabled=t,this.resetValidity(),this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,this.formControl&&(this.formControl.value=t),this.resetValidity(),this.updateValidity()}setValidity(...t){let e=t[0],i=t[1],r=t[2];r||(r=this.validationTarget),this.internals.setValidity(e,i,r),this.updateInteractionState()}reportValidity(){return this.updateValidity(),this.internals.reportValidity()}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...t){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...t),this.updateValidity()}get form(){return this.internals.form}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(a(this)){this.resetValidity();return}let t=this.allValidators;if(!t){this.setValidity({});return}let i={customError:!!this.__hasCustomError},r=this.formControl||void 0,s="";for(let f of t){let{isValid:c,message:v,invalidKeys:d}=f.checkValidity(this);c||(s||(s=v),d?.length>=0&&d.forEach(m=>i[m]=!0))}s||(s=this.validationMessage||this.__customErrorMessage),this.setValidity(i,s,r)}updateInteractionState(){if(a(this)){this.addCustomState("disabled"),this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.deleteCustomState("valid"),this.deleteCustomState("user-valid");return}this.deleteCustomState("disabled"),this.validity.valid?(this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.addCustomState("valid"),this.toggleCustomState("user-valid",this.hasInteracted&&this.valueHasChanged)):(this.deleteCustomState("valid"),this.deleteCustomState("user-valid"),this.addCustomState("invalid"),this.toggleCustomState("user-invalid",this.hasInteracted&&this.valueHasChanged))}}}export{y as a};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-PBUHMWS2.js.map
