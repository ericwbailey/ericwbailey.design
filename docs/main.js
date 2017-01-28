function handleDialogueButtonClick(t){var e=document.getElementById("input-email");e.setAttribute("value",printContactInfo()),[].slice.apply(document.querySelectorAll(".c-services__link")).forEach(function(e){var n=e.getAttribute("data-href");n=n.replace("%SUBJECT%",t.target.getAttribute("data-message-subject")),n=n.replace("%CONTACT%",printContactInfo()),e.setAttribute("href",n)}),dialogEl.classList.add("js-slide-in-up"),dialog.show()}function resetCopyButton(){copyButton.classList.remove("is-successful"),copyButton.innerHTML='<svg height="14" width="14" aria-hidden="true" viewBox="0 0 100 100" class="icon c-button__icon"><use xlink:href="#icon-clipboard"></use></svg>Copy<span class="content-hide-visually"> email address</span>'}!function(t){"use strict";function e(t,e,n){function o(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}o.prototype=window.Event.prototype;var i;i=window.CustomEvent&&"function"==typeof window.CustomEvent?new window.CustomEvent(e,{detail:n}):new o(e,{bubbles:!1,cancelable:!1,detail:n}),i&&t.dispatchEvent(i)}function n(t){var e=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];return o(e.join(","),t).filter(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)})}function o(t,e){return Array.prototype.slice.call((e||document).querySelectorAll(t))}function i(t,e){var o=n(t),i=o.indexOf(document.activeElement);e.shiftKey&&0===i?(o[o.length-1].focus(),e.preventDefault()):e.shiftKey||i!==o.length-1||(o[0].focus(),e.preventDefault())}function r(t){var e=n(t);e.length&&e[0].focus()}var a,c=function(t,n){function c(e){f.shown&&27===e.which&&(e.preventDefault(),u()),f.shown&&9===e.which&&i(t,e)}function s(e){f.shown&&!t.contains(e.target)&&r(t)}function l(){f.shown||(f.shown=!0,t.removeAttribute("aria-hidden"),n.setAttribute("aria-hidden","true"),a=document.activeElement,r(t),document.body.addEventListener("focus",s,!0),document.addEventListener("keydown",c),e(t,"dialog:show",this))}function u(){f.shown&&(f.shown=!1,t.setAttribute("aria-hidden","true"),n.removeAttribute("aria-hidden"),a&&a.focus(),document.body.removeEventListener("focus",s,!0),document.removeEventListener("keydown",c),e(t,"dialog:hide",this))}function d(){u(),h.forEach(function(t){t.removeEventListener("click",l)}),p.forEach(function(t){t.removeEventListener("click",u)})}n=n||document.querySelector("#main");var f=this,h=o('[data-a11y-dialog-show="'+t.id+'"]'),p=o("[data-a11y-dialog-hide]",t).concat(o('[data-a11y-dialog-hide="'+t.id+'"]'));t.hasAttribute("aria-hidden")&&(this.shown=!JSON.parse(t.getAttribute("aria-hidden"))),this.show=l,this.hide=u,this.destroy=d,h.forEach(function(t){t.addEventListener("click",l)}),p.forEach(function(t){t.addEventListener("click",u)})};"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define("A11yDialog",[],function(){return c}):"object"==typeof t&&(t.A11yDialog=c)}(this),!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t;return function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if(t.matches(e))return t;t=t.parentNode}}var i=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,n)),this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i["default"])(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i["default"])(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),d=i(o),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),h=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),f(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,d["default"])(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l["default"]({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),e}(u["default"]);t.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});for(var copyButton=document.getElementById("button-copy"),dialogEl=document.getElementById("a11y-dialog"),mailtoLinks=document.querySelectorAll("[data-message-subject]"),sectionMain=document.getElementById("section-main"),reverseString=function(t){return t.split("").reverse().join("")},i=0;i<mailtoLinks.length;i++){var contactButton=mailtoLinks[i],contactButtonClasses=contactButton.getAttribute("class"),contactButtonSubject=contactButton.getAttribute("data-message-subject"),contactButtonContent=contactButton.innerHTML;contactButton.outerHTML='<button class="'+contactButtonClasses+' is-contact-button" data-message-subject="'+contactButtonSubject+'">'+contactButtonContent+"</button>"}var dialog=new A11yDialog(document.getElementById("a11y-dialog"),sectionMain),printContactInfo=function(){var t={first:"cire",middle:"w",last:"yeliab",service:"liamg"};return reverseString(t.first)+"."+reverseString(t.middle)+"."+reverseString(t.last)+"@"+reverseString(t.service)+".com"};[].slice.apply(document.querySelectorAll(".is-contact-button")).forEach(function(t){t.addEventListener("click",handleDialogueButtonClick)});var clipboard=new Clipboard(".c-button__copy");clipboard.on("success",function(t){copyButton.classList.add("is-successful"),copyButton.setAttribute("aria-live","polite"),copyButton.innerHTML='<svg height="14" width="14" aria-hidden="true" viewBox="0 0 100 100" class="icon c-button__icon"><use xlink:href="#icon-checkmark"></use></svg><span class="content-hide-visually">Email address </span>Copied',t.clearSelection(),setTimeout(resetCopyButton,2500)}),clipboard.on("error",function(t){var e=document.getElementById("button-copy"),n=document.createElement("p"),o=e.parentNode;copyButton.disabled=!0,o.insertBefore(n,e.nextSibling),n.innerHTML="Your browser does not have clipboard support. Try copying the email address manually.",n.setAttribute("class","c-button__error"),n.setAttribute("aria-live","polite")}),function(){if(window.console){var t=0;t||(setTimeout(function(){console.log("%c👋 Hey there","font: 3em sans-serif; line-height: 1.7;"),console.log("%cThank you for visiting my site, I hope you enjoyed it!","font: 1.25 sans-serif; line-height: 1.7;"),console.log("%cIf you accidentally opened this and are confused by what you see, don't worry! You can learn more about what the Console is and how it works here: https://developer.mozilla.org/en-US/docs/Tools/Web_Console","font: 1.25 sans-serif; line-height: 1.7;"),console.log("%cIf you would like to peruse this site's code, it is available on GitHub: https://github.com/ericwbailey/ericwbailey.design","font: 1.25 sans-serif; line-height: 1.7;")},1),t=1)}}();