/*! For license information please see 99.3d9d2d81.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{99:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(861),o=e(439),i=e(791),a=e(689),c=e(87),s=e(369),u=e(184);function l(){l=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(Y){s=function(t,r,e){return t[r]=e}}function u(t,r,e,o){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new M(o||[]);return n(a,"_invoke",{value:W(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(Y){return{type:"throw",arg:Y}}}t.wrap=u;var h={};function d(){}function V(){}function v(){}var p={};s(p,i,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(q([])));j&&j!==r&&e.call(j,i)&&(p=j);var E=v.prototype=d.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function A(t,r){function o(n,i,a,c){var s=f(t[n],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function W(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return g()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=R(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=f(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}function R(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,R(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function m(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function q(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:g}}function g(){return{value:void 0,done:!0}}return V.prototype=v,n(E,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:V,configurable:!0}),V.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===V||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},y(A.prototype),s(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new A(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=q,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(m),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),m(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;m(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:q(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var f=function(){var t,r,e=(0,a.TH)(),f=(0,i.useRef)(null!==(t=null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"./movies"),h=(0,a.UO)().movieId,d=(0,i.useState)(null),V=(0,o.Z)(d,2),v=V[0],p=V[1],x=(0,i.useState)(!0),j=(0,o.Z)(x,2),E=j[0],y=j[1],A=(0,i.useState)(!0),W=(0,o.Z)(A,2),R=W[0],G=W[1],m="/movie/".concat(h);(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.U)(m);case 3:r=t.sent,console.dir(r),p(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[m]);var M=function(t){console.log("EVENT>TARGET",t.target.name);var r=t.target.name;"reviews"===r&&y((function(t){return!t})),"cast"===r&&G((function(t){return!t}))};if(!v)return(0,u.jsx)("div",{children:"Loading..."});var q=v.poster_path,g=v.title,Y=v.name,w=v.release_date,k=v.vote_average,L=v.overview,Z=v.genres;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.rU,{to:f.current,children:"Back to the list of movies"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:q?"https://image.tmdb.org/t/p/original"+q:"data:image/jpeg;base64,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tssss7lVqjVJCbbb1JHNB82Z/KXvX1pyu1jHcjLFqqqqqqqqqqqoiIiIiIiIieJUqjmTU9rFvcnRRS0fyvKzu9IaUt6v/GMXL+5I5XZffpjO6wk9auKbVnl7t9osM375D8jqH9VWMyw6NJecGyWLekwUvcJWc+tluYvF8VVVVVVVVVVRERERERERPOtQtpJjPNJmypXY4/QXVEdL/lZVTbWcnw5bbVL9MvljT5M/nKVPuMZSuuz9vkdQ9cV7lUFJecv4n9Du81VVVVVVVVURERERERE861qOMcczdXopN3c22blQWrWj3jpR3PhHGK8V/wCUbiaXM4sUoi+/XvWZ4jOz33VXHTHqS+8a3kuuJtUwh/dW/wAzl3jn8V/E/odzfNVVVVVVVVRERERERE861rWoGTvaXhKyV7Wt1WpZcsdEPyWbaW31t1qUqlnVlyuLCrW1UqqspLLLlljNX9q1eV1eu5WyrdrW+aqqqqqqqoiIiIiIiNa1rWta1rWta1rWta1rWtaqqqqqqqqiIiJURPEb41rWta1rWta1rWta1rWtb41fFVVVVVUREREqXzL41rWta1rWta1rWta1rWta1vi3zatVVVVRERERKl861rWta1rWta1rWta1rWta1rfNq1VVVVURERPEqVK1rWta1rWta1rWta1rWta1rWtatWrfFVVVURET6JUqVrWta1rWta1rWta1rWta1rWtWrVv0VVVURE+nWpUrWta1rWta1rWta1rWta1rWrVq1v01VVERPo1rWta1rWta1rWta1rWta1rWta1a1rW/RVVU8TzvjWta1rWta1rWta1rWta1rWta1rWta1rW+b4vied8a1rWta1rWta1rWta1rWta1rWta1rWta3xvm+J53xrWta1rWta1rWta1rWta1rWta1rWta1rWt8b4viVvnWta1rWta1rWta1rWta1rWta1rWta1rWta1vjVq36Na1rWta1rWta1rWta1rWta1rWta1rWta1rWtb9Wta1rWta1rWta1rWta1rWta1rWta1rWta1rWta36ta1rWta1rWta1rWta1rWta1rWta1rWta1rWtb+hrWta1rWta1rWta1rWta1rWta1rWta1rWtb+prWta1rWta1rWta1rWta1rWta1rWta1rf1ta1rWta1rWta1rWta1rWta1rWta1rW/8Ota1rWta1rWta1rWta1rWta1rWt/wCXWta1rWta1rWta1rWta1rWtb/AN++db51v/P/AP/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AVL//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AFS//9k=",alt:g||Y}),(0,u.jsxs)("h2",{children:[g||Y," (",w.slice(0,4),")"]}),(0,u.jsxs)("p",{children:["Rating: ",k.toFixed(1)]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:L})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("div",{children:Z.map((function(t){return(0,u.jsx)("p",{children:t.name},t.id)}))})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional info"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{name:"reviews",to:E?"reviews":"",onClick:M,children:"Reviews"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{name:"cast",to:R?"cast":"",onClick:M,children:"Cast"})})]})]}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)("div",{children:"LOADING SUBPAGE..."}),children:(0,u.jsx)(a.j3,{})})]})}},369:function(t,r,e){e.d(r,{U:function(){return u}});var n=e(861),o=e(243),i=" https://api.themoviedb.org/3",a="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODI5YzE4NTNhNmU0YjQyOWM2YTkwYzYxMzlmNDM5YyIsInN1YiI6IjY0YWQ1YzVlOGEwZTliMDBlMzc1M2VmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5WH9ltQhhGnfZ0snarPEFwBogRn3ds5bNR0L46BO2lw";function c(){c=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(Y){u=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new M(o||[]);return n(a,"_invoke",{value:W(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(Y){return{type:"throw",arg:Y}}}t.wrap=l;var h={};function d(){}function V(){}function v(){}var p={};u(p,i,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(q([])));j&&j!==r&&e.call(j,i)&&(p=j);var E=v.prototype=d.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function A(t,r){function o(n,i,a,c){var s=f(t[n],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function W(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return g()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=R(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=f(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}function R(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,R(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function m(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function q(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:g}}function g(){return{value:void 0,done:!0}}return V.prototype=v,n(E,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:V,configurable:!0}),V.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===V||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},y(A.prototype),u(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new A(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(E),u(E,s,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=q,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(m),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),m(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;m(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:q(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var s=o.Z.create(),u=function(){var t=(0,n.Z)(c().mark((function t(){var r,e,n,u,l=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>0&&void 0!==l[0]?l[0]:"trending/all/day",e=l.length>1&&void 0!==l[1]?l[1]:1,n=o.Z.CancelToken.source(),t.prev=3,t.next=6,s.get("".concat(i).concat(r),{cancelToken:n.token,headers:{Authorization:"Bearer ".concat(a)},params:{page:e}});case 6:return u=t.sent,console.log(u.data),t.abrupt("return",u.data);case 11:if(t.prev=11,t.t0=t.catch(3),!o.Z.isCancel(t.t0)){t.next=17;break}console.log("\u0417\u0430\u043f\u0438\u0442 \u0431\u0443\u0432 \u0441\u043a\u0430\u0441\u043e\u0432\u0430\u043d:",t.t0.message),t.next=19;break;case 17:throw console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443:",t.t0),t.t0;case 19:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=99.3d9d2d81.chunk.js.map