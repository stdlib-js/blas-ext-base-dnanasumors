// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e){return Math.abs(e)}function _(e,r,t){var n,o,i,a;if(e<=0)return 0;if(1===e||0===t)return f(r[0])?0:c(r[0]);for(o=t<0?(1-e)*t:0,n=0,a=0;a<e;a++)!1===f(i=r[o])&&(n+=c(i)),o+=t;return n}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,i,a,u;if(e<=0)return 0;if(1===e||0===t)return f(r[n])?0:c(r[n]);for(i=n,o=0,u=0;u<e;u++)!1===f(a=r[i])&&(o+=c(a)),i+=t;return o}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanasumors=r();
//# sourceMappingURL=index.js.map
