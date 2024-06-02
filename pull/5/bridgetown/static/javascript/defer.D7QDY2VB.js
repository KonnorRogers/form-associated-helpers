import{a as Ue,b as xe,c as Ae}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-LJIOZX45.js";import{a as Ws,c as Os,d as U}from"/form-associated-helpers/pull/5/bridgetown/static/chunks/chunk-WQOWVNO2.js";var Ds=Ws((Is,ws)=>{(function(){var s=function(t){var e=new s.Builder;return e.pipeline.add(s.trimmer,s.stopWordFilter,s.stemmer),e.searchPipeline.add(s.stemmer),t.call(e,e),e.build()};s.version="2.3.9";s.utils={},s.utils.warn=function(t){return function(e){t.console&&console.warn&&console.warn(e)}}(this),s.utils.asString=function(t){return t==null?"":t.toString()},s.utils.clone=function(t){if(t==null)return t;for(var e=Object.create(null),l=Object.keys(t),o=0;o<l.length;o++){var i=l[o],r=t[i];if(Array.isArray(r)){e[i]=r.slice();continue}if(typeof r=="string"||typeof r=="number"||typeof r=="boolean"){e[i]=r;continue}throw new TypeError("clone is not deep and does not support nested objects")}return e},s.FieldRef=function(t,e,l){this.docRef=t,this.fieldName=e,this._stringValue=l},s.FieldRef.joiner="/",s.FieldRef.fromString=function(t){var e=t.indexOf(s.FieldRef.joiner);if(e===-1)throw"malformed field ref string";var l=t.slice(0,e),o=t.slice(e+1);return new s.FieldRef(o,l,t)},s.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+s.FieldRef.joiner+this.docRef),this._stringValue};s.Set=function(t){if(this.elements=Object.create(null),t){this.length=t.length;for(var e=0;e<this.length;e++)this.elements[t[e]]=!0}else this.length=0},s.Set.complete={intersect:function(t){return t},union:function(){return this},contains:function(){return!0}},s.Set.empty={intersect:function(){return this},union:function(t){return t},contains:function(){return!1}},s.Set.prototype.contains=function(t){return!!this.elements[t]},s.Set.prototype.intersect=function(t){var e,l,o,i=[];if(t===s.Set.complete)return this;if(t===s.Set.empty)return t;this.length<t.length?(e=this,l=t):(e=t,l=this),o=Object.keys(e.elements);for(var r=0;r<o.length;r++){var a=o[r];a in l.elements&&i.push(a)}return new s.Set(i)},s.Set.prototype.union=function(t){return t===s.Set.complete?s.Set.complete:t===s.Set.empty?this:new s.Set(Object.keys(this.elements).concat(Object.keys(t.elements)))},s.idf=function(t,e){var l=0;for(var o in t)o!="_index"&&(l+=Object.keys(t[o]).length);var i=(e-l+.5)/(l+.5);return Math.log(1+Math.abs(i))},s.Token=function(t,e){this.str=t||"",this.metadata=e||{}},s.Token.prototype.toString=function(){return this.str},s.Token.prototype.update=function(t){return this.str=t(this.str,this.metadata),this},s.Token.prototype.clone=function(t){return t=t||function(e){return e},new s.Token(t(this.str,this.metadata),this.metadata)};s.tokenizer=function(t,e){if(t==null||t==null)return[];if(Array.isArray(t))return t.map(function(h){return new s.Token(s.utils.asString(h).toLowerCase(),s.utils.clone(e))});for(var l=t.toString().toLowerCase(),o=l.length,i=[],r=0,a=0;r<=o;r++){var c=l.charAt(r),n=r-a;if(c.match(s.tokenizer.separator)||r==o){if(n>0){var b=s.utils.clone(e)||{};b.position=[a,n],b.index=i.length,i.push(new s.Token(l.slice(a,r),b))}a=r+1}}return i},s.tokenizer.separator=/[\s\-]+/;s.Pipeline=function(){this._stack=[]},s.Pipeline.registeredFunctions=Object.create(null),s.Pipeline.registerFunction=function(t,e){e in this.registeredFunctions&&s.utils.warn("Overwriting existing registered function: "+e),t.label=e,s.Pipeline.registeredFunctions[t.label]=t},s.Pipeline.warnIfFunctionNotRegistered=function(t){var e=t.label&&t.label in this.registeredFunctions;e||s.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,t)},s.Pipeline.load=function(t){var e=new s.Pipeline;return t.forEach(function(l){var o=s.Pipeline.registeredFunctions[l];if(o)e.add(o);else throw new Error("Cannot load unregistered function: "+l)}),e},s.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(e){s.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},s.Pipeline.prototype.after=function(t,e){s.Pipeline.warnIfFunctionNotRegistered(e);var l=this._stack.indexOf(t);if(l==-1)throw new Error("Cannot find existingFn");l=l+1,this._stack.splice(l,0,e)},s.Pipeline.prototype.before=function(t,e){s.Pipeline.warnIfFunctionNotRegistered(e);var l=this._stack.indexOf(t);if(l==-1)throw new Error("Cannot find existingFn");this._stack.splice(l,0,e)},s.Pipeline.prototype.remove=function(t){var e=this._stack.indexOf(t);e!=-1&&this._stack.splice(e,1)},s.Pipeline.prototype.run=function(t){for(var e=this._stack.length,l=0;l<e;l++){for(var o=this._stack[l],i=[],r=0;r<t.length;r++){var a=o(t[r],r,t);if(!(a==null||a===""))if(Array.isArray(a))for(var c=0;c<a.length;c++)i.push(a[c]);else i.push(a)}t=i}return t},s.Pipeline.prototype.runString=function(t,e){var l=new s.Token(t,e);return this.run([l]).map(function(o){return o.toString()})},s.Pipeline.prototype.reset=function(){this._stack=[]},s.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return s.Pipeline.warnIfFunctionNotRegistered(t),t.label})};s.Vector=function(t){this._magnitude=0,this.elements=t||[]},s.Vector.prototype.positionForIndex=function(t){if(this.elements.length==0)return 0;for(var e=0,l=this.elements.length/2,o=l-e,i=Math.floor(o/2),r=this.elements[i*2];o>1&&(r<t&&(e=i),r>t&&(l=i),r!=t);)o=l-e,i=e+Math.floor(o/2),r=this.elements[i*2];if(r==t||r>t)return i*2;if(r<t)return(i+1)*2},s.Vector.prototype.insert=function(t,e){this.upsert(t,e,function(){throw"duplicate index"})},s.Vector.prototype.upsert=function(t,e,l){this._magnitude=0;var o=this.positionForIndex(t);this.elements[o]==t?this.elements[o+1]=l(this.elements[o+1],e):this.elements.splice(o,0,t,e)},s.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t=0,e=this.elements.length,l=1;l<e;l+=2){var o=this.elements[l];t+=o*o}return this._magnitude=Math.sqrt(t)},s.Vector.prototype.dot=function(t){for(var e=0,l=this.elements,o=t.elements,i=l.length,r=o.length,a=0,c=0,n=0,b=0;n<i&&b<r;)a=l[n],c=o[b],a<c?n+=2:a>c?b+=2:a==c&&(e+=l[n+1]*o[b+1],n+=2,b+=2);return e},s.Vector.prototype.similarity=function(t){return this.dot(t)/this.magnitude()||0},s.Vector.prototype.toArray=function(){for(var t=new Array(this.elements.length/2),e=1,l=0;e<this.elements.length;e+=2,l++)t[l]=this.elements[e];return t},s.Vector.prototype.toJSON=function(){return this.elements};s.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},e={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},l="[^aeiou]",o="[aeiouy]",i=l+"[^aeiouy]*",r=o+"[aeiou]*",a="^("+i+")?"+r+i,c="^("+i+")?"+r+i+"("+r+")?$",n="^("+i+")?"+r+i+r+i,b="^("+i+")?"+o,h=new RegExp(a),u=new RegExp(n),L=new RegExp(c),g=new RegExp(b),Q=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,C=/^(.+?)eed$/,B=/^(.+?)(ed|ing)$/,F=/.$/,G=/(at|bl|iz)$/,ot=new RegExp("([^aeiouylsz])\\1$"),At=new RegExp("^"+i+o+"[^aeiouwxy]$"),dt=/^(.+?[^aeiou])y$/,ft=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,Bt=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,gt=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,Ft=/^(.+?)(s|t)(ion)$/,K=/^(.+?)e$/,zt=/ll$/,Wt=new RegExp("^"+i+o+"[^aeiouwxy]$"),Lt=function(d){var N,_,O,p,w,$,rt;if(d.length<3)return d;if(O=d.substr(0,1),O=="y"&&(d=O.toUpperCase()+d.substr(1)),p=Q,w=y,p.test(d)?d=d.replace(p,"$1$2"):w.test(d)&&(d=d.replace(w,"$1$2")),p=C,w=B,p.test(d)){var D=p.exec(d);p=h,p.test(D[1])&&(p=F,d=d.replace(p,""))}else if(w.test(d)){var D=w.exec(d);N=D[1],w=g,w.test(N)&&(d=N,w=G,$=ot,rt=At,w.test(d)?d=d+"e":$.test(d)?(p=F,d=d.replace(p,"")):rt.test(d)&&(d=d+"e"))}if(p=dt,p.test(d)){var D=p.exec(d);N=D[1],d=N+"i"}if(p=ft,p.test(d)){var D=p.exec(d);N=D[1],_=D[2],p=h,p.test(N)&&(d=N+t[_])}if(p=Bt,p.test(d)){var D=p.exec(d);N=D[1],_=D[2],p=h,p.test(N)&&(d=N+e[_])}if(p=gt,w=Ft,p.test(d)){var D=p.exec(d);N=D[1],p=u,p.test(N)&&(d=N)}else if(w.test(d)){var D=w.exec(d);N=D[1]+D[2],w=u,w.test(N)&&(d=N)}if(p=K,p.test(d)){var D=p.exec(d);N=D[1],p=u,w=L,$=Wt,(p.test(N)||w.test(N)&&!$.test(N))&&(d=N)}return p=zt,w=u,p.test(d)&&w.test(d)&&(p=F,d=d.replace(p,"")),O=="y"&&(d=O.toLowerCase()+d.substr(1)),d};return function(it){return it.update(Lt)}}(),s.Pipeline.registerFunction(s.stemmer,"stemmer");s.generateStopWordFilter=function(t){var e=t.reduce(function(l,o){return l[o]=o,l},{});return function(l){if(l&&e[l.toString()]!==l.toString())return l}},s.stopWordFilter=s.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),s.Pipeline.registerFunction(s.stopWordFilter,"stopWordFilter");s.trimmer=function(t){return t.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},s.Pipeline.registerFunction(s.trimmer,"trimmer");s.TokenSet=function(){this.final=!1,this.edges={},this.id=s.TokenSet._nextId,s.TokenSet._nextId+=1},s.TokenSet._nextId=1,s.TokenSet.fromArray=function(t){for(var e=new s.TokenSet.Builder,l=0,o=t.length;l<o;l++)e.insert(t[l]);return e.finish(),e.root},s.TokenSet.fromClause=function(t){return"editDistance"in t?s.TokenSet.fromFuzzyString(t.term,t.editDistance):s.TokenSet.fromString(t.term)},s.TokenSet.fromFuzzyString=function(t,e){for(var l=new s.TokenSet,o=[{node:l,editsRemaining:e,str:t}];o.length;){var i=o.pop();if(i.str.length>0){var r=i.str.charAt(0),a;r in i.node.edges?a=i.node.edges[r]:(a=new s.TokenSet,i.node.edges[r]=a),i.str.length==1&&(a.final=!0),o.push({node:a,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(i.editsRemaining!=0){if("*"in i.node.edges)var c=i.node.edges["*"];else{var c=new s.TokenSet;i.node.edges["*"]=c}if(i.str.length==0&&(c.final=!0),o.push({node:c,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&o.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),i.str.length==1&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var n=i.node.edges["*"];else{var n=new s.TokenSet;i.node.edges["*"]=n}i.str.length==1&&(n.final=!0),o.push({node:n,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var b=i.str.charAt(0),h=i.str.charAt(1),u;h in i.node.edges?u=i.node.edges[h]:(u=new s.TokenSet,i.node.edges[h]=u),i.str.length==1&&(u.final=!0),o.push({node:u,editsRemaining:i.editsRemaining-1,str:b+i.str.slice(2)})}}}return l},s.TokenSet.fromString=function(t){for(var e=new s.TokenSet,l=e,o=0,i=t.length;o<i;o++){var r=t[o],a=o==i-1;if(r=="*")e.edges[r]=e,e.final=a;else{var c=new s.TokenSet;c.final=a,e.edges[r]=c,e=c}}return l},s.TokenSet.prototype.toArray=function(){for(var t=[],e=[{prefix:"",node:this}];e.length;){var l=e.pop(),o=Object.keys(l.node.edges),i=o.length;l.node.final&&(l.prefix.charAt(0),t.push(l.prefix));for(var r=0;r<i;r++){var a=o[r];e.push({prefix:l.prefix.concat(a),node:l.node.edges[a]})}}return t},s.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var t=this.final?"1":"0",e=Object.keys(this.edges).sort(),l=e.length,o=0;o<l;o++){var i=e[o],r=this.edges[i];t=t+i+r.id}return t},s.TokenSet.prototype.intersect=function(t){for(var e=new s.TokenSet,l=void 0,o=[{qNode:t,output:e,node:this}];o.length;){l=o.pop();for(var i=Object.keys(l.qNode.edges),r=i.length,a=Object.keys(l.node.edges),c=a.length,n=0;n<r;n++)for(var b=i[n],h=0;h<c;h++){var u=a[h];if(u==b||b=="*"){var L=l.node.edges[u],g=l.qNode.edges[b],Q=L.final&&g.final,y=void 0;u in l.output.edges?(y=l.output.edges[u],y.final=y.final||Q):(y=new s.TokenSet,y.final=Q,l.output.edges[u]=y),o.push({qNode:g,output:y,node:L})}}}return e},s.TokenSet.Builder=function(){this.previousWord="",this.root=new s.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},s.TokenSet.Builder.prototype.insert=function(t){var e,l=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(var o=0;o<t.length&&o<this.previousWord.length&&t[o]==this.previousWord[o];o++)l++;this.minimize(l),this.uncheckedNodes.length==0?e=this.root:e=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var o=l;o<t.length;o++){var i=new s.TokenSet,r=t[o];e.edges[r]=i,this.uncheckedNodes.push({parent:e,char:r,child:i}),e=i}e.final=!0,this.previousWord=t},s.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},s.TokenSet.Builder.prototype.minimize=function(t){for(var e=this.uncheckedNodes.length-1;e>=t;e--){var l=this.uncheckedNodes[e],o=l.child.toString();o in this.minimizedNodes?l.parent.edges[l.char]=this.minimizedNodes[o]:(l.child._str=o,this.minimizedNodes[o]=l.child),this.uncheckedNodes.pop()}};s.Index=function(t){this.invertedIndex=t.invertedIndex,this.fieldVectors=t.fieldVectors,this.tokenSet=t.tokenSet,this.fields=t.fields,this.pipeline=t.pipeline},s.Index.prototype.search=function(t){return this.query(function(e){var l=new s.QueryParser(t,e);l.parse()})},s.Index.prototype.query=function(t){for(var e=new s.Query(this.fields),l=Object.create(null),o=Object.create(null),i=Object.create(null),r=Object.create(null),a=Object.create(null),c=0;c<this.fields.length;c++)o[this.fields[c]]=new s.Vector;t.call(e,e);for(var c=0;c<e.clauses.length;c++){var n=e.clauses[c],b=null,h=s.Set.empty;n.usePipeline?b=this.pipeline.runString(n.term,{fields:n.fields}):b=[n.term];for(var u=0;u<b.length;u++){var L=b[u];n.term=L;var g=s.TokenSet.fromClause(n),Q=this.tokenSet.intersect(g).toArray();if(Q.length===0&&n.presence===s.Query.presence.REQUIRED){for(var y=0;y<n.fields.length;y++){var C=n.fields[y];r[C]=s.Set.empty}break}for(var B=0;B<Q.length;B++)for(var F=Q[B],G=this.invertedIndex[F],ot=G._index,y=0;y<n.fields.length;y++){var C=n.fields[y],At=G[C],dt=Object.keys(At),ft=F+"/"+C,Bt=new s.Set(dt);if(n.presence==s.Query.presence.REQUIRED&&(h=h.union(Bt),r[C]===void 0&&(r[C]=s.Set.complete)),n.presence==s.Query.presence.PROHIBITED){a[C]===void 0&&(a[C]=s.Set.empty),a[C]=a[C].union(Bt);continue}if(o[C].upsert(ot,n.boost,function(Fs,zs){return Fs+zs}),!i[ft]){for(var gt=0;gt<dt.length;gt++){var Ft=dt[gt],K=new s.FieldRef(Ft,C),zt=At[Ft],Wt;(Wt=l[K])===void 0?l[K]=new s.MatchData(F,C,zt):Wt.add(F,C,zt)}i[ft]=!0}}}if(n.presence===s.Query.presence.REQUIRED)for(var y=0;y<n.fields.length;y++){var C=n.fields[y];r[C]=r[C].intersect(h)}}for(var Lt=s.Set.complete,it=s.Set.empty,c=0;c<this.fields.length;c++){var C=this.fields[c];r[C]&&(Lt=Lt.intersect(r[C])),a[C]&&(it=it.union(a[C]))}var d=Object.keys(l),N=[],_=Object.create(null);if(e.isNegated()){d=Object.keys(this.fieldVectors);for(var c=0;c<d.length;c++){var K=d[c],O=s.FieldRef.fromString(K);l[K]=new s.MatchData}}for(var c=0;c<d.length;c++){var O=s.FieldRef.fromString(d[c]),p=O.docRef;if(Lt.contains(p)&&!it.contains(p)){var w=this.fieldVectors[O],$=o[O.fieldName].similarity(w),rt;if((rt=_[p])!==void 0)rt.score+=$,rt.matchData.combine(l[O]);else{var D={ref:p,score:$,matchData:l[O]};_[p]=D,N.push(D)}}}return N.sort(function(fs,Bs){return Bs.score-fs.score})},s.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(l){return[l,this.invertedIndex[l]]},this),e=Object.keys(this.fieldVectors).map(function(l){return[l,this.fieldVectors[l].toJSON()]},this);return{version:s.version,fields:this.fields,fieldVectors:e,invertedIndex:t,pipeline:this.pipeline.toJSON()}},s.Index.load=function(t){var e={},l={},o=t.fieldVectors,i=Object.create(null),r=t.invertedIndex,a=new s.TokenSet.Builder,c=s.Pipeline.load(t.pipeline);t.version!=s.version&&s.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+s.version+"' does not match serialized index '"+t.version+"'");for(var n=0;n<o.length;n++){var b=o[n],h=b[0],u=b[1];l[h]=new s.Vector(u)}for(var n=0;n<r.length;n++){var b=r[n],L=b[0],g=b[1];a.insert(L),i[L]=g}return a.finish(),e.fields=t.fields,e.fieldVectors=l,e.invertedIndex=i,e.tokenSet=a.root,e.pipeline=c,new s.Index(e)};s.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=s.tokenizer,this.pipeline=new s.Pipeline,this.searchPipeline=new s.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},s.Builder.prototype.ref=function(t){this._ref=t},s.Builder.prototype.field=function(t,e){if(/\//.test(t))throw new RangeError("Field '"+t+"' contains illegal character '/'");this._fields[t]=e||{}},s.Builder.prototype.b=function(t){t<0?this._b=0:t>1?this._b=1:this._b=t},s.Builder.prototype.k1=function(t){this._k1=t},s.Builder.prototype.add=function(t,e){var l=t[this._ref],o=Object.keys(this._fields);this._documents[l]=e||{},this.documentCount+=1;for(var i=0;i<o.length;i++){var r=o[i],a=this._fields[r].extractor,c=a?a(t):t[r],n=this.tokenizer(c,{fields:[r]}),b=this.pipeline.run(n),h=new s.FieldRef(l,r),u=Object.create(null);this.fieldTermFrequencies[h]=u,this.fieldLengths[h]=0,this.fieldLengths[h]+=b.length;for(var L=0;L<b.length;L++){var g=b[L];if(u[g]==null&&(u[g]=0),u[g]+=1,this.invertedIndex[g]==null){var Q=Object.create(null);Q._index=this.termIndex,this.termIndex+=1;for(var y=0;y<o.length;y++)Q[o[y]]=Object.create(null);this.invertedIndex[g]=Q}this.invertedIndex[g][r][l]==null&&(this.invertedIndex[g][r][l]=Object.create(null));for(var C=0;C<this.metadataWhitelist.length;C++){var B=this.metadataWhitelist[C],F=g.metadata[B];this.invertedIndex[g][r][l][B]==null&&(this.invertedIndex[g][r][l][B]=[]),this.invertedIndex[g][r][l][B].push(F)}}}},s.Builder.prototype.calculateAverageFieldLengths=function(){for(var t=Object.keys(this.fieldLengths),e=t.length,l={},o={},i=0;i<e;i++){var r=s.FieldRef.fromString(t[i]),a=r.fieldName;o[a]||(o[a]=0),o[a]+=1,l[a]||(l[a]=0),l[a]+=this.fieldLengths[r]}for(var c=Object.keys(this._fields),i=0;i<c.length;i++){var n=c[i];l[n]=l[n]/o[n]}this.averageFieldLength=l},s.Builder.prototype.createFieldVectors=function(){for(var t={},e=Object.keys(this.fieldTermFrequencies),l=e.length,o=Object.create(null),i=0;i<l;i++){for(var r=s.FieldRef.fromString(e[i]),a=r.fieldName,c=this.fieldLengths[r],n=new s.Vector,b=this.fieldTermFrequencies[r],h=Object.keys(b),u=h.length,L=this._fields[a].boost||1,g=this._documents[r.docRef].boost||1,Q=0;Q<u;Q++){var y=h[Q],C=b[y],B=this.invertedIndex[y]._index,F,G,ot;o[y]===void 0?(F=s.idf(this.invertedIndex[y],this.documentCount),o[y]=F):F=o[y],G=F*((this._k1+1)*C)/(this._k1*(1-this._b+this._b*(c/this.averageFieldLength[a]))+C),G*=L,G*=g,ot=Math.round(G*1e3)/1e3,n.insert(B,ot)}t[r]=n}this.fieldVectors=t},s.Builder.prototype.createTokenSet=function(){this.tokenSet=s.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},s.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new s.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},s.Builder.prototype.use=function(t){var e=Array.prototype.slice.call(arguments,1);e.unshift(this),t.apply(this,e)},s.MatchData=function(t,e,l){for(var o=Object.create(null),i=Object.keys(l||{}),r=0;r<i.length;r++){var a=i[r];o[a]=l[a].slice()}this.metadata=Object.create(null),t!==void 0&&(this.metadata[t]=Object.create(null),this.metadata[t][e]=o)},s.MatchData.prototype.combine=function(t){for(var e=Object.keys(t.metadata),l=0;l<e.length;l++){var o=e[l],i=Object.keys(t.metadata[o]);this.metadata[o]==null&&(this.metadata[o]=Object.create(null));for(var r=0;r<i.length;r++){var a=i[r],c=Object.keys(t.metadata[o][a]);this.metadata[o][a]==null&&(this.metadata[o][a]=Object.create(null));for(var n=0;n<c.length;n++){var b=c[n];this.metadata[o][a][b]==null?this.metadata[o][a][b]=t.metadata[o][a][b]:this.metadata[o][a][b]=this.metadata[o][a][b].concat(t.metadata[o][a][b])}}}},s.MatchData.prototype.add=function(t,e,l){if(!(t in this.metadata)){this.metadata[t]=Object.create(null),this.metadata[t][e]=l;return}if(!(e in this.metadata[t])){this.metadata[t][e]=l;return}for(var o=Object.keys(l),i=0;i<o.length;i++){var r=o[i];r in this.metadata[t][e]?this.metadata[t][e][r]=this.metadata[t][e][r].concat(l[r]):this.metadata[t][e][r]=l[r]}},s.Query=function(t){this.clauses=[],this.allFields=t},s.Query.wildcard=new String("*"),s.Query.wildcard.NONE=0,s.Query.wildcard.LEADING=1,s.Query.wildcard.TRAILING=2,s.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},s.Query.prototype.clause=function(t){return"fields"in t||(t.fields=this.allFields),"boost"in t||(t.boost=1),"usePipeline"in t||(t.usePipeline=!0),"wildcard"in t||(t.wildcard=s.Query.wildcard.NONE),t.wildcard&s.Query.wildcard.LEADING&&t.term.charAt(0)!=s.Query.wildcard&&(t.term="*"+t.term),t.wildcard&s.Query.wildcard.TRAILING&&t.term.slice(-1)!=s.Query.wildcard&&(t.term=""+t.term+"*"),"presence"in t||(t.presence=s.Query.presence.OPTIONAL),this.clauses.push(t),this},s.Query.prototype.isNegated=function(){for(var t=0;t<this.clauses.length;t++)if(this.clauses[t].presence!=s.Query.presence.PROHIBITED)return!1;return!0},s.Query.prototype.term=function(t,e){if(Array.isArray(t))return t.forEach(function(o){this.term(o,s.utils.clone(e))},this),this;var l=e||{};return l.term=t.toString(),this.clause(l),this},s.QueryParseError=function(t,e,l){this.name="QueryParseError",this.message=t,this.start=e,this.end=l},s.QueryParseError.prototype=new Error,s.QueryLexer=function(t){this.lexemes=[],this.str=t,this.length=t.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},s.QueryLexer.prototype.run=function(){for(var t=s.QueryLexer.lexText;t;)t=t(this)},s.QueryLexer.prototype.sliceString=function(){for(var t=[],e=this.start,l=this.pos,o=0;o<this.escapeCharPositions.length;o++)l=this.escapeCharPositions[o],t.push(this.str.slice(e,l)),e=l+1;return t.push(this.str.slice(e,this.pos)),this.escapeCharPositions.length=0,t.join("")},s.QueryLexer.prototype.emit=function(t){this.lexemes.push({type:t,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},s.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},s.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return s.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},s.QueryLexer.prototype.width=function(){return this.pos-this.start},s.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},s.QueryLexer.prototype.backup=function(){this.pos-=1},s.QueryLexer.prototype.acceptDigitRun=function(){var t,e;do t=this.next(),e=t.charCodeAt(0);while(e>47&&e<58);t!=s.QueryLexer.EOS&&this.backup()},s.QueryLexer.prototype.more=function(){return this.pos<this.length},s.QueryLexer.EOS="EOS",s.QueryLexer.FIELD="FIELD",s.QueryLexer.TERM="TERM",s.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",s.QueryLexer.BOOST="BOOST",s.QueryLexer.PRESENCE="PRESENCE",s.QueryLexer.lexField=function(t){return t.backup(),t.emit(s.QueryLexer.FIELD),t.ignore(),s.QueryLexer.lexText},s.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(s.QueryLexer.TERM)),t.ignore(),t.more())return s.QueryLexer.lexText},s.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(s.QueryLexer.EDIT_DISTANCE),s.QueryLexer.lexText},s.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(s.QueryLexer.BOOST),s.QueryLexer.lexText},s.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(s.QueryLexer.TERM)},s.QueryLexer.termSeparator=s.tokenizer.separator,s.QueryLexer.lexText=function(t){for(;;){var e=t.next();if(e==s.QueryLexer.EOS)return s.QueryLexer.lexEOS;if(e.charCodeAt(0)==92){t.escapeCharacter();continue}if(e==":")return s.QueryLexer.lexField;if(e=="~")return t.backup(),t.width()>0&&t.emit(s.QueryLexer.TERM),s.QueryLexer.lexEditDistance;if(e=="^")return t.backup(),t.width()>0&&t.emit(s.QueryLexer.TERM),s.QueryLexer.lexBoost;if(e=="+"&&t.width()===1||e=="-"&&t.width()===1)return t.emit(s.QueryLexer.PRESENCE),s.QueryLexer.lexText;if(e.match(s.QueryLexer.termSeparator))return s.QueryLexer.lexTerm}},s.QueryParser=function(t,e){this.lexer=new s.QueryLexer(t),this.query=e,this.currentClause={},this.lexemeIdx=0},s.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=s.QueryParser.parseClause;t;)t=t(this);return this.query},s.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},s.QueryParser.prototype.consumeLexeme=function(){var t=this.peekLexeme();return this.lexemeIdx+=1,t},s.QueryParser.prototype.nextClause=function(){var t=this.currentClause;this.query.clause(t),this.currentClause={}},s.QueryParser.parseClause=function(t){var e=t.peekLexeme();if(e!=null)switch(e.type){case s.QueryLexer.PRESENCE:return s.QueryParser.parsePresence;case s.QueryLexer.FIELD:return s.QueryParser.parseField;case s.QueryLexer.TERM:return s.QueryParser.parseTerm;default:var l="expected either a field or a term, found "+e.type;throw e.str.length>=1&&(l+=" with value '"+e.str+"'"),new s.QueryParseError(l,e.start,e.end)}},s.QueryParser.parsePresence=function(t){var e=t.consumeLexeme();if(e!=null){switch(e.str){case"-":t.currentClause.presence=s.Query.presence.PROHIBITED;break;case"+":t.currentClause.presence=s.Query.presence.REQUIRED;break;default:var l="unrecognised presence operator'"+e.str+"'";throw new s.QueryParseError(l,e.start,e.end)}var o=t.peekLexeme();if(o==null){var l="expecting term or field, found nothing";throw new s.QueryParseError(l,e.start,e.end)}switch(o.type){case s.QueryLexer.FIELD:return s.QueryParser.parseField;case s.QueryLexer.TERM:return s.QueryParser.parseTerm;default:var l="expecting term or field, found '"+o.type+"'";throw new s.QueryParseError(l,o.start,o.end)}}},s.QueryParser.parseField=function(t){var e=t.consumeLexeme();if(e!=null){if(t.query.allFields.indexOf(e.str)==-1){var l=t.query.allFields.map(function(r){return"'"+r+"'"}).join(", "),o="unrecognised field '"+e.str+"', possible fields: "+l;throw new s.QueryParseError(o,e.start,e.end)}t.currentClause.fields=[e.str];var i=t.peekLexeme();if(i==null){var o="expecting term, found nothing";throw new s.QueryParseError(o,e.start,e.end)}switch(i.type){case s.QueryLexer.TERM:return s.QueryParser.parseTerm;default:var o="expecting term, found '"+i.type+"'";throw new s.QueryParseError(o,i.start,i.end)}}},s.QueryParser.parseTerm=function(t){var e=t.consumeLexeme();if(e!=null){t.currentClause.term=e.str.toLowerCase(),e.str.indexOf("*")!=-1&&(t.currentClause.usePipeline=!1);var l=t.peekLexeme();if(l==null){t.nextClause();return}switch(l.type){case s.QueryLexer.TERM:return t.nextClause(),s.QueryParser.parseTerm;case s.QueryLexer.FIELD:return t.nextClause(),s.QueryParser.parseField;case s.QueryLexer.EDIT_DISTANCE:return s.QueryParser.parseEditDistance;case s.QueryLexer.BOOST:return s.QueryParser.parseBoost;case s.QueryLexer.PRESENCE:return t.nextClause(),s.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+l.type+"'";throw new s.QueryParseError(o,l.start,l.end)}}},s.QueryParser.parseEditDistance=function(t){var e=t.consumeLexeme();if(e!=null){var l=parseInt(e.str,10);if(isNaN(l)){var o="edit distance must be numeric";throw new s.QueryParseError(o,e.start,e.end)}t.currentClause.editDistance=l;var i=t.peekLexeme();if(i==null){t.nextClause();return}switch(i.type){case s.QueryLexer.TERM:return t.nextClause(),s.QueryParser.parseTerm;case s.QueryLexer.FIELD:return t.nextClause(),s.QueryParser.parseField;case s.QueryLexer.EDIT_DISTANCE:return s.QueryParser.parseEditDistance;case s.QueryLexer.BOOST:return s.QueryParser.parseBoost;case s.QueryLexer.PRESENCE:return t.nextClause(),s.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+i.type+"'";throw new s.QueryParseError(o,i.start,i.end)}}},s.QueryParser.parseBoost=function(t){var e=t.consumeLexeme();if(e!=null){var l=parseInt(e.str,10);if(isNaN(l)){var o="boost must be numeric";throw new s.QueryParseError(o,e.start,e.end)}t.currentClause.boost=l;var i=t.peekLexeme();if(i==null){t.nextClause();return}switch(i.type){case s.QueryLexer.TERM:return t.nextClause(),s.QueryParser.parseTerm;case s.QueryLexer.FIELD:return t.nextClause(),s.QueryParser.parseField;case s.QueryLexer.EDIT_DISTANCE:return s.QueryParser.parseEditDistance;case s.QueryLexer.BOOST:return s.QueryParser.parseBoost;case s.QueryLexer.PRESENCE:return t.nextClause(),s.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+i.type+"'";throw new s.QueryParseError(o,i.start,i.end)}}},function(t,e){typeof define=="function"&&define.amd?define(e):typeof Is=="object"?ws.exports=e():t.lunr=e()}(this,function(){return s})})()});var Ot=window,Xt=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),fe=new WeakMap,pt=class{constructor(t,e,l){if(this._$cssResult$=!0,l!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Xt&&t===void 0){let l=e!==void 0&&e.length===1;l&&(t=fe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),l&&fe.set(e,t))}return t}toString(){return this.cssText}},Be=s=>new pt(typeof s=="string"?s:s+"",void 0,ie),S=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((l,o,i)=>l+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[i+1],s[0]);return new pt(e,s,ie)},Qt=(s,t)=>{Xt?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let l=document.createElement("style"),o=Ot.litNonce;o!==void 0&&l.setAttribute("nonce",o),l.textContent=e.cssText,s.appendChild(l)})},St=Xt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let l of t.cssRules)e+=l.cssText;return Be(e)})(s):s;var re,Tt=window,Fe=Tt.trustedTypes,Xs=Fe?Fe.emptyScript:"",ze=Tt.reactiveElementPolyfillSupport,ce={toAttribute(s,t){switch(t){case Boolean:s=s?Xs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},We=(s,t)=>t!==s&&(t==t||s==s),ne={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:We},ae="finalized",Z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,l)=>{let o=this._$Ep(l,e);o!==void 0&&(this._$Ev.set(o,l),t.push(o))}),t}static createProperty(t,e=ne){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let l=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,l,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,l){return{get(){return this[e]},set(o){let i=this[t];this[e]=o,this.requestUpdate(t,i,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ne}static finalize(){if(this.hasOwnProperty(ae))return!1;this[ae]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,l=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of l)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let l=new Set(t.flat(1/0).reverse());for(let o of l)e.unshift(St(o))}else t!==void 0&&e.push(St(t));return e}static _$Ep(t,e){let l=e.attribute;return l===!1?void 0:typeof l=="string"?l:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,l;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((l=t.hostConnected)===null||l===void 0||l.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var l;return(l=e.hostConnected)===null||l===void 0?void 0:l.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var l;return(l=e.hostDisconnected)===null||l===void 0?void 0:l.call(e)})}attributeChangedCallback(t,e,l){this._$AK(t,l)}_$EO(t,e,l=ne){var o;let i=this.constructor._$Ep(t,l);if(i!==void 0&&l.reflect===!0){let r=(((o=l.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?l.converter:ce).toAttribute(e,l.type);this._$El=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(t,e){var l;let o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){let r=o.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((l=r.converter)===null||l===void 0?void 0:l.fromAttribute)!==void 0?r.converter:ce;this._$El=i,this[i]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,l){let o=!0;t!==void 0&&(((l=l||this.constructor.getPropertyOptions(t)).hasChanged||We)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),l.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,l))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let e=!1,l=this._$AL;try{e=this.shouldUpdate(l),e?(this.willUpdate(l),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(l)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(l)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(l=>{var o;return(o=l.hostUpdated)===null||o===void 0?void 0:o.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,l)=>this._$EO(l,this[l],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Z[ae]=!0,Z.elementProperties=new Map,Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},ze?.({ReactiveElement:Z}),((re=Tt.reactiveElementVersions)!==null&&re!==void 0?re:Tt.reactiveElementVersions=[]).push("1.6.3");var be,kt=window,nt=kt.trustedTypes,Oe=nt?nt.createPolicy("lit-html",{createHTML:s=>s}):void 0,jt="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,he="?"+E,Ss=`<${he}>`,tt=document,Ct=()=>tt.createComment(""),Mt=s=>s===null||typeof s!="object"&&typeof s!="function",Ze=Array.isArray,Ee=s=>Ze(s)||typeof s?.[Symbol.iterator]=="function",ue=`[ 	
\f\r]`,yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Se=/>/g,P=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,ke=/"/g,Re=/^(?:script|style|textarea|title)$/i,Ye=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),m=Ye(1),wl=Ye(2),x=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),je=new WeakMap,q=tt.createTreeWalker(tt,129,null,!1);function Ve(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oe!==void 0?Oe.createHTML(t):t}var Je=(s,t)=>{let e=s.length-1,l=[],o,i=t===2?"<svg>":"",r=yt;for(let a=0;a<e;a++){let c=s[a],n,b,h=-1,u=0;for(;u<c.length&&(r.lastIndex=u,b=r.exec(c),b!==null);)u=r.lastIndex,r===yt?b[1]==="!--"?r=Xe:b[1]!==void 0?r=Se:b[2]!==void 0?(Re.test(b[2])&&(o=RegExp("</"+b[2],"g")),r=P):b[3]!==void 0&&(r=P):r===P?b[0]===">"?(r=o??yt,h=-1):b[1]===void 0?h=-2:(h=r.lastIndex-b[2].length,n=b[1],r=b[3]===void 0?P:b[3]==='"'?ke:Te):r===ke||r===Te?r=P:r===Xe||r===Se?r=yt:(r=P,o=void 0);let L=r===P&&s[a+1].startsWith("/>")?" ":"";i+=r===yt?c+Ss:h>=0?(l.push(n),c.slice(0,h)+jt+c.slice(h)+E+L):c+E+(h===-2?(l.push(void 0),a):L)}return[Ve(s,i+(s[e]||"<?>")+(t===2?"</svg>":"")),l]},Nt=class s{constructor({strings:t,_$litType$:e},l){let o;this.parts=[];let i=0,r=0,a=t.length-1,c=this.parts,[n,b]=Je(t,e);if(this.el=s.createElement(n,l),q.currentNode=this.el.content,e===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(o=q.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes()){let h=[];for(let u of o.getAttributeNames())if(u.endsWith(jt)||u.startsWith(E)){let L=b[r++];if(h.push(u),L!==void 0){let g=o.getAttribute(L.toLowerCase()+jt).split(E),Q=/([.?@])?(.*)/.exec(L);c.push({type:1,index:i,name:Q[2],strings:g,ctor:Q[1]==="."?Zt:Q[1]==="?"?Et:Q[1]==="@"?Rt:st})}else c.push({type:6,index:i})}for(let u of h)o.removeAttribute(u)}if(Re.test(o.tagName)){let h=o.textContent.split(E),u=h.length-1;if(u>0){o.textContent=nt?nt.emptyScript:"";for(let L=0;L<u;L++)o.append(h[L],Ct()),q.nextNode(),c.push({type:2,index:++i});o.append(h[u],Ct())}}}else if(o.nodeType===8)if(o.data===he)c.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(E,h+1))!==-1;)c.push({type:7,index:i}),h+=E.length-1}i++}}static createElement(t,e){let l=tt.createElement("template");return l.innerHTML=t,l}};function et(s,t,e=s,l){var o,i,r,a;if(t===x)return t;let c=l!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[l]:e._$Cl,n=Mt(t)?void 0:t._$litDirective$;return c?.constructor!==n&&((i=c?._$AO)===null||i===void 0||i.call(c,!1),n===void 0?c=void 0:(c=new n(s),c._$AT(s,e,l)),l!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[l]=c:e._$Cl=c),c!==void 0&&(t=et(s,c._$AS(s,t.values),c,l)),t}var Gt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:l},parts:o}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:tt).importNode(l,!0);q.currentNode=i;let r=q.nextNode(),a=0,c=0,n=o[0];for(;n!==void 0;){if(a===n.index){let b;n.type===2?b=new ct(r,r.nextSibling,this,t):n.type===1?b=new n.ctor(r,n.name,n.strings,this,t):n.type===6&&(b=new Yt(r,this,t)),this._$AV.push(b),n=o[++c]}a!==n?.index&&(r=q.nextNode(),a++)}return q.currentNode=tt,i}v(t){let e=0;for(let l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(t,l,e),e+=l.strings.length-2):l._$AI(t[e])),e++}},ct=class s{constructor(t,e,l,o){var i;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=l,this.options=o,this._$Cp=(i=o?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),Mt(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ee(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&Mt(this._$AH)?this._$AA.nextSibling.data=t:this.$(tt.createTextNode(t)),this._$AH=t}g(t){var e;let{values:l,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Nt.createElement(Ve(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.v(l);else{let r=new Gt(i,this),a=r.u(this.options);r.v(l),this.$(a),this._$AH=r}}_$AC(t){let e=je.get(t.strings);return e===void 0&&je.set(t.strings,e=new Nt(t)),e}T(t){Ze(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,l,o=0;for(let i of t)o===e.length?e.push(l=new s(this.k(Ct()),this.k(Ct()),this,this.options)):l=e[o],l._$AI(i),o++;o<e.length&&(this._$AR(l&&l._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var l;for((l=this._$AP)===null||l===void 0||l.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},st=class{constructor(t,e,l,o,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,l,o){let i=this.strings,r=!1;if(i===void 0)t=et(this,t,e,0),r=!Mt(t)||t!==this._$AH&&t!==x,r&&(this._$AH=t);else{let a=t,c,n;for(t=i[0],c=0;c<i.length-1;c++)n=et(this,a[l+c],e,c),n===x&&(n=this._$AH[c]),r||(r=!Mt(n)||n!==this._$AH[c]),n===M?t=M:t!==M&&(t+=(n??"")+i[c+1]),this._$AH[c]=n}r&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Zt=class extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}},Ts=nt?nt.emptyScript:"",Et=class extends st{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,Ts):this.element.removeAttribute(this.name)}},Rt=class extends st{constructor(t,e,l,o,i){super(t,e,l,o,i),this.type=5}_$AI(t,e=this){var l;if((t=(l=et(this,t,e,0))!==null&&l!==void 0?l:M)===x)return;let o=this._$AH,i=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==M&&(o===M||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,l;typeof this._$AH=="function"?this._$AH.call((l=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&l!==void 0?l:this.element,t):this._$AH.handleEvent(t)}},Yt=class{constructor(t,e,l){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}},He={O:jt,P:E,A:he,C:1,M:Je,L:Gt,R:Ee,D:et,I:ct,V:st,H:Et,N:Rt,U:Zt,F:Yt},Ge=kt.litHtmlPolyfillSupport;Ge?.(Nt,ct),((be=kt.litHtmlVersions)!==null&&be!==void 0?be:kt.litHtmlVersions=[]).push("2.8.0");var Ke=(s,t,e)=>{var l,o;let i=(l=e?.renderBefore)!==null&&l!==void 0?l:t,r=i._$litPart$;if(r===void 0){let a=(o=e?.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=r=new ct(t.insertBefore(Ct(),a),a,void 0,e??{})}return r._$AI(s),r};var de,ge;var T=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let l=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=l.firstChild),l}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ke(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return x}};T.finalized=!0,T._$litElement$=!0,(de=globalThis.litElementHydrateSupport)===null||de===void 0||de.call(globalThis,{LitElement:T});var _e=globalThis.litElementPolyfillSupport;_e?.({LitElement:T});((ge=globalThis.litElementVersions)!==null&&ge!==void 0?ge:globalThis.litElementVersions=[]).push("3.3.3");var ks=s=>class extends Ae(s){static get elementStyles(){return this.__elementStyles}static set elementStyles(e){this.__elementStyles=e}adoptStyles(e){let l=this.constructor,{elementStyles:o}=l;o&&Qt(e,o),this.renderOptions.renderBefore=this.renderOptions.renderBefore||e.firstChild||void 0}},Le=xe(ks);var R=class extends Ue(Le(T)){};var f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=s=>(...t)=>({_$litDirective$:s,values:t}),z=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,l){this._$Ct=t,this._$AM=e,this._$Ci=l}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:js}=He;var Vt=s=>s.strings===void 0,$e=()=>document.createComment(""),at=(s,t,e)=>{var l;let o=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){let r=o.insertBefore($e(),i),a=o.insertBefore($e(),i);e=new js(r,a,s,s.options)}else{let r=e._$AB.nextSibling,a=e._$AM,c=a!==s;if(c){let n;(l=e._$AQ)===null||l===void 0||l.call(e,s),e._$AM=s,e._$AP!==void 0&&(n=s._$AU)!==a._$AU&&e._$AP(n)}if(r!==i||c){let n=e._$AA;for(;n!==r;){let b=n.nextSibling;o.insertBefore(n,i),n=b}}}return e},Y=(s,t,e=s)=>(s._$AI(t,e),s),Gs={},Jt=(s,t=Gs)=>s._$AH=t,Pe=s=>s._$AH,Ht=s=>{var t;(t=s._$AP)===null||t===void 0||t.call(s,!1,!0);let e=s._$AA,l=s._$AB.nextSibling;for(;e!==l;){let o=e.nextSibling;e.remove(),e=o}};var qe=(s,t,e)=>{let l=new Map;for(let o=t;o<=e;o++)l.set(s[o],o);return l},ts=X(class extends z{constructor(s){if(super(s),s.type!==f.CHILD)throw Error("repeat() can only be used in text expressions")}ct(s,t,e){let l;e===void 0?e=t:t!==void 0&&(l=t);let o=[],i=[],r=0;for(let a of s)o[r]=l?l(a,r):r,i[r]=e(a,r),r++;return{values:i,keys:o}}render(s,t,e){return this.ct(s,t,e).values}update(s,[t,e,l]){var o;let i=Pe(s),{values:r,keys:a}=this.ct(t,e,l);if(!Array.isArray(i))return this.ut=a,r;let c=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],n=[],b,h,u=0,L=i.length-1,g=0,Q=r.length-1;for(;u<=L&&g<=Q;)if(i[u]===null)u++;else if(i[L]===null)L--;else if(c[u]===a[g])n[g]=Y(i[u],r[g]),u++,g++;else if(c[L]===a[Q])n[Q]=Y(i[L],r[Q]),L--,Q--;else if(c[u]===a[Q])n[Q]=Y(i[u],r[Q]),at(s,n[Q+1],i[u]),u++,Q--;else if(c[L]===a[g])n[g]=Y(i[L],r[g]),at(s,i[u],i[L]),L--,g++;else if(b===void 0&&(b=qe(a,g,Q),h=qe(c,u,L)),b.has(c[u]))if(b.has(c[L])){let y=h.get(a[g]),C=y!==void 0?i[y]:null;if(C===null){let B=at(s,i[u]);Y(B,r[g]),n[g]=B}else n[g]=Y(C,r[g]),at(s,i[u],C),i[y]=null;g++}else Ht(i[L]),L--;else Ht(i[u]),u++;for(;g<=Q;){let y=at(s,n[Q+1]);Y(y,r[g]),n[g++]=y}for(;u<=L;){let y=i[u++];y!==null&&Ht(y)}return this.ut=a,Jt(s,n),x}});var pe=X(class extends z{constructor(s){if(super(s),s.type!==f.PROPERTY&&s.type!==f.ATTRIBUTE&&s.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Vt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===x||t===M)return t;let e=s.element,l=s.name;if(s.type===f.PROPERTY){if(t===e[l])return x}else if(s.type===f.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(l))return x}else if(s.type===f.ATTRIBUTE&&e.getAttribute(l)===t+"")return x;return Jt(s),t}});var mt=(s,t)=>{var e,l;let o=s._$AN;if(o===void 0)return!1;for(let i of o)(l=(e=i)._$AO)===null||l===void 0||l.call(e,t,!1),mt(i,t);return!0},Kt=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},es=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Rs(t)}};function Zs(s){this._$AN!==void 0?(Kt(this),this._$AM=s,es(this)):this._$AM=s}function Es(s,t=!1,e=0){let l=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(l))for(let i=e;i<l.length;i++)mt(l[i],!1),Kt(l[i]);else l!=null&&(mt(l,!1),Kt(l));else mt(this,s)}var Rs=s=>{var t,e,l,o;s.type==f.CHILD&&((t=(l=s)._$AP)!==null&&t!==void 0||(l._$AP=Es),(e=(o=s)._$AQ)!==null&&e!==void 0||(o._$AQ=Zs))},_t=class extends z{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,l){super._$AT(t,e,l),es(this),this.isConnected=t._$AU}_$AO(t,e=!0){var l,o;t!==this.isConnected&&(this.isConnected=t,t?(l=this.reconnected)===null||l===void 0||l.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(mt(this,t),Kt(this))}setValue(t){if(Vt(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var $t=()=>new ye,ye=class{},Qe=new WeakMap,Pt=X(class extends _t{render(s){return M}update(s,[t]){var e;let l=t!==this.G;return l&&this.G!==void 0&&this.ot(void 0),(l||this.rt!==this.lt)&&(this.G=t,this.dt=(e=s.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=s.element)),M}ot(s){var t;if(typeof this.G=="function"){let e=(t=this.dt)!==null&&t!==void 0?t:globalThis,l=Qe.get(e);l===void 0&&(l=new WeakMap,Qe.set(e,l)),l.get(this.G)!==void 0&&this.G.call(this.dt,void 0),l.set(this.G,s),s!==void 0&&this.G.call(this.dt,s)}else this.G.value=s}get rt(){var s,t,e;return typeof this.G=="function"?(t=Qe.get((s=this.dt)!==null&&s!==void 0?s:globalThis))===null||t===void 0?void 0:t.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var bt=X(class extends z{constructor(s){var t;if(super(s),s.type!==f.ATTRIBUTE||s.name!=="class"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,l;if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!(!((e=this.nt)===null||e===void 0)&&e.has(i))&&this.it.add(i);return this.render(t)}let o=s.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(let i in t){let r=!!t[i];r===this.it.has(i)||!((l=this.nt)===null||l===void 0)&&l.has(i)||(r?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return x}});var Ce=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Me(s,t,e,l){s.addEventListener?s.addEventListener(t,e,l):s.attachEvent&&s.attachEvent("on".concat(t),function(){e(window.event)})}function rs(s,t){for(var e=t.slice(0,t.length-1),l=0;l<e.length;l++)e[l]=s[e[l].toLowerCase()];return e}function ns(s){typeof s!="string"&&(s=""),s=s.replace(/\s/g,"");for(var t=s.split(","),e=t.lastIndexOf("");e>=0;)t[e-1]+=",",t.splice(e,1),e=t.lastIndexOf("");return t}function Ys(s,t){for(var e=s.length>=t.length?s:t,l=s.length>=t.length?t:s,o=!0,i=0;i<e.length;i++)l.indexOf(e[i])===-1&&(o=!1);return o}var wt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ce?173:189,"=":Ce?61:187,";":Ce?59:186,"'":222,"[":219,"]":221,"\\":220},j={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Ie={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},A={16:!1,18:!1,17:!1,91:!1},v={};for(It=1;It<20;It++)wt["f".concat(It)]=111+It;var It,I=[],ss=!1,cs="all",as=[],te=function(t){return wt[t.toLowerCase()]||j[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},Vs=function(t){return Object.keys(wt).find(function(e){return wt[e]===t})},Js=function(t){return Object.keys(j).find(function(e){return j[e]===t})};function bs(s){cs=s||"all"}function Dt(){return cs||"all"}function Hs(){return I.slice(0)}function Ks(){return I.map(function(s){return Vs(s)||Js(s)||String.fromCharCode(s)})}function _s(s){var t=s.target||s.srcElement,e=t.tagName,l=!0;return(t.isContentEditable||(e==="INPUT"||e==="TEXTAREA"||e==="SELECT")&&!t.readOnly)&&(l=!1),l}function $s(s){return typeof s=="string"&&(s=te(s)),I.indexOf(s)!==-1}function Ps(s,t){var e,l;s||(s=Dt());for(var o in v)if(Object.prototype.hasOwnProperty.call(v,o))for(e=v[o],l=0;l<e.length;)e[l].scope===s?e.splice(l,1):l++;Dt()===s&&bs(t||"all")}function qs(s){var t=s.keyCode||s.which||s.charCode,e=I.indexOf(t);if(e>=0&&I.splice(e,1),s.key&&s.key.toLowerCase()==="meta"&&I.splice(0,I.length),(t===93||t===224)&&(t=91),t in A){A[t]=!1;for(var l in j)j[l]===t&&(k[l]=!1)}}function tl(s){if(typeof s>"u")Object.keys(v).forEach(function(r){return delete v[r]});else if(Array.isArray(s))s.forEach(function(r){r.key&&Ne(r)});else if(typeof s=="object")s.key&&Ne(s);else if(typeof s=="string"){for(var t=arguments.length,e=new Array(t>1?t-1:0),l=1;l<t;l++)e[l-1]=arguments[l];var o=e[0],i=e[1];typeof o=="function"&&(i=o,o=""),Ne({key:s,scope:o,method:i,splitKey:"+"})}}var Ne=function(t){var e=t.key,l=t.scope,o=t.method,i=t.splitKey,r=i===void 0?"+":i,a=ns(e);a.forEach(function(c){var n=c.split(r),b=n.length,h=n[b-1],u=h==="*"?"*":te(h);if(v[u]){l||(l=Dt());var L=b>1?rs(j,n):[];v[u]=v[u].filter(function(g){var Q=o?g.method===o:!0;return!(Q&&g.scope===l&&Ys(g.mods,L))})}})};function ls(s,t,e,l){if(t.element===l){var o;if(t.scope===e||t.scope==="all"){o=t.mods.length>0;for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(!A[i]&&t.mods.indexOf(+i)>-1||A[i]&&t.mods.indexOf(+i)===-1)&&(o=!1);(t.mods.length===0&&!A[16]&&!A[18]&&!A[17]&&!A[91]||o||t.shortcut==="*")&&t.method(s,t)===!1&&(s.preventDefault?s.preventDefault():s.returnValue=!1,s.stopPropagation&&s.stopPropagation(),s.cancelBubble&&(s.cancelBubble=!0))}}}function os(s,t){var e=v["*"],l=s.keyCode||s.which||s.charCode;if(k.filter.call(this,s)){if((l===93||l===224)&&(l=91),I.indexOf(l)===-1&&l!==229&&I.push(l),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(g){var Q=Ie[g];s[g]&&I.indexOf(Q)===-1?I.push(Q):!s[g]&&I.indexOf(Q)>-1?I.splice(I.indexOf(Q),1):g==="metaKey"&&s[g]&&I.length===3&&(s.ctrlKey||s.shiftKey||s.altKey||(I=I.slice(I.indexOf(Q))))}),l in A){A[l]=!0;for(var o in j)j[o]===l&&(k[o]=!0);if(!e)return}for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(A[i]=s[Ie[i]]);s.getModifierState&&!(s.altKey&&!s.ctrlKey)&&s.getModifierState("AltGraph")&&(I.indexOf(17)===-1&&I.push(17),I.indexOf(18)===-1&&I.push(18),A[17]=!0,A[18]=!0);var r=Dt();if(e)for(var a=0;a<e.length;a++)e[a].scope===r&&(s.type==="keydown"&&e[a].keydown||s.type==="keyup"&&e[a].keyup)&&ls(s,e[a],r,t);if(l in v){for(var c=0;c<v[l].length;c++)if((s.type==="keydown"&&v[l][c].keydown||s.type==="keyup"&&v[l][c].keyup)&&v[l][c].key){for(var n=v[l][c],b=n.splitKey,h=n.key.split(b),u=[],L=0;L<h.length;L++)u.push(te(h[L]));u.sort().join("")===I.sort().join("")&&ls(s,n,r,t)}}}}function el(s){return as.indexOf(s)>-1}function k(s,t,e){I=[];var l=ns(s),o=[],i="all",r=document,a=0,c=!1,n=!0,b="+",h=!1;for(e===void 0&&typeof t=="function"&&(e=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(i=t.scope),t.element&&(r=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(n=t.keydown),t.capture!==void 0&&(h=t.capture),typeof t.splitKey=="string"&&(b=t.splitKey)),typeof t=="string"&&(i=t);a<l.length;a++)s=l[a].split(b),o=[],s.length>1&&(o=rs(j,s)),s=s[s.length-1],s=s==="*"?"*":te(s),s in v||(v[s]=[]),v[s].push({keyup:c,keydown:n,scope:i,mods:o,shortcut:l[a],method:e,key:l[a],splitKey:b,element:r});typeof r<"u"&&!el(r)&&window&&(as.push(r),Me(r,"keydown",function(u){os(u,r)},h),ss||(ss=!0,Me(window,"focus",function(){I=[]},h)),Me(r,"keyup",function(u){os(u,r),qs(u)},h))}function sl(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(v).forEach(function(e){var l=v[e].filter(function(o){return o.scope===t&&o.shortcut===s});l.forEach(function(o){o&&o.method&&o.method()})})}var me={getPressedKeyString:Ks,setScope:bs,getScope:Dt,deleteScope:Ps,getPressedKeyCodes:Hs,isPressed:$s,filter:_s,trigger:sl,unbind:tl,keyMap:wt,modifier:j,modifierMap:Ie};for(qt in me)Object.prototype.hasOwnProperty.call(me,qt)&&(k[qt]=me[qt]);var qt;typeof window<"u"&&(is=window.hotkeys,k.noConflict=function(s){return s&&window.hotkeys===k&&(window.hotkeys=is),k},window.hotkeys=k);var is;var ut=S`
  :host {
    box-sizing: border-box;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  [hidden] {
    display: none !important;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    max-width: 1px !important;
    max-height: 1px !important;
    overflow: hidden;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,us=S`
  :host {
    --ninja-width: clamp(100px, 96vw, 640px);
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-rows: minmax(0, auto) minmax(0, 1fr);
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;

    /* Fallback for non-dvh browsers */
    max-height: calc(100vh - var(--ninja-top));
    max-height: calc(100dvh - var(--ninja-top));
  }

  .modal-body {
    height: 100%;
    display: grid;
    grid-template-rows: minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    flex-wrap: wrap;
    /* vertical gap when wrapping */
    row-gap: 8px;
    column-gap: 16px;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var lt=class extends R{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=$t()}render(){let t="";if(!this.hideBreadcrumbs){let e=[];if(this.breadcrumbs)for(let l of this.breadcrumbs)e.push(m`<button
              type="button"
              @click=${()=>this.selectParent(l)}
              class="breadcrumb"
            >
              ${l}
            </button>`);t=m`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${e}

        <button type="button" class="breadcrumb breadcrumb--close" @click=${this._close}>
          Cancel
        </button>
      </div>`}return m`
      ${t}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${Pt(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
          aria-labelledby="search-label"
          aria-expanded="${this.expanded}"
          aria-controls="${this.controls} breadcrumb-list"
          aria-autocomplete="list"
          aria-activedescendant="${this.activeDescendant}"
          role="combobox"
        />

        <div class="visually-hidden">
          <slot name="search-label" id="search-label">
            <span>${this.searchLabel}</span>
          </slot>
        </div>
      </div>
    `}setSearch(t){this._inputRef.value&&(this._inputRef.value.value=t)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(t){let e=t.target;e instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:e.value},bubbles:!0,composed:!0}))}selectParent(t){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:t},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};U(lt,"baseName","ninja-header"),U(lt,"styles",[ut,S`
      :host {
        flex: 1;
        position: relative;
      }
      .search {
        padding: 1.25em;
        flex-grow: 1;
        flex-shrink: 0;
        margin: 0px;
        border: none;
        appearance: none;
        font-size: 1.125em;
        background: transparent;
        caret-color: var(--ninja-accent-color);
        color: var(--ninja-text-color);
        outline: transparent;
        font-family: var(--ninja-font-family);
      }
      .search::placeholder {
        color: var(--ninja-placeholder-color);
      }
      .breadcrumb-list {
        padding: 1em 1em 0 1em;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        flex: initial;
      }

      .breadcrumb {
        background: var(--ninja-secondary-background-color);
        text-align: center;
        line-height: 1.2em;
        border-radius: var(--ninja-key-border-radius);
        border: 0;
        cursor: pointer;
        padding: 0.4em 0.6em;
        color: var(--ninja-secondary-text-color);
        margin-right: 0.5em;
        outline: transparent;
        font-family: var(--ninja-font-family);
      }

      .breadcrumb:focus-visible {
        background-color: red;
      }

      .breadcrumb:last-child {
        margin-inline-start: auto;
      }

      .breadcrumb--close {
        color: var(--ninja-accent-color);
        background-color: transparent;
        text-decoration: underline;
      }

      .search-wrapper {
        display: flex;
        border-bottom: var(--ninja-separate-border);
      }
    `]),U(lt,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});var vt=class extends z{constructor(t){if(super(t),this.et=M,t.type!==f.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.et=t;if(t===x)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;let e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};vt.directiveName="unsafeHTML",vt.resultType=1;var ee=X(vt);function*hs(s,t){let e=typeof t=="function";if(s!==void 0){let l=-1;for(let o of s)l>-1&&(yield e?t(l):t),l++,yield o}}function ds(s,t,e,l){var o=arguments.length,i=o<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,e):l,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,e,l);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(i=(o<3?r(i):o>3?r(t,e,i):r(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i}var gs=s=>t=>typeof t=="function"?((e,l)=>(customElements.define(e,l),l))(s,t):((e,l)=>{let{kind:o,elements:i}=l;return{kind:o,elements:i,finisher(r){customElements.define(e,r)}}})(s,t);var we,ci=((we=window.HTMLSlotElement)===null||we===void 0?void 0:we.prototype.assignedElements)!=null?(s,t)=>s.assignedElements(t):(s,t)=>s.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var Ls=S`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var De=class extends T{render(){return m`<span><slot></slot></span>`}};De.styles=[Ls];De=ds([gs("mwc-icon")],De);function ps(s,t,e){return s?t():e?.()}var V=s=>s??M;var se=-1/0;var ll=-.005,ol=-.005,il=-.01,Qs=1,rl=.9,nl=.8,cl=.7,al=.6;function bl(s){return s.toLowerCase()===s}function ul(s){return s.toUpperCase()===s}function hl(s){for(var t=s.length,e=new Array(t),l="/",o=0;o<t;o++){var i=s[o];l==="/"?e[o]=rl:l==="-"||l==="_"||l===" "?e[o]=nl:l==="."?e[o]=al:bl(l)&&ul(i)?e[o]=cl:e[o]=0,l=i}return e}function dl(s,t,e,l){for(var o=s.length,i=t.length,r=s.toLowerCase(),a=t.toLowerCase(),c=hl(t,c),n=0;n<o;n++){e[n]=new Array(i),l[n]=new Array(i);for(var b=se,h=n===o-1?ol:il,u=0;u<i;u++)if(r[n]===a[u]){var L=se;n?u&&(L=Math.max(l[n-1][u-1]+c[u],e[n-1][u-1]+Qs)):L=u*ll+c[u],e[n][u]=L,l[n][u]=b=Math.max(L,b+h)}else e[n][u]=se,l[n][u]=b=b+h}}function ys(s,t){var e=s.length,l=t.length,o=new Array(e);if(!e||!l)return o;if(e===l){for(var i=0;i<e;i++)o[i]=i;return o}if(l>1024)return o;var r=new Array(e),a=new Array(e);dl(s,t,r,a);for(var c=!1,i=e-1,n=l-1;i>=0;i--)for(;n>=0;n--)if(r[i][n]!==se&&(c||r[i][n]===a[i][n])){c=i&&n&&a[i][n]===r[i-1][n-1]+Qs,o[i]=n--;break}return o}function xt(s,t){s=s.toLowerCase(),t=t.toLowerCase();for(var e=s.length,l=0,o=0;l<e;l+=1)if(o=t.indexOf(s[l],o)+1,o===0)return!1;return!0}function le(s){return new RegExp(s.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function Ms(s,t,e){if(!s.trim())return t;let l=new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))"+le(s).source+"+","g");return t.replaceAll(l,e)}function Ns(s,t,e=l=>l){if(!t)return"";if(!s)return t;let l=s.split(/\s+/);if(!l.some(c=>xt(c,t)))return t;let i=t.split(""),r=[];[s,...l].forEach(c=>{xt(c,t)&&(r=r.concat(ys(c,t)))}),r=[...new Set(r)].sort((c,n)=>c-n);let a=[];for(let c=0;c<i.length;c++){if(!r.includes(c)){a.push(i[c]);continue}let n=gl(c,r);if(n==null)continue;let b="";b=e(i.slice(c,n+1).join("")),a.push(b),c=n}return a.join("")}function gl(s,t){let e=t.findIndex(o=>o===s),l=null;if(e===-1)return null;for(let o=e;o<t.length;o++){l=t[o];for(let i=o+1;i<t.length;i++){let r=t[i];if(r==null||r!==l+1)return l;l=t[i]}}return l}var J=class extends R{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1,this.__regexMatchRender='<mark part="ninja-action__highlight">$&</mark>',this.__fuzzyMatchRender=t=>`<mark part="ninja-action__highlight">${t}</mark>`}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}));let t=this.shadowRoot?.querySelector("a");t&&t.click()}forceClick(){let t=this.shadowRoot?.querySelector("a");t&&t.click()}updated(t){t.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true")))}render(){let t={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(t):m`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${bt(t)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(t){let e=this.action.attributes||{},{download:l,hreflang:o,ping:i,referrerpolicy:r,rel:a,target:c,type:n}=e;return m`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${bt(t)}
        href=${this.action.href}
        download=${V(l)}
        hreflang=${V(o)}
        ping=${V(i)}
        referrerpolicy=${V(r)}
        rel=${V(a)}
        target=${V(c)}
        type=${V(n)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(t){let e=this.constructor;return t.replaceAll(/&/g,e.escapeMap["&"]).replaceAll(/[<>'"]/g,l=>e.escapeMap[l]||l)}encodeString(t){let e=this.constructor;return t.replaceAll(/&/g,`<span>${e.escapeMap["&"]}</span>`).replaceAll(/[<>'"]/g,l=>`<span>${e.escapeMap[l]||l}</span>`)}renderMatch(t,e){let l=this.escapeString(e),o=this.escapeString(t);return this.searchType==="regex"?Ms(o,l,this.__regexMatchRender):this.searchType==="fuzzy"?Ns(o,l,this.__fuzzyMatchRender):""}renderBody(){let t;this.action.mdIcon?t=m`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(t=ee(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{title:e,content:l}=this.action;return e&&this.highlightMatches&&(e=this.renderMatch(this.searchQuery,e)),l&&this.highlightMatches&&(l=this.renderMatch(this.searchQuery,l)),m`
        <div part="ninja-action__header" class="ninja-action__header">
          ${t}
          <div part="ninja-action__title" class="ninja-title">${ee(e)}</div>
          ${this.renderHotkey()}
        </div>

        ${ps(l,()=>m`<small part="ninja-action__content" class="ninja-action__content">${ee(l)}</small>`)}
    `}renderHotkey(){let t;return this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(e=>{let l=e.split("+"),o=m`${hs(l.map(i=>m`<kbd part="ninja-hotkey">${i}</kbd>`),"+")}`;return m`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${o}
          </div>`}):t=this.action.hotkey.split(",").map(e=>{let o=e.split("+").map(i=>m`<kbd part="ninja-hotkey" class="ninja-hotkey">${i}</kbd>`);return m`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${o}</kbd>`})),t}};U(J,"baseName","ninja-action"),U(J,"styles",[ut,S`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
      }

      mark {
        background-color: var(--ninja-accent-color);
        padding: 1px 3px;
      }

      .ninja-action {
        padding: 0.75em 8px;
        display: flex;
        flex-direction: column;
        border-inline-end: 2px solid transparent;
        border-inline-start: 2px solid transparent;
        align-items: center;
        justify-content: start;
        outline: transparent;
        transition: color 0s ease 0s;
        width: 100%;
        row-gap: 8px;
        text-decoration: none;
        color: currentColor;
      }

      .ninja-action.selected {
        cursor: pointer;
        color: var(--ninja-selected-text-color);
        background-color: var(--ninja-selected-background);
        border-inline-end: 2px solid var(--ninja-accent-color);
        border-inline-start: 2px solid var(--ninja-accent-color);
        outline: transparent;
      }

      .ninja-action__header {
        display: flex;
        justify-content: start;
        width: 100%;
        align-items: center;
      }

      .ninja-action__content {
        border-top: 1px solid gray;
        padding-top: 0.5em;
        font-size: 0.8em;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        /** This has surprisingly good browser support. */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }

      .ninja-action.selected .ninja-icon {
        color: var(--ninja-selected-text-color);
      }

      .ninja-icon {
        font-size: var(--ninja-icon-size);
        max-width: var(--ninja-icon-size);
        max-height: var(--ninja-icon-size);
        color: var(--ninja-icon-color);
        position: relative;
        margin-inline-end: 0.5em;
      }

      .ninja-title {
        flex-grow: 1;
        font-size: 0.8125em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .ninja-hotkeys {
        flex-shrink: 0;
        width: min-content;
        display: flex;
      }

      .ninja-hotkeys kbd {
        font-family: inherit;
      }
      .ninja-hotkey {
        background: var(--ninja-secondary-background-color);
        padding: 0.06em 0.25em;
        border-radius: var(--ninja-key-border-radius);
        text-transform: capitalize;
        color: var(--ninja-secondary-text-color);
        font-size: 0.75em;
        font-family: inherit;
      }

      .ninja-hotkey + .ninja-hotkey {
        margin-inline-end: 0.5em;
      }
      .ninja-hotkeys + .ninja-hotkeys {
        margin-inline-end: 1em;
      }
    `]),U(J,"escapeMap",{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}),U(J,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});var ms=m` <div part="modal-footer" class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`;var W=k,H=class extends R{static get scopedElements(){return{"ninja-action":J,"ninja-header":lt}}constructor(){super(),this._headerRef=$t(),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.searchType="regex",this.highlightMatches=!1,this.searchLabel="Search for actions",this.listboxLabel="List of actions",this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up",this.navigationDownHotkey="down",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.__selected__=null,this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this.currentRoot=void 0,this._flatData=[]}open(t={}){this._bump=!0,this.visible=!0;let e=this._headerRef.value;if(requestAnimationFrame(()=>{e&&(e.focusSearch(),e.expanded=!0,e.controls="actions-list")}),this._actionMatches.length>0){this._selected=this._actionMatches[0];let l=this._headerRef.value;l&&this._selected&&this._selected.id&&(l.activeDescendant=this._selected.id)}this.setParent(t.parent)}close(){this._bump=!1,this.visible=!1;let t=this._headerRef.value;t&&(t.expanded=!1)}setParent(t){t?this.currentRoot=t:this.currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value?.setSearch("")}getBreadcrumbs(){let t=[],e=this._selected?.parent;if(e)for(t.push(e);e;){let l=this._flatData.find(o=>o.id===e);l?.parent&&t.push(l.parent),e=l?l.parent:void 0}return t.reverse()}get _selected(){return this.__selected__}set _selected(t){let e=this._headerRef.value;e&&t&&t.id&&(e.activeDescendant=t.id);let l=this.__selected__;this.__selected__=t,this.requestUpdate("_selected",l)}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(t,e){let l=[];return t||(t=[]),t.map(o=>{let i=o.children&&o.children.some(a=>typeof a=="string"),r={...o,parent:o.parent||e};return i||(r.children&&r.children.length&&(e=o.id,l=[...l,...r.children]),r.children=r.children?r.children.map(a=>a.id):[]),r}).concat(l.length?this._flattern(l,e):l)}update(t){t.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.forEach(e=>{e.hotkey&&W(e.hotkey,l=>{l.preventDefault(),e.handler&&e.handler(e,l,this._search)})})),super.update(t)}shouldNotOpen(t){let e=t.composedPath(),l=["input","textarea"];return e.some(o=>o?.getAttribute?.("contenteditable")==="true"?!0:l.includes(o?.tagName?.toLowerCase()))}_registerInternalHotkeys(){this.openHotkey&&W(this.openHotkey,t=>{this.shouldNotOpen(t)||(t.preventDefault(),this.visible?this.close():this.open())}),this.selectHotkey&&W(this.selectHotkey,t=>{this.visible&&(t.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex],t))}),this.goBackHotkey&&W(this.goBackHotkey,t=>{this.visible&&(this._search||(t.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&W(this.navigationDownHotkey,t=>{this.visible&&(t.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&W(this.navigationUpHotkey,t=>{this.visible&&(t.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&W(this.closeHotkey,t=>{this.visible&&(t.preventDefault(),this.visible=!1,this.close())})}_unregisterInternalHotkeys(){this.openHotkey&&W.unbind(this.openHotkey),this.selectHotkey&&W.unbind(this.selectHotkey),this.goBackHotkey&&W.unbind(this.goBackHotkey),this.navigationDownHotkey&&W.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&W.unbind(this.navigationUpHotkey),this.closeHotkey&&W.unbind(this.closeHotkey)}_actionFocused(t,e){this._selected=t,e.target.ensureInView()}_onTransitionEnd(){this._bump=!1}get breadcrumbs(){return this.getBreadcrumbs()}_goBack(){let t=this.getBreadcrumbs();if(t){let e=t.length>1?t[t.length-2]:void 0;this.setParent(e);return}}findActionElement(t=this._selectedIndex){let e=this._actionMatches[t]?.id;if(e==null)return null;let l="#ninja-action__"+e;return this.shadowRoot?.querySelector(l)}stringToRegExp(t){return le(t)}findMatches(t){let e=this.stringToRegExp(this._search),l={searchRegex:e,searchString:this._search};return t.filter(o=>{if(this._search.trim()==="")return o.parent===this.currentRoot&&!0;let{matcher:i,title:r,keywords:a,content:c}=o,n=null;if(typeof i=="function"&&(n=i(o,l)),(n==null&&!this.searchType||this.searchType==="regex")&&(n=!!(r&&r.match(e)||a&&a.match(e)||c&&c.match(e))),n==null&&this.searchType==="fuzzy"){let b=this._search;n=!!(r&&ve(b,r)||a&&ve(b,a)||c&&ve(b,c))}return n==null&&(n=!!n),(!this.currentRoot&&this._search||o.parent===this.currentRoot)&&n})}render(){let t={bump:this._bump,"modal-content":!0},e={visible:this.visible,modal:!0},l,o=this._flatData;o=this.findMatches(o),l=o.reduce((a,c)=>a.set(c.section,[...a.get(c.section)||[],c]),new Map),this._actionMatches=[...l.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let i=a=>m` ${ts(a,c=>c.id,c=>m`<ninja-action
            id=${"ninja-action__"+c.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content, ninja-action__highlight"
            aria-selected=${pe(c.id===this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${pe(c.id===this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${n=>{this._actionFocused(c,n)}}
            @actionsSelected=${n=>this._actionSelected(n.detail,n)}
            .action=${c}
          ></ninja-action>`)}`,r=[];return l.forEach((a,c)=>{let n=c?m`<div class="group-header">${c}</div>`:void 0;r.push(m`${n}${i(a)}`)}),m`
      <div part="modal-overlay" @click=${this._overlayClick} class=${bt(e)}>
        <div part="modal-content" class=${bt(t)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${Pt(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${a=>this.setParent(a.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div part="modal-body" class="modal-body">
            <div
              id="actions-list"
              class="actions-list"
              role="listbox"
              part="actions-list"
              aria-labelledby="listbox-label"
            >
              ${r}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${ms} </slot>
          </div>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(t,e){this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:t},bubbles:!0,composed:!0})),t&&(t.children&&t.children?.length>0&&(this.currentRoot=t.id,this._search=""),this._headerRef.value?.setSearch(""),this._headerRef.value?.focusSearch(),t.handler?t.handler(t,e,this._search)?.keepOpen||this.close():this.findActionElement(this._selectedIndex)?.forceClick(),this._bump=!0)}async _handleInput(t){this._search=t.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(t){let e=t.target;e instanceof Element&&e?.classList.contains("modal")&&this.close()}};U(H,"baseName","ninja-keys"),U(H,"styles",[ut,us]),U(H,"properties",{placeholder:{type:String},disableHotkeys:{type:Boolean},searchType:{attribute:"search-type"},searchLabel:{attribute:"search-label"},listboxLabel:{attribute:"listbox-label"},hideBreadcrumbs:{type:Boolean},openHotkey:{},navigationUpHotkey:{},navigationDownHotkey:{},closeHotkey:{},goBackHotkey:{},selectHotkey:{},hotKeysJoinedView:{type:Boolean},noAutoLoadMdIcons:{type:Boolean},data:{type:Array,hasChanged(){return!0}},highlightMatches:{type:Boolean,reflect:!0,attribute:"highlight-matches"},__selected__:{state:!0},visible:{state:!0},_bump:{state:!0},_actionMatches:{state:!0},_search:{state:!0},currentRoot:{state:!0},_flatData:{state:!0}});function ve(s,t){return[s,...s.split(/\s+/)].some(e=>xt(e,t))}var xs=Os(Ds(),1);var Ll={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},pl={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};function vs(s){return s.replaceAll(/&lt;|&gt;|&#39;|&quot;/g,t=>pl[t]||t).replaceAll(/&amp;/g,"&")}function Us(s){return s.replaceAll(/&/g,"&amp;").replaceAll(/<>'"/g,t=>Ll[t]||t)}var oe=class{static async fetchAndGenerateIndex(t=this.endpoint){let l=await(await fetch(t)).json(),o=new this;return o.generateIndex(l),{searchIndex:l,searchEngine:o}}async generateIndex(t){this.index=(0,xs.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),t.forEach(e=>{e.content&&(e.content=vs(e.content),this.add(e))})}),this.indexData=t}performSearch(t,e=300,l=!0){if(l==null&&(l=!0),this.index){this.query=t;let o=t.trim().length>0,i=t.split(" ").map((c,n,b)=>`${c}${n===b.length-1?`* ${c}~1`:"~1"}`).join(" "),r=o?this.index.search(`${t} ${i}`):[];return r?.length>0?r.map(c=>{let n=this.indexData.find(u=>u.id==c.ref),b=this.previewTemplate(n.content,e,l),h=this.previewTemplate(n.title,e,l);return l===!0&&(h+=`<!-- (${c.score}) -->`),{id:n.id.trim(),score:c.score,title:n.title.trim(),collection:n.collection,content:n.content.trim(),categories:n.categories,url:n.url.trim(),heading:h,preview:b}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(t,e=300,l=!0){e==null&&(e=300);let o=e/2,i;if(e){let r=t.toLowerCase(),a=this.query.toLowerCase().split(" ").map(c=>r.indexOf(c)).filter(c=>c!=-1).sort((c,n)=>c-n);a[1]&&(e=Math.min(a[1]-a[0],e)),i=t.substr(Math.max(0,a[0]-o),e+o)}else i=t;return t.startsWith(i)||(i="\u2026"+i),t.endsWith(i)||(i=i+"\u2026"),l&&(i=Us(i),this.query.toLowerCase().split(" ").forEach(r=>{r!=""&&(i=i.replace(new RegExp(`(${r.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))})),i}};U(oe,"endpoint","/bridgetown_quick_search/index.json");var As=oe;var ht=class extends H{findMatches(t){let e=super.findMatches(t);return this.results.forEach(l=>{e.find(o=>o.id===l.id)||e.push(l)}),e}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(t){t.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(t)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:t,searchIndex:e}=await As.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=t,this.__searchIndex=e,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),this.staticData.concat(this.results)}showResultsForQuery(t,e=100){if(this.latestQuery=t,this.alwaysShowResults===!0||t&&t.length>=1){let l=this.__searchEngine.performSearch(t,this.snippetLength,!1).slice(0,e),o=[];return l.length<=0?[]:(l.forEach(i=>{let r=this.transformResult(i);r&&o.push(r)}),o)}return[]}transformResult(t){let{id:e,url:l,preview:o,categories:i,heading:r,collection:a}=t;if(!l.endsWith(".json"))return i=i.split(/[-_]/).map(Ql).join(" "),{id:e,title:r,section:a.name,href:l,content:o}}};U(ht,"baseName","bridgetown-ninja-keys"),U(ht,"properties",Object.assign(H.properties,{snippetLength:{attribute:"snippet-length",type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function Ql(s){return s.charAt(0).toUpperCase()+s.slice(1)}(window.requestIdleCallback||window.setTimeout)(async()=>{let s=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends ht{constructor(...t){super(...t),this.staticData=s}createData(){return this.results=this.showResultsForQuery(this._search),this.results.forEach(t=>{t.icon='<sl-icon name="link-45deg"></sl-icon>'}),this.staticData.concat(this.results)}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(t=>{t.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(t=>t.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(t=>t.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
/*! Bundled license information:

lunr/lunr.js:
  (**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
   * Copyright (C) 2020 Oliver Nightingale
   * @license MIT
   *)
  (*!
   * lunr.utils
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Set
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.tokenizer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Pipeline
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Vector
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.stemmer
   * Copyright (C) 2020 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   *)
  (*!
   * lunr.stopWordFilter
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.trimmer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.TokenSet
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Index
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Builder
   * Copyright (C) 2020 Oliver Nightingale
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/form-associated-helpers/pull/5/bridgetown/static/javascript/defer.D7QDY2VB.js.map
