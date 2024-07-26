import{a as h}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ZIN52IDN.js";import{a as u}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ZFOED5VX.js";import{a as c}from"/form-associated-helpers/bridgetown/static/chunks/chunk-VO45BW25.js";import{d}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";function l(a,i){return a!==void 0?a:i}function g(a){return class extends a{get allValidators(){let i=this.constructor.validators||[],f=this.validators||[];return[...i,...f]}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get validationTarget(){return this.formControl||void 0}get form(){return this.internals.form}get isUserInvalid(){return this.hasInteracted&&!this.validity.valid}get isDisabled(){return!!(this.matches(":disabled")||this.disabled)}}}function V(a){return g(a)}function S(a){var i;return i=class extends u(V(c(a))){static get observedAttributes(){let t=super.observedAttributes,e=new Set(t||[]);for(let s of this.validators)if(s.observedAttributes)for(let r of s.observedAttributes)e.add(r);return[...e]}static get validators(){return[h()]}constructor(...t){super(...t),this.role=l(this.role,this.getAttribute("role")||null),this.name=l(this.name,this.getAttribute("name")||""),this.type=l(this.type,this.getAttribute("type")||this.localName||""),this.disabled=l(this.disabled,this.isDisabled),this.required=l(this.required,this.hasAttribute("required")),this.hasInteracted=l(this.hasInteracted,!1),this.validators=l(this.validators,[]),queueMicrotask(()=>{this.__boundHandleInvalid=this.handleInvalid.bind(this),this.__boundHandleInteraction=this.handleInteraction.bind(this),this.__boundHandleSubmit=this.__handleSubmit.bind(this),this.constructor.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.__boundHandleInteraction)}),this.addEventListener("invalid",this.__boundHandleInvalid),this.__hasCustomError=!1,this.__customErrorMessage=""})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.getRootNode().addEventListener("submit",this.__boundHandleSubmit)}disconnectedCallback(){typeof super.disconnectedCallback=="function"&&super.disconnectedCallback(),this.getRootNode().removeEventListener("submit",this.__boundHandleSubmit)}__handleSubmit(t){let{target:e}=t;e===this.form&&this.submitCallback()}submitCallback(){this.hasInteracted=!0}handleInvalid(t){t.target===this&&(this.isDisabled||(this.hasInteracted=!0,this.updateInteractionState()))}handleInteraction(t){this.isDisabled||(this.matches(":focus-within")||(this.hasInteracted=!0),this.updateValidity())}setCustomValidity(t){if(!t){this.__hasCustomError=!1,this.__customErrorMessage="",this.setValidity({});return}this.__hasCustomError=!0,this.__customErrorMessage=t,this.internals.setValidity({customError:!0},t)}attributeChangedCallback(t,e,s){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(t,e,s),s!==e&&(t==="role"&&(this.internals.role=s||null),t==="disabled"&&(this.disabled=!!s),this.updateValidity())}formResetCallback(){this.resetValidity(),this.updateValidity(),this.setFormValue(this.toFormValue(),this.value)}formDisabledCallback(t){this.disabled=t,this.resetValidity(),this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,"formControl"in this&&this.formControl&&(this.formControl.value=t),e==="restore"&&this.resetValidity(),this.updateValidity()}setValidity(...t){let e=t[0],s=t[1],r=t[2];r||(r=this.validationTarget||void 0),this.internals.setValidity(e,s,r),this.updateInteractionState()}reportValidity(){return this.updateValidity(),this.internals.reportValidity()}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}setFormValue(...t){this.internals.setFormValue(...t),this.updateValidity()}toFormValue(){return this.value}resetValidity(){this.hasInteracted=!1,this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.isDisabled){this.resetValidity();return}let t=this.allValidators;if(!t){this.setValidity({});return}let s={customError:!!this.__hasCustomError},r;"formControl"in this&&this.formControl&&(r=this.formControl||void 0);let n="";for(let m of t){let{isValid:b,message:v,invalidKeys:o}=m.checkValidity(this);b||(n||(n=v),o?.length>=0&&o.forEach(C=>s[C]=!0))}n||(n=this.validationMessage||this.__customErrorMessage),this.setValidity(s,n,r)}updateInteractionState(){if(this.isDisabled){this.addCustomState("disabled"),this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.deleteCustomState("valid"),this.deleteCustomState("user-valid");return}this.deleteCustomState("disabled"),this.validity.valid?(this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.addCustomState("valid"),this.toggleCustomState("user-valid",this.isUserInvalid)):(this.deleteCustomState("valid"),this.deleteCustomState("user-valid"),this.addCustomState("invalid"),this.toggleCustomState("user-invalid",this.isUserInvalid))}},d(i,"assumeInteractionOn",i.constructor.assumeInteractionOn||["focusout","blur"]),i}export{V as a,S as b};
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/chunks/chunk-7P3P3W6P.js.map