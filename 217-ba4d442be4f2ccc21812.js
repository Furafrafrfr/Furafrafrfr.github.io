(self.webpackChunkguchilog=self.webpackChunkguchilog||[]).push([[217],{7757:function(t,e,r){t.exports=r(5666)},9217:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}r.r(e),r.d(e,{renderImageToString:function(){return g},swapPlaceholderImage:function(){return p}});var o,i=r(7757),a=r.n(i),c=r(3723),u=r(7294),l=r(7762),s=(r(72),new WeakMap),h=navigator.connection||navigator.mozConnection||navigator.webkitConnection,f=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function d(t,e){t.style.opacity="1",e&&(e.style.opacity="0")}function v(t,e,r,n,o,i){var a=t.querySelector("[data-main-image]"),c=t.querySelector("[data-placeholder-image]"),u=r.has(e);function l(t){var e=this;this.removeEventListener("load",l);var r=t.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().then((function(){d(e,c),null==o||o({wasCached:u})})).catch((function(t){d(e,c),null==i||i(t)})):(d(this,c),null==o||o({wasCached:u}))}return a.addEventListener("load",l),null==n||n({wasCached:u}),Array.from(a.parentElement.children).forEach((function(t){var e=t.getAttribute("data-src"),r=t.getAttribute("data-srcset");e&&(t.removeAttribute("data-src"),t.setAttribute("src",e)),r&&(t.removeAttribute("data-srcset"),t.setAttribute("srcset",r))})),r.add(e),a.complete&&l.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",l)}}function p(t,e,i,u,l,f,d){if(!(0,c.h)()){var p,g,y,m=(x=function(){p=v(t,e,i,l,f,d)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(t){t.forEach((function(t){var e;t.isIntersecting&&(null==(e=s.get(t.target))||e(),s.delete(t.target))}))}),{rootMargin:"4g"!==(null==h?void 0:h.effectiveType)||null!=h&&h.saveData?"2500px":"1250px"})),function(t){return s.set(t,x),o.observe(t),function(){o&&t&&(s.delete(t),o.unobserve(t))}}):function(){return x(),function(){}}),w=m(t);return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(g=u.objectFit)?g:"cover",t.dataset.objectPosition=""+(null!=(y=u.objectPosition)?y:"50% 50%"),(b=a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0="objectFitPolyfill"in window,t.t0){t.next=4;break}return t.next=4,r.e(231).then(r.t.bind(r,7231,23));case 4:window.objectFitPolyfill(e);case 5:case"end":return t.stop()}}),t)})),L=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=b.apply(t,e);function a(t){n(i,r,o,a,c,"next",t)}function c(t){n(i,r,o,a,c,"throw",t)}a(void 0)}))},function(t){return L.apply(this,arguments)})(t)),function(){p&&p(),w()}}var b,L,x;return v(t,e,i,l,f,d)}function g(t){var e=t.image,r=t.loading,n=void 0===r?"lazy":r,o=t.isLoading,i=t.isLoaded,a=t.imgClassName,s=t.imgStyle,h=void 0===s?{}:s,d=t.objectPosition,v=t.backgroundColor,p=t.objectFit,g=void 0===p?"cover":p,y=(0,c._)(t,f),m=e.width,w=e.height,b=e.layout,L=e.images,x=e.placeholder,E=e.backgroundColor;return h=(0,c.a)({objectFit:g,objectPosition:d,backgroundColor:v},h),(0,l.renderToStaticMarkup)(u.createElement(c.L,{layout:b,width:m,height:w},u.createElement(c.P,(0,c.a)({},(0,c.g)(x,i,b,m,w,E,g,d))),u.createElement(c.M,(0,c.a)({},y,{width:m,height:w,className:a},(0,c.b)(o,i,L,n,h)))))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new F(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var f="suspendedStart",d="executing",v="completed",p={};function g(){}function y(){}function m(){}var w={};l(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(C([])));L&&L!==r&&n.call(L,a)&&(w=L);var x=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?v:"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}function P(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=h(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=m,o(x,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),l(x,u,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=217-ba4d442be4f2ccc21812.js.map