import{a as n}from"/form-associated-helpers/pull/7/bridgetown/static/chunks/chunk-VNGJN6GX.js";import{a as l}from"/form-associated-helpers/pull/7/bridgetown/static/chunks/chunk-DR4XOYEG.js";import{a as i}from"/form-associated-helpers/pull/7/bridgetown/static/chunks/chunk-LMFAHPXV.js";var u=()=>Object.assign({autocomplete:{},wrap:{},readOnly:{attribute:"readonly",type:Boolean,reflect:!0},placeholder:{},dirName:{},rows:{type:Number},cols:{type:Number},defaultValue:{attribute:"value",reflect:!0},valueHasChanged:{type:Boolean,attribute:!1,state:!0},value:{attribute:!1,state:!0},maxLength:{attribute:"maxlength",type:Number},minLength:{attribute:"minlength",type:Number}},i.formProperties);Object.defineProperty(s,"formProperties",{get(){return u()}});function h(a){return f(a)}function f(a){return class extends a{get textLength(){let e=this.formControl;return e&&"textLength"in e?e.textLength:0}get selectionStart(){let e=this.formControl;return e&&"selectionStart"in e?e.selectionStart:0}get selectionEnd(){let e=this.formControl;return e&&"selectionEnd"in e?e.selectionEnd:0}get isUserInvalid(){return this.hasInteracted&&this.valueHasChanged}}}function s(a){return class extends h(i(a)){static get validators(){return[...super.validators,n(),l()]}static get properties(){let t=super.properties;return t?{...s.formProperties,...t}:s.formProperties}constructor(...t){super(...t),this.autocomplete="",this.wrap="",this.value="",this.defaultValue="",this.valueHasChanged=!1,this.maxLength=-1,this.minLength=-1,this.readOnly=!1,this.placeholder="",this.required=!1,this.dirName="",this.selectionDirection="forward",this.rows=2,this.cols=20}handleInvalid(t){t.target===this&&(this.isDisabled||(this.valueHasChanged=!0,this.hasInteracted=!0,this.updateInteractionState()))}handleInteraction(t){this.isDisabled||(this.matches(":focus-within")||(this.hasInteracted=!0),this.updateValidity())}attributeChangedCallback(t,r,o){t==="value"&&(this.defaultValue=o||"",!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue,this.setFormValue(this.toFormValue(),this.value))),super.attributeChangedCallback(t,r,o)}setSelectionRange(...t){let r=this.formControl;r&&"selectionRange"in r&&r.setSelectionRange?.(...t)}setRangeText(...t){let r=this.formControl;r&&"setRangeText"in r&&r.setRangeText(...t)}select(){let t=this.formControl;t&&t.select?.()}formResetCallback(){this.value=this.defaultValue,this.formControl&&(this.formControl.value=this.value),this.hasInteracted=!1,this.valueHasChanged=!1,super.formResetCallback()}willUpdate(t){t.has("value")&&this.value!==this.defaultValue&&(this.valueHasChanged=!0),t.has("defaultValue")&&!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue,this.setFormValue(this.toFormValue(),this.value)),super.willUpdate(t)}}}export{h as a,s as b};
//# sourceMappingURL=/form-associated-helpers/pull/7/bridgetown/static/chunks/chunk-OVRGTXMY.js.map
