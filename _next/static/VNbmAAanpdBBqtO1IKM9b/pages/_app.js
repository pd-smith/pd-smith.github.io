(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+oT+":function(e,n,t){var r=t("eVuF");function a(e,n,t,a,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?n(c):r.resolve(c).then(a,i)}e.exports=function(e){return function(){var n=this,t=arguments;return new r(function(r,i){var o=e.apply(n,t);function u(e){a(o,r,i,u,l,"next",e)}function l(e){a(o,r,i,u,l,"throw",e)}u(void 0)})}}},"2Eek":function(e,n,t){e.exports=t("W7oM")},"8Bbg":function(e,n,t){e.exports=t("B5Ud")},B5Ud:function(e,n,t){"use strict";var r=t("KI45"),a=r(t("ln6h")),i=r(t("+oT+")),o=r(t("UXZV")),u=r(t("/HRN")),l=r(t("WaGi")),c=r(t("ZDA2")),s=r(t("/+P4")),f=r(t("N9n2")),d=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var h=d(t("q1tI")),b=p(t("17x9")),g=t("Bu4q"),v=t("20a2"),m=function(e){function n(){return(0,u.default)(this,n),(0,c.default)(this,(0,s.default)(n).apply(this,arguments))}return(0,f.default)(n,e),(0,l.default)(n,[{key:"getChildContext",value:function(){return{router:v.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,n=e.router,t=e.Component,r=e.pageProps,a=k(n);return h.default.createElement(y,null,h.default.createElement(t,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,i.default)(a.default.mark(function e(n){var t,r,i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,n.router,r=n.ctx,e.next=3,g.loadGetInitialProps(t,r);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}]),n}(h.Component);m.childContextTypes={router:b.default.object},n.default=m;var y=function(e){function n(){return(0,u.default)(this,n),(0,c.default)(this,(0,s.default)(n).apply(this,arguments))}return(0,f.default)(n,e),(0,l.default)(n,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var n=document.getElementById(e);n&&setTimeout(function(){return n.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),n}(h.Component);n.Container=y;var w=g.execOnce(function(){0});function k(e){var n=e.pathname,t=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),n},get asPath(){return w(),t},back:function(){w(),e.back()},push:function(n,t){return w(),e.push(n,t)},pushTo:function(n,t){w();var r=t?n:null,a=t||n;return e.push(r,a)},replace:function(n,t){return w(),e.replace(n,t)},replaceTo:function(n,t){w();var r=t?n:null,a=t||n;return e.replace(r,a)}}}n.createUrl=k},J5xr:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=t("YNMu");return{page:e.default||e}}])},W7oM:function(e,n,t){t("nZgG");var r=t("WEpk").Object;e.exports=function(e,n){return r.defineProperties(e,n)}},YNMu:function(e,n,t){"use strict";t.r(n);var r=t("2Eek"),a=t.n(r),i=t("FbiP"),o=t.n(i);var u=t("ln6h"),l=t.n(u),c=t("O40h"),s=t("0iUn"),f=t("MI3g"),d=t("a7VT"),p=t("sLSF"),h=t("Tit0"),b=t("q1tI"),g=t.n(b),v=t("8Bbg"),m=t.n(v),y=t("PgRs"),w=t.n(y),k=t("TqVZ"),x=t("MiSq"),P=t("SIPS");function j(e,n){if(void 0===e.inserted[n.name])return e.insert("",n,e.sheet,!0)}function O(e,n,t){var r=[],a=Object(P.a)(e,r,t);return r.length<2?t:a+n(r)}var E=function e(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(t&&(t+=" "),t+=i)}}return t},_=function(e){var n=Object(k.a)(e);n.sheet.speedy=function(e){this.isSpeedy=e},n.compat=!0;var t=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=Object(x.a)(t,n.registered,void 0!==this?this.mergedProps:void 0);return Object(P.b)(n,a,!1),n.key+"-"+a.name};return{css:t,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return O(n.registered,t,E(r))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=Object(x.a)(t,n.registered);j(n,a)},keyframes:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=Object(x.a)(t,n.registered),i="animation-"+a.name;return j(n,{name:a.name,styles:"@keyframes "+i+"{"+a.styles+"}"}),i},hydrate:function(e){e.forEach(function(e){n.inserted[e]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:P.a.bind(null,n.registered),merge:O.bind(null,n.registered,t)}}(),T=(_.flush,_.hydrate),C=(_.cx,_.merge,_.getRegisteredStyles,_.injectGlobal),I=(_.keyframes,_.css,_.sheet,_.cache,t("5D9J")),M=t("i3vZ");function A(){var e,n,t=(e=["\n            html, body {\n                font-family: 'Poppins', sans-serif;\n                line-height: 1.5;\n                background-color: ",";\n                color: ",";\n            }\n\n            html { \n                height:100%;\n            }\n            body {\n                min-height:100%;\n                margin: 0;\n                position:relative;\n            }\n            body::after{\n                content:'';\n                height: 100px;\n                display:block;\n            }\n            h1 {\n                font-size: 30px;\n            }\n            h2 {\n                font-size: 26px;\n                margin: 30px 0 15px;\n                font-weight: bold;\n            }\n            h3 {\n                font-size: 22px;\n                margin: 30px 0 10px;\n            }\n            hr {\n                border-right-width: initial;\n                border-bottom-width: initial;\n                border-left-width: initial;\n                border-right-color: initial;\n                border-bottom-color: initial;\n                border-left-color: initial;\n                margin: 50px 0px;\n                border-style: solid none none;\n                border-image: initial;\n                border-top: 1px solid rgb(211, 211, 211);\n                background: none;\n            }\n        "],n||(n=e.slice(0)),o()(a()(e,{raw:{value:o()(n)}})));return A=function(){return t},t}t.d(n,"default",function(){return q});var S=I.a.footer({color:M.b.darkgray,textAlign:"center",fontSize:"35px",position:"absolute",bottom:"0",width:"100%",height:"50px",padding:"20px 0"}),N=Object(I.a)(M.a)({padding:"0 5px"});var q=function(e){function n(e){var t;return Object(s.default)(this,n),t=Object(f.default)(this,Object(d.default)(n).call(this,e)),"undefined"!=typeof window&&T(window.__NEXT_DATA__.style.ids),C(A(),M.b.lightgray,M.b.darkgray),t}return Object(h.default)(n,e),Object(p.default)(n,null,[{key:"getInitialProps",value:function(){var e=Object(c.default)(l.a.mark(function e(n){var t,r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,r=n.ctx,a={},t.getInitialProps&&(a=t.getInitialProps(r)),e.abrupt("return",{pageProps:a});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}]),Object(p.default)(n,[{key:"render",value:function(){var e=this.props,n=e.Component,t=e.pageProps;return g.a.createElement(g.a.Fragment,null,g.a.createElement(w.a,null,g.a.createElement("title",null,"Main Site")),g.a.createElement(v.Container,null,g.a.createElement(n,t)),g.a.createElement(S,null,g.a.createElement(N,{target:"_blank",href:"https://www.linkedin.com/in/patrsmith/"},g.a.createElement("i",{className:"fab fa-linkedin"})),g.a.createElement(N,{target:"_blank",href:"https://github.com/pd-smith"},g.a.createElement("i",{className:"fab fa-github-square"}))))}}]),n}(m.a)},nZgG:function(e,n,t){var r=t("Y7ZC");r(r.S+r.F*!t("jmDH"),"Object",{defineProperties:t("fpC5")})}},[["J5xr",1,0]]]);