(function(){var t={3462:function(t,r){"use strict";class e{constructor(t){this.i=0,this.string=t,this.whitespace=" \t\r\n",this.quotes="'\"",this.escapes="\\",this.escapedQuotes='"',this.ansiCQuotes=!0,this.localeQuotes=!0,this.debug=!1}readChar(){return this.string.charAt(this.i++)}processEscapes(t,r,e){if(!e&&!this.escapedQuotes.includes(r))return t;const n="["+this.escapes.replace(/(.)/g,"\\$1")+"]";if(!e&&this.escapedQuotes.includes(r)){const e=new RegExp(n+"("+n+"|\\"+r+")","g");return t.replace(e,"$1")}if(e){const r={"([\\\\'\"?])":t=>t,a:()=>"",b:()=>"\b","e|E":()=>"",f:()=>"\f",n:()=>"\n",r:()=>"\r",t:()=>"\t",v:()=>"\v","([0-7]{1,3})":t=>String.fromCharCode(parseInt(t,8)),"x([0-9a-fA-F]{1,2})":t=>String.fromCharCode(parseInt(t,16)),"u([0-9a-fA-F]{1,4})":t=>String.fromCharCode(parseInt(t,16)),"U([0-9a-fA-F]{1,8})":t=>String.fromCharCode(parseInt(t,16)),"c(.)":t=>"?"===t?"":"@"===t?"\0":String.fromCharCode(31&t.charCodeAt(0))},e=new RegExp(n+"("+Object.keys(r).join("|")+")","g");return t.replace(e,(function(t,e){for(const n in r){const t=new RegExp("^"+n+"$").exec(e);if(null!==t)return r[n].apply(null,t.slice(1))}}))}}*[Symbol.iterator](){let t,r=!1,e=!1,n=!1,o=-2;this.debug&&console.log("full input:",">"+this.string+"<");while(1){const i=this.i,u=this.readChar();if(this.debug&&console.log("position:",i,"input:",">"+u+"<","accumulated:",t,"inQuote:",r,"inDollarQuote:",e,"lastDollar:",o,"escaped:",n),""===u){if(r)throw new Error("Got EOF while in a quoted string");if(n)throw new Error("Got EOF while in an escape sequence");return void(void 0!==t&&(yield t))}if(n)"\n"===u||(t=r?(t||"")+n+u:(t||"")+u),n=!1;else if(!this.escapes.includes(u)||r&&!1===e&&!this.escapedQuotes.includes(r))if(!1===r)this.quotes.includes(u)?(r=u,o===i-1&&("'"!==u||this.ansiCQuotes)&&('"'!==u||this.localeQuotes)&&(e=u),t=t||"",!1!==e&&(t=t.slice(0,-1))):(!1===r&&"$"===u&&(o=i),this.whitespace.includes(u)?(void 0!==t&&(yield t),t=void 0):t=(t||"")+u);else{if(u===r){t=this.processEscapes(t,r,"'"===e),r=!1,e=!1;continue}t=(t||"")+u}else n=u}}}r.split=function(t){return Array.from(new e(t))},r.quote=function(t){if(""===t)return"''";const r=/[^\w@%\-+=:,./]/;return r.test(t)?("'"+t.replace(/('+)/g,"'\"$1\"'")+"'").replace(/^''|''$/g,""):t},r.join=function(t){if(!Array.isArray(t))throw new TypeError("args should be an array");return t.map(r.quote).join(" ")}},9662:function(t,r,e){var n=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,r,e){var n=e(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,r,e){var n=e(5656),o=e(1400),i=e(6244),u=function(t){return function(r,e,u){var a,c=n(r),s=i(c),f=o(u,s);if(t&&e!=e){while(s>f)if(a=c[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},3658:function(t,r,e){"use strict";var n=e(9781),o=e(3157),i=TypeError,u=Object.getOwnPropertyDescriptor,a=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,r){if(o(t)&&!u(t,"length").writable)throw i("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r}},4326:function(t,r,e){var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,r,e){var n=e(2597),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,r,e){for(var a=o(r),c=u.f,s=i.f,f=0;f<a.length;f++){var l=a[f];n(t,l)||e&&n(e,l)||c(t,l,s(r,l))}}},8880:function(t,r,e){var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},8052:function(t,r,e){var n=e(614),o=e(3070),i=e(6339),u=e(3072);t.exports=function(t,r,e,a){a||(a={});var c=a.enumerable,s=void 0!==a.name?a.name:r;if(n(e)&&i(e,s,a),a.global)c?t[r]=e:u(r,e);else{try{a.unsafe?t[r]&&(c=!0):delete t[r]}catch(f){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,r,e){var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},9781:function(t,r,e){var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var r="object"==typeof document&&document.all,e="undefined"==typeof r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:e}},317:function(t,r,e){var n=e(7854),o=e(111),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},7207:function(t){var r=TypeError,e=9007199254740991;t.exports=function(t){if(t>e)throw r("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,r,e){var n,o,i=e(7854),u=e(8113),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,f=s&&s.v8;f&&(n=f.split("."),o=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(n=u.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/),n&&(o=+n[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,r,e){var n=e(7854),o=e(1236).f,i=e(8880),u=e(8052),a=e(3072),c=e(9920),s=e(4705);t.exports=function(t,r){var e,f,l,p,v,h,y=t.target,g=t.global,b=t.stat;if(f=g?n:b?n[y]||a(y,{}):(n[y]||{}).prototype,f)for(l in r){if(v=r[l],t.dontCallGetSet?(h=o(f,l),p=h&&h.value):p=f[l],e=s(g?l:y+(b?".":"#")+l,t.forced),!e&&void 0!==p){if(typeof v==typeof p)continue;c(v,p)}(t.sham||p&&p.sham)&&i(v,"sham",!0),u(f,l,v,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(r){return!0}}},4374:function(t,r,e){var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,r,e){var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,r,e){var n=e(9781),o=e(2597),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!n||n&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},1702:function(t,r,e){var n=e(4374),o=Function.prototype,i=o.call,u=n&&o.bind.bind(i,i);t.exports=n?u:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,r,e){var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},8173:function(t,r,e){var n=e(9662),o=e(8554);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},7854:function(t,r,e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,r,e){var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:function(t){t.exports={}},4664:function(t,r,e){var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,r,e){var n=e(1702),o=e(7293),i=e(4326),u=Object,a=n("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):u(t)}:u},2788:function(t,r,e){var n=e(1702),o=e(614),i=e(5465),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,r,e){var n,o,i,u=e(4811),a=e(7854),c=e(111),s=e(8880),f=e(2597),l=e(5465),p=e(6200),v=e(3501),h="Object already initialized",y=a.TypeError,g=a.WeakMap,b=function(t){return i(t)?o(t):n(t,{})},d=function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw y("Incompatible receiver, "+t+" required");return e}};if(u||l.state){var m=l.state||(l.state=new g);m.get=m.get,m.has=m.has,m.set=m.set,n=function(t,r){if(m.has(t))throw y(h);return r.facade=t,m.set(t,r),r},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var w=p("state");v[w]=!0,n=function(t,r){if(f(t,w))throw y(h);return r.facade=t,s(t,w,r),r},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:n,get:o,has:i,enforce:b,getterFor:d}},3157:function(t,r,e){var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:function(t,r,e){var n=e(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,r,e){var n=e(7293),o=e(614),i=/#|\.prototype\./,u=function(t,r){var e=c[a(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,r,e){var n=e(614),o=e(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},2190:function(t,r,e){var n=e(5005),o=e(614),i=e(7976),u=e(3307),a=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,a(t))}},6244:function(t,r,e){var n=e(7466);t.exports=function(t){return n(t.length)}},6339:function(t,r,e){var n=e(1702),o=e(7293),i=e(614),u=e(2597),a=e(9781),c=e(6530).CONFIGURABLE,s=e(2788),f=e(9909),l=f.enforce,p=f.get,v=String,h=Object.defineProperty,y=n("".slice),g=n("".replace),b=n([].join),d=a&&!o((function(){return 8!==h((function(){}),"length",{value:8}).length})),m=String(String).split("String"),w=t.exports=function(t,r,e){"Symbol("===y(v(r),0,7)&&(r="["+g(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!u(t,"name")||c&&t.name!==r)&&(a?h(t,"name",{value:r,configurable:!0}):t.name=r),d&&e&&u(e,"arity")&&t.length!==e.arity&&h(t,"length",{value:e.arity});try{e&&u(e,"constructor")&&e.constructor?a&&h(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var n=l(t);return u(n,"source")||(n.source=b(m,"string"==typeof r?r:"")),t};Function.prototype.toString=w((function(){return i(this)&&p(this).source||s(this)}),"toString")},4758:function(t){var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},3070:function(t,r,e){var n=e(9781),o=e(4664),i=e(3353),u=e(9670),a=e(4948),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";r.f=n?i?function(t,r,e){if(u(t),r=a(r),u(e),"function"===typeof t&&"prototype"===r&&"value"in e&&v in e&&!e[v]){var n=f(t,r);n&&n[v]&&(t[r]=e.value,e={configurable:p in e?e[p]:n[p],enumerable:l in e?e[l]:n[l],writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(u(t),r=a(r),u(e),o)try{return s(t,r,e)}catch(n){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:function(t,r,e){var n=e(9781),o=e(6916),i=e(5296),u=e(9114),a=e(5656),c=e(4948),s=e(2597),f=e(4664),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=a(t),r=c(r),f)try{return l(t,r)}catch(e){}if(s(t,r))return u(!o(i.f,t,r),t[r])}},8006:function(t,r,e){var n=e(6324),o=e(748),i=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},5181:function(t,r){r.f=Object.getOwnPropertySymbols},7976:function(t,r,e){var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,r,e){var n=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,a=e(3501),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(a,e)&&o(n,e)&&c(f,e);while(r.length>s)o(n,e=r[s++])&&(~u(f,e)||c(f,e));return f}},5296:function(t,r){"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},2140:function(t,r,e){var n=e(6916),o=e(614),i=e(111),u=TypeError;t.exports=function(t,r){var e,a;if("string"===r&&o(e=t.toString)&&!i(a=n(e,t)))return a;if(o(e=t.valueOf)&&!i(a=n(e,t)))return a;if("string"!==r&&o(e=t.toString)&&!i(a=n(e,t)))return a;throw u("Can't convert object to primitive value")}},3887:function(t,r,e){var n=e(5005),o=e(1702),i=e(8006),u=e(5181),a=e(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(a(t)),e=u.f;return e?c(r,e(t)):r}},4488:function(t,r,e){var n=e(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},6200:function(t,r,e){var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,r,e){var n=e(7854),o=e(3072),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},2309:function(t,r,e){var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.30.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,r,e){var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(t,r,e){var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:function(t,r,e){var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:function(t,r,e){var n=e(4758);t.exports=function(t){var r=+t;return r!==r||0===r?0:n(r)}},7466:function(t,r,e){var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,r,e){var n=e(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:function(t,r,e){var n=e(6916),o=e(111),i=e(2190),u=e(8173),a=e(2140),c=e(5112),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=u(t,f);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},4948:function(t,r,e){var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},6330:function(t){var r=String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},9711:function(t,r,e){var n=e(1702),o=0,i=Math.random(),u=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,r,e){var n=e(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,r,e){var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,r,e){var n=e(7854),o=e(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,r,e){var n=e(7854),o=e(2309),i=e(2597),u=e(9711),a=e(6293),c=e(3307),s=n.Symbol,f=o("wks"),l=c?s["for"]||s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(f[t]=a&&i(s,t)?s[t]:l("Symbol."+t)),f[t]}},7658:function(t,r,e){"use strict";var n=e(2109),o=e(7908),i=e(6244),u=e(3658),a=e(7207),c=e(7293),s=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},l=s||!f();n({target:"Array",proto:!0,arity:1,forced:l},{push:function(t){var r=o(this),e=i(r),n=arguments.length;a(e+n);for(var c=0;c<n;c++)r[e]=arguments[c],e++;return u(r,e),e}})}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}!function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}();!function(){"use strict";var t,r;e(7658);(function(t){t["Clockwise"]="clockwise",t["CounterClockwise"]="counter-clockwise"})(t||(t={})),function(t){t["Relative"]="relative",t["Absolute"]="absolute"}(r||(r={}));const n=(t,r)=>t in r;var o=n,i=Array.isArray,u=i,a="object"==typeof global&&global&&global.Object===Object&&global,c=a,s="object"==typeof self&&self&&self.Object===Object&&self,f=c||s||Function("return this")(),l=f,p=l.Symbol,v=p,h=Object.prototype,y=h.hasOwnProperty,g=h.toString,b=v?v.toStringTag:void 0;function d(t){var r=y.call(t,b),e=t[b];try{t[b]=void 0;var n=!0}catch(i){}var o=g.call(t);return n&&(r?t[b]=e:delete t[b]),o}var m=d,w=Object.prototype,x=w.toString;function _(t){return x.call(t)}var O=_,j="[object Null]",S="[object Undefined]",E=v?v.toStringTag:void 0;function P(t){return null==t?void 0===t?S:j:E&&E in Object(t)?m(t):O(t)}var z=P;function C(t){return null!=t&&"object"==typeof t}var A=C,T="[object Symbol]";function k(t){return"symbol"==typeof t||A(t)&&z(t)==T}var F=k,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;function D(t,r){if(u(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!F(t))||(M.test(t)||!I.test(t)||null!=r&&t in Object(r))}var R=D;function $(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}var G=$,L="[object AsyncFunction]",N="[object Function]",Q="[object GeneratorFunction]",U="[object Proxy]";function q(t){if(!G(t))return!1;var r=z(t);return r==N||r==Q||r==L||r==U}var B=q,H=l["__core-js_shared__"],J=H,W=function(){var t=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function X(t){return!!W&&W in t}var K=X,V=Function.prototype,Y=V.toString;function Z(t){if(null!=t){try{return Y.call(t)}catch(r){}try{return t+""}catch(r){}}return""}var tt=Z,rt=/[\\^$.*+?()[\]{}|]/g,et=/^\[object .+?Constructor\]$/,nt=Function.prototype,ot=Object.prototype,it=nt.toString,ut=ot.hasOwnProperty,at=RegExp("^"+it.call(ut).replace(rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ct(t){if(!G(t)||K(t))return!1;var r=B(t)?at:et;return r.test(tt(t))}var st=ct;function ft(t,r){return null==t?void 0:t[r]}var lt=ft;function pt(t,r){var e=lt(t,r);return st(e)?e:void 0}var vt=pt,ht=vt(Object,"create"),yt=ht;function gt(){this.__data__=yt?yt(null):{},this.size=0}var bt=gt;function dt(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var mt=dt,wt="__lodash_hash_undefined__",xt=Object.prototype,_t=xt.hasOwnProperty;function Ot(t){var r=this.__data__;if(yt){var e=r[t];return e===wt?void 0:e}return _t.call(r,t)?r[t]:void 0}var jt=Ot,St=Object.prototype,Et=St.hasOwnProperty;function Pt(t){var r=this.__data__;return yt?void 0!==r[t]:Et.call(r,t)}var zt=Pt,Ct="__lodash_hash_undefined__";function At(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=yt&&void 0===r?Ct:r,this}var Tt=At;function kt(t){var r=-1,e=null==t?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}kt.prototype.clear=bt,kt.prototype["delete"]=mt,kt.prototype.get=jt,kt.prototype.has=zt,kt.prototype.set=Tt;var Ft=kt;function It(){this.__data__=[],this.size=0}var Mt=It;function Dt(t,r){return t===r||t!==t&&r!==r}var Rt=Dt;function $t(t,r){var e=t.length;while(e--)if(Rt(t[e][0],r))return e;return-1}var Gt=$t,Lt=Array.prototype,Nt=Lt.splice;function Qt(t){var r=this.__data__,e=Gt(r,t);if(e<0)return!1;var n=r.length-1;return e==n?r.pop():Nt.call(r,e,1),--this.size,!0}var Ut=Qt;function qt(t){var r=this.__data__,e=Gt(r,t);return e<0?void 0:r[e][1]}var Bt=qt;function Ht(t){return Gt(this.__data__,t)>-1}var Jt=Ht;function Wt(t,r){var e=this.__data__,n=Gt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}var Xt=Wt;function Kt(t){var r=-1,e=null==t?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}Kt.prototype.clear=Mt,Kt.prototype["delete"]=Ut,Kt.prototype.get=Bt,Kt.prototype.has=Jt,Kt.prototype.set=Xt;var Vt=Kt,Yt=vt(l,"Map"),Zt=Yt;function tr(){this.size=0,this.__data__={hash:new Ft,map:new(Zt||Vt),string:new Ft}}var rr=tr;function er(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}var nr=er;function or(t,r){var e=t.__data__;return nr(r)?e["string"==typeof r?"string":"hash"]:e.map}var ir=or;function ur(t){var r=ir(this,t)["delete"](t);return this.size-=r?1:0,r}var ar=ur;function cr(t){return ir(this,t).get(t)}var sr=cr;function fr(t){return ir(this,t).has(t)}var lr=fr;function pr(t,r){var e=ir(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}var vr=pr;function hr(t){var r=-1,e=null==t?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}hr.prototype.clear=rr,hr.prototype["delete"]=ar,hr.prototype.get=sr,hr.prototype.has=lr,hr.prototype.set=vr;var yr=hr,gr="Expected a function";function br(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(gr);var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return e.cache=i.set(o,u)||i,u};return e.cache=new(br.Cache||yr),e}br.Cache=yr;var dr=br,mr=500;function wr(t){var r=dr(t,(function(t){return e.size===mr&&e.clear(),t})),e=r.cache;return r}var xr=wr,_r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Or=/\\(\\)?/g,jr=xr((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(_r,(function(t,e,n,o){r.push(n?o.replace(Or,"$1"):e||t)})),r})),Sr=jr;function Er(t,r){var e=-1,n=null==t?0:t.length,o=Array(n);while(++e<n)o[e]=r(t[e],e,t);return o}var Pr=Er,zr=1/0,Cr=v?v.prototype:void 0,Ar=Cr?Cr.toString:void 0;function Tr(t){if("string"==typeof t)return t;if(u(t))return Pr(t,Tr)+"";if(F(t))return Ar?Ar.call(t):"";var r=t+"";return"0"==r&&1/t==-zr?"-0":r}var kr=Tr;function Fr(t){return null==t?"":kr(t)}var Ir=Fr;function Mr(t,r){return u(t)?t:R(t,r)?[t]:Sr(Ir(t))}var Dr=Mr,Rr=1/0;function $r(t){if("string"==typeof t||F(t))return t;var r=t+"";return"0"==r&&1/t==-Rr?"-0":r}var Gr=$r;function Lr(t,r){r=Dr(r,t);var e=0,n=r.length;while(null!=t&&e<n)t=t[Gr(r[e++])];return e&&e==n?t:void 0}var Nr=Lr,Qr=function(){try{var t=vt(Object,"defineProperty");return t({},"",{}),t}catch(r){}}(),Ur=Qr;function qr(t,r,e){"__proto__"==r&&Ur?Ur(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}var Br=qr,Hr=Object.prototype,Jr=Hr.hasOwnProperty;function Wr(t,r,e){var n=t[r];Jr.call(t,r)&&Rt(n,e)&&(void 0!==e||r in t)||Br(t,r,e)}var Xr=Wr,Kr=9007199254740991,Vr=/^(?:0|[1-9]\d*)$/;function Yr(t,r){var e=typeof t;return r=null==r?Kr:r,!!r&&("number"==e||"symbol"!=e&&Vr.test(t))&&t>-1&&t%1==0&&t<r}var Zr=Yr;function te(t,r,e,n){if(!G(t))return t;r=Dr(r,t);var o=-1,i=r.length,u=i-1,a=t;while(null!=a&&++o<i){var c=Gr(r[o]),s=e;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=u){var f=a[c];s=n?n(f,c,a):void 0,void 0===s&&(s=G(f)?f:Zr(r[o+1])?[]:{})}Xr(a,c,s),a=a[c]}return t}var re=te;function ee(t,r,e){var n=-1,o=r.length,i={};while(++n<o){var u=r[n],a=Nr(t,u);e(a,u)&&re(i,Dr(u,t),a)}return i}var ne=ee;function oe(t,r){return null!=t&&r in Object(t)}var ie=oe,ue="[object Arguments]";function ae(t){return A(t)&&z(t)==ue}var ce=ae,se=Object.prototype,fe=se.hasOwnProperty,le=se.propertyIsEnumerable,pe=ce(function(){return arguments}())?ce:function(t){return A(t)&&fe.call(t,"callee")&&!le.call(t,"callee")},ve=pe,he=9007199254740991;function ye(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=he}var ge=ye;function be(t,r,e){r=Dr(r,t);var n=-1,o=r.length,i=!1;while(++n<o){var a=Gr(r[n]);if(!(i=null!=t&&e(t,a)))break;t=t[a]}return i||++n!=o?i:(o=null==t?0:t.length,!!o&&ge(o)&&Zr(a,o)&&(u(t)||ve(t)))}var de=be;function me(t,r){return null!=t&&de(t,r,ie)}var we=me;function xe(t,r){return ne(t,r,(function(r,e){return we(t,e)}))}var _e=xe;function Oe(t,r){var e=-1,n=r.length,o=t.length;while(++e<n)t[o+e]=r[e];return t}var je=Oe,Se=v?v.isConcatSpreadable:void 0;function Ee(t){return u(t)||ve(t)||!!(Se&&t&&t[Se])}var Pe=Ee;function ze(t,r,e,n,o){var i=-1,u=t.length;e||(e=Pe),o||(o=[]);while(++i<u){var a=t[i];r>0&&e(a)?r>1?ze(a,r-1,e,n,o):je(o,a):n||(o[o.length]=a)}return o}var Ce=ze;function Ae(t){var r=null==t?0:t.length;return r?Ce(t,1):[]}var Te=Ae;function ke(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}var Fe=ke,Ie=Math.max;function Me(t,r,e){return r=Ie(void 0===r?t.length-1:r,0),function(){var n=arguments,o=-1,i=Ie(n.length-r,0),u=Array(i);while(++o<i)u[o]=n[r+o];o=-1;var a=Array(r+1);while(++o<r)a[o]=n[o];return a[r]=e(u),Fe(t,this,a)}}var De=Me;function Re(t){return function(){return t}}var $e=Re;function Ge(t){return t}var Le=Ge,Ne=Ur?function(t,r){return Ur(t,"toString",{configurable:!0,enumerable:!1,value:$e(r),writable:!0})}:Le,Qe=Ne,Ue=800,qe=16,Be=Date.now;function He(t){var r=0,e=0;return function(){var n=Be(),o=qe-(n-e);if(e=n,o>0){if(++r>=Ue)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}var Je=He,We=Je(Qe),Xe=We;function Ke(t){return Xe(De(t,void 0,Te),t+"")}var Ve=Ke,Ye=Ve((function(t,r){return null==t?{}:_e(t,r)})),Ze=Ye,tn=e(3462);const rn=t=>{const r={};for(const[,e,n]of t.matchAll(/([a-z])[ \t]*(-?(?:\d+(?:\.\d+)?|\.\d+))/gi))r[e.toLowerCase()]=Number(n);return r},en=t=>{const r={};for(const e of tn.split(t)){const t=e.indexOf("="),n=e.substring(0,t),o=e.substring(t+1);r[n.toLowerCase()]=o}return r},nn=t=>{const r=t.trim().split(";",2)[0],[,e,n=""]=r.split(/^([gm][0-9]+)\s*/i);if(e)return{type:"gcode",command:e.toUpperCase(),args:rn(n)};const[,o,i=""]=r.split(/^(SET_PRINT_STATS_INFO|EXCLUDE_OBJECT_DEFINE)\s+/i);return o?{type:"macro",command:o.toUpperCase(),args:en(i)}:{type:"other"}},on=t=>Math.round(1e4*t)/1e4,un=t=>{const r={action:"progress",filePosition:t};postMessage(r)},an=(t,r,e)=>{const n={action:"result",moves:t,layers:r,parts:e};postMessage(n)},cn=e=>{const n=[],i=[],u=[],a=e.split("\n");let c=!1,s=r.Relative,f=r.Absolute;const l={x:0,y:0,z:0,e:0,filePosition:0},p={length:1,extrudeExtra:0,z:0};for(let v=0;v<a.length;v++){const{type:e,command:h,args:y}=nn(a[v])??{};if(!y)continue;let g=null;if("macro"===e)switch(h){case"SET_PRINT_STATS_INFO":"current_layer"in y&&(c=!0);break;case"EXCLUDE_OBJECT_DEFINE":if("polygon"in y&&y.polygon){const t=JSON.parse(y.polygon),r={polygon:t.map((([t,r])=>({x:t,y:r})))};u.push(Object.freeze(r))}break}else if("gcode"===e){switch(h){case"G0":case"G1":g={...Ze(y,["x","y","z","e"]),filePosition:l.filePosition};break;case"G2":case"G3":g={...Ze(y,["x","y","z","e","i","j","k","r"]),direction:"G2"===h?t.Clockwise:t.CounterClockwise,filePosition:l.filePosition};break;case"G10":g={e:-p.length,filePosition:0},0!==p.z&&(g.z=on(l.z+p.z));break;case"G11":g={e:on(p.length+p.extrudeExtra),filePosition:l.filePosition},0!==p.z&&(g.z=on(l.z-p.z));break;case"G90":f=r.Absolute;case"M82":s=r.Absolute,l.e=0;break;case"G91":f=r.Relative;case"M83":s=r.Relative;break;case"G92":s===r.Absolute&&(l.e=y.e??l.e),f===r.Absolute&&(l.x=y.x??l.x,l.y=y.y??l.y,l.z=y.z??l.z);break;case"M207":p.length=y.s??p.length,p.extrudeExtra=y.s??p.extrudeExtra,p.z=y.z??p.z;break}if(g){if(s===r.Absolute&&void 0!==g.e){const t=on(g.e-l.e);l.e=g.e,g.e=t}if(f===r.Relative&&(void 0!==g.x&&(g.x=on(g.x+l.x)),void 0!==g.y&&(g.y=on(g.y+l.y)),void 0!==g.z&&(g.z=on(g.z+l.z))),c&&g.e&&g.e>0){const t=g;if(["x","y","i","j"].some((r=>o(r,t)&&0!==t[r]))){const t={z:l.z,move:n.length-1,filePosition:l.filePosition};i.push(Object.freeze(t)),c=!1}}l.x=g.x??l.x,l.y=g.y??l.y,l.z=g.z??l.z,n.push(Object.freeze(g))}}v%Math.floor(a.length/100)===0&&un(l.filePosition),l.filePosition+=a[v].length+1}un(l.filePosition),an(n,i,u)};var sn=cn;onmessage=t=>{const r=t.data;switch(r.action){case"parse":sn(r.gcode);break}}}()})();
//# sourceMappingURL=331.b5651872.js.map