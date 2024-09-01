"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=t(function(B,m){
var f=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function _(e,r,i){var n,a,u,s;if(e<=0)return 0;if(e===1||i===0)return f(r[0])?0:q(r[0]);for(i<0?a=(1-e)*i:a=0,n=0,s=0;s<e;s++)u=r[a],f(u)===!1&&(n+=q(u)),a+=i;return n}m.exports=_
});var y=t(function(C,d){
var l=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function E(e,r,i,n){var a,u,s,v;if(e<=0)return 0;if(e===1||i===0)return l(r[n])?0:p(r[n]);for(u=n,a=0,v=0;v<e;v++)s=r[u],l(s)===!1&&(a+=p(s)),u+=i;return a}d.exports=E
});var x=t(function(D,b){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=c(),g=y();O(j,"ndarray",g);b.exports=j
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=x(),o,R=k(h(__dirname,"./native.js"));w(R)?o=z:o=R;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
