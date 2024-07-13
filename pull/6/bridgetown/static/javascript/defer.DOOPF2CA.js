import{a as zt,b as Wt,c as Qt,d as yt,e as jt}from"/form-associated-helpers/pull/6/bridgetown/static/chunks/chunk-2XZPSS2T.js";import{a as G}from"/form-associated-helpers/pull/6/bridgetown/static/chunks/chunk-S2ANUPFH.js";import{a as z,b as Ot,c as I,d as E,e as Xt,g as ht,h as W,i as dt,j as gt,k as Lt,l as Gt,m as St,n as kt,o as Tt}from"/form-associated-helpers/pull/6/bridgetown/static/chunks/chunk-XW73SPZZ.js";import{a as Ne,c as Ie,d as x}from"/form-associated-helpers/pull/6/bridgetown/static/chunks/chunk-JGX3FA43.js";var be=Ne((ne,ae)=>{(function(){var e=function(t){var s=new e.Builder;return s.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),s.searchPipeline.add(e.stemmer),t.call(s,s),s.build()};e.version="2.3.9";e.utils={},e.utils.warn=function(t){return function(s){t.console&&console.warn&&console.warn(s)}}(this),e.utils.asString=function(t){return t==null?"":t.toString()},e.utils.clone=function(t){if(t==null)return t;for(var s=Object.create(null),l=Object.keys(t),o=0;o<l.length;o++){var r=l[o],i=t[r];if(Array.isArray(i)){s[r]=i.slice();continue}if(typeof i=="string"||typeof i=="number"||typeof i=="boolean"){s[r]=i;continue}throw new TypeError("clone is not deep and does not support nested objects")}return s},e.FieldRef=function(t,s,l){this.docRef=t,this.fieldName=s,this._stringValue=l},e.FieldRef.joiner="/",e.FieldRef.fromString=function(t){var s=t.indexOf(e.FieldRef.joiner);if(s===-1)throw"malformed field ref string";var l=t.slice(0,s),o=t.slice(s+1);return new e.FieldRef(o,l,t)},e.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+e.FieldRef.joiner+this.docRef),this._stringValue};e.Set=function(t){if(this.elements=Object.create(null),t){this.length=t.length;for(var s=0;s<this.length;s++)this.elements[t[s]]=!0}else this.length=0},e.Set.complete={intersect:function(t){return t},union:function(){return this},contains:function(){return!0}},e.Set.empty={intersect:function(){return this},union:function(t){return t},contains:function(){return!1}},e.Set.prototype.contains=function(t){return!!this.elements[t]},e.Set.prototype.intersect=function(t){var s,l,o,r=[];if(t===e.Set.complete)return this;if(t===e.Set.empty)return t;this.length<t.length?(s=this,l=t):(s=t,l=this),o=Object.keys(s.elements);for(var i=0;i<o.length;i++){var n=o[i];n in l.elements&&r.push(n)}return new e.Set(r)},e.Set.prototype.union=function(t){return t===e.Set.complete?e.Set.complete:t===e.Set.empty?this:new e.Set(Object.keys(this.elements).concat(Object.keys(t.elements)))},e.idf=function(t,s){var l=0;for(var o in t)o!="_index"&&(l+=Object.keys(t[o]).length);var r=(s-l+.5)/(l+.5);return Math.log(1+Math.abs(r))},e.Token=function(t,s){this.str=t||"",this.metadata=s||{}},e.Token.prototype.toString=function(){return this.str},e.Token.prototype.update=function(t){return this.str=t(this.str,this.metadata),this},e.Token.prototype.clone=function(t){return t=t||function(s){return s},new e.Token(t(this.str,this.metadata),this.metadata)};e.tokenizer=function(t,s){if(t==null||t==null)return[];if(Array.isArray(t))return t.map(function(g){return new e.Token(e.utils.asString(g).toLowerCase(),e.utils.clone(s))});for(var l=t.toString().toLowerCase(),o=l.length,r=[],i=0,n=0;i<=o;i++){var a=l.charAt(i),c=i-n;if(a.match(e.tokenizer.separator)||i==o){if(c>0){var b=e.utils.clone(s)||{};b.position=[n,c],b.index=r.length,r.push(new e.Token(l.slice(n,i),b))}n=i+1}}return r},e.tokenizer.separator=/[\s\-]+/;e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions=Object.create(null),e.Pipeline.registerFunction=function(t,s){s in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+s),t.label=s,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){var s=t.label&&t.label in this.registeredFunctions;s||e.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,t)},e.Pipeline.load=function(t){var s=new e.Pipeline;return t.forEach(function(l){var o=e.Pipeline.registeredFunctions[l];if(o)s.add(o);else throw new Error("Cannot load unregistered function: "+l)}),s},e.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(s){e.Pipeline.warnIfFunctionNotRegistered(s),this._stack.push(s)},this)},e.Pipeline.prototype.after=function(t,s){e.Pipeline.warnIfFunctionNotRegistered(s);var l=this._stack.indexOf(t);if(l==-1)throw new Error("Cannot find existingFn");l=l+1,this._stack.splice(l,0,s)},e.Pipeline.prototype.before=function(t,s){e.Pipeline.warnIfFunctionNotRegistered(s);var l=this._stack.indexOf(t);if(l==-1)throw new Error("Cannot find existingFn");this._stack.splice(l,0,s)},e.Pipeline.prototype.remove=function(t){var s=this._stack.indexOf(t);s!=-1&&this._stack.splice(s,1)},e.Pipeline.prototype.run=function(t){for(var s=this._stack.length,l=0;l<s;l++){for(var o=this._stack[l],r=[],i=0;i<t.length;i++){var n=o(t[i],i,t);if(!(n==null||n===""))if(Array.isArray(n))for(var a=0;a<n.length;a++)r.push(n[a]);else r.push(n)}t=r}return t},e.Pipeline.prototype.runString=function(t,s){var l=new e.Token(t,s);return this.run([l]).map(function(o){return o.toString()})},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})};e.Vector=function(t){this._magnitude=0,this.elements=t||[]},e.Vector.prototype.positionForIndex=function(t){if(this.elements.length==0)return 0;for(var s=0,l=this.elements.length/2,o=l-s,r=Math.floor(o/2),i=this.elements[r*2];o>1&&(i<t&&(s=r),i>t&&(l=r),i!=t);)o=l-s,r=s+Math.floor(o/2),i=this.elements[r*2];if(i==t||i>t)return r*2;if(i<t)return(r+1)*2},e.Vector.prototype.insert=function(t,s){this.upsert(t,s,function(){throw"duplicate index"})},e.Vector.prototype.upsert=function(t,s,l){this._magnitude=0;var o=this.positionForIndex(t);this.elements[o]==t?this.elements[o+1]=l(this.elements[o+1],s):this.elements.splice(o,0,t,s)},e.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t=0,s=this.elements.length,l=1;l<s;l+=2){var o=this.elements[l];t+=o*o}return this._magnitude=Math.sqrt(t)},e.Vector.prototype.dot=function(t){for(var s=0,l=this.elements,o=t.elements,r=l.length,i=o.length,n=0,a=0,c=0,b=0;c<r&&b<i;)n=l[c],a=o[b],n<a?c+=2:n>a?b+=2:n==a&&(s+=l[c+1]*o[b+1],c+=2,b+=2);return s},e.Vector.prototype.similarity=function(t){return this.dot(t)/this.magnitude()||0},e.Vector.prototype.toArray=function(){for(var t=new Array(this.elements.length/2),s=1,l=0;s<this.elements.length;s+=2,l++)t[l]=this.elements[s];return t},e.Vector.prototype.toJSON=function(){return this.elements};e.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},s={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},l="[^aeiou]",o="[aeiouy]",r=l+"[^aeiouy]*",i=o+"[aeiou]*",n="^("+r+")?"+i+r,a="^("+r+")?"+i+r+"("+i+")?$",c="^("+r+")?"+i+r+i+r,b="^("+r+")?"+o,g=new RegExp(n),h=new RegExp(c),p=new RegExp(a),L=new RegExp(b),M=/^(.+?)(ss|i)es$/,Q=/^(.+?)([^s])s$/,y=/^(.+?)eed$/,A=/^(.+?)(ed|ing)$/,v=/.$/,X=/(at|bl|iz)$/,Y=new RegExp("([^aeiouylsz])\\1$"),it=new RegExp("^"+r+o+"[^aeiouwxy]$"),q=/^(.+?[^aeiou])y$/,ct=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,nt=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,$=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,at=/^(.+?)(s|t)(ion)$/,T=/^(.+?)e$/,bt=/ll$/,ut=new RegExp("^"+r+o+"[^aeiouwxy]$"),tt=function(u){var N,R,B,d,D,Z,H;if(u.length<3)return u;if(B=u.substr(0,1),B=="y"&&(u=B.toUpperCase()+u.substr(1)),d=M,D=Q,d.test(u)?u=u.replace(d,"$1$2"):D.test(u)&&(u=u.replace(D,"$1$2")),d=y,D=A,d.test(u)){var m=d.exec(u);d=g,d.test(m[1])&&(d=v,u=u.replace(d,""))}else if(D.test(u)){var m=D.exec(u);N=m[1],D=L,D.test(N)&&(u=N,D=X,Z=Y,H=it,D.test(u)?u=u+"e":Z.test(u)?(d=v,u=u.replace(d,"")):H.test(u)&&(u=u+"e"))}if(d=q,d.test(u)){var m=d.exec(u);N=m[1],u=N+"i"}if(d=ct,d.test(u)){var m=d.exec(u);N=m[1],R=m[2],d=g,d.test(N)&&(u=N+t[R])}if(d=nt,d.test(u)){var m=d.exec(u);N=m[1],R=m[2],d=g,d.test(N)&&(u=N+s[R])}if(d=$,D=at,d.test(u)){var m=d.exec(u);N=m[1],d=h,d.test(N)&&(u=N)}else if(D.test(u)){var m=D.exec(u);N=m[1]+m[2],D=h,D.test(N)&&(u=N)}if(d=T,d.test(u)){var m=d.exec(u);N=m[1],d=h,D=p,Z=ut,(d.test(N)||D.test(N)&&!Z.test(N))&&(u=N)}return d=bt,D=h,d.test(u)&&D.test(u)&&(d=v,u=u.replace(d,"")),B=="y"&&(u=B.toLowerCase()+u.substr(1)),u};return function(J){return J.update(tt)}}(),e.Pipeline.registerFunction(e.stemmer,"stemmer");e.generateStopWordFilter=function(t){var s=t.reduce(function(l,o){return l[o]=o,l},{});return function(l){if(l&&s[l.toString()]!==l.toString())return l}},e.stopWordFilter=e.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter");e.trimmer=function(t){return t.update(function(s){return s.replace(/^\W+/,"").replace(/\W+$/,"")})},e.Pipeline.registerFunction(e.trimmer,"trimmer");e.TokenSet=function(){this.final=!1,this.edges={},this.id=e.TokenSet._nextId,e.TokenSet._nextId+=1},e.TokenSet._nextId=1,e.TokenSet.fromArray=function(t){for(var s=new e.TokenSet.Builder,l=0,o=t.length;l<o;l++)s.insert(t[l]);return s.finish(),s.root},e.TokenSet.fromClause=function(t){return"editDistance"in t?e.TokenSet.fromFuzzyString(t.term,t.editDistance):e.TokenSet.fromString(t.term)},e.TokenSet.fromFuzzyString=function(t,s){for(var l=new e.TokenSet,o=[{node:l,editsRemaining:s,str:t}];o.length;){var r=o.pop();if(r.str.length>0){var i=r.str.charAt(0),n;i in r.node.edges?n=r.node.edges[i]:(n=new e.TokenSet,r.node.edges[i]=n),r.str.length==1&&(n.final=!0),o.push({node:n,editsRemaining:r.editsRemaining,str:r.str.slice(1)})}if(r.editsRemaining!=0){if("*"in r.node.edges)var a=r.node.edges["*"];else{var a=new e.TokenSet;r.node.edges["*"]=a}if(r.str.length==0&&(a.final=!0),o.push({node:a,editsRemaining:r.editsRemaining-1,str:r.str}),r.str.length>1&&o.push({node:r.node,editsRemaining:r.editsRemaining-1,str:r.str.slice(1)}),r.str.length==1&&(r.node.final=!0),r.str.length>=1){if("*"in r.node.edges)var c=r.node.edges["*"];else{var c=new e.TokenSet;r.node.edges["*"]=c}r.str.length==1&&(c.final=!0),o.push({node:c,editsRemaining:r.editsRemaining-1,str:r.str.slice(1)})}if(r.str.length>1){var b=r.str.charAt(0),g=r.str.charAt(1),h;g in r.node.edges?h=r.node.edges[g]:(h=new e.TokenSet,r.node.edges[g]=h),r.str.length==1&&(h.final=!0),o.push({node:h,editsRemaining:r.editsRemaining-1,str:b+r.str.slice(2)})}}}return l},e.TokenSet.fromString=function(t){for(var s=new e.TokenSet,l=s,o=0,r=t.length;o<r;o++){var i=t[o],n=o==r-1;if(i=="*")s.edges[i]=s,s.final=n;else{var a=new e.TokenSet;a.final=n,s.edges[i]=a,s=a}}return l},e.TokenSet.prototype.toArray=function(){for(var t=[],s=[{prefix:"",node:this}];s.length;){var l=s.pop(),o=Object.keys(l.node.edges),r=o.length;l.node.final&&(l.prefix.charAt(0),t.push(l.prefix));for(var i=0;i<r;i++){var n=o[i];s.push({prefix:l.prefix.concat(n),node:l.node.edges[n]})}}return t},e.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var t=this.final?"1":"0",s=Object.keys(this.edges).sort(),l=s.length,o=0;o<l;o++){var r=s[o],i=this.edges[r];t=t+r+i.id}return t},e.TokenSet.prototype.intersect=function(t){for(var s=new e.TokenSet,l=void 0,o=[{qNode:t,output:s,node:this}];o.length;){l=o.pop();for(var r=Object.keys(l.qNode.edges),i=r.length,n=Object.keys(l.node.edges),a=n.length,c=0;c<i;c++)for(var b=r[c],g=0;g<a;g++){var h=n[g];if(h==b||b=="*"){var p=l.node.edges[h],L=l.qNode.edges[b],M=p.final&&L.final,Q=void 0;h in l.output.edges?(Q=l.output.edges[h],Q.final=Q.final||M):(Q=new e.TokenSet,Q.final=M,l.output.edges[h]=Q),o.push({qNode:L,output:Q,node:p})}}}return s},e.TokenSet.Builder=function(){this.previousWord="",this.root=new e.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},e.TokenSet.Builder.prototype.insert=function(t){var s,l=0;if(t<this.previousWord)throw new Error("Out of order word insertion");for(var o=0;o<t.length&&o<this.previousWord.length&&t[o]==this.previousWord[o];o++)l++;this.minimize(l),this.uncheckedNodes.length==0?s=this.root:s=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var o=l;o<t.length;o++){var r=new e.TokenSet,i=t[o];s.edges[i]=r,this.uncheckedNodes.push({parent:s,char:i,child:r}),s=r}s.final=!0,this.previousWord=t},e.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},e.TokenSet.Builder.prototype.minimize=function(t){for(var s=this.uncheckedNodes.length-1;s>=t;s--){var l=this.uncheckedNodes[s],o=l.child.toString();o in this.minimizedNodes?l.parent.edges[l.char]=this.minimizedNodes[o]:(l.child._str=o,this.minimizedNodes[o]=l.child),this.uncheckedNodes.pop()}};e.Index=function(t){this.invertedIndex=t.invertedIndex,this.fieldVectors=t.fieldVectors,this.tokenSet=t.tokenSet,this.fields=t.fields,this.pipeline=t.pipeline},e.Index.prototype.search=function(t){return this.query(function(s){var l=new e.QueryParser(t,s);l.parse()})},e.Index.prototype.query=function(t){for(var s=new e.Query(this.fields),l=Object.create(null),o=Object.create(null),r=Object.create(null),i=Object.create(null),n=Object.create(null),a=0;a<this.fields.length;a++)o[this.fields[a]]=new e.Vector;t.call(s,s);for(var a=0;a<s.clauses.length;a++){var c=s.clauses[a],b=null,g=e.Set.empty;c.usePipeline?b=this.pipeline.runString(c.term,{fields:c.fields}):b=[c.term];for(var h=0;h<b.length;h++){var p=b[h];c.term=p;var L=e.TokenSet.fromClause(c),M=this.tokenSet.intersect(L).toArray();if(M.length===0&&c.presence===e.Query.presence.REQUIRED){for(var Q=0;Q<c.fields.length;Q++){var y=c.fields[Q];i[y]=e.Set.empty}break}for(var A=0;A<M.length;A++)for(var v=M[A],X=this.invertedIndex[v],Y=X._index,Q=0;Q<c.fields.length;Q++){var y=c.fields[Q],it=X[y],q=Object.keys(it),ct=v+"/"+y,nt=new e.Set(q);if(c.presence==e.Query.presence.REQUIRED&&(g=g.union(nt),i[y]===void 0&&(i[y]=e.Set.complete)),c.presence==e.Query.presence.PROHIBITED){n[y]===void 0&&(n[y]=e.Set.empty),n[y]=n[y].union(nt);continue}if(o[y].upsert(Y,c.boost,function(ye,pe){return ye+pe}),!r[ct]){for(var $=0;$<q.length;$++){var at=q[$],T=new e.FieldRef(at,y),bt=it[at],ut;(ut=l[T])===void 0?l[T]=new e.MatchData(v,y,bt):ut.add(v,y,bt)}r[ct]=!0}}}if(c.presence===e.Query.presence.REQUIRED)for(var Q=0;Q<c.fields.length;Q++){var y=c.fields[Q];i[y]=i[y].intersect(g)}}for(var tt=e.Set.complete,J=e.Set.empty,a=0;a<this.fields.length;a++){var y=this.fields[a];i[y]&&(tt=tt.intersect(i[y])),n[y]&&(J=J.union(n[y]))}var u=Object.keys(l),N=[],R=Object.create(null);if(s.isNegated()){u=Object.keys(this.fieldVectors);for(var a=0;a<u.length;a++){var T=u[a],B=e.FieldRef.fromString(T);l[T]=new e.MatchData}}for(var a=0;a<u.length;a++){var B=e.FieldRef.fromString(u[a]),d=B.docRef;if(tt.contains(d)&&!J.contains(d)){var D=this.fieldVectors[B],Z=o[B.fieldName].similarity(D),H;if((H=R[d])!==void 0)H.score+=Z,H.matchData.combine(l[B]);else{var m={ref:d,score:Z,matchData:l[B]};R[d]=m,N.push(m)}}}return N.sort(function(Le,Qe){return Qe.score-Le.score})},e.Index.prototype.toJSON=function(){var t=Object.keys(this.invertedIndex).sort().map(function(l){return[l,this.invertedIndex[l]]},this),s=Object.keys(this.fieldVectors).map(function(l){return[l,this.fieldVectors[l].toJSON()]},this);return{version:e.version,fields:this.fields,fieldVectors:s,invertedIndex:t,pipeline:this.pipeline.toJSON()}},e.Index.load=function(t){var s={},l={},o=t.fieldVectors,r=Object.create(null),i=t.invertedIndex,n=new e.TokenSet.Builder,a=e.Pipeline.load(t.pipeline);t.version!=e.version&&e.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+e.version+"' does not match serialized index '"+t.version+"'");for(var c=0;c<o.length;c++){var b=o[c],g=b[0],h=b[1];l[g]=new e.Vector(h)}for(var c=0;c<i.length;c++){var b=i[c],p=b[0],L=b[1];n.insert(p),r[p]=L}return n.finish(),s.fields=t.fields,s.fieldVectors=l,s.invertedIndex=r,s.tokenSet=n.root,s.pipeline=a,new e.Index(s)};e.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=e.tokenizer,this.pipeline=new e.Pipeline,this.searchPipeline=new e.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},e.Builder.prototype.ref=function(t){this._ref=t},e.Builder.prototype.field=function(t,s){if(/\//.test(t))throw new RangeError("Field '"+t+"' contains illegal character '/'");this._fields[t]=s||{}},e.Builder.prototype.b=function(t){t<0?this._b=0:t>1?this._b=1:this._b=t},e.Builder.prototype.k1=function(t){this._k1=t},e.Builder.prototype.add=function(t,s){var l=t[this._ref],o=Object.keys(this._fields);this._documents[l]=s||{},this.documentCount+=1;for(var r=0;r<o.length;r++){var i=o[r],n=this._fields[i].extractor,a=n?n(t):t[i],c=this.tokenizer(a,{fields:[i]}),b=this.pipeline.run(c),g=new e.FieldRef(l,i),h=Object.create(null);this.fieldTermFrequencies[g]=h,this.fieldLengths[g]=0,this.fieldLengths[g]+=b.length;for(var p=0;p<b.length;p++){var L=b[p];if(h[L]==null&&(h[L]=0),h[L]+=1,this.invertedIndex[L]==null){var M=Object.create(null);M._index=this.termIndex,this.termIndex+=1;for(var Q=0;Q<o.length;Q++)M[o[Q]]=Object.create(null);this.invertedIndex[L]=M}this.invertedIndex[L][i][l]==null&&(this.invertedIndex[L][i][l]=Object.create(null));for(var y=0;y<this.metadataWhitelist.length;y++){var A=this.metadataWhitelist[y],v=L.metadata[A];this.invertedIndex[L][i][l][A]==null&&(this.invertedIndex[L][i][l][A]=[]),this.invertedIndex[L][i][l][A].push(v)}}}},e.Builder.prototype.calculateAverageFieldLengths=function(){for(var t=Object.keys(this.fieldLengths),s=t.length,l={},o={},r=0;r<s;r++){var i=e.FieldRef.fromString(t[r]),n=i.fieldName;o[n]||(o[n]=0),o[n]+=1,l[n]||(l[n]=0),l[n]+=this.fieldLengths[i]}for(var a=Object.keys(this._fields),r=0;r<a.length;r++){var c=a[r];l[c]=l[c]/o[c]}this.averageFieldLength=l},e.Builder.prototype.createFieldVectors=function(){for(var t={},s=Object.keys(this.fieldTermFrequencies),l=s.length,o=Object.create(null),r=0;r<l;r++){for(var i=e.FieldRef.fromString(s[r]),n=i.fieldName,a=this.fieldLengths[i],c=new e.Vector,b=this.fieldTermFrequencies[i],g=Object.keys(b),h=g.length,p=this._fields[n].boost||1,L=this._documents[i.docRef].boost||1,M=0;M<h;M++){var Q=g[M],y=b[Q],A=this.invertedIndex[Q]._index,v,X,Y;o[Q]===void 0?(v=e.idf(this.invertedIndex[Q],this.documentCount),o[Q]=v):v=o[Q],X=v*((this._k1+1)*y)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[n]))+y),X*=p,X*=L,Y=Math.round(X*1e3)/1e3,c.insert(A,Y)}t[i]=c}this.fieldVectors=t},e.Builder.prototype.createTokenSet=function(){this.tokenSet=e.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},e.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new e.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},e.Builder.prototype.use=function(t){var s=Array.prototype.slice.call(arguments,1);s.unshift(this),t.apply(this,s)},e.MatchData=function(t,s,l){for(var o=Object.create(null),r=Object.keys(l||{}),i=0;i<r.length;i++){var n=r[i];o[n]=l[n].slice()}this.metadata=Object.create(null),t!==void 0&&(this.metadata[t]=Object.create(null),this.metadata[t][s]=o)},e.MatchData.prototype.combine=function(t){for(var s=Object.keys(t.metadata),l=0;l<s.length;l++){var o=s[l],r=Object.keys(t.metadata[o]);this.metadata[o]==null&&(this.metadata[o]=Object.create(null));for(var i=0;i<r.length;i++){var n=r[i],a=Object.keys(t.metadata[o][n]);this.metadata[o][n]==null&&(this.metadata[o][n]=Object.create(null));for(var c=0;c<a.length;c++){var b=a[c];this.metadata[o][n][b]==null?this.metadata[o][n][b]=t.metadata[o][n][b]:this.metadata[o][n][b]=this.metadata[o][n][b].concat(t.metadata[o][n][b])}}}},e.MatchData.prototype.add=function(t,s,l){if(!(t in this.metadata)){this.metadata[t]=Object.create(null),this.metadata[t][s]=l;return}if(!(s in this.metadata[t])){this.metadata[t][s]=l;return}for(var o=Object.keys(l),r=0;r<o.length;r++){var i=o[r];i in this.metadata[t][s]?this.metadata[t][s][i]=this.metadata[t][s][i].concat(l[i]):this.metadata[t][s][i]=l[i]}},e.Query=function(t){this.clauses=[],this.allFields=t},e.Query.wildcard=new String("*"),e.Query.wildcard.NONE=0,e.Query.wildcard.LEADING=1,e.Query.wildcard.TRAILING=2,e.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},e.Query.prototype.clause=function(t){return"fields"in t||(t.fields=this.allFields),"boost"in t||(t.boost=1),"usePipeline"in t||(t.usePipeline=!0),"wildcard"in t||(t.wildcard=e.Query.wildcard.NONE),t.wildcard&e.Query.wildcard.LEADING&&t.term.charAt(0)!=e.Query.wildcard&&(t.term="*"+t.term),t.wildcard&e.Query.wildcard.TRAILING&&t.term.slice(-1)!=e.Query.wildcard&&(t.term=""+t.term+"*"),"presence"in t||(t.presence=e.Query.presence.OPTIONAL),this.clauses.push(t),this},e.Query.prototype.isNegated=function(){for(var t=0;t<this.clauses.length;t++)if(this.clauses[t].presence!=e.Query.presence.PROHIBITED)return!1;return!0},e.Query.prototype.term=function(t,s){if(Array.isArray(t))return t.forEach(function(o){this.term(o,e.utils.clone(s))},this),this;var l=s||{};return l.term=t.toString(),this.clause(l),this},e.QueryParseError=function(t,s,l){this.name="QueryParseError",this.message=t,this.start=s,this.end=l},e.QueryParseError.prototype=new Error,e.QueryLexer=function(t){this.lexemes=[],this.str=t,this.length=t.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},e.QueryLexer.prototype.run=function(){for(var t=e.QueryLexer.lexText;t;)t=t(this)},e.QueryLexer.prototype.sliceString=function(){for(var t=[],s=this.start,l=this.pos,o=0;o<this.escapeCharPositions.length;o++)l=this.escapeCharPositions[o],t.push(this.str.slice(s,l)),s=l+1;return t.push(this.str.slice(s,this.pos)),this.escapeCharPositions.length=0,t.join("")},e.QueryLexer.prototype.emit=function(t){this.lexemes.push({type:t,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},e.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},e.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return e.QueryLexer.EOS;var t=this.str.charAt(this.pos);return this.pos+=1,t},e.QueryLexer.prototype.width=function(){return this.pos-this.start},e.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},e.QueryLexer.prototype.backup=function(){this.pos-=1},e.QueryLexer.prototype.acceptDigitRun=function(){var t,s;do t=this.next(),s=t.charCodeAt(0);while(s>47&&s<58);t!=e.QueryLexer.EOS&&this.backup()},e.QueryLexer.prototype.more=function(){return this.pos<this.length},e.QueryLexer.EOS="EOS",e.QueryLexer.FIELD="FIELD",e.QueryLexer.TERM="TERM",e.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",e.QueryLexer.BOOST="BOOST",e.QueryLexer.PRESENCE="PRESENCE",e.QueryLexer.lexField=function(t){return t.backup(),t.emit(e.QueryLexer.FIELD),t.ignore(),e.QueryLexer.lexText},e.QueryLexer.lexTerm=function(t){if(t.width()>1&&(t.backup(),t.emit(e.QueryLexer.TERM)),t.ignore(),t.more())return e.QueryLexer.lexText},e.QueryLexer.lexEditDistance=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.EDIT_DISTANCE),e.QueryLexer.lexText},e.QueryLexer.lexBoost=function(t){return t.ignore(),t.acceptDigitRun(),t.emit(e.QueryLexer.BOOST),e.QueryLexer.lexText},e.QueryLexer.lexEOS=function(t){t.width()>0&&t.emit(e.QueryLexer.TERM)},e.QueryLexer.termSeparator=e.tokenizer.separator,e.QueryLexer.lexText=function(t){for(;;){var s=t.next();if(s==e.QueryLexer.EOS)return e.QueryLexer.lexEOS;if(s.charCodeAt(0)==92){t.escapeCharacter();continue}if(s==":")return e.QueryLexer.lexField;if(s=="~")return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexEditDistance;if(s=="^")return t.backup(),t.width()>0&&t.emit(e.QueryLexer.TERM),e.QueryLexer.lexBoost;if(s=="+"&&t.width()===1||s=="-"&&t.width()===1)return t.emit(e.QueryLexer.PRESENCE),e.QueryLexer.lexText;if(s.match(e.QueryLexer.termSeparator))return e.QueryLexer.lexTerm}},e.QueryParser=function(t,s){this.lexer=new e.QueryLexer(t),this.query=s,this.currentClause={},this.lexemeIdx=0},e.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var t=e.QueryParser.parseClause;t;)t=t(this);return this.query},e.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},e.QueryParser.prototype.consumeLexeme=function(){var t=this.peekLexeme();return this.lexemeIdx+=1,t},e.QueryParser.prototype.nextClause=function(){var t=this.currentClause;this.query.clause(t),this.currentClause={}},e.QueryParser.parseClause=function(t){var s=t.peekLexeme();if(s!=null)switch(s.type){case e.QueryLexer.PRESENCE:return e.QueryParser.parsePresence;case e.QueryLexer.FIELD:return e.QueryParser.parseField;case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var l="expected either a field or a term, found "+s.type;throw s.str.length>=1&&(l+=" with value '"+s.str+"'"),new e.QueryParseError(l,s.start,s.end)}},e.QueryParser.parsePresence=function(t){var s=t.consumeLexeme();if(s!=null){switch(s.str){case"-":t.currentClause.presence=e.Query.presence.PROHIBITED;break;case"+":t.currentClause.presence=e.Query.presence.REQUIRED;break;default:var l="unrecognised presence operator'"+s.str+"'";throw new e.QueryParseError(l,s.start,s.end)}var o=t.peekLexeme();if(o==null){var l="expecting term or field, found nothing";throw new e.QueryParseError(l,s.start,s.end)}switch(o.type){case e.QueryLexer.FIELD:return e.QueryParser.parseField;case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var l="expecting term or field, found '"+o.type+"'";throw new e.QueryParseError(l,o.start,o.end)}}},e.QueryParser.parseField=function(t){var s=t.consumeLexeme();if(s!=null){if(t.query.allFields.indexOf(s.str)==-1){var l=t.query.allFields.map(function(i){return"'"+i+"'"}).join(", "),o="unrecognised field '"+s.str+"', possible fields: "+l;throw new e.QueryParseError(o,s.start,s.end)}t.currentClause.fields=[s.str];var r=t.peekLexeme();if(r==null){var o="expecting term, found nothing";throw new e.QueryParseError(o,s.start,s.end)}switch(r.type){case e.QueryLexer.TERM:return e.QueryParser.parseTerm;default:var o="expecting term, found '"+r.type+"'";throw new e.QueryParseError(o,r.start,r.end)}}},e.QueryParser.parseTerm=function(t){var s=t.consumeLexeme();if(s!=null){t.currentClause.term=s.str.toLowerCase(),s.str.indexOf("*")!=-1&&(t.currentClause.usePipeline=!1);var l=t.peekLexeme();if(l==null){t.nextClause();return}switch(l.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;case e.QueryLexer.PRESENCE:return t.nextClause(),e.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+l.type+"'";throw new e.QueryParseError(o,l.start,l.end)}}},e.QueryParser.parseEditDistance=function(t){var s=t.consumeLexeme();if(s!=null){var l=parseInt(s.str,10);if(isNaN(l)){var o="edit distance must be numeric";throw new e.QueryParseError(o,s.start,s.end)}t.currentClause.editDistance=l;var r=t.peekLexeme();if(r==null){t.nextClause();return}switch(r.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;case e.QueryLexer.PRESENCE:return t.nextClause(),e.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+r.type+"'";throw new e.QueryParseError(o,r.start,r.end)}}},e.QueryParser.parseBoost=function(t){var s=t.consumeLexeme();if(s!=null){var l=parseInt(s.str,10);if(isNaN(l)){var o="boost must be numeric";throw new e.QueryParseError(o,s.start,s.end)}t.currentClause.boost=l;var r=t.peekLexeme();if(r==null){t.nextClause();return}switch(r.type){case e.QueryLexer.TERM:return t.nextClause(),e.QueryParser.parseTerm;case e.QueryLexer.FIELD:return t.nextClause(),e.QueryParser.parseField;case e.QueryLexer.EDIT_DISTANCE:return e.QueryParser.parseEditDistance;case e.QueryLexer.BOOST:return e.QueryParser.parseBoost;case e.QueryLexer.PRESENCE:return t.nextClause(),e.QueryParser.parsePresence;default:var o="Unexpected lexeme type '"+r.type+"'";throw new e.QueryParseError(o,r.start,r.end)}}},function(t,s){typeof define=="function"&&define.amd?define(s):typeof ne=="object"?ae.exports=s():t.lunr=s()}(this,function(){return e})})()});var Ce=e=>class extends kt(e){static get elementStyles(){return this.__elementStyles}static set elementStyles(s){this.__elementStyles=s}adoptStyles(s){let l=this.constructor,{elementStyles:o}=l;o&&Ot(s,o),this.renderOptions.renderBefore=this.renderOptions.renderBefore||s.firstChild||void 0}},Dt=St(Ce);var S=class extends Gt(Dt(ht)){};var mt=dt(class extends gt{constructor(e){if(super(e),e.type!==W.PROPERTY&&e.type!==W.ATTRIBUTE&&e.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!zt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===E||t===Xt)return t;let s=e.element,l=e.name;if(e.type===W.PROPERTY){if(t===s[l])return E}else if(e.type===W.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(l))return E}else if(e.type===W.ATTRIBUTE&&s.getAttribute(l)===t+"")return E;return Wt(e),t}});var K=dt(class extends gt{constructor(e){var t;if(super(e),e.type!==W.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,l;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!(!((s=this.nt)===null||s===void 0)&&s.has(r))&&this.it.add(r);return this.render(t)}let o=e.element.classList;this.it.forEach(r=>{r in t||(o.remove(r),this.it.delete(r))});for(let r in t){let i=!!t[r];i===this.it.has(r)||!((l=this.nt)===null||l===void 0)&&l.has(r)||(i?(o.add(r),this.it.add(r)):(o.remove(r),this.it.delete(r)))}return E}});var Ut=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function xt(e,t,s,l){e.addEventListener?e.addEventListener(t,s,l):e.attachEvent&&e.attachEvent("on".concat(t),function(){s(window.event)})}function Yt(e,t){for(var s=t.slice(0,t.length-1),l=0;l<s.length;l++)s[l]=e[s[l].toLowerCase()];return s}function Jt(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),s=t.lastIndexOf("");s>=0;)t[s-1]+=",",t.splice(s,1),s=t.lastIndexOf("");return t}function Me(e,t){for(var s=e.length>=t.length?e:t,l=e.length>=t.length?t:e,o=!0,r=0;r<s.length;r++)l.indexOf(s[r])===-1&&(o=!1);return o}var st={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ut?173:189,"=":Ut?61:187,";":Ut?59:186,"'":222,"[":219,"]":221,"\\":220},O={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Ft={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},w={16:!1,18:!1,17:!1,91:!1},U={};for(et=1;et<20;et++)st["f".concat(et)]=111+et;var et,C=[],Rt=!1,Ht="all",Kt=[],Nt=function(t){return st[t.toLowerCase()]||O[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},De=function(t){return Object.keys(st).find(function(s){return st[s]===t})},me=function(t){return Object.keys(O).find(function(s){return O[s]===t})};function _t(e){Ht=e||"all"}function lt(){return Ht||"all"}function Ue(){return C.slice(0)}function xe(){return C.map(function(e){return De(e)||me(e)||String.fromCharCode(e)})}function we(e){var t=e.target||e.srcElement,s=t.tagName,l=!0;return(t.isContentEditable||(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")&&!t.readOnly)&&(l=!1),l}function ve(e){return typeof e=="string"&&(e=Nt(e)),C.indexOf(e)!==-1}function Fe(e,t){var s,l;e||(e=lt());for(var o in U)if(Object.prototype.hasOwnProperty.call(U,o))for(s=U[o],l=0;l<s.length;)s[l].scope===e?s.splice(l,1):l++;lt()===e&&_t(t||"all")}function Ae(e){var t=e.keyCode||e.which||e.charCode,s=C.indexOf(t);if(s>=0&&C.splice(s,1),e.key&&e.key.toLowerCase()==="meta"&&C.splice(0,C.length),(t===93||t===224)&&(t=91),t in w){w[t]=!1;for(var l in O)O[l]===t&&(f[l]=!1)}}function Be(e){if(typeof e>"u")Object.keys(U).forEach(function(i){return delete U[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&wt(i)});else if(typeof e=="object")e.key&&wt(e);else if(typeof e=="string"){for(var t=arguments.length,s=new Array(t>1?t-1:0),l=1;l<t;l++)s[l-1]=arguments[l];var o=s[0],r=s[1];typeof o=="function"&&(r=o,o=""),wt({key:e,scope:o,method:r,splitKey:"+"})}}var wt=function(t){var s=t.key,l=t.scope,o=t.method,r=t.splitKey,i=r===void 0?"+":r,n=Jt(s);n.forEach(function(a){var c=a.split(i),b=c.length,g=c[b-1],h=g==="*"?"*":Nt(g);if(U[h]){l||(l=lt());var p=b>1?Yt(O,c):[];U[h]=U[h].filter(function(L){var M=o?L.method===o:!0;return!(M&&L.scope===l&&Me(L.mods,p))})}})};function Zt(e,t,s,l){if(t.element===l){var o;if(t.scope===s||t.scope==="all"){o=t.mods.length>0;for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(!w[r]&&t.mods.indexOf(+r)>-1||w[r]&&t.mods.indexOf(+r)===-1)&&(o=!1);(t.mods.length===0&&!w[16]&&!w[18]&&!w[17]&&!w[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Et(e,t){var s=U["*"],l=e.keyCode||e.which||e.charCode;if(f.filter.call(this,e)){if((l===93||l===224)&&(l=91),C.indexOf(l)===-1&&l!==229&&C.push(l),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(L){var M=Ft[L];e[L]&&C.indexOf(M)===-1?C.push(M):!e[L]&&C.indexOf(M)>-1?C.splice(C.indexOf(M),1):L==="metaKey"&&e[L]&&C.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(C=C.slice(C.indexOf(M))))}),l in w){w[l]=!0;for(var o in O)O[o]===l&&(f[o]=!0);if(!s)return}for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(w[r]=e[Ft[r]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(C.indexOf(17)===-1&&C.push(17),C.indexOf(18)===-1&&C.push(18),w[17]=!0,w[18]=!0);var i=lt();if(s)for(var n=0;n<s.length;n++)s[n].scope===i&&(e.type==="keydown"&&s[n].keydown||e.type==="keyup"&&s[n].keyup)&&Zt(e,s[n],i,t);if(l in U){for(var a=0;a<U[l].length;a++)if((e.type==="keydown"&&U[l][a].keydown||e.type==="keyup"&&U[l][a].keyup)&&U[l][a].key){for(var c=U[l][a],b=c.splitKey,g=c.key.split(b),h=[],p=0;p<g.length;p++)h.push(Nt(g[p]));h.sort().join("")===C.sort().join("")&&Zt(e,c,i,t)}}}}function fe(e){return Kt.indexOf(e)>-1}function f(e,t,s){C=[];var l=Jt(e),o=[],r="all",i=document,n=0,a=!1,c=!0,b="+",g=!1;for(s===void 0&&typeof t=="function"&&(s=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(r=t.scope),t.element&&(i=t.element),t.keyup&&(a=t.keyup),t.keydown!==void 0&&(c=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(b=t.splitKey)),typeof t=="string"&&(r=t);n<l.length;n++)e=l[n].split(b),o=[],e.length>1&&(o=Yt(O,e)),e=e[e.length-1],e=e==="*"?"*":Nt(e),e in U||(U[e]=[]),U[e].push({keyup:a,keydown:c,scope:r,mods:o,shortcut:l[n],method:s,key:l[n],splitKey:b,element:i});typeof i<"u"&&!fe(i)&&window&&(Kt.push(i),xt(i,"keydown",function(h){Et(h,i)},g),Rt||(Rt=!0,xt(window,"focus",function(){C=[]},g)),xt(i,"keyup",function(h){Et(h,i),Ae(h)},g))}function Oe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(U).forEach(function(s){var l=U[s].filter(function(o){return o.scope===t&&o.shortcut===e});l.forEach(function(o){o&&o.method&&o.method()})})}var vt={getPressedKeyString:xe,setScope:_t,getScope:lt,deleteScope:Fe,getPressedKeyCodes:Ue,isPressed:ve,filter:we,trigger:Oe,unbind:Be,keyMap:st,modifier:O,modifierMap:Ft};for(pt in vt)Object.prototype.hasOwnProperty.call(vt,pt)&&(f[pt]=vt[pt]);var pt;typeof window<"u"&&(Vt=window.hotkeys,f.noConflict=function(e){return e&&window.hotkeys===f&&(window.hotkeys=Vt),f},window.hotkeys=f);var Vt;var _=z`
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
`,Pt=z`
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
`;var V=class extends S{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=Qt()}render(){let t="";if(!this.hideBreadcrumbs){let s=[];if(this.breadcrumbs)for(let l of this.breadcrumbs)s.push(I`<button
              type="button"
              @click=${()=>this.selectParent(l)}
              class="breadcrumb"
            >
              ${l}
            </button>`);t=I`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${s}

        <button type="button" class="breadcrumb breadcrumb--close" @click=${this._close}>
          Cancel
        </button>
      </div>`}return I`
      ${t}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${yt(this._inputRef)}
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
    `}setSearch(t){this._inputRef.value&&(this._inputRef.value.value=t)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(t){let s=t.target;s instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:s.value},bubbles:!0,composed:!0}))}selectParent(t){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:t},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};x(V,"baseName","ninja-header"),x(V,"styles",[_,z`
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
    `]),x(V,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});function*qt(e,t){let s=typeof t=="function";if(e!==void 0){let l=-1;for(let o of e)l>-1&&(yield s?t(l):t),l++,yield o}}function $t(e,t,s,l){var o=arguments.length,r=o<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,s):l,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(o<3?i(r):o>3?i(t,s,r):i(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r}var te=e=>t=>typeof t=="function"?((s,l)=>(customElements.define(s,l),l))(e,t):((s,l)=>{let{kind:o,elements:r}=l;return{kind:o,elements:r,finisher(i){customElements.define(s,i)}}})(e,t);var At,Ks=((At=window.HTMLSlotElement)===null||At===void 0?void 0:At.prototype.assignedElements)!=null?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter(s=>s.nodeType===Node.ELEMENT_NODE);var ee=z`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var Bt=class extends ht{render(){return I`<span><slot></slot></span>`}};Bt.styles=[ee];Bt=$t([te("mwc-icon")],Bt);var It=-1/0;var Xe=-.005,ze=-.005,We=-.01,se=1,Ge=.9,Se=.8,ke=.7,je=.6;function Te(e){return e.toLowerCase()===e}function Re(e){return e.toUpperCase()===e}function Ze(e){for(var t=e.length,s=new Array(t),l="/",o=0;o<t;o++){var r=e[o];l==="/"?s[o]=Ge:l==="-"||l==="_"||l===" "?s[o]=Se:l==="."?s[o]=je:Te(l)&&Re(r)?s[o]=ke:s[o]=0,l=r}return s}function Ee(e,t,s,l){for(var o=e.length,r=t.length,i=e.toLowerCase(),n=t.toLowerCase(),a=Ze(t,a),c=0;c<o;c++){s[c]=new Array(r),l[c]=new Array(r);for(var b=It,g=c===o-1?ze:We,h=0;h<r;h++)if(i[c]===n[h]){var p=It;c?h&&(p=Math.max(l[c-1][h-1]+a[h],s[c-1][h-1]+se)):p=h*Xe+a[h],s[c][h]=p,l[c][h]=b=Math.max(p,b+g)}else s[c][h]=It,l[c][h]=b=b+g}}function le(e,t){var s=e.length,l=t.length,o=new Array(s);if(!s||!l)return o;if(s===l){for(var r=0;r<s;r++)o[r]=r;return o}if(l>1024)return o;var i=new Array(s),n=new Array(s);Ee(e,t,i,n);for(var a=!1,r=s-1,c=l-1;r>=0;r--)for(;c>=0;c--)if(i[r][c]!==It&&(a||i[r][c]===n[r][c])){a=r&&c&&n[r][c]===i[r-1][c-1]+se,o[r]=c--;break}return o}function rt(e,t){e=e.toLowerCase(),t=t.toLowerCase();for(var s=e.length,l=0,o=0;l<s;l+=1)if(o=t.indexOf(e[l],o)+1,o===0)return!1;return!0}function Ct(e){return new RegExp(e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function re(e,t,s){if(!e.trim())return t;let l=new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))"+Ct(e).source+"+","g");return t.replaceAll(l,s)}function ie(e,t,s=l=>l){if(!t)return"";if(!e)return t;let l=e.split(/\s+/);if(!l.some(a=>rt(a,t)))return t;let r=t.split(""),i=[];[e,...l].forEach(a=>{rt(a,t)&&(i=i.concat(le(a,t)))}),i=[...new Set(i)].sort((a,c)=>a-c);let n=[];for(let a=0;a<r.length;a++){if(!i.includes(a)){n.push(r[a]);continue}let c=Ve(a,i);if(c==null)continue;let b="";b=s(r.slice(a,c+1).join("")),n.push(b),a=c}return n.join("")}function Ve(e,t){let s=t.findIndex(o=>o===e),l=null;if(s===-1)return null;for(let o=s;o<t.length;o++){l=t[o];for(let r=o+1;r<t.length;r++){let i=t[r];if(i==null||i!==l+1)return l;l=t[r]}}return l}var k=class extends S{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1,this.__regexMatchRender='<mark part="ninja-action__highlight">$&</mark>',this.__fuzzyMatchRender=t=>`<mark part="ninja-action__highlight">${t}</mark>`}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}));let t=this.shadowRoot?.querySelector("a");t&&t.click()}forceClick(){let t=this.shadowRoot?.querySelector("a");t&&t.click()}updated(t){t.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true")))}render(){let t={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(t):I`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${K(t)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(t){let s=this.action.attributes||{},{download:l,hreflang:o,ping:r,referrerpolicy:i,rel:n,target:a,type:c}=s;return I`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${K(t)}
        href=${this.action.href}
        download=${G(l)}
        hreflang=${G(o)}
        ping=${G(r)}
        referrerpolicy=${G(i)}
        rel=${G(n)}
        target=${G(a)}
        type=${G(c)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(t){let s=this.constructor;return t.replaceAll(/&/g,s.escapeMap["&"]).replaceAll(/[<>'"]/g,l=>s.escapeMap[l]||l)}encodeString(t){let s=this.constructor;return t.replaceAll(/&/g,`<span>${s.escapeMap["&"]}</span>`).replaceAll(/[<>'"]/g,l=>`<span>${s.escapeMap[l]||l}</span>`)}renderMatch(t,s){let l=this.escapeString(s),o=this.escapeString(t);return this.searchType==="regex"?re(o,l,this.__regexMatchRender):this.searchType==="fuzzy"?ie(o,l,this.__fuzzyMatchRender):""}renderBody(){let t;this.action.mdIcon?t=I`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(t=Lt(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{title:s,content:l}=this.action;return s&&this.highlightMatches&&(s=this.renderMatch(this.searchQuery,s)),l&&this.highlightMatches&&(l=this.renderMatch(this.searchQuery,l)),I`
        <div part="ninja-action__header" class="ninja-action__header">
          ${t}
          <div part="ninja-action__title" class="ninja-title">${Lt(s)}</div>
          ${this.renderHotkey()}
        </div>

        ${Tt(l,()=>I`<small part="ninja-action__content" class="ninja-action__content">${Lt(l)}</small>`)}
    `}renderHotkey(){let t;return this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(s=>{let l=s.split("+"),o=I`${qt(l.map(r=>I`<kbd part="ninja-hotkey">${r}</kbd>`),"+")}`;return I`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${o}
          </div>`}):t=this.action.hotkey.split(",").map(s=>{let o=s.split("+").map(r=>I`<kbd part="ninja-hotkey" class="ninja-hotkey">${r}</kbd>`);return I`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${o}</kbd>`})),t}};x(k,"baseName","ninja-action"),x(k,"styles",[_,z`
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
    `]),x(k,"escapeMap",{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}),x(k,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});var ce=I` <div part="modal-footer" class="modal-footer" slot="footer">
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
</div>`;var F=f,j=class extends S{static get scopedElements(){return{"ninja-action":k,"ninja-header":V}}constructor(){super(),this._headerRef=Qt(),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.searchType="regex",this.highlightMatches=!1,this.searchLabel="Search for actions",this.listboxLabel="List of actions",this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up",this.navigationDownHotkey="down",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.__selected__=null,this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this.currentRoot=void 0,this._flatData=[]}open(t={}){this._bump=!0,this.visible=!0;let s=this._headerRef.value;if(requestAnimationFrame(()=>{s&&(s.focusSearch(),s.expanded=!0,s.controls="actions-list")}),this._actionMatches.length>0){this._selected=this._actionMatches[0];let l=this._headerRef.value;l&&this._selected&&this._selected.id&&(l.activeDescendant=this._selected.id)}this.setParent(t.parent)}close(){this._bump=!1,this.visible=!1;let t=this._headerRef.value;t&&(t.expanded=!1)}setParent(t){t?this.currentRoot=t:this.currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value?.setSearch("")}getBreadcrumbs(){let t=[],s=this._selected?.parent;if(s)for(t.push(s);s;){let l=this._flatData.find(o=>o.id===s);l?.parent&&t.push(l.parent),s=l?l.parent:void 0}return t.reverse()}get _selected(){return this.__selected__}set _selected(t){let s=this._headerRef.value;s&&t&&t.id&&(s.activeDescendant=t.id);let l=this.__selected__;this.__selected__=t,this.requestUpdate("_selected",l)}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(t,s){let l=[];return t||(t=[]),t.map(o=>{let r=o.children&&o.children.some(n=>typeof n=="string"),i={...o,parent:o.parent||s};return r||(i.children&&i.children.length&&(s=o.id,l=[...l,...i.children]),i.children=i.children?i.children.map(n=>n.id):[]),i}).concat(l.length?this._flattern(l,s):l)}update(t){t.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.forEach(s=>{s.hotkey&&F(s.hotkey,l=>{l.preventDefault(),s.handler&&s.handler(s,l,this._search)})})),super.update(t)}shouldNotOpen(t){let s=t.composedPath(),l=["input","textarea"];return s.some(o=>o?.getAttribute?.("contenteditable")==="true"?!0:l.includes(o?.tagName?.toLowerCase()))}_registerInternalHotkeys(){this.openHotkey&&F(this.openHotkey,t=>{this.shouldNotOpen(t)||(t.preventDefault(),this.visible?this.close():this.open())}),this.selectHotkey&&F(this.selectHotkey,t=>{this.visible&&(t.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex],t))}),this.goBackHotkey&&F(this.goBackHotkey,t=>{this.visible&&(this._search||(t.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&F(this.navigationDownHotkey,t=>{this.visible&&(t.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&F(this.navigationUpHotkey,t=>{this.visible&&(t.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&F(this.closeHotkey,t=>{this.visible&&(t.preventDefault(),this.visible=!1,this.close())})}_unregisterInternalHotkeys(){this.openHotkey&&F.unbind(this.openHotkey),this.selectHotkey&&F.unbind(this.selectHotkey),this.goBackHotkey&&F.unbind(this.goBackHotkey),this.navigationDownHotkey&&F.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&F.unbind(this.navigationUpHotkey),this.closeHotkey&&F.unbind(this.closeHotkey)}_actionFocused(t,s){this._selected=t,s.target.ensureInView()}_onTransitionEnd(){this._bump=!1}get breadcrumbs(){return this.getBreadcrumbs()}_goBack(){let t=this.getBreadcrumbs();if(t){let s=t.length>1?t[t.length-2]:void 0;this.setParent(s);return}}findActionElement(t=this._selectedIndex){let s=this._actionMatches[t]?.id;if(s==null)return null;let l="#ninja-action__"+s;return this.shadowRoot?.querySelector(l)}stringToRegExp(t){return Ct(t)}findMatches(t){let s=this.stringToRegExp(this._search),l={searchRegex:s,searchString:this._search};return t.filter(o=>{if(this._search.trim()==="")return o.parent===this.currentRoot&&!0;let{matcher:r,title:i,keywords:n,content:a}=o,c=null;if(typeof r=="function"&&(c=r(o,l)),(c==null&&!this.searchType||this.searchType==="regex")&&(c=!!(i&&i.match(s)||n&&n.match(s)||a&&a.match(s))),c==null&&this.searchType==="fuzzy"){let b=this._search;c=!!(i&&ft(b,i)||n&&ft(b,n)||a&&ft(b,a))}return c==null&&(c=!!c),(!this.currentRoot&&this._search||o.parent===this.currentRoot)&&c})}render(){let t={bump:this._bump,"modal-content":!0},s={visible:this.visible,modal:!0},l,o=this._flatData;o=this.findMatches(o),l=o.reduce((n,a)=>n.set(a.section,[...n.get(a.section)||[],a]),new Map),this._actionMatches=[...l.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let r=n=>I` ${jt(n,a=>a.id,a=>I`<ninja-action
            id=${"ninja-action__"+a.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content, ninja-action__highlight"
            aria-selected=${mt(a.id===this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${mt(a.id===this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${c=>{this._actionFocused(a,c)}}
            @actionsSelected=${c=>this._actionSelected(c.detail,c)}
            .action=${a}
          ></ninja-action>`)}`,i=[];return l.forEach((n,a)=>{let c=a?I`<div class="group-header">${a}</div>`:void 0;i.push(I`${c}${r(n)}`)}),I`
      <div part="modal-overlay" @click=${this._overlayClick} class=${K(s)}>
        <div part="modal-content" class=${K(t)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${yt(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${n=>this.setParent(n.detail.parent)}
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
              ${i}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${ce} </slot>
          </div>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(t,s){this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:t},bubbles:!0,composed:!0})),t&&(t.children&&t.children?.length>0&&(this.currentRoot=t.id,this._search=""),this._headerRef.value?.setSearch(""),this._headerRef.value?.focusSearch(),t.handler?t.handler(t,s,this._search)?.keepOpen||this.close():this.findActionElement(this._selectedIndex)?.forceClick(),this._bump=!0)}async _handleInput(t){this._search=t.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(t){let s=t.target;s instanceof Element&&s?.classList.contains("modal")&&this.close()}};x(j,"baseName","ninja-keys"),x(j,"styles",[_,Pt]),x(j,"properties",{placeholder:{type:String},disableHotkeys:{type:Boolean},searchType:{attribute:"search-type"},searchLabel:{attribute:"search-label"},listboxLabel:{attribute:"listbox-label"},hideBreadcrumbs:{type:Boolean},openHotkey:{},navigationUpHotkey:{},navigationDownHotkey:{},closeHotkey:{},goBackHotkey:{},selectHotkey:{},hotKeysJoinedView:{type:Boolean},noAutoLoadMdIcons:{type:Boolean},data:{type:Array,hasChanged(){return!0}},highlightMatches:{type:Boolean,reflect:!0,attribute:"highlight-matches"},__selected__:{state:!0},visible:{state:!0},_bump:{state:!0},_actionMatches:{state:!0},_search:{state:!0},currentRoot:{state:!0},_flatData:{state:!0}});function ft(e,t){return[e,...e.split(/\s+/)].some(s=>rt(s,t))}var de=Ie(be(),1);var Ye={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Je={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};function ue(e){return e.replaceAll(/&lt;|&gt;|&#39;|&quot;/g,t=>Je[t]||t).replaceAll(/&amp;/g,"&")}function he(e){return e.replaceAll(/&/g,"&amp;").replaceAll(/<>'"/g,t=>Ye[t]||t)}var Mt=class{static async fetchAndGenerateIndex(t=this.endpoint){let l=await(await fetch(t)).json(),o=new this;return o.generateIndex(l),{searchIndex:l,searchEngine:o}}async generateIndex(t){this.index=(0,de.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),t.forEach(s=>{s.content&&(s.content=ue(s.content),this.add(s))})}),this.indexData=t}performSearch(t,s=300,l=!0){if(l==null&&(l=!0),this.index){this.query=t;let o=t.trim().length>0,r=t.split(" ").map((a,c,b)=>`${a}${c===b.length-1?`* ${a}~1`:"~1"}`).join(" "),i=o?this.index.search(`${t} ${r}`):[];return i?.length>0?i.map(a=>{let c=this.indexData.find(h=>h.id==a.ref),b=this.previewTemplate(c.content,s,l),g=this.previewTemplate(c.title,s,l);return l===!0&&(g+=`<!-- (${a.score}) -->`),{id:c.id.trim(),score:a.score,title:c.title.trim(),collection:c.collection,content:c.content.trim(),categories:c.categories,url:c.url.trim(),heading:g,preview:b}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(t,s=300,l=!0){s==null&&(s=300);let o=s/2,r;if(s){let i=t.toLowerCase(),n=this.query.toLowerCase().split(" ").map(a=>i.indexOf(a)).filter(a=>a!=-1).sort((a,c)=>a-c);n[1]&&(s=Math.min(n[1]-n[0],s)),r=t.substr(Math.max(0,n[0]-o),s+o)}else r=t;return t.startsWith(r)||(r="\u2026"+r),t.endsWith(r)||(r=r+"\u2026"),l&&(r=he(r),this.query.toLowerCase().split(" ").forEach(i=>{i!=""&&(r=r.replace(new RegExp(`(${i.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))})),r}};x(Mt,"endpoint","/bridgetown_quick_search/index.json");var ge=Mt;var P=class extends j{findMatches(t){let s=super.findMatches(t);return this.results.forEach(l=>{s.find(o=>o.id===l.id)||s.push(l)}),s}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(t){t.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(t)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:t,searchIndex:s}=await ge.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=t,this.__searchIndex=s,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),this.staticData.concat(this.results)}showResultsForQuery(t,s=100){if(this.latestQuery=t,this.alwaysShowResults===!0||t&&t.length>=1){let l=this.__searchEngine.performSearch(t,this.snippetLength,!1).slice(0,s),o=[];return l.length<=0?[]:(l.forEach(r=>{let i=this.transformResult(r);i&&o.push(i)}),o)}return[]}transformResult(t){let{id:s,url:l,preview:o,categories:r,heading:i,collection:n}=t;if(!l.endsWith(".json"))return r=r.split(/[-_]/).map(He).join(" "),{id:s,title:i,section:n.name,href:l,content:o}}};x(P,"baseName","bridgetown-ninja-keys"),x(P,"properties",Object.assign(j.properties,{snippetLength:{attribute:"snippet-length",type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function He(e){return e.charAt(0).toUpperCase()+e.slice(1)}(window.requestIdleCallback||window.setTimeout)(async()=>{let e=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends P{constructor(...t){super(...t),this.staticData=e}createData(){return this.results=this.showResultsForQuery(this._search),this.results.forEach(t=>{t.icon='<sl-icon name="link-45deg"></sl-icon>'}),this.staticData.concat(this.results)}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(t=>{t.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(t=>t.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(t=>t.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
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

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
*/
//# sourceMappingURL=/form-associated-helpers/pull/6/bridgetown/static/javascript/defer.DOOPF2CA.js.map
