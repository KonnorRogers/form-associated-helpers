import{a as X}from"/form-associated-helpers/bridgetown/static/chunks/chunk-FW6GNDKJ.js";import{a as K}from"/form-associated-helpers/bridgetown/static/chunks/chunk-QAJT5DKV.js";import{a as Xt}from"/form-associated-helpers/bridgetown/static/chunks/chunk-VQGNLZZC.js";import{a as ut,b as gt,c as ft}from"/form-associated-helpers/bridgetown/static/chunks/chunk-IAAZNKJG.js";import{b as Bt,e as vt}from"/form-associated-helpers/bridgetown/static/chunks/chunk-CHH53GTP.js";import{a as Ot}from"/form-associated-helpers/bridgetown/static/chunks/chunk-AAQHBNOV.js";import{a as Ft,b as zt,c as Wt,d as At}from"/form-associated-helpers/bridgetown/static/chunks/chunk-RFITIOVV.js";import{a as Z,b as mt,c as xt}from"/form-associated-helpers/bridgetown/static/chunks/chunk-TEBU7AIK.js";import{a as O,b as wt,c as p,e as $,f as Ut,i as bt}from"/form-associated-helpers/bridgetown/static/chunks/chunk-26IRHIRD.js";import{a as ce,c as ne,d as z}from"/form-associated-helpers/bridgetown/static/chunks/chunk-ENMDFKSV.js";var St=ce((Gt,kt)=>{(function(){var e=function(t){var s=new e.Builder;return s.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),s.searchPipeline.add(e.stemmer),t.call(s,s),s.build()};e.version="2.3.9";e.utils={},e.utils.warn=function(t){return function(s){t.console&&console.warn&&console.warn(s)}}(this),e.utils.asString=function(t){return t==null?"":t.toString()},e.utils.clone=function(t){if(t==null)return t;for(var s=Object.create(null),l=Object.keys(t),o=0;o<l.length;o++){var i=l[o],r=t[i];if(Array.isArray(r)){s[i]=r.slice();continue}if(typeof r=="string"||typeof r=="number"||typeof r=="boolean"){s[i]=r;continue}throw new TypeError("clone is not deep and does not support nested objects")}return s},e.FieldRef=function(t,s,l){this.docRef=t,this.fieldName=s,this._stringValue=l},e.FieldRef.joiner="/",e.FieldRef.fromString=function(t){var s=t.indexOf(e.FieldRef.joiner);if(s===-1)throw"malformed field ref string";var l=t.slice(0,s),o=t.slice(s+1);return new e.FieldRef(o,l,t)},e.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+e.FieldRef.joiner+this.docRef),this._stringValue};e.Set=function(t){if(this.elements=Object.create(null),t){this.length=t.length;for(var s=0;s<this.length;s++)this.elements[t[s]]=!0}else this.length=0},e.Set.complete={intersect:function(t){return t},union:function(){return this},contains:function(){return!0}},e.Set.empty={intersect:function(){return this},union:function(t){return t},contains:function(){return!1}},e.Set.prototype.contains=function(t){return!!this.elements[t]},e.Set.prototype.intersect=function(t){var s,l,o,i=[];if(t===e.Set.complete)return this;if(t===e.Set.empty)return t;this.length<t.length?(s=this,l=t):(s=t,l=this),o=Object.keys(s.elements);for(var r=0;r<o.length;r++){var c=o[r];c in l.elements&&i.push(c)}return new e.Set(i)},e.Set.prototype.union=function(t){return t===e.Set.complete?e.Set.complete:t===e.Set.empty?this:new e.Set(Object.keys(this.elements).concat(Object.keys(t.elements)))},e.idf=function(t,s){var l=0;for(var o in t)o!="_index"&&(l+=Object.keys(t[o]).length);var i=(s-l+.5)/(l+.5);return Math.log(1+Math.abs(i))},e.Token=function(t,s){this.str=t||"",this.metadata=s||{}},e.Token.prototype.toString=function(){return this.str},e.Token.prototype.update=function(t){return this.str=t(this.str,this.metadata),this},e.Token.prototype.clone=function(t){return t=t||function(s){return s},new e.Token(t(this.str,this.metadata),this.metadata)};e.tokenizer=function(t,s){if(t==null||t==null)return[];if(Array.isArray(t))return t.map(function(h){return new e.Token(e.utils.asString(h).toLowerCase(),e.utils.clone(s))});for(var l=t.toString().toLowerCase(),o=l.length,i=[],r=0,c=0;r<=o;r++){var n=l.charAt(r),a=r-c;if(n.match(e.tokenizer.separator)||r==o){if(a>0){var u=e.utils.clone(s)||{};u.position=[c,a],u.index=i.length,i.push(new e.Token(l.slice(c,r),u))}c=r+1}}return i},e.tokenizer.separator=/[\s\-]+/;e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions=Object.create(null),e.Pipeline.registerFunction=function(t,s){s in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+s),t.label=s,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){var s=t.label&&t.label in this.registeredFunctions;s||e.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,t)},e.Pipeline.load=function(t){var s=new e.Pipeline;return t.forEach(function(l){var o=e.Pipeline.registeredFunctions[l];if(o)s.add(o);else throw new Error("Cannot load unregistered function: "+l)}),s},e.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(s){e.Pipeline.warnIfFunctionNotRegistered(s),this._stack.push(s)},this)},e.Pipeline.prototype.after=function(t,s){e.Pipeline.warnIfFunctionNotRegistered(s);var l=this._stack.indexOf(t);if(l==-1)throw new Error("Cannot find existingFn");l=l+1,this._stack.splice(l,0,s)},e.Pipeline.prototype.before=function(t,s){e.Pipeline.warnIfFunctionNotRegistered(s);var l=this._stack.indexOf(t);if(l==-1)throw new Error("Cannot find existingFn");this._stack.splice(l,0,s)},e.Pipeline.prototype.remove=function(t){var s=this._stack.indexOf(t);s!=-1&&this._stack.splice(s,1)},e.Pipeline.prototype.run=function(t){for(var s=this._stack.length,l=0;l<s;l++){for(var o=this._stack[l],i=[],r=0;r<t.length;r++){var c=o(t[r],r,t);if(!(c==null||c===""))if(Array.isArray(c))for(var n=0;n<c.length;n++)i.push(c[n]);else i.push(c)}t=i}return t},e.Pipeline.prototype.runString=function(t,s){var l=new e.Token(t,s);return this.run([l]).map(function(o){return o.toString()})},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})};e.Vector=function(t){this._magnitude=0,this.elements=t||[]},e.Vector.prototype.positionForIndex=function(t){if(this.elements.length==0)return 0;for(var s=0,l=this.elements.length/2,o=l-s,i=Math.floor(o/2),r=this.elements[i*2];o>1&&(r<t&&(s=i),r>t&&(l=i),r!=t);)o=l-s,i=s+Math.floor(o/2),r=this.elements[i*2];if(r==t||r>t)return i*2;if(r<t)return(i+1)*2},e.Vector.prototype.insert=function(t,s){this.upsert(t,s,function(){throw"duplicate index"})},e.Vector.prototype.upsert=function(t,s,l){this._magnitude=0;var o=this.positionForIndex(t);this.elements[o]==t?this.elements[o+1]=l(this.elements[o+1],s):this.elements.splice(o,0,t,s)},e.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t=0,s=this.elements.length,l=1;l<s;l+=2){var o=this.elements[l];t+=o*o}return this._magnitude=Math.sqrt(t)},e.Vector.prototype.dot=function(t){for(var s=0,l=this.elements,o=t.elements,i=l.length,r=o.length,c=0,n=0,a=0,u=0;a<i&&u<r;)c=l[a],n=o[u],c<n?a+=2:c>n?u+=2:c==n&&(s+=l[a+1]*o[u+1],a+=2,u+=2);return s},e.Vector.prototype.similarity=function(t){return this.dot(t)/this.magnitude()||0},e.Vector.prototype.toArray=function(){for(var t=new Array(this.elements.length/2),s=1,l=0;s<this.elements.length;s+=2,l++)t[l]=this.elements[s];return t},e.Vector.prototype.toJSON=function(){return this.elements};e.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},s={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},l="[^aeiou]",o="[aeiouy]",i=l+"[^aeiouy]*",r=o+"[aeiou]*",c="^("+i+")?"+r+i,n="^("+i+")?"+r+i+"("+r+")?$",a="^("+i+")?"+r+i+r+i,u="^("+i+")?"+o,h=new RegExp(c),d=new RegExp(a),N=new RegExp(n),L=new RegExp(u),I=/^(.+?)(ss|i)es$/,Q=/^(.+?)([^s])s$/,y=/^(.+?)eed$/,B=/^(.+?)(ed|ing)$/,x=/.$/,f=/(at|bl|iz)$/,Y=new RegExp("([^aeiouylsz])\\1$"),ot=new RegExp("^"+i+o+"[^aeiouwxy]$"),_=/^(.+?[^aeiou])y$/,it=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,rt=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,P=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,ct=/^(.+?)(s|t)(ion)$/,S=/^(.+?)e$/,nt=/ll$/,at=new RegExp("^"+i+o+"[^aeiouwxy]$"),q=function(b){var C,j,v,g,D,T,J;if(b.length<3)return b;if(v=b.substr(0,1),v=="y"&&(b=v.toUpperCase()+b.substr(1)),g=I,D=Q,g.test(b)?b=b.replace(g,"$1$2"):D.test(b)&&(b=b.replace(D,"$1$2")),g=y,D=B,g.test(b)){var w=g.exec(b);g=h,g.test(w[1])&&(g=x,b=b.replace(g,""))}else if(D.test(b)){var w=D.exec(b);C=w[1],D=L,D.test(C)&&(b=C,D=f,T=Y,J=ot,D.test(b)?b=b+"e":T.test(b)?(g=x,b=b.replace(g,"")):J.test(b)&&(b=b+"e"))}if(g=_,g.test(b)){var w=g.exec(b);C=w[1],b=C+"i"}if(g=it,g.test(b)){var w=g.exec(b);C=w[1],j=w[2],g=h,g.test(C)&&(b=C+t[j])}if(g=rt,g.test(b)){var w=g.exec(b);C=w[1],j=w[2],g=h,g.test(C)&&(b=C+s[j])}if(g=P,D=ct,g.test(b)){var w=g.exec(b);C=w[1],g=d,g.test(C)&&(b=C)}else if(D.test(b)){var w=D.exec(b);C=w[1]+w[2],D=d,D.test(C)&&(b=C)}if(g=S,g.test(b)){var w=g.exec(b);C=w[1],g=d,D=N,T=at,(g.test(C)||D.test(C)&&!T.test(C))&&(b=C)}return g=nt,D=d,g.test(b)&&D.test(b)&&(g=x,b=b.replace(g,"")),v=="y"&&(b=v.toLowerCase()+b.substr(1)),b};return function(V){return V.update(q)}}(),e.Pipeline.registerFunction(e.stemmer,"stemmer");e.generateStopWordFilter=function(t){var s=t.reduce(function(l,o){return l[o]=o,l},{});return function(l){if(l&&s[l.toString()]!==l.toString())return l}},e.stopWordFilter=e.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter");e.trimmer=function(t){return t.update(function(s){return s.replace(/^\W+/,"").replace(/\W+$/,"")})},e.Pipeline.registerFunction(e.trimmer,"trimmer");e.TokenSet=function(){this.final=!1,this.edges={},this.id=e.TokenSet._nextId,e.TokenSet._nextId+=1},e.TokenSet._nextId=1,e.TokenSet.fromArray=function(t){for(var s=new e.TokenSet.Builder,l=0,o=t.length;l<o;l++)s.insert(t[l]);return s.finish(),s.root},e.TokenSet.fromClause=function(t){return"editDistance"in t?e.TokenSet.fromFuzzyString(t.term,t.editDistance):e.TokenSet.fromString(t.term)},e.TokenSet.fromFuzzyString=function(t,s){for(var l=new e.TokenSet,o=[{node:l,editsRemaining:s,str:t}];o.length;){var i=o.pop();if(i.str.length>0){var r=i.str.charAt(0),c;r in i.node.edges?c=i.node.edges[r]:(c=new e.TokenSet,i.node.edges[r]=c),i.str.length==1&&(c.final=!0),o.push({node:c,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(i.editsRemaining!=0){if("*"in i.node.edges)var n=i.node.edges["*"];else{var n=new e.TokenSet;i.node.edges["*"]=n}if(i.str.length==0&&(n.final=!0),o.push({node:n,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&o.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),i.str.length==1&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var a=i.node.edges["*"];else{var a=new e.TokenSet;i.node.edges["*"]=a}i.str.length==1&&(a.final=!0),o.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var u=i.str.charAt(0),h=i.str.charAt(1),d;h in i.node.edges?d=i.node.edges[h]:(d=new e.TokenSet,i.node.edges[h]=d),i.str.length==1&&(d.final=!0),o.push({node:d,editsRemaining:i.editsRemaining-1,str:u+i.str.slice(2)})}}}return l},e.TokenSet.fromString=function(t){for(var s=new e.TokenSet,l=s,o=0,i=t.length;o<i;o++){var r=t[o],c=o==i-1;if(r=="*")s.edges[r]=s,s.final=c;else{var n=new e.TokenSet;n.final=c,s.edges[r]=n,s=n}}return l},e.TokenSet.prototype.toArray=function(){for(var t=[],s=[{prefix:"",node:this}];s.length;){var l=s.pop(),o=Object.keys(l.node.edges),i=o.length;l.node.final&&(l.prefix.charAt(0),t.push(l.prefix));for(var r=0;r<i;r++){var c=o[r];s.push({prefix:l.prefix.concat(c),node:l.node.edges[c]})}}return t},e.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var t=this.final?"1":"0",s=Object.keys(this.edges).sort(),l=s.length,o=0;o<l;o++){var i=s[o],r=this.edges[i];t=t+i+r.id}return t},e.TokenSet.prototype.intersect=function(t){for(var s=new e.TokenSet,l=void 0,o=[{qNode:t,output:s,node:this}];o.length;){l=o.pop();for(var i=Object.keys(l.qNode.edges),r=i.length,c=Object.keys(l.node.edges),n=c.length,a=0;a<r;a++)for(var u=i[a],h=0;h<n;h++){var d=c[h];if(d==u||u=="*"){var N=l.node.edges[d],L=l.qNode.edges[u],I=N.final&&L.final,Q=void 0;d in l.output.edges?(Q=l.output.edges[d],Q.final=Q.final||I):(Q=new e.TokenSet,Q.final=I,l.output.edges[d]=Q),o.push({qNode:L,output:Q,node:N})}}}return s},e.TokenSet.Builder=function(){this.previousWord="",this.root=new e.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},e.TokenSet.Builder.prototype.insert=function(t){var s,l=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(var o=0;o<t.length&&o<this.previousWord.length&&t[o]==this.previousWord[o];o++)l++;this.minimize(l),this.uncheckedNodes.length==0?s=this.root:s=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var o=l;o<t.length;o++){var i=new e.TokenSet,r=t[o];s.edges[r]=i,this.uncheckedNodes.push({parent:s,char:r,child:i}),s=i}s.final=!0,this.previousWord=t},e.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},e.TokenSet.Builder.prototype.minimize=function(t){for(var s=this.uncheckedNodes.length-1;s>=t;s--){var l=this.uncheckedNodes[s],o=l.child.toString();o in this.minimizedNodes?l.parent.edges[l.char]=this.minimizedNodes[o]:(l.child._str=o,this.minimizedNodes[o]=l.child),this.uncheckedNodes.pop()}};e.Index=function(t){this.invertedIndex=t.invertedIndex,this.fieldVectors=t.fieldVectors,this.tokenSet=t.tokenSet,this.fields=t.fields,this.pipeline=t.pipeline},e.Index.prototype.search=function(t){return this.query(function(s){var l=new e.QueryParser(t,s);l.parse()})},e.Index.prototype.query=function(t){for(var s=new e.Query(this.fields),l=Object.create(null),o=Object.create(null),i=Object.create(null),r=Object.create(null),c=Object.create(null),n=0;n<this.fields.length;n++)o[this.fields[n]]=new e.Vector;t.call(s,s);for(var n=0;n<s.clauses.length;n++){var a=s.clauses[n],u=null,h=e.Set.empty;a.usePipeline?u=this.pipeline.runString(a.term,{fields:a.fields}):u=[a.term];for(var d=0;d<u.length;d++){var N=u[d];a.term=N;var L=e.TokenSet.fromClause(a),I=this.tokenSet.intersect(L).toArray();if(I.length===0&&a.presence===e.Query.presence.REQUIRED){for(var Q=0;Q<a.fields.length;Q++){var y=a.fields[Q];r[y]=e.Set.empty}break}for(var B=0;B<I.length;B++)for(var x=I[B],f=this.invertedIndex[x],Y=f._index,Q=0;Q<a.fields.length;Q++){var y=a.fields[Q],ot=f[y],_=Object.keys(ot),it=x+"/"+y,rt=new e.Set(_);if(a.presence==e.Query.presence.REQUIRED&&(h=h.union(rt),r[y]===void 0&&(r[y]=e.Set.complete)),a.presence==e.Query.presence.PROHIBITED){c[y]===void 0&&(c[y]=e.Set.empty),c[y]=c[y].union(rt);continue}if(o[y].upsert(Y,a.boost,function(ie,re){return ie+re}),!i[it]){for(var P=0;P<_.length;P++){var ct=_[P],S=new e.FieldRef(ct,y),nt=ot[ct],at;(at=l[S])===void 0?l[S]=new e.MatchData(x,y,nt):at.add(x,y,nt)}i[it]=!0}}}if(a.presence===e.Query.presence.REQUIRED)for(var Q=0;Q<a.fields.length;Q++){var y=a.fields[Q];r[y]=r[y].intersect(h)}}for(var q=e.Set.complete,V=e.Set.empty,n=0;n<this.fields.length;n++){var y=this.fields[n];r[y]&&(q=q.intersect(r[y])),c[y]&&(V=V.union(c[y]))}var b=Object.keys(l),C=[],j=Object.create(null);if(s.isNegated()){b=Object.keys(this.fieldVectors);for(var n=0;n<b.length;n++){var S=b[n],v=e.FieldRef.fromString(S);l[S]=new e.MatchData}}for(var n=0;n<b.length;n++){var v=e.FieldRef.fromString(b[n]),g=v.docRef;if(q.contains(g)&&!V.contains(g)){var D=this.fieldVectors[v],T=o[v.fieldName].similarity(D),J;if((J=j[g])!==void 0)J.score+=T,J.matchData.combine(l[v]);else{var w={ref:g,score:T,matchData:l[v]};j[g]=w,C.push(w)}}}return C.sort(function(le,oe){return oe.score-le.score})},e.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(l){return[l,this.invertedIndex[l]]},this),s=Object.keys(this.fieldVectors).map(function(l){return[l,this.fieldVectors[l].toJSON()]},this);return{version:e.version,fields:this.fields,fieldVectors:s,invertedIndex:t,pipeline:this.pipeline.toJSON()}},e.Index.load=function(t){var s={},l={},o=t.fieldVectors,i=Object.create(null),r=t.invertedIndex,c=new e.TokenSet.Builder,n=e.Pipeline.load(t.pipeline);t.version!=e.version&&e.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+e.version+"' does not match serialized index '"+t.version+"'");for(var a=0;a<o.length;a++){var u=o[a],h=u[0],d=u[1];l[h]=new e.Vector(d)}for(var a=0;a<r.length;a++){var u=r[a],N=u[0],L=u[1];c.insert(N),i[N]=L}return c.finish(),s.fields=t.fields,s.fieldVectors=l,s.invertedIndex=i,s.tokenSet=c.root,s.pipeline=n,new e.Index(s)};e.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=e.tokenizer,this.pipeline=new e.Pipeline,this.searchPipeline=new e.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},e.Builder.prototype.ref=function(t){this._ref=t},e.Builder.prototype.field=function(t,s){if(/\//.test(t))throw new RangeError("Field '"+t+"' contains illegal character '/'");this._fields[t]=s||{}},e.Builder.prototype.b=function(t){t<0?this._b=0:t>1?this._b=1:this._b=t},e.Builder.prototype.k1=function(t){this._k1=t},e.Builder.prototype.add=function(t,s){var l=t[this._ref],o=Object.keys(this._fields);this._documents[l]=s||{},this.documentCount+=1;for(var i=0;i<o.length;i++){var r=o[i],c=this._fields[r].extractor,n=c?c(t):t[r],a=this.tokenizer(n,{fields:[r]}),u=this.pipeline.run(a),h=new e.FieldRef(l,r),d=Object.create(null);this.fieldTermFrequencies[h]=d,this.fieldLengths[h]=0,this.fieldLengths[h]+=u.length;for(var N=0;N<u.length;N++){var L=u[N];if(d[L]==null&&(d[L]=0),d[L]+=1,this.invertedIndex[L]==null){var I=Object.create(null);I._index=this.termIndex,this.termIndex+=1;for(var Q=0;Q<o.length;Q++)I[o[Q]]=Object.create(null);this.invertedIndex[L]=I}this.invertedIndex[L][r][l]==null&&(this.invertedIndex[L][r][l]=Object.create(null));for(var y=0;y<this.metadataWhitelist.length;y++){var B=this.metadataWhitelist[y],x=L.metadata[B];this.invertedIndex[L][r][l][B]==null&&(this.invertedIndex[L][r][l][B]=[]),this.invertedIndex[L][r][l][B].push(x)}}}},e.Builder.prototype.calculateAverageFieldLengths=function(){for(var t=Object.keys(this.fieldLengths),s=t.length,l={},o={},i=0;i<s;i++){var r=e.FieldRef.fromString(t[i]),c=r.fieldName;o[c]||(o[c]=0),o[c]+=1,l[c]||(l[c]=0),l[c]+=this.fieldLengths[r]}for(var n=Object.keys(this._fields),i=0;i<n.length;i++){var a=n[i];l[a]=l[a]/o[a]}this.averageFieldLength=l},e.Builder.prototype.createFieldVectors=function(){for(var t={},s=Object.keys(this.fieldTermFrequencies),l=s.length,o=Object.create(null),i=0;i<l;i++){for(var r=e.FieldRef.fromString(s[i]),c=r.fieldName,n=this.fieldLengths[r],a=new e.Vector,u=this.fieldTermFrequencies[r],h=Object.keys(u),d=h.length,N=this._fields[c].boost||1,L=this._documents[r.docRef].boost||1,I=0;I<d;I++){var Q=h[I],y=u[Q],B=this.invertedIndex[Q]._index,x,f,Y;o[Q]===void 0?(x=e.idf(this.invertedIndex[Q],this.documentCount),o[Q]=x):x=o[Q],f=x*((this._k1+1)*y)/(this._k1*(1-this._b+this._b*(n/this.averageFieldLength[c]))+y),f*=N,f*=L,Y=Math.round(f*1e3)/1e3,a.insert(B,Y)}t[r]=a}this.fieldVectors=t},e.Builder.prototype.createTokenSet=function(){this.tokenSet=e.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},e.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new e.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},e.Builder.prototype.use=function(t){var s=Array.prototype.slice.call(arguments,1);s.unshift(this),t.apply(this,s)},e.MatchData=function(t,s,l){for(var o=Object.create(null),i=Object.keys(l||{}),r=0;r<i.length;r++){var c=i[r];o[c]=l[c].slice()}this.metadata=Object.create(null),t!==void 0&&(this.metadata[t]=Object.create(null),this.metadata[t][s]=o)},e.MatchData.prototype.combine=function(t){for(var s=Object.keys(t.metadata),l=0;l<s.length;l++){var o=s[l],i=Object.keys(t.metadata[o]);this.metadata[o]==null&&(this.metadata[o]=Object.create(null));for(var r=0;r<i.length;r++){var c=i[r],n=Object.keys(t.metadata[o][c]);this.metadata[o][c]==null&&(this.metadata[o][c]=Object.create(null));for(var a=0;a<n.length;a++){var u=n[a];this.metadata[o][c][u]==null?this.metadata[o][c][u]=t.metadata[o][c][u]:this.metadata[o][c][u]=this.metadata[o][c][u].concat(t.metadata[o][c][u])}}}},e.MatchData.prototype.add=function(t,s,l){if(!(t in this.metadata)){this.metadata[t]=Object.create(null),this.metadata[t][s]=l;return}if(!(s in this.metadata[t])){this.metadata[t][s]=l;return}for(var o=Object.keys(l),i=0;i<o.length;i++){var r=o[i];r in this.metadata[t][s]?this.metadata[t][s][r]=this.metadata[t][s][r].concat(l[r]):this.metadata[t][s][r]=l[r]}},e.Query=function(t){this.clauses=[],this.allFields=t},e.Query.wildcard=new String("*"),e.Query.wildcard.NONE=0,e.Query.wildcard.LEADING=1,e.Query.wildcard.TRAILING=2,e.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},e.Query.prototype.clause=function(t){return"fields"in t||(t.fields=this.allFields),"boost"in t||(t.boost=1),"usePipeline"in t||(t.usePipeline=!0),"wildcard"in t||(t.wildcard=e.Query.wildcard.NONE),t.wildcard&e.Query.wildcard.LEADING&&t.term.charAt(0)!=e.Query.wildcard&&(t.term="*"+t.term),t.wildcard&e.Query.wildcard.TRAILING&&t.term.slice(-1)!=e.Query.wildcard&&(t.term=""+t.term+"*"),"presence"in t||(t.presence=e.Query.presence.OPTIONAL),this.clauses.push(t),this},e.Query.prototype.isNegated=function(){for(var t=0;t<this.clauses.length;t++)if(this.clauses[t].presence!=e.Query.presence.PROHIBITED)return!1;return!0},e.Query.prototype.term=function(t,s){if(Array.isArray(t))return t.forEach(function(o){this.term(o,e.utils.clone(s))},this),this;var l=s||{};return l.term=t.toString(),this.clause(l),this},e.QueryParseError=function(t,s,l){this.name="QueryParseError",this.message=t,this.start=s,this.end=l},e.QueryParseError.prototype=new Error,e.QueryLexer=function(t){this.lexemes=[],this.str=t,this.length=t.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},e.QueryLexer.prototype.run=function(){for(var t=e.QueryLexer.lexText;t;)t=t(this)},e.QueryLexer.prototype.sliceString=function(){for(var t=[],s=this.start,l=this.pos,o=0;o<this.escapeCharPositions.length;o++)l=this.escapeCharPositions[o],t.push(this.str.slice(s,l)),s=l+1;return t.push(this.str.slice(s,this.pos)),this.escapeCharPositions.length=0,t.join("")},e.QueryLexer.prototype.emit=function(t){this.lexemes.push({type:t,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},e.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},e.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return e.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},e.QueryLexer.prototype.width=function(){return this.pos-this.start},e.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},e.QueryLexer.prototype.backup=function(){this.pos-=1},e.QueryLexer.prototype.acceptDigitRun=function(){var t,s;do t=this.next(),s=t.charCodeAt(0);while(s>47&&s<58);t!=e.QueryLexer.EOS&&this.backup()},e.QueryLexer.prototype.more=function(){return this.pos<this.length},e.QueryLexer.EOS="EOS",e.QueryLexer.FIELD="FIELD",e.QueryLexer.TERM="TERM",e.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",e.QueryLexer.BOOST="BOOST",e.QueryLexer.PRESENCE="PRESENCE",e.QueryLexer.lexField=function(t){return t.backup(),t.emit(e.QueryLexer.FIELD),t.ignore(),e.QueryLexer.lexText},e.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(e.QueryLexer.TERM)),t.ignore(),t.more())return e.QueryLexer.lexText},e.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.EDIT_DISTANCE),e.QueryLexer.lexText},e.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.BOOST),e.QueryLexer.lexText},e.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(e.QueryLexer.TERM)},e.QueryLexer.termSeparator=e.tokenizer.separator,e.QueryLexer.lexText=function(t){for(;;){var s=t.next();if(s==e.QueryLexer.EOS)return e.QueryLexer.lexEOS;if(s.charCodeAt(0)==92){t.escapeCharacter();continue}if(s==":")return e.QueryLexer.lexField;if(s=="~")return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexEditDistance;if(s=="^")return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexBoost;if(s=="+"&&t.width()===1||s=="-"&&t.width()===1)return t.emit(e.QueryLexer.PRESENCE),e.QueryLexer.lexText;if(s.match(e.QueryLexer.termSeparator))return e.QueryLexer.lexTerm}},e.QueryParser=function(t,s){this.lexer=new e.QueryLexer(t),this.query=s,this.currentClause={},this.lexemeIdx=0},e.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=e.QueryParser.parseClause;t;)t=t(this);return this.query},e.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},e.QueryParser.prototype.consumeLexeme=function(){var t=this.peekLexeme();return this.lexemeIdx+=1,t},e.QueryParser.prototype.nextClause=function(){var t=this.currentClause;this.query.clause(t),this.currentClause={}},e.QueryParser.parseClause=function(t){var s=t.peekLexeme();if(s!=null)switch(s.type){case e.QueryLexer.PRESENCE:return e.QueryParser.parsePresence;case e.QueryLexer.FIELD:return e.QueryParser.parseField;case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var l="expected either a field or a term, found "+s.type;throw s.str.length>=1&&(l+=" with value '"+s.str+"'"),new e.QueryParseError(l,s.start,s.end)}},e.QueryParser.parsePresence=function(t){var s=t.consumeLexeme();if(s!=null){switch(s.str){case"-":t.currentClause.presence=e.Query.presence.PROHIBITED;break;case"+":t.currentClause.presence=e.Query.presence.REQUIRED;break;default:var l="unrecognised presence operator'"+s.str+"'";throw new e.QueryParseError(l,s.start,s.end)}var o=t.peekLexeme();if(o==null){var l="expecting term or field, found nothing";throw new e.QueryParseError(l,s.start,s.end)}switch(o.type){case e.QueryLexer.FIELD:return e.QueryParser.parseField;case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var l="expecting term or field, found '"+o.type+"'";throw new e.QueryParseError(l,o.start,o.end)}}},e.QueryParser.parseField=function(t){var s=t.consumeLexeme();if(s!=null){if(t.query.allFields.indexOf(s.str)==-1){var l=t.query.allFields.map(function(r){return"'"+r+"'"}).join(", "),o="unrecognised field '"+s.str+"', possible fields: "+l;throw new e.QueryParseError(o,s.start,s.end)}t.currentClause.fields=[s.str];var i=t.peekLexeme();if(i==null){var o="expecting term, found nothing";throw new e.QueryParseError(o,s.start,s.end)}switch(i.type){case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var o="expecting term, found '"+i.type+"'";throw new e.QueryParseError(o,i.start,i.end)}}},e.QueryParser.parseTerm=function(t){var s=t.consumeLexeme();if(s!=null){t.currentClause.term=s.str.toLowerCase(),s.str.indexOf("*")!=-1&&(t.currentClause.usePipeline=!1);var l=t.peekLexeme();if(l==null){t.nextClause();return}switch(l.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;case e.QueryLexer.PRESENCE:return t.nextClause(),e.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+l.type+"'";throw new e.QueryParseError(o,l.start,l.end)}}},e.QueryParser.parseEditDistance=function(t){var s=t.consumeLexeme();if(s!=null){var l=parseInt(s.str,10);if(isNaN(l)){var o="edit distance must be numeric";throw new e.QueryParseError(o,s.start,s.end)}t.currentClause.editDistance=l;var i=t.peekLexeme();if(i==null){t.nextClause();return}switch(i.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;case e.QueryLexer.PRESENCE:return t.nextClause(),e.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+i.type+"'";throw new e.QueryParseError(o,i.start,i.end)}}},e.QueryParser.parseBoost=function(t){var s=t.consumeLexeme();if(s!=null){var l=parseInt(s.str,10);if(isNaN(l)){var o="boost must be numeric";throw new e.QueryParseError(o,s.start,s.end)}t.currentClause.boost=l;var i=t.peekLexeme();if(i==null){t.nextClause();return}switch(i.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;case e.QueryLexer.PRESENCE:return t.nextClause(),e.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+i.type+"'";throw new e.QueryParseError(o,i.start,i.end)}}},function(t,s){typeof define=="function"&&define.amd?define(s):typeof Gt=="object"?kt.exports=s():t.lunr=s()}(this,function(){return e})})()});var ae=Object.defineProperty,be=(e,t,s)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,tt=(e,t,s)=>(be(e,typeof t!="symbol"?t+"":t,s),s);var jt=ne(St(),1),Tt=class{static async fetchAndGenerateIndex(e=this.endpoint){let s=await(await fetch(e)).json(),l=new this;return l.generateIndex(s),{searchIndex:s,searchEngine:l}}async generateIndex(e){this.index=(0,jt.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),e.forEach(t=>{t.content&&this.add(t)})}),this.indexData=e}performSearch(e,t=null){if(this.index){this.query=e;let s=e.trim().length>0,l=e.split(" ").map((r,c,n)=>`${r}${c===n.length-1?`* ${r}~1`:"~1"}`).join(" "),o=s?this.index.search(`${e} ${l}`):this.index.search(`"*" ${l}`);return o?.length>0?o.map(r=>{let c=this.indexData.find(u=>u.id==r.ref),n=this.previewTemplate(c.content,t),a=this.previewTemplate(c.title)+`<!--(${r.score})-->`;return{id:c.id.trim(),title:c.title.trim(),collection:c.collection,content:c.content.trim(),categories:c.categories,url:c.url.trim(),heading:a,preview:n}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(e,t){t==null&&(t=300);let s=t/2,l;if(t){let o=e.toLowerCase(),i=this.query.toLowerCase().split(" ").map(r=>o.indexOf(r)).filter(r=>r!=-1).sort((r,c)=>r-c);i[1]&&(t=Math.min(i[1]-i[0],t)),l=e.substr(Math.max(0,i[0]-s),t+s)}else l=e;return e.startsWith(l)||(l="\u2026"+l),e.endsWith(l)||(l=l+"\u2026"),this.query.toLowerCase().split(" ").forEach(o=>{o!=""&&(l=l.replace(new RegExp(`(${o.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))}),l}};tt(Tt,"endpoint","/bridgetown_quick_search/index.json");var Zt=Tt;var ue=e=>class extends At(e){static get elementStyles(){return this.__elementStyles}static set elementStyles(s){this.__elementStyles=s}adoptStyles(s){let l=this.constructor,{elementStyles:o}=l;o&&wt(s,o),this.renderOptions.renderBefore=this.renderOptions.renderBefore||s.firstChild||void 0}},Qt=Wt(ue);var G=class extends zt(Qt(bt)){};var yt=mt(class extends xt{constructor(e){if(super(e),e.type!==Z.PROPERTY&&e.type!==Z.ATTRIBUTE&&e.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Bt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===$||t===Ut)return t;let s=e.element,l=e.name;if(e.type===Z.PROPERTY){if(t===s[l])return $}else if(e.type===Z.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(l))return $}else if(e.type===Z.ATTRIBUTE&&s.getAttribute(l)===t+"")return $;return vt(e),t}});var Ct=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function pt(e,t,s,l){e.addEventListener?e.addEventListener(t,s,l):e.attachEvent&&e.attachEvent("on".concat(t),function(){s(window.event)})}function Jt(e,t){for(var s=t.slice(0,t.length-1),l=0;l<s.length;l++)s[l]=e[s[l].toLowerCase()];return s}function Kt(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),s=t.lastIndexOf("");s>=0;)t[s-1]+=",",t.splice(s,1),s=t.lastIndexOf("");return t}function ge(e,t){for(var s=e.length>=t.length?e:t,l=e.length>=t.length?t:e,o=!0,i=0;i<s.length;i++)l.indexOf(s[i])===-1&&(o=!1);return o}var st={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ct?173:189,"=":Ct?61:187,";":Ct?59:186,"'":222,"[":219,"]":221,"\\":220},A={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Nt={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},m={16:!1,18:!1,17:!1,91:!1},U={};for(et=1;et<20;et++)st["f".concat(et)]=111+et;var et,M=[],Et=!1,Ht="all",_t=[],ht=function(t){return st[t.toLowerCase()]||A[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},de=function(t){return Object.keys(st).find(function(s){return st[s]===t})},he=function(t){return Object.keys(A).find(function(s){return A[s]===t})};function Pt(e){Ht=e||"all"}function lt(){return Ht||"all"}function Le(){return M.slice(0)}function Qe(){return M.map(function(e){return de(e)||he(e)||String.fromCharCode(e)})}function ye(e){var t=e.target||e.srcElement,s=t.tagName,l=!0;return(t.isContentEditable||(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")&&!t.readOnly)&&(l=!1),l}function Ce(e){return typeof e=="string"&&(e=ht(e)),M.indexOf(e)!==-1}function pe(e,t){var s,l;e||(e=lt());for(var o in U)if(Object.prototype.hasOwnProperty.call(U,o))for(s=U[o],l=0;l<s.length;)s[l].scope===e?s.splice(l,1):l++;lt()===e&&Pt(t||"all")}function Me(e){var t=e.keyCode||e.which||e.charCode,s=M.indexOf(t);if(s>=0&&M.splice(s,1),e.key&&e.key.toLowerCase()==="meta"&&M.splice(0,M.length),(t===93||t===224)&&(t=91),t in m){m[t]=!1;for(var l in A)A[l]===t&&(W[l]=!1)}}function Ie(e){if(typeof e>"u")Object.keys(U).forEach(function(r){return delete U[r]});else if(Array.isArray(e))e.forEach(function(r){r.key&&Mt(r)});else if(typeof e=="object")e.key&&Mt(e);else if(typeof e=="string"){for(var t=arguments.length,s=new Array(t>1?t-1:0),l=1;l<t;l++)s[l-1]=arguments[l];var o=s[0],i=s[1];typeof o=="function"&&(i=o,o=""),Mt({key:e,scope:o,method:i,splitKey:"+"})}}var Mt=function(t){var s=t.key,l=t.scope,o=t.method,i=t.splitKey,r=i===void 0?"+":i,c=Kt(s);c.forEach(function(n){var a=n.split(r),u=a.length,h=a[u-1],d=h==="*"?"*":ht(h);if(U[d]){l||(l=lt());var N=u>1?Jt(A,a):[];U[d]=U[d].filter(function(L){var I=o?L.method===o:!0;return!(I&&L.scope===l&&ge(L.mods,N))})}})};function Rt(e,t,s,l){if(t.element===l){var o;if(t.scope===s||t.scope==="all"){o=t.mods.length>0;for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&(!m[i]&&t.mods.indexOf(+i)>-1||m[i]&&t.mods.indexOf(+i)===-1)&&(o=!1);(t.mods.length===0&&!m[16]&&!m[18]&&!m[17]&&!m[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Yt(e,t){var s=U["*"],l=e.keyCode||e.which||e.charCode;if(W.filter.call(this,e)){if((l===93||l===224)&&(l=91),M.indexOf(l)===-1&&l!==229&&M.push(l),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(L){var I=Nt[L];e[L]&&M.indexOf(I)===-1?M.push(I):!e[L]&&M.indexOf(I)>-1?M.splice(M.indexOf(I),1):L==="metaKey"&&e[L]&&M.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(M=M.slice(M.indexOf(I))))}),l in m){m[l]=!0;for(var o in A)A[o]===l&&(W[o]=!0);if(!s)return}for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&(m[i]=e[Nt[i]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(M.indexOf(17)===-1&&M.push(17),M.indexOf(18)===-1&&M.push(18),m[17]=!0,m[18]=!0);var r=lt();if(s)for(var c=0;c<s.length;c++)s[c].scope===r&&(e.type==="keydown"&&s[c].keydown||e.type==="keyup"&&s[c].keyup)&&Rt(e,s[c],r,t);if(l in U){for(var n=0;n<U[l].length;n++)if((e.type==="keydown"&&U[l][n].keydown||e.type==="keyup"&&U[l][n].keyup)&&U[l][n].key){for(var a=U[l][n],u=a.splitKey,h=a.key.split(u),d=[],N=0;N<h.length;N++)d.push(ht(h[N]));d.sort().join("")===M.sort().join("")&&Rt(e,a,r,t)}}}}function Ne(e){return _t.indexOf(e)>-1}function W(e,t,s){M=[];var l=Kt(e),o=[],i="all",r=document,c=0,n=!1,a=!0,u="+",h=!1;for(s===void 0&&typeof t=="function"&&(s=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(i=t.scope),t.element&&(r=t.element),t.keyup&&(n=t.keyup),t.keydown!==void 0&&(a=t.keydown),t.capture!==void 0&&(h=t.capture),typeof t.splitKey=="string"&&(u=t.splitKey)),typeof t=="string"&&(i=t);c<l.length;c++)e=l[c].split(u),o=[],e.length>1&&(o=Jt(A,e)),e=e[e.length-1],e=e==="*"?"*":ht(e),e in U||(U[e]=[]),U[e].push({keyup:n,keydown:a,scope:i,mods:o,shortcut:l[c],method:s,key:l[c],splitKey:u,element:r});typeof r<"u"&&!Ne(r)&&window&&(_t.push(r),pt(r,"keydown",function(d){Yt(d,r)},h),Et||(Et=!0,pt(window,"focus",function(){M=[]},h)),pt(r,"keyup",function(d){Yt(d,r),Me(d)},h))}function De(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(U).forEach(function(s){var l=U[s].filter(function(o){return o.scope===t&&o.shortcut===e});l.forEach(function(o){o&&o.method&&o.method()})})}var It={getPressedKeyString:Qe,setScope:Pt,getScope:lt,deleteScope:pe,getPressedKeyCodes:Le,isPressed:Ce,filter:ye,trigger:De,unbind:Ie,keyMap:st,modifier:A,modifierMap:Nt};for(dt in It)Object.prototype.hasOwnProperty.call(It,dt)&&(W[dt]=It[dt]);var dt;typeof window<"u"&&(Vt=window.hotkeys,W.noConflict=function(e){return e&&window.hotkeys===W&&(window.hotkeys=Vt),W},window.hotkeys=W);var Vt;var H=O`
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
`,qt=O`
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
`;var E=class extends G{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=ut()}render(){let t="";if(!this.hideBreadcrumbs){let s=[];if(this.breadcrumbs)for(let l of this.breadcrumbs)s.push(p`<button
              type="button"
              @click=${()=>this.selectParent(l)}
              class="breadcrumb"
            >
              ${l}
            </button>`);t=p`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${s}

        <button type="button" class="breadcrumb breadcrumb--close" @click=${this.dispatchEscKey}>
          Cancel
        </button>
      </div>`}return p`
      ${t}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${gt(this._inputRef)}
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
    `}setSearch(t){this._inputRef.value&&(this._inputRef.value.value=t)}dispatchEscKey(){this.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>this._inputRef.value?.focus())}_handleInput(t){let s=t.target;s instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:s.value},bubbles:!1,composed:!1}))}selectParent(t){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:t},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};z(E,"baseName","ninja-header"),z(E,"styles",[H,O`
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
    `]),z(E,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});function*$t(e,t){let s=typeof t=="function";if(e!==void 0){let l=-1;for(let o of e)l>-1&&(yield s?t(l):t),l++,yield o}}function te(e,t,s,l){var o=arguments.length,i=o<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,s):l,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,s,l);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i}var ee=O`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var Dt=class extends bt{render(){return p`<span><slot></slot></span>`}};Dt.styles=[ee];Dt=te([Xt("mwc-icon")],Dt);var R=class extends G{constructor(){super(),this.action={},this.selected=!1,this.hotKeysJoinedView=!0}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}));let t=this.shadowRoot?.querySelector("a");t&&t.click()}forceClick(){let t=this.shadowRoot?.querySelector("a");t&&t.click()}updated(t){t.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true")))}render(){let t={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(t):p`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${K(t)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(t){let s=this.action.attributes||{},{download:l,hreflang:o,ping:i,referrerpolicy:r,rel:c,target:n,type:a}=s;return p`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${K(t)}
        href=${this.action.href}
        download=${X(l)}
        hreflang=${X(o)}
        ping=${X(i)}
        referrerpolicy=${X(r)}
        rel=${X(c)}
        target=${X(n)}
        type=${X(a)}
      >
        ${this.renderBody()}
      </a>
    `}renderBody(){let t;return this.action.mdIcon?t=p`<mwc-icon part="ninja-icon" class="ninja-icon">
        ${this.action.mdIcon}
      </mwc-icon>`:this.action.icon&&(t=Ft(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `)),p`
        <div part="ninja-action__header" class="ninja-action__header">
          ${t}
          <div part="ninja-action__title" class="ninja-title">${this.action.title}</div>
          ${this.renderHotkey()}
        </div>

        ${Ot(this.action.content,()=>p`<div part="ninja-action__content" class="ninja-action__content">
            ${this.action.content}
          </div>`)}
    `}renderHotkey(){let t;return this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(s=>{let l=s.split("+"),o=p`${$t(l.map(i=>p`<kbd part="ninja-hotkey">${i}</kbd>`),"+")}`;return p`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${o}
          </div>`}):t=this.action.hotkey.split(",").map(s=>{let o=s.split("+").map(i=>p`<kbd part="ninja-hotkey" class="ninja-hotkey">${i}</kbd>`);return p`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${o}</kbd>`})),t}};z(R,"baseName","ninja-action"),z(R,"styles",[H,O`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
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
    `]),z(R,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{}});var se=p` <div part="modal-footer" class="modal-footer" slot="footer">
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
</div>`;var F=W,k=class extends G{static get scopedElements(){return{"ninja-action":R,"ninja-header":E}}constructor(){super(),this._headerRef=ut(),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.searchLabel="Search for actions",this.listboxLabel="List of actions",this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.__selected__=null,this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this.currentRoot=void 0,this._flatData=[]}open(t={}){this._bump=!0,this.visible=!0;let s=this._headerRef.value;if(s&&(s.focusSearch(),s.expanded=!0,s.controls="actions-list"),this._actionMatches.length>0){this._selected=this._actionMatches[0];let l=this._headerRef.value;l&&this._selected&&this._selected.id&&(l.activeDescendant=this._selected.id)}this.setParent(t.parent)}close(){this._bump=!1,this.visible=!1;let t=this._headerRef.value;t&&(t.expanded=!1)}setParent(t){t?this.currentRoot=t:this.currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value?.setSearch("")}getBreadcrumbs(){let t=[],s=this._selected?.parent;if(s)for(t.push(s);s;){let l=this._flatData.find(o=>o.id===s);l?.parent&&t.push(l.parent),s=l?l.parent:void 0}return t.reverse()}get _selected(){return this.__selected__}set _selected(t){let s=this._headerRef.value;s&&t&&t.id&&(s.activeDescendant=t.id);let l=this.__selected__;this.__selected__=t,this.requestUpdate("_selected",l)}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(t,s){let l=[];return t||(t=[]),t.map(o=>{let i=o.children&&o.children.some(c=>typeof c=="string"),r={...o,parent:o.parent||s};return i||(r.children&&r.children.length&&(s=o.id,l=[...l,...r.children]),r.children=r.children?r.children.map(c=>c.id):[]),r}).concat(l.length?this._flattern(l,s):l)}update(t){t.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.forEach(s=>{s.hotkey&&F(s.hotkey,l=>{l.preventDefault(),s.handler&&s.handler(s,l)})})),super.update(t)}shouldNotOpen(t){let s=t.composedPath(),l=["input","textarea"];return s.some(o=>o?.getAttribute?.("contenteditable")==="true"?!0:l.includes(o?.tagName?.toLowerCase()))}_registerInternalHotkeys(){this.openHotkey&&F(this.openHotkey,t=>{this.shouldNotOpen(t)||(t.preventDefault(),this.visible?this.close():this.open())}),this.selectHotkey&&F(this.selectHotkey,t=>{this.visible&&(t.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex],t))}),this.goBackHotkey&&F(this.goBackHotkey,t=>{this.visible&&(this._search||(t.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&F(this.navigationDownHotkey,t=>{this.visible&&(t.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&F(this.navigationUpHotkey,t=>{this.visible&&(t.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&F(this.closeHotkey,t=>{this.visible&&(t.preventDefault(),this.close())})}_unregisterInternalHotkeys(){this.openHotkey&&F.unbind(this.openHotkey),this.selectHotkey&&F.unbind(this.selectHotkey),this.goBackHotkey&&F.unbind(this.goBackHotkey),this.navigationDownHotkey&&F.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&F.unbind(this.navigationUpHotkey),this.closeHotkey&&F.unbind(this.closeHotkey)}_actionFocused(t,s){this._selected=t,s.target.ensureInView()}_onTransitionEnd(){this._bump=!1}get breadcrumbs(){return this.getBreadcrumbs()}_goBack(){let t=this.getBreadcrumbs();if(t){let s=t.length>1?t[t.length-2]:void 0;this.setParent(s);return}}findActionElement(t=this._selectedIndex){let s=this._actionMatches[t]?.id;if(s==null)return null;let l="#ninja-action__"+s;return this.shadowRoot?.querySelector(l)}findMatches(t){return t.filter(s=>{let l=this._search.replace(/\\/g,"\\\\"),o=new RegExp(l,"gi"),i=s.title?.match?.(o)||s.keywords?.match?.(o)||s.content?.match?.(o);return(!this.currentRoot&&this._search||s.parent===this.currentRoot)&&i})}render(){let t={bump:this._bump,"modal-content":!0},s={visible:this.visible,modal:!0},l,o=this._flatData;o=this.findMatches(o),l=o.reduce((c,n)=>c.set(n.section,[...c.get(n.section)||[],n]),new Map),this._actionMatches=[...l.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let i=c=>p` ${ft(c,n=>n.id,n=>p`<ninja-action
            id=${"ninja-action__"+n.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content"
            aria-selected=${yt(n.id===this._selected?.id)}
            .selected=${yt(n.id===this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mousemove=${a=>{this._actionFocused(n,a)}}
            @actionsSelected=${a=>this._actionSelected(a.detail,a)}
            .action=${n}
          ></ninja-action>`)}`,r=[];return l.forEach((c,n)=>{let a=n?p`<div class="group-header">${n}</div>`:void 0;r.push(p`${a}${i(c)}`)}),p`
      <div part="modal-overlay" @click=${this._overlayClick} class=${K(s)}>
        <div part="modal-content" class=${K(t)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${gt(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${c=>this.setParent(c.detail.parent)}
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

            <div class="visually-hidden">
              <slot id="listbox-label" name="listbox-label">
                <span>${this.listboxLabel}</span>
              </slot>
            </div>
            <slot name="footer"> ${se} </slot>
          </div>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(t,s){this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:t},bubbles:!0,composed:!0})),t&&(t.children&&t.children?.length>0&&(this.currentRoot=t.id,this._search=""),this._headerRef.value?.setSearch(""),this._headerRef.value?.focusSearch(),t.handler?t.handler(t,s)?.keepOpen||this.close():this.findActionElement(this._selectedIndex)?.forceClick(),this._bump=!0)}async _handleInput(t){this._search=t.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(t){let s=t.target;s instanceof Element&&s?.classList.contains("modal")&&this.close()}};z(k,"baseName","ninja-keys"),z(k,"styles",[H,qt]),z(k,"properties",{placeholder:{type:String},disableHotkeys:{type:Boolean},searchLabel:{attribute:"search-label"},listboxLabel:{attribute:"listbox-label"},hideBreadcrumbs:{type:Boolean},openHotkey:{},navigationUpHotkey:{},navigationDownHotkey:{},closeHotkey:{},goBackHotkey:{},selectHotkey:{},hotKeysJoinedView:{type:Boolean},noAutoLoadMdIcons:{type:Boolean},data:{type:Array,hasChanged(){return!0}},__selected__:{state:!0},visible:{state:!0},_bump:{state:!0},_actionMatches:{state:!0},_search:{state:!0},currentRoot:{state:!0},_flatData:{state:!0}});var Lt=class extends k{findMatches(e){let t=super.findMatches(e);return this.results.forEach(s=>{t.find(l=>l.id===s.id)||t.push(s)}),t}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(e){e.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(e)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:e,searchIndex:t}=await Zt.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=e,this.__searchIndex=t,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),[...this.staticData,...this.results]}showResultsForQuery(e,t=100){if(this.latestQuery=e,this.alwaysShowResults===!0||e&&e.length>=1){let s=this.__searchEngine.performSearch(e||"*",this.snippetLength).slice(0,t),l=[];return s.length<=0?[]:(s.forEach(o=>{let i=this.transformResult(o);i&&l.push(i)}),l)}return[]}transformResult(e){let{id:t,title:s,categories:l,url:o,content:i,collection:r}=e;if(!o.endsWith(".json"))return l=l.split(/[-_]/).map(we).join(" "),{id:t,title:s,section:l,href:o}}};tt(Lt,"baseName","bridgetown-ninja-keys");tt(Lt,"properties",Object.assign(k.properties,{snippetLength:{attribute:"snippet-length",state:!0,type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function we(e){return e.charAt(0).toUpperCase()+e.slice(1)}(window.requestIdleCallback||window.setTimeout)(async()=>{let e=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends Lt{constructor(...t){super(...t),this.staticData=e}createData(){return this.results=this.showResultsForQuery(this._search||"*").reverse(),this.results.forEach(t=>{t.icon='<sl-icon name="link-45deg"></sl-icon>'}),[...this.staticData,...this.results]}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(t=>{t.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(t=>t.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(t=>t.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
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

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
*/
//# sourceMappingURL=/form-associated-helpers/bridgetown/static/javascript/defer.HDJDL4GL.js.map
