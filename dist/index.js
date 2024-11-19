"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(B,f){
var d=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function R(e,r,a,i){var n,u,s,t;if(e<=0)return 0;if(a===0)return d(r[i])?0:m(r[i])*e;for(u=i,n=0,t=0;t<e;t++)s=r[u],d(s)===!1&&(n+=m(s)),u+=a;return n}f.exports=R
});var p=v(function(C,c){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=o();function E(e,r,a){return b(e,r,a,_(e,a))}c.exports=E
});var l=v(function(D,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),g=o();O(y,"ndarray",g);j.exports=y
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=l(),q,x=k(h(__dirname,"./native.js"));w(x)?q=z:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
