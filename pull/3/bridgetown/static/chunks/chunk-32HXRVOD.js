import{a as i}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-AXNQH7TV.js";import{a as n}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-4RHHS3H5.js";import{a as r}from"/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-FB4WJCP3.js";o.formProperties=Object.freeze(Object.assign({autocomplete:{},wrap:{},readOnly:{attribute:"readonly",type:Boolean,reflect:!0},placeholder:{},dirName:{},rows:{type:Number},cols:{type:Number},maxLength:{attribute:"maxlength",type:Number},minLength:{attribute:"minlength",type:Number}},r.formProperties));function o(s){let l=s;return class extends r(l){static get validators(){return[...super.validators,i(),n()]}static get properties(){let t=super.properties;return t?{...o.formProperties,...t}:o.formProperties}constructor(...t){super(...t),this.autocomplete="",this.wrap="",this.value="",this.defaultValue="",this.maxLength=-1,this.minLength=-1,this.readOnly=!1,this.placeholder="",this.required=!1,this.dirName="",this.selectionDirection="forward",this.rows=2,this.cols=20}setSelectionRange(...t){let e=this.formControl;e&&"selectionRange"in e&&e.setSelectionRange(...t)}setRangeText(...t){let e=this.formControl;e&&"setRangeText"in e&&e.setRangeText(...t)}get textLength(){let t=this.formControl;return t&&"textLength"in t?t.textLength:0}get selectionStart(){let t=this.formControl;return t&&"selectionStart"in t?t.selectionStart:0}get selectionEnd(){let t=this.formControl;return t&&"selectionEnd"in t?t.selectionEnd:0}select(){let t=this.formControl;t&&t.select?.()}}}export{o as a};
//# sourceMappingURL=/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-32HXRVOD.js.map
