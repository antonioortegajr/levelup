(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=o(n("q1tI")),i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(i.AmpStateContext))}},"/h46":function(e,t,n){n("cHUd")("Map")},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2Eek":function(e,t,n){e.exports=n("W7oM")},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),o=n("uplh"),a=n("NsO/"),i=n("vwuL"),s=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),c=i.f,u=o(r),l={},f=0;u.length>f;)void 0!==(n=c(r,t=u[f++]))&&s(l,t,n);return l}})},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=a(n("q1tI")),s=a(n("Xuae")),c=n("lwAK"),u=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=a.props[l],d=o[l]||new r;d.has(f)?i=!1:(d.add(f),o[l]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var h=s.default();function m(e){var t=e.children;return i.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=h.rewind,t.default=m},"8iia":function(e,t,n){var r=n("QMMT"),o=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},LX0d:function(e,t,n){e.exports=n("UDep")},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=n("hfKm"),c=n.n(s),u=n("2Eek"),l=n.n(u),f=n("XoMD"),d=n.n(f),p=n("Jo+v"),v=n.n(p),h=n("4mXO"),m=n.n(h),y=n("pLtp"),g=n.n(y);function k(e,t,n){return t in e?c()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("YFqc");var w=o.a.createElement;function b(e,t){var n=g()(e);if(m.a){var r=m()(e);t&&(r=r.filter((function(t){return v()(e,t).enumerable}))),n.push.apply(n,r)}return n}var _=[{href:"tel:541-654-563",label:"541-654-563",icon:"fa fa-phone"},{href:"https://www.google.com/maps/search/?api=1&query=level+up+arcade",label:"1290 Oak Street, Eugene, OR 97401",icon:"fa fa-map-marker"},{href:"https://www.facebook.com/leveluparcade",label:"leveluparcade",icon:"fa fa-facebook"}].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){k(e,t,n[t])})):d.a?l()(e,d()(n)):b(Object(n)).forEach((function(t){c()(e,t,v()(n,t))}))}return e}({},e,{key:"nav-link-".concat(e.href,"-").concat(e.label)})})),E=function(){return w("nav",null,w("ul",null,_.map((function(e){var t=e.key,n=e.href,r=e.label,o=e.icon;return w("li",{key:t},w("i",{class:o}),w("a",{href:n},r))}))))},M=o.a.createElement;t.default=function(){return M("div",null,M(i.a,null,M("title",null,"Level Up Arcade, Eugene, OR - Open 7 days a week!"),M("link",{rel:"icon",href:"/images/favicon.ico"}),M("meta",{charset:"utf-8"}),M("meta",{name:"keywords",content:"Level Up Arcade, Eugene, OR, Oregon, Barcade, Pinball, Drinks, Events"}),M("meta",{name:"description",content:"Level Up Arcade in Eugene, Open 7 days a week from 2PM Until 2AM on Weekdays, and Noon until 2AM on Weekends. All ages welcome until 9PM, 21+ after 9PM."}),M("meta",{name:"author",content:"Antonio Ortega Jr, Bau Kim"}),M("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),M(E,null),M("div",{id:"home",class:"section"},M("div",{class:"container"},M("div",{class:"row"},M("div",{class:"col-md-2"}),M("div",{class:"col-md-8"},M("h1",null,"Level Up Arcade"),M("h2",null,"Food, Drinks, Games, and a DJ Every Week!")),M("div",{class:"col-md-2"})))),M("div",{id:"about",class:"section"},M("div",{class:"container"},M("div",{class:"row"},M("div",{class:"col-md-4 col-xs-11"},M("div",{class:"media"},M("div",{class:"media-object media-left"},M("i",{class:"fa fa-gamepad"})),M("div",{class:"media-body"},M("h3",{class:"media-heading"},"Come Join the Fun"),M("p",null,"Inside you will find lots of standup arcade games, pinball machines, group party games, drivers, shooters, golf, and much more. On Friday/Saturday, we have a DJ spinning tunes.")))),M("div",{class:"col-md-4 col-xs-11"},M("div",{class:"media"},M("div",{class:"media-object media-left"},M("i",{class:"fa fa-birthday-cake"})),M("div",{class:"media-body"},M("h3",{class:"media-heading"},"Food and Drinks"),M("p",null,"Check out our full menu of snacks and drinks. Try our cocktails, beers, or soda. Grab a bite to eat at lunch or dinner, or have a late night snack.")))),M("div",{class:"col-md-4 col-xs-11"},M("div",{class:"media"},M("div",{class:"media-object media-left"},M("i",{class:"fa fa-clock-o"})),M("div",{class:"media-body"},M("h3",{class:"media-heading"},"Open All Week"),M("p",null,"We are open 7 days a week, from ",M("b",null,"2:00 PM until 2:00 AM")," weekdays and ",M("b",null,"12:00 PM until 2:00 AM")," on weekends.",M("br",null),"Everybody welcome until 9:00 PM, 21+ only after 9:00 PM."))))))),M("div",{id:"contact",class:"section"},M("div",{class:"container"},M("div",{class:"row"},M("div",{class:"col-lg-5 col-lg-offset-1 col-md-6"},M("address",null,M("p",{class:"contact-title"},"CONTACT US"),M("p",null,M("i",{class:"fa fa-phone"})," ",M("a",{href:"tel:5416545632"},"541-654-5632")),M("p",null,M("i",{class:"fa fa-facebook"})," ",M("a",{href:"https://www.facebook.com/leveluparcade/"},"facebook.leveluparcade")),M("p",null,M("i",{class:"fa fa-map-marker"})," ",M("a",{href:"https://goo.gl/maps/4K9sioboBLdJ1HBk6"},"1290 Oak St, Eugene, OR 97405"))))))),M("footer",null,M("div",{class:"container"},M("div",{class:"row"},M("div",{class:"col-md-12"},M("p",null,"Copyright \xa9 2020 Level Up"))))),M("link",{rel:"stylesheet",href:"css/bootstrap.min.css"}),M("link",{rel:"stylesheet",href:"css/font-awesome.min.css"}),M("link",{rel:"stylesheet",href:"css/style.css"}),M("link",{href:"http://fonts.googleapis.com/css?family=Raleway:400,300,700,800",rel:"stylesheet",type:"text/css"}))}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");e.exports=function(e){return r(e)||o(e)||a()}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),s=n("NwJ3"),c=n("tEej"),u=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,f,d=a(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,g=l(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(n=new p(t=c(d.length));t>y;y++)u(n,y,m?h(d[y],y):d[y]);else for(f=g.call(d),n=new p;!(o=f.next()).done;y++)u(n,y,m?i(f,h,[o.value,y],!0):o.value);return n.length=y,n}})},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,o=n("oVml"),a=n("XJU/"),i=n("2GTP"),s=n("EXMj"),c=n("oioR"),u=n("MPFp"),l=n("UO39"),f=n("TJWN"),d=n("jmDH"),p=n("6/1s").fastKey,v=n("n3ko"),h=d?"_s":"size",m=function(e,t){var n,r=p(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,u){var l=e((function(e,r){s(e,l,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[h]=0,void 0!=r&&c(r,n,e[u],e)}));return a(l.prototype,{clear:function(){for(var e=v(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=v(this,t),r=m(n,e);if(r){var o=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=o),o&&(o.p=a),n._f==r&&(n._f=o),n._l==r&&(n._l=a),n[h]--}return!!r},forEach:function(e){v(this,t);for(var n,r=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(v(this,t),e)}}),d&&r(l.prototype,"size",{get:function(){return v(this,t)[h]}}),l},def:function(e,t,n){var r,o,a=m(e,t);return a?a.v=n:(e._l=a={i:o=p(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[h]++,"F"!==o&&(e._i[o]=a)),e},getEntry:m,setStrong:function(e,t,n){u(e,t,(function(e,n){this._t=v(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},XoMD:function(e,t,n){e.exports=n("hYAz")},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),i=n("K47E"),s=n("WaGi"),c=n("N9n2"),u=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){function l(e){var s;return r(this,l),s=o(this,a(l).call(this,e)),d&&(t.add(i(s)),n(i(s))),s}return c(l,u),s(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),s=n("N9n2"),c=n("LX0d"),u=n("KI45"),l=n("5Uuq");t.__esModule=!0,t.default=void 0;var f,d=n("CxY0"),p=l(n("q1tI")),v=u(n("nOHt")),h=n("g/15");function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new c,g=window.IntersectionObserver,k={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,s=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),s=s?(0,d.resolve)(c,s):i,e.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,d.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=k[this.getHref()];this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();v.default.prefetch(e),k[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),t}(p.Component);t.default=b},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(e,t,n){n("aPfg")("Map")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.AmpStateContext=a.createContext({})},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},ttDY:function(e,t,n){e.exports=n("+iuc")},uplh:function(e,t,n){var r=n("ar/p"),o=n("mqlF"),a=n("5K7Z"),i=n("5T2Y").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xvv9:function(e,t,n){n("cHUd")("Set")}},[["vlRD",1,2,0]]]);