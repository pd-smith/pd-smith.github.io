(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(241),{page:e.exports.default}})},216:function(e,t,n){"use strict";var r=n(24),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=x,t.Container=t.default=void 0;var a=o(n(47)),i=o(n(48)),u=o(n(217)),c=o(n(9)),l=o(n(10)),s=o(n(20)),f=o(n(21)),p=o(n(22)),d=o(n(17)),h=r(n(0)),b=o(n(23)),y=n(29),m=n(51),v=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=x(t);return h.default.createElement(g,null,h.default.createElement(n,(0,u.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=v,(0,d.default)(v,"childContextTypes",{headManager:b.default.object,router:b.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var w=(0,y.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},217:function(e,t,n){var r=n(84);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},241:function(e,t,n){"use strict";n.r(t);var r=n(85),o=n.n(r),a=n(0),i=n.n(a),u=n(86),c=n.n(u),l=n(34),s=n.n(l),f=n(59),p=n(11),d=n(12);function h(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function b(e,t,n){var r=[],o=Object(d.a)(e,r,n);return r.length<2?n:o+t(r)}var y=function e(t){for(var n="",r=0;r<t.length;r++){var o=t[r];if(null!=o){var a=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))a=e(o);else for(var i in a="",o)o[i]&&i&&(a&&(a+=" "),a+=i);break;default:a=o}a&&(n&&(n+=" "),n+=a)}}return n},m=function(e){var t=Object(f.a)(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=Object(p.a)(n,t.registered,void 0!==this?this.mergedProps:void 0);return Object(d.b)(t,o,!1),t.key+"-"+o.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return b(t.registered,n,y(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=Object(p.a)(n,t.registered);h(t,o)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=Object(p.a)(n,t.registered),a="animation-"+o.name;return h(t,{name:o.name,styles:"@keyframes "+a+"{"+o.styles+"}"}),a},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:d.a.bind(null,t.registered),merge:b.bind(null,t.registered,n)}}(),v=(m.flush,m.hydrate),g=(m.cx,m.merge,m.getRegisteredStyles,m.injectGlobal),w=(m.keyframes,m.css,m.sheet,m.cache,n(2)),x=n(4);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n            html, body {\n                font-family: 'Merriweather Sans', sans-serif;\n                line-height: 1.5;\n                background-color: ",";\n                color: ",";\n            }\n\n            html { \n                height:100%;\n            }\n            body {\n                min-height:100%;\n                margin: 0;\n                position:relative;\n            }\n            body::after{\n                content:'';\n                height: 100px;\n                display:block;\n            }\n            h1 {\n                font-size: 30px;\n            }\n            h2 {\n                font-size: 26px;\n                margin: 30px 0 15px;\n                font-weight: bold;\n            }\n            h3 {\n                font-size: 22px;\n                margin: 30px 0 10px;\n            }\n            hr {\n                border-right-width: initial;\n                border-bottom-width: initial;\n                border-left-width: initial;\n                border-right-color: initial;\n                border-bottom-color: initial;\n                border-left-color: initial;\n                margin: 50px 0px;\n                border-style: solid none none;\n                border-image: initial;\n                border-top: 1px solid rgb(211, 211, 211);\n                background: none;\n            }\n        "]);return j=function(){return e},e}function O(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function P(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return I});var T=w.a.footer({color:x.b.darkgray,textAlign:"center",fontSize:"35px",position:"absolute",bottom:"0",width:"100%",height:"50px",padding:"20px 0"}),A=Object(w.a)(x.a)({padding:"0 5px"});var I=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=P(this,E(t).call(this,e)),"undefined"!=typeof window&&v(window.__NEXT_DATA__.style.ids),g(j(),x.b.lightgray,x.b.darkgray),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,c.a),C(t,null,[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,a={},n.getInitialProps&&(a=n.getInitialProps(r)),e.abrupt("return",{pageProps:a});case 4:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){O(a,r,o,i,u,"next",e)}function u(e){O(a,r,o,i,u,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}]),C(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("title",null,"Main Site")),i.a.createElement(u.Container,null,i.a.createElement(t,n)),i.a.createElement(T,null,i.a.createElement(A,{href:"https://www.linkedin.com/in/patrsmith/"},i.a.createElement("i",{className:"fab fa-linkedin"})),i.a.createElement(A,{href:"https://github.com/pd-smith"},i.a.createElement("i",{className:"fab fa-github-square"}))))}}]),t}()},85:function(e,t,n){e.exports=n(96)},86:function(e,t,n){e.exports=n(216)}},[[215,1,0]]]);