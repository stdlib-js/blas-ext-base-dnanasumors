// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(r,n,s){var i,a,d,m;if(r<=0)return 0;if(1===r||0===s)return e(n[0])?0:t(n[0]);for(a=s<0?(1-r)*s:0,i=0,m=0;m<r;m++)d=n[a],!1===e(d)&&(i+=t(d)),a+=s;return i}function s(r,n,s,i){var a,d,m,o;if(r<=0)return 0;if(1===r||0===s)return e(n[i])?0:t(n[i]);for(d=i,a=0,o=0;o<r;o++)m=n[d],!1===e(m)&&(a+=t(m)),d+=s;return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
