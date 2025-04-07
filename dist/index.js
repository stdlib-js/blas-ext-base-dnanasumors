"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(B,d){
var q=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function R(e,r,a,x){var n,i,s,u;if(e<=0)return 0;if(i=x,a===0)return q(r[i])?0:f(r[i])*e;for(n=0,u=0;u<e;u++)s=r[i],q(s)===!1&&(n+=f(s)),i+=a;return n}d.exports=R
});var c=t(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=v();function E(e,r,a){return b(e,r,a,_(e,a))}m.exports=E
});var j=t(function(D,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),g=v();O(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),o,l=k(h(__dirname,"./native.js"));w(l)?o=z:o=l;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
