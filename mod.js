// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;function c(e){return e!=e}function _(e){return Math.abs(e)}function f(e,r,t){var n,o,a,u;if(e<=0)return 0;if(1===e||0===t)return c(r[0])?0:_(r[0]);for(o=t<0?(1-e)*t:0,n=0,u=0;u<e;u++)!1===c(a=r[o])&&(n+=_(a)),o+=t;return n}function p(e,r,t,n){var o,a,u,i;if(e<=0)return 0;if(1===e||0===t)return c(r[n])?0:_(r[n]);for(a=n,o=0,i=0;i<e;i++)!1===c(u=r[a])&&(o+=_(u)),a+=t;return o}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},r(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p});export{f as default,p as ndarray};
//# sourceMappingURL=mod.js.map