!function(n){function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e,t){n.exports=t.p+"assets/images/meTest.jpg"},function(n,e,t){"use strict";t(2),t(7),t(0),t(8),t(9),t(10),t(11),t(12),t(13),t(14)},function(n,e,t){var i=t(3);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(5)(i,o);i.locals&&(n.exports=i.locals)},function(n,e,t){e=n.exports=t(4)(!1),e.push([n.i,'/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=i(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([r]).join("\n")}return[t].join("\n")}function i(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var i=t(e,n);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){function i(n,e){for(var t=0;t<n.length;t++){var i=n[t],o=g[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(l(i.parts[r],e))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(l(i.parts[r],e));g[i.id]={id:i.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],i={},o=0;o<n.length;o++){var r=n[o],a=e.base?r[0]+e.base:r[0],s=r[1],c=r[2],u=r[3],l={css:s,media:c,sourceMap:u};i[a]?i[a].parts.push(l):t.push(i[a]={id:a,parts:[l]})}return t}function r(n,e){var t=y(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=b[b.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function s(n){var e=document.createElement("style");return n.attrs.type="text/css",u(e,n.attrs),r(n,e),e}function c(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",u(e,n.attrs),r(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function l(n,e){var t,i,o,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var u=h++;t=m||(m=s(e)),i=d.bind(null,t,u,!1),o=d.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(e),i=M.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),i=f.bind(null,t),o=function(){a(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}function d(n,e,t,i){var o=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=N(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function f(n,e){var t=e.css,i=e.media;if(i&&n.setAttribute("media",i),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function M(n,e,t){var i=t.css,o=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=T(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},p=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(n){var e={};return function(t){if(void 0===e[t]){var i=n.call(this,t);if(i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[t]=i}return e[t]}}(function(n){return document.querySelector(n)}),m=null,h=0,b=[],T=t(6);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=p()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return i(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var s=t[a],c=g[s.id];c.refs--,r.push(c)}if(n){i(o(n,e),e)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete g[c.id]}}}};var N=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(n,e,t){},function(n,e,t){n.exports=t.p+"assets/images/code.jpg"},function(n,e,t){n.exports=t.p+"assets/images/logoBovAcademy.png"},function(n,e,t){n.exports=t.p+"assets/images/dev_news@3x.png"},function(n,e,t){"use strict";function i(n){n.forEach(function(n){n.classList.toggle("hidden")})}function o(n){c.classList.toggle("hidden")}var r=document.querySelector("body"),a=document.querySelectorAll(".modal");r.addEventListener("keydown",function(n){"m"===n.key&&n.ctrlKey&&i(a)});var s=document.querySelector(".settings-icon"),c=document.querySelector(".modal-settings");s.addEventListener("click",o)},function(n,e,t){"use strict";function i(){var n=this.parentElement;if(n.addEventListener("transitionend",r),3!==(c=Number(n.dataset.layer))){var e=3-c,t=document.querySelector('[data-layer="3"]');t.addEventListener("transitionend",o),t.classList.remove("category-active"),n.classList.add("category-active"),t.style.left="-"+22*e+"px",t.style.top="-"+48*e+"px";var i=Number(n.style.left.split("px")[0]),a=Number(n.style.top.split("px")[0]);n.style.left=i+22*e+"px",n.style.top=a+48*e+"px"}}function o(){var n=this;this.style.transition="none",this.removeEventListener("transitionend",o),this.dataset.layer=c,this.style.left=22*c+"px",this.style.top=48*c+"px",setTimeout(function(){n.style.transition="top .4s .1s ease-in-out, left .4s .1s ease-in-out"})}function r(){var n=this;this.style.transition="none",this.removeEventListener("transitionend",r),3!==c&&(this.dataset.layer="3",this.style.left="0px",this.style.top="0px",setTimeout(function(){n.style.transition="top .4s .1s ease-in-out, left .4s .1s ease-in-out"}))}function a(n){var e=Number(n.parentElement.dataset.layer);3===e&&(e=0),n.parentElement.style.left=22*e+"px",n.parentElement.style.top=48*e+"px"}var s=document.querySelectorAll(".category-title"),c=void 0;s.forEach(function(n){a(n),n.addEventListener("click",i)})},function(n,e,t){"use strict";var i=new Date,o=i.getFullYear().toString(),r=o.toString().substr(2,2),a=i.getMonth(),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=s[a],u=i.getDay(),l=i.getDate().toString(),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=d[u];document.querySelectorAll(".js-date-dayNumber").forEach(function(n){n.innerText=l}),document.querySelectorAll(".js-date-dayOfTheWeek").forEach(function(n){n.innerText=f}),document.querySelectorAll(".js-date-month").forEach(function(n){n.innerText=c}),document.querySelectorAll(".js-date-shortYear").forEach(function(n){n.innerText=r}),document.querySelectorAll(".js-date-fullYear").forEach(function(n){n.innerText=o})},function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}var o=t(15),r=i(o),a=t(16),s=i(a),c=t(0),u=i(c),l=document.querySelector(".twitterLogo"),d=Array.from(document.querySelectorAll(".twitterFollowBtn")),f=Array.from(document.querySelectorAll(".media-object-twitter"));console.log(f),f.forEach(function(n){n.querySelector(".user-img").src=u.default}),l.src=r.default,d.forEach(function(n){n.src=s.default})},function(n,e){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAuMDAwMDYgMjQ0LjE4NzAzIiBoZWlnaHQ9IjI0NC4xOSIgd2lkdGg9IjMwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgc3R5bGU9IiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzOS4xOCAtNTY4Ljg2KSI+CiAgPHBhdGggZD0ibTYzMy45IDgxMi4wNGMxMTIuNDYgMCAxNzMuOTYtOTMuMTY4IDE3My45Ni0xNzMuOTYgMC0yLjY0NjMtMC4wNTM5LTUuMjgwNi0wLjE3MjYtNy45MDMgMTEuOTM4LTguNjMwMiAyMi4zMTQtMTkuNCAzMC40OTgtMzEuNjYtMTAuOTU1IDQuODY5NC0yMi43NDQgOC4xNDc0LTM1LjExMSA5LjYyNTUgMTIuNjIzLTcuNTY5MyAyMi4zMTQtMTkuNTQzIDI2Ljg4Ni0zMy44MTctMTEuODEzIDcuMDAzMS0yNC44OTUgMTIuMDkzLTM4LjgyNCAxNC44NDEtMTEuMTU3LTExLjg4NC0yNy4wNDEtMTkuMzE3LTQ0LjYyOS0xOS4zMTctMzMuNzY0IDAtNjEuMTQ0IDI3LjM4MS02MS4xNDQgNjEuMTMyIDAgNC43OTc4IDAuNTM2NCA5LjQ2NDYgMS41ODU0IDEzLjk0MS01MC44MTUtMi41NTY5LTk1Ljg3NC0yNi44ODYtMTI2LjAzLTYzLjg4LTUuMjUwOCA5LjAzNTQtOC4yNzg1IDE5LjUzMS04LjI3ODUgMzAuNzMgMCAyMS4yMTIgMTAuNzk0IDM5LjkzOCAyNy4yMDggNTAuODkzLTEwLjAzMS0wLjMwOTkyLTE5LjQ1NC0zLjA2MzUtMjcuNjktNy42NDY4LTAuMDA5IDAuMjU2NTItMC4wMDkgMC41MDY2MS0wLjAwOSAwLjc4MDc3IDAgMjkuNjEgMjEuMDc1IDU0LjMzMiA0OS4wNTEgNTkuOTM0LTUuMTM3NiAxLjQwMDYtMTAuNTQzIDIuMTUxNi0xNi4xMjIgMi4xNTE2LTMuOTMzNiAwLTcuNzY2LTAuMzg3MTYtMTEuNDkxLTEuMTAyNiA3Ljc4MzggMjQuMjkzIDMwLjM1NSA0MS45NzEgNTcuMTE1IDQyLjQ2NS0yMC45MjYgMTYuNDAyLTQ3LjI4NyAyNi4xNzEtNzUuOTM3IDI2LjE3MS00LjkyOSAwLTkuNzk4My0wLjI4MDM2LTE0LjU4NC0wLjg0NjM0IDI3LjA1OSAxNy4zNDQgNTkuMTg5IDI3LjQ2NCA5My43MjIgMjcuNDY0IiBmaWxsPSIjMWRhMWYyIi8+CiA8L2c+Cjwvc3ZnPgo="},function(n,e){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAuMDAwMDYgMjQ0LjE4NzAzIiBoZWlnaHQ9IjI0NC4xOSIgd2lkdGg9IjMwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgc3R5bGU9IiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzOS4xOCAtNTY4Ljg2KSI+CiAgPHBhdGggZD0ibTYzMy45IDgxMi4wNGMxMTIuNDYgMCAxNzMuOTYtOTMuMTY4IDE3My45Ni0xNzMuOTYgMC0yLjY0NjMtMC4wNTM5LTUuMjgwNi0wLjE3MjYtNy45MDMgMTEuOTM4LTguNjMwMiAyMi4zMTQtMTkuNCAzMC40OTgtMzEuNjYtMTAuOTU1IDQuODY5NC0yMi43NDQgOC4xNDc0LTM1LjExMSA5LjYyNTUgMTIuNjIzLTcuNTY5MyAyMi4zMTQtMTkuNTQzIDI2Ljg4Ni0zMy44MTctMTEuODEzIDcuMDAzMS0yNC44OTUgMTIuMDkzLTM4LjgyNCAxNC44NDEtMTEuMTU3LTExLjg4NC0yNy4wNDEtMTkuMzE3LTQ0LjYyOS0xOS4zMTctMzMuNzY0IDAtNjEuMTQ0IDI3LjM4MS02MS4xNDQgNjEuMTMyIDAgNC43OTc4IDAuNTM2NCA5LjQ2NDYgMS41ODU0IDEzLjk0MS01MC44MTUtMi41NTY5LTk1Ljg3NC0yNi44ODYtMTI2LjAzLTYzLjg4LTUuMjUwOCA5LjAzNTQtOC4yNzg1IDE5LjUzMS04LjI3ODUgMzAuNzMgMCAyMS4yMTIgMTAuNzk0IDM5LjkzOCAyNy4yMDggNTAuODkzLTEwLjAzMS0wLjMwOTkyLTE5LjQ1NC0zLjA2MzUtMjcuNjktNy42NDY4LTAuMDA5IDAuMjU2NTItMC4wMDkgMC41MDY2MS0wLjAwOSAwLjc4MDc3IDAgMjkuNjEgMjEuMDc1IDU0LjMzMiA0OS4wNTEgNTkuOTM0LTUuMTM3NiAxLjQwMDYtMTAuNTQzIDIuMTUxNi0xNi4xMjIgMi4xNTE2LTMuOTMzNiAwLTcuNzY2LTAuMzg3MTYtMTEuNDkxLTEuMTAyNiA3Ljc4MzggMjQuMjkzIDMwLjM1NSA0MS45NzEgNTcuMTE1IDQyLjQ2NS0yMC45MjYgMTYuNDAyLTQ3LjI4NyAyNi4xNzEtNzUuOTM3IDI2LjE3MS00LjkyOSAwLTkuNzk4My0wLjI4MDM2LTE0LjU4NC0wLjg0NjM0IDI3LjA1OSAxNy4zNDQgNTkuMTg5IDI3LjQ2NCA5My43MjIgMjcuNDY0IiBmaWxsPSIjZmQ3ZDdkIi8+CiA8L2c+Cjwvc3ZnPgo="}]);