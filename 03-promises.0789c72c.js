!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return i.default(e)||a.default(e,t)||f.default(e,t)||l.default()};var i=s(o("8slrw")),a=s(o("7AJDX")),l=s(o("ifqQW")),f=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r={position:e,delay:t},n=Math.random()>.3;return new Promise((function(e,o){setTimeout((function(){n?e(r):o(r)}),t)}))}o("h6c0i"),document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var r=new FormData(t.currentTarget),n={},o=!0,i=!1,a=void 0;try{for(var l,f=r.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var s=e(u)(l.value,2),d=s[0],p=s[1];n[d]=Number(p)}}catch(e){i=!0,a=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw a}}for(var y=n.amount,v=n.step,m=n.delay,b=1;b<=y;b+=1)c(b,m+=v).then((function(e){var t=e.position,r=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(e){var t=e.position,r=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))}))}))}();
//# sourceMappingURL=03-promises.0789c72c.js.map
