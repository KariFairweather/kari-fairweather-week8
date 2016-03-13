//load in jQuery plugin dependencies (eg. flexslider, smoothScroll etc.) in this file

/*!
 * Headhesive.js v1.2.3 - An on-demand sticky header
 * Author: Copyright (c) Mark Goodyear <@markgdyr> <http://markgoodyear.com>
 * Url: http://markgoodyear.com/labs/headhesive
 * License: MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof exports?module.exports=e():t.Headhesive=e()}(this,function(){"use strict";var t=function(e,s){for(var o in s)s.hasOwnProperty(o)&&(e[o]="object"==typeof s[o]?t(e[o],s[o]):s[o]);return e},e=function(t,e){var s,o,i,n=Date.now||function(){return(new Date).getTime()},l=null,c=0,r=function(){c=n(),l=null,i=t.apply(s,o),s=o=null};return function(){var f=n(),h=e-(f-c);return s=this,o=arguments,0>=h?(clearTimeout(l),l=null,c=f,i=t.apply(s,o),s=o=null):l||(l=setTimeout(r,h)),i}},s=function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},o=function(t,e){for(var s=0,o=t.offsetHeight;t;)s+=t.offsetTop,t=t.offsetParent;return"bottom"===e&&(s+=o),s},i=function(e,s){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem="string"==typeof e?document.querySelector(e):e,this.options=t(this.options,s),this.init())};return i.prototype={constructor:i,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset()}this._throttleUpdate=e(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=e(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this)},_setScrollOffset:function(){"string"==typeof this.options.offset&&(this.scrollOffset=o(document.querySelector(this.options.offset),this.options.offsetSide))},destroy:function(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){s()>this.scrollOffset?this.stick():this.unstick()}},i});

smooth-scroll.min.js
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,r,o,a,c={},u="querySelector"in document&&"addEventListener"in e,i={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},l=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=l(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var a=arguments[n];o(a)}return e},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,r,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};c.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",c=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return"#"+a};var d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},p=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},b=function(e){return null===e?0:s(e)+e.offsetTop};c.animateScroll=function(n,c,u){var s=p(c?c.getAttribute("data-options"):null),f=l(t||i,u||{},s),v="[object Number]"===Object.prototype.toString.call(n)?!0:!1,y=v?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(v||y){var O=e.pageYOffset;r||(r=e.document.querySelector(f.selectorHeader)),o||(o=b(r));var S,I,H=v?n:h(y,o,parseInt(f.offset,10)),E=H-O,j=m(),C=0;v||g(n,f.updateURL);var L=function(t,r,o){var a=e.pageYOffset;(t==r||a==r||e.innerHeight+a>=j)&&(clearInterval(o),v||y.focus(),f.callback(n,c))},w=function(){C+=16,S=C/parseInt(f.speed,10),S=S>1?1:S,I=O+E*d(f.easing,S),e.scrollTo(0,Math.floor(I)),L(I,H,a)},A=function(){clearInterval(a),a=setInterval(w,16)};0===e.pageYOffset&&e.scrollTo(0,0),A()}};var v=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){e.preventDefault();var r=c.escapeCharacters(n.hash);c.animateScroll(r,n,t)}}},y=function(e){n||(n=setTimeout(function(){n=null,o=b(r)},66))};return c.destroy=function(){t&&(e.document.removeEventListener("click",v,!1),e.removeEventListener("resize",y,!1),t=null,n=null,r=null,o=null,a=null)},c.init=function(n){u&&(c.destroy(),t=l(i,n||{}),r=e.document.querySelector(t.selectorHeader),o=b(r),e.document.addEventListener("click",v,!1),r&&e.addEventListener("resize",y,!1))},c});

// !function(e, t) {
//     "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
// }("undefined" != typeof global ? global : this.window || this.global, function(e) {
//     "use strict";
//     var t, n, r, o, a, c = {},
//         u = "querySelector" in document && "addEventListener" in e,
//         i = {
//             selector: "[data-scroll]",
//             selectorHeader: "[data-scroll-header]",
//             speed: 500,
//             easing: "easeInOutCubic",
//             offset: 0,
//             updateURL: !0,
//             callback: function() {}
//         },
//         l = function() {
//             var e = {},
//                 t = !1,
//                 n = 0,
//                 r = arguments.length;
//             "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
//             for (var o = function(n) {
//                     for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t && "[object Object]" === Object.prototype.toString.call(n[r]) ? e[r] = l(!0, e[r], n[r]) : e[r] = n[r])
//                 }; r > n; n++) {
//                 var a = arguments[n];
//                 o(a)
//             }
//             return e
//         },
//         s = function(e) {
//             return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
//         },
//         f = function(e, t) {
//             var n, r, o = t.charAt(0),
//                 a = "classList" in document.documentElement;
//             for ("[" === o && (t = t.substr(1, t.length - 2), n = t.split("="), n.length > 1 && (r = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document; e = e.parentNode) {
//                 if ("." === o)
//                     if (a) {
//                         if (e.classList.contains(t.substr(1))) return e
//                     } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
//                 if ("#" === o && e.id === t.substr(1)) return e;
//                 if ("[" === o && e.hasAttribute(n[0])) {
//                     if (!r) return e;
//                     if (e.getAttribute(n[0]) === n[1]) return e
//                 }
//                 if (e.tagName.toLowerCase() === t) return e
//             }
//             return null
//         };
//     c.escapeCharacters = function(e) {
//         "#" === e.charAt(0) && (e = e.substr(1));
//         for (var t, n = String(e), r = n.length, o = -1, a = "", c = n.charCodeAt(0); ++o < r;) {
//             if (t = n.charCodeAt(o), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
//             a += t >= 1 && 31 >= t || 127 == t || 0 === o && t >= 48 && 57 >= t || 1 === o && t >= 48 && 57 >= t && 45 === c ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(o) : "\\" + n.charAt(o)
//         }
//         return "#" + a
//     };
//     var d = function(e, t) {
//             var n;
//             return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
//         },
//         h = function(e, t, n) {
//             var r = 0;
//             if (e.offsetParent)
//                 do r += e.offsetTop, e = e.offsetParent; while (e);
//             return r = r - t - n, r >= 0 ? r : 0
//         },
//         m = function() {
//             return Math.max(e.document.body.scrollHeight, e.document.documentElement.scrollHeight, e.document.body.offsetHeight, e.document.documentElement.offsetHeight, e.document.body.clientHeight, e.document.documentElement.clientHeight)
//         },
//         p = function(e) {
//             return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
//         },
//         g = function(t, n) {
//             e.history.pushState && (n || "true" === n) && "file:" !== e.location.protocol && e.history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join(""))
//         },
//         b = function(e) {
//             return null === e ? 0 : s(e) + e.offsetTop
//         };
//     c.animateScroll = function(n, c, u) {
//         var s = p(c ? c.getAttribute("data-options") : null),
//             f = l(t || i, u || {}, s),
//             v = "[object Number]" === Object.prototype.toString.call(n) ? !0 : !1,
//             y = v ? null : "#" === n ? e.document.documentElement : e.document.querySelector(n);
//         if (v || y) {
//             var O = e.pageYOffset;
//             r || (r = e.document.querySelector(f.selectorHeader)), o || (o = b(r));
//             var S, I, H = v ? n : h(y, o, parseInt(f.offset, 10)),
//                 E = H - O,
//                 j = m(),
//                 C = 0;
//             v || g(n, f.updateURL);
//             var L = function(t, r, o) {
//                     var a = e.pageYOffset;
//                     (t == r || a == r || e.innerHeight + a >= j) && (clearInterval(o), v || y.focus(), f.callback(n, c))
//                 },
//                 w = function() {
//                     C += 16, S = C / parseInt(f.speed, 10), S = S > 1 ? 1 : S, I = O + E * d(f.easing, S), e.scrollTo(0, Math.floor(I)), L(I, H, a)
//                 },
//                 A = function() {
//                     clearInterval(a), a = setInterval(w, 16)
//                 };
//             0 === e.pageYOffset && e.scrollTo(0, 0), A()
//         }
//     };
//     var v = function(e) {
//             if (0 === e.button && !e.metaKey && !e.ctrlKey) {
//                 var n = f(e.target, t.selector);
//                 if (n && "a" === n.tagName.toLowerCase()) {
//                     e.preventDefault();
//                     var r = c.escapeCharacters(n.hash);
//                     c.animateScroll(r, n, t)
//                 }
//             }
//         },
//         y = function(e) {
//             n || (n = setTimeout(function() {
//                 n = null, o = b(r)
//             }, 66))
//         };
//     return c.destroy = function() {
//         t && (e.document.removeEventListener("click", v, !1), e.removeEventListener("resize", y, !1), t = null, n = null, r = null, o = null, a = null)
//     }, c.init = function(n) {
//         u && (c.destroy(), t = l(i, n || {}), r = e.document.querySelector(t.selectorHeader), o = b(r), e.document.addEventListener("click", v, !1), r && e.addEventListener("resize", y, !1))
//     }, c
// });
