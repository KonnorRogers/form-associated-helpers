var d=new Set,C=new MutationObserver(f),l=new Map,g=document.documentElement.dir||"ltr",m=document.documentElement.lang||navigator.language,s;C.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function i(...o){o.map(e=>{let t=e.$code.toLowerCase();l.has(t)?l.set(t,Object.assign(Object.assign({},l.get(t)),e)):l.set(t,e),s||(s=e)}),f()}function f(){g=document.documentElement.dir||"ltr",m=document.documentElement.lang||navigator.language,[...d.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}var c=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){d.add(this.host)}hostDisconnected(){d.delete(this.host)}dir(){return`${this.host.dir||g}`.toLowerCase()}lang(){return`${this.host.lang||m}`.toLowerCase()}getTranslationData(e){var t,n;let r=new Intl.Locale(e.replace(/_/g,"-")),a=r?.language.toLowerCase(),u=(n=(t=r?.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&n!==void 0?n:"",v=l.get(`${a}-${u}`),w=l.get(a);return{locale:r,language:a,region:u,primary:v,secondary:w}}exists(e,t){var n;let{primary:r,secondary:a}=this.getTranslationData((n=t.lang)!==null&&n!==void 0?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||a&&a[e]||t.includeFallback&&s&&s[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),a;if(n&&n[e])a=n[e];else if(r&&r[e])a=r[e];else if(s&&s[e])a=s[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}};var p={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,e)=>`Go to slide ${o} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};i(p);var h=p;var x=class extends c{};i(h);export{x as a};
//# sourceMappingURL=/form-associated-helpers/pull/3/bridgetown/static/chunks/chunk-NFMQPPAT.js.map
