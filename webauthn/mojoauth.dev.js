(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MojoAuth"] = factory();
	else
		root["MojoAuth"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mojoauth--card {\n  box-sizing: border-box;\n  width: 400px;\n  margin: 0 auto;\n  padding: 60px 40px 20px;\n  min-height: 520px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #1b1c1e; }\n  .mojoauth--card .logo {\n    margin-bottom: 24px; }\n    .mojoauth--card .logo img {\n      max-width: 250px;\n      max-height: 150px; }\n    .mojoauth--card .logo svg {\n      height: 150px;\n      width: 150px;\n      text-align: center; }\n  .mojoauth--card .title {\n    margin-bottom: 8px;\n    font-size: 24px;\n    line-height: 32px;\n    font-weight: 700; }\n  .mojoauth--card form {\n    margin-top: 40px; }\n    .mojoauth--card form input[type='email'],\n    .mojoauth--card form input[type='submit'] {\n      min-height: 44px;\n      border-radius: 4px;\n      background-color: #e7e7e7;\n      border: 0;\n      margin-bottom: 16px; }\n    .mojoauth--card form input[type='email'] {\n      padding: 0 16px;\n      width: 100%;\n      box-sizing: border-box; }\n      .mojoauth--card form input[type='email']:hover, .mojoauth--card form input[type='email']:focus {\n        outline-color: #5e00cf; }\n      .mojoauth--card form input[type='email']:focus {\n        background-color: #ffffff; }\n    .mojoauth--card form input[type='submit'] {\n      background-color: #5e00cf;\n      color: #ffffff;\n      width: 100%;\n      margin-bottom: 0;\n      cursor: pointer; }\n      .mojoauth--card form input[type='submit']:hover, .mojoauth--card form input[type='submit']:focus {\n        outline: 0;\n        background-color: #430095; }\n      .mojoauth--card form input[type='submit'].disabled {\n        background-color: lightgrey !important; }\n    .mojoauth--card form p {\n      color: #757a7e;\n      font-size: 14px;\n      margin-top: 1rem; }\n\n.mojoauth-passwordless-footer {\n  text-align: center;\n  margin-top: 48px; }\n  .mojoauth-passwordless-footer p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 10px;\n    letter-spacing: 1px; }\n  .mojoauth-passwordless-footer a {\n    text-decoration: none; }\n  .mojoauth-passwordless-footer .footer-icon {\n    margin-right: 8px; }\n    .mojoauth-passwordless-footer .footer-icon svg {\n      height: 20px;\n      width: 20px; }\n\n#post-login-message {\n  text-align: center; }\n  #post-login-message .warning {\n    color: darkorange; }\n  #post-login-message .bold {\n    font-weight: bold; }\n\n.mojoauth--card {\n  background-color: #ffffff;\n  border-radius: 12px; }\n\n.mojoauth--shadow {\n  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.04); }\n\n.mojoauth--v-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.mojoauth--loader,\n.mojoauth--loader:before,\n.mojoauth--loader:after {\n  background: #5e00cf;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em; }\n\n.mojoauth--loader {\n  color: #5e00cf;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: relative;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n.mojoauth--loader:before,\n.mojoauth--loader:after {\n  position: absolute;\n  top: 0;\n  content: ''; }\n\n.mojoauth--loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.mojoauth--loader:after {\n  left: 1.5em; }\n\n.resend-link {\n  margin: 10px;\n  background: none;\n  border: none;\n  text-decoration: underline;\n  cursor: pointer; }\n\n.disabled {\n  cursor: default;\n  color: grey; }\n\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em; }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em; } }\n\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em; }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em; } }\n\n#mojoauth-otp-verification p {\n  text-align: center; }\n\n#mojoauth-otp-verification .error {\n  color: red;\n  font-size: 14px;\n  margin: 10px 0; }\n\n#mojoauth-otp-verification input[type='button'] {\n  min-height: 44px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #5e00cf;\n  color: #ffffff;\n  width: 100%;\n  margin: 16px 0;\n  cursor: pointer; }\n  #mojoauth-otp-verification input[type='button']:hover, #mojoauth-otp-verification input[type='button']:focus {\n    outline: 0;\n    background-color: #430095; }\n\n#mojoauth-otp-verification .mojoauth-otp-verification {\n  display: flex;\n  justify-content: space-evenly; }\n  #mojoauth-otp-verification .mojoauth-otp-verification .pin_input {\n    max-width: 24px;\n    border: none;\n    border-bottom: 1px solid black;\n    width: 24px;\n    height: 24px;\n    margin: 4px 0px;\n    text-align: center; }\n    #mojoauth-otp-verification .mojoauth-otp-verification .pin_input:hover, #mojoauth-otp-verification .mojoauth-otp-verification .pin_input:focus {\n      border-bottom: 1px solid #5e00cf;\n      outline: none; }\n    #mojoauth-otp-verification .mojoauth-otp-verification .pin_input:focus {\n      background-color: #ffffff; }\n", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAGA;EACC,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EAEjB,eAAe;EACf,gBAAgB;EAChB,cAAc,EAAA;EATf;IAWE,mBAAmB,EAAA;IAXrB;MAaG,gBAAgB;MAChB,iBAAiB,EAAA;IAdpB;MAiBG,aAAa;MACb,YAAY;MACZ,kBAAkB,EAAA;EAnBrB;IAuBE,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB,EAAA;EA1BlB;IA6BE,gBAAgB,EAAA;IA7BlB;;MAgCG,gBAAgB;MAChB,kBAAkB;MAClB,yBC5BgB;MD6BhB,SAAS;MACT,mBAAmB,EAAA;IApCtB;MAuCG,eAAe;MACf,WAAW;MACX,sBAAsB,EAAA;MAzCzB;QA4CI,sBC7CY,EAAA;MDChB;QA+CI,yBC7CW,EAAA;IDFf;MAmDG,yBCpDa;MDqDb,cClDY;MDmDZ,WAAW;MACX,gBAAgB;MAChB,eAAe,EAAA;MAvDlB;QA0DI,UAAU;QACV,yBC3DiB,EAAA;MDArB;QA8DI,sCAAsC,EAAA;IA9D1C;MAkEG,cC7DkB;MD8DlB,eAAe;MACf,gBAAgB,EAAA;;AAInB;EACC,kBAAkB;EAClB,gBAAgB,EAAA;EAFjB;IAKE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,mBAAmB,EAAA;EATrB;IAYE,qBAAqB,EAAA;EAZvB;IAeE,iBAAiB,EAAA;IAfnB;MAiBG,YAAY;MACZ,WAAW,EAAA;;AAKd;EACC,kBAAkB,EAAA;EADnB;IAGE,iBCtFuB,EAAA;EDmFzB;IAME,iBAAiB,EAAA;;AAInB;EACC,yBCxGc;EDyGd,mBAAmB,EAAA;;AAEpB;EACC,gDAAgD,EAAA;;AAEjD;EACC,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAA;;AAGxB;;;EAGC,mBAAmB;EACnB,gDAAgD;EAChD,wCAAwC;EACxC,UAAU;EACV,WAAW,EAAA;;AAEZ;EACC,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,+BAA+B;EAC/B,uBAAuB,EAAA;;AAExB;;EAEC,kBAAkB;EAClB,MAAM;EACN,WAAW,EAAA;;AAEZ;EACC,YAAY;EACZ,+BAA+B;EAC/B,uBAAuB,EAAA;;AAExB;EACC,WAAW,EAAA;;AAEZ;EACC,YAAY;EACZ,gBAAgB;EAChB,YAAY;EAEZ,0BAA0B;EAC1B,eAAe,EAAA;;AAEhB;EACC,eAAe;EACf,WAAW,EAAA;;AAEZ;EACC;;;IAGC,eAAe;IACf,WAAW,EAAA;EAEZ;IACC,kBAAkB;IAClB,WAAW,EAAA,EAAA;;AAGb;EACC;;;IAGC,eAAe;IACf,WAAW,EAAA;EAEZ;IACC,kBAAkB;IAClB,WAAW,EAAA,EAAA;;AAIb;EAEE,kBAAkB,EAAA;;AAFpB;EAKE,UAAU;EACV,eAAe;EACf,cAAc,EAAA;;AAPhB;EAUE,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,yBC5Mc;ED6Md,cC1Ma;ED2Mb,WAAW;EACX,cAAc;EACd,eAAe,EAAA;EAjBjB;IAoBG,UAAU;IACV,yBCnNkB,EAAA;;AD8LrB;EAyBE,aAAa;EACb,6BAA6B,EAAA;EA1B/B;IA4BG,eAAe;IACf,YAAY;IACZ,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB,EAAA;IAlCrB;MAuCI,gCCtOY;MDuOZ,aAAa,EAAA;IAxCjB;MA2CI,yBCvOW,EAAA","sourcesContent":["@import './variables.scss';\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');\n\n.mojoauth--card {\n\tbox-sizing: border-box;\n\twidth: 400px;\n\tmargin: 0 auto;\n\tpadding: 60px 40px 20px;\n\tmin-height: 520px;\n\t// font-family: 'Inter', sans-serif;\n\tfont-size: 16px;\n\tline-height: 1.5;\n\tcolor: #1b1c1e;\n\t.logo {\n\t\tmargin-bottom: 24px;\n\t\timg {\n\t\t\tmax-width: 250px;\n\t\t\tmax-height: 150px;\n\t\t}\n\t\tsvg {\n\t\t\theight: 150px;\n\t\t\twidth: 150px;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\t.title {\n\t\tmargin-bottom: 8px;\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n\t\tfont-weight: 700;\n\t}\n\tform {\n\t\tmargin-top: 40px;\n\t\tinput[type='email'],\n\t\tinput[type='submit'] {\n\t\t\tmin-height: 44px;\n\t\t\tborder-radius: 4px;\n\t\t\tbackground-color: $gray-dark;\n\t\t\tborder: 0;\n\t\t\tmargin-bottom: 16px;\n\t\t}\n\t\tinput[type='email'] {\n\t\t\tpadding: 0 16px;\n\t\t\twidth: 100%;\n\t\t\tbox-sizing: border-box;\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\toutline-color: $purple;\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbackground-color: $white;\n\t\t\t}\n\t\t}\n\t\tinput[type='submit'] {\n\t\t\tbackground-color: $purple;\n\t\t\tcolor: $white;\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 0;\n\t\t\tcursor: pointer;\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\toutline: 0;\n\t\t\t\tbackground-color: $purple-dark;\n\t\t\t}\n\t\t\t&.disabled {\n\t\t\t\tbackground-color: lightgrey !important;\n\t\t\t}\n\t\t}\n\t\tp {\n\t\t\tcolor: $gray-medium;\n\t\t\tfont-size: 14px;\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t}\n}\n.mojoauth-passwordless-footer {\n\ttext-align: center;\n\tmargin-top: 48px;\n\n\tp {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 10px;\n\t\tletter-spacing: 1px;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t}\n\t.footer-icon {\n\t\tmargin-right: 8px;\n\t\tsvg {\n\t\t\theight: 20px;\n\t\t\twidth: 20px;\n\t\t}\n\t}\n}\n\n#post-login-message {\n\ttext-align: center;\n\t.warning {\n\t\tcolor: $warning-dark;\n\t}\n\t.bold {\n\t\tfont-weight: bold;\n\t}\n}\n\n.mojoauth--card {\n\tbackground-color: $white;\n\tborder-radius: 12px;\n}\n.mojoauth--shadow {\n\tbox-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.04);\n}\n.mojoauth--v-center {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n.mojoauth--loader,\n.mojoauth--loader:before,\n.mojoauth--loader:after {\n\tbackground: #5e00cf;\n\t-webkit-animation: load1 1s infinite ease-in-out;\n\tanimation: load1 1s infinite ease-in-out;\n\twidth: 1em;\n\theight: 4em;\n}\n.mojoauth--loader {\n\tcolor: #5e00cf;\n\ttext-indent: -9999em;\n\tmargin: 88px auto;\n\tposition: relative;\n\tfont-size: 11px;\n\t-webkit-transform: translateZ(0);\n\t-ms-transform: translateZ(0);\n\ttransform: translateZ(0);\n\t-webkit-animation-delay: -0.16s;\n\tanimation-delay: -0.16s;\n}\n.mojoauth--loader:before,\n.mojoauth--loader:after {\n\tposition: absolute;\n\ttop: 0;\n\tcontent: '';\n}\n.mojoauth--loader:before {\n\tleft: -1.5em;\n\t-webkit-animation-delay: -0.32s;\n\tanimation-delay: -0.32s;\n}\n.mojoauth--loader:after {\n\tleft: 1.5em;\n}\n.resend-link {\n\tmargin: 10px;\n\tbackground: none;\n\tborder: none;\n\t// color: ;\n\ttext-decoration: underline;\n\tcursor: pointer;\n}\n.disabled {\n\tcursor: default;\n\tcolor: grey;\n}\n@-webkit-keyframes load1 {\n\t0%,\n\t80%,\n\t100% {\n\t\tbox-shadow: 0 0;\n\t\theight: 4em;\n\t}\n\t40% {\n\t\tbox-shadow: 0 -2em;\n\t\theight: 5em;\n\t}\n}\n@keyframes load1 {\n\t0%,\n\t80%,\n\t100% {\n\t\tbox-shadow: 0 0;\n\t\theight: 4em;\n\t}\n\t40% {\n\t\tbox-shadow: 0 -2em;\n\t\theight: 5em;\n\t}\n}\n\n#mojoauth-otp-verification {\n\tp {\n\t\ttext-align: center;\n\t}\n\t.error {\n\t\tcolor: red;\n\t\tfont-size: 14px;\n\t\tmargin: 10px 0;\n\t}\n\tinput[type='button'] {\n\t\tmin-height: 44px;\n\t\tborder: 0;\n\t\tborder-radius: 4px;\n\t\tbackground-color: $purple;\n\t\tcolor: $white;\n\t\twidth: 100%;\n\t\tmargin: 16px 0;\n\t\tcursor: pointer;\n\t\t&:hover,\n\t\t&:focus {\n\t\t\toutline: 0;\n\t\t\tbackground-color: $purple-dark;\n\t\t}\n\t}\n\t.mojoauth-otp-verification {\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\t.pin_input {\n\t\t\tmax-width: 24px;\n\t\t\tborder: none;\n\t\t\tborder-bottom: 1px solid black;\n\t\t\twidth: 24px;\n\t\t\theight: 24px;\n\t\t\tmargin: 4px 0px;\n\t\t\ttext-align: center;\n\n\t\t\t// border-radius: 4px;\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\tborder-bottom: 1px solid $purple;\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbackground-color: $white;\n\t\t\t}\n\t\t}\n\t}\n}\n","// Brand tones\n$yellow: #ffe100;\n$purple: #5e00cf;\n$purple-dark: #430095;\n$black: #1b1c1e;\n$white: #ffffff;\n\n$gray-light: #f9f9f9;\n$gray-medium: #757a7e;\n$gray-dark: #e7e7e7;\n\n// notification alerts colors\n$success: #39b55a;\n$warning: #f1a321;\n$error: #e61728;\n$warning-dark: darkorange;\n\n// spacing modifier variable.\n$space-none: 0;\n$space-x-sm: 16px;\n$space-sm: 24px;\n$space-md: 48px;\n$space-lg: 96px;\n$space-x-lg: 128px;\n$space-auto: auto;\n\n$p-32: 32px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/api/invalidateToken.ts":
/*!************************************!*\
  !*** ./src/api/invalidateToken.ts ***!
  \************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invalidateToken [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.invalidateToken = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/token/invalidate";
function invalidateToken(token) {
    var apikey = this.apikey;
    return request_1.request({
        method: 'GET',
        url: url,
        headers: {
            'X-API-Key': apikey,
            Authorization: "Bearer " + token,
        },
    });
}
exports.invalidateToken = invalidateToken;


/***/ }),

/***/ "./src/api/loginBegin.ts":
/*!*******************************!*\
  !*** ./src/api/loginBegin.ts ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginBegin [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loginBegin = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/webauthn/login/initialize";
function loginBegin(apikey, email) {
    return request_1.request({
        method: 'GET',
        credentials: "include",
        url: url,
        queryParams: {
            email: email,
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
}
exports.loginBegin = loginBegin;


/***/ }),

/***/ "./src/api/loginComplete.ts":
/*!**********************************!*\
  !*** ./src/api/loginComplete.ts ***!
  \**********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginComplete [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loginComplete = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/webauthn/login/finish";
function loginComplete(apikey, email, state_id, id, rawId, type, authenticatorData, clientDataJSON, signature, userHandle) {
    return request_1.request({
        method: 'POST',
        credentials: "include",
        url: url,
        queryParams: {
            email: email,
            state_id: state_id
        },
        body: {
            id: id,
            rawId: rawId,
            type: type,
            response: {
                authenticatorData: authenticatorData,
                clientDataJSON: clientDataJSON,
                signature: signature,
                userHandle: userHandle
            }
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
}
exports.loginComplete = loginComplete;


/***/ }),

/***/ "./src/api/ping.ts":
/*!*************************!*\
  !*** ./src/api/ping.ts ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ping = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/users/status";
function ping(apikey, state_id, 
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
callback) {
    return __awaiter(this, void 0, Promise, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request_1.request({
                        method: 'GET',
                        url: url,
                        queryParams: {
                            state_id: state_id,
                        },
                        headers: {
                            'X-API-Key': apikey,
                        },
                    })];
                case 1:
                    response = _a.sent();
                    if (response.authenticated) {
                        // return Promise.resolve(response);
                        callback(response);
                    }
                    else {
                        setTimeout(function () { return ping(apikey, state_id, callback); }, 5000);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.ping = ping;


/***/ }),

/***/ "./src/api/postEmail.ts":
/*!******************************!*\
  !*** ./src/api/postEmail.ts ***!
  \******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export postEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.postEmail = void 0;
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var url = config_1.getConfig().apiUrl + "/users/magiclink";
/**
 *
 * @param apiKey
 * @param email
 * @returns
 * @description post email to get a magic link on the user's email
 */
function postEmail(apikey, email, language, redirect_url) {
    return request_1.request({
        method: 'POST',
        url: url,
        queryParams: {
            language: language,
            redirect_url: redirect_url,
        },
        body: {
            email: email,
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
}
exports.postEmail = postEmail;


/***/ }),

/***/ "./src/api/postOTPEmail.ts":
/*!*********************************!*\
  !*** ./src/api/postOTPEmail.ts ***!
  \*********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export postOTPEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.postOTPEmail = void 0;
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var url = config_1.getConfig().apiUrl + "/users/emailotp";
/**
 *
 * @param apiKey
 * @param email
 * @returns
 * @description: post email to get otp on the user's email
 */
function postOTPEmail(apikey, email, language) {
    return request_1.request({
        method: 'POST',
        url: url,
        queryParams: {
            language: language
        },
        body: {
            email: email,
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
}
exports.postOTPEmail = postOTPEmail;


/***/ }),

/***/ "./src/api/registerationBegin.ts":
/*!***************************************!*\
  !*** ./src/api/registerationBegin.ts ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export registerationBegin [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerationBegin = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/webauthn/registration/initialize";
function registerationBegin(apikey, access_token) {
    return request_1.request({
        method: 'GET',
        credentials: "include",
        url: url,
        headers: {
            'X-API-Key': apikey,
            Authorization: "Bearer " + access_token,
        },
    });
}
exports.registerationBegin = registerationBegin;


/***/ }),

/***/ "./src/api/registerationComplete.ts":
/*!******************************************!*\
  !*** ./src/api/registerationComplete.ts ***!
  \******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export registerationComplete [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerationComplete = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/webauthn/registration/finish";
function registerationComplete(apikey, access_token, state_id, id, rawId, type, attestationObject, clientDataJSON) {
    return request_1.request({
        method: 'POST',
        credentials: "include",
        url: url,
        queryParams: {
            state_id: state_id
        },
        body: {
            id: id,
            rawId: rawId,
            type: type,
            response: {
                attestationObject: attestationObject,
                clientDataJSON: clientDataJSON
            }
        },
        headers: {
            'X-API-Key': apikey,
            Authorization: "Bearer " + access_token,
        },
    });
}
exports.registerationComplete = registerationComplete;


/***/ }),

/***/ "./src/api/resendEmail.ts":
/*!********************************!*\
  !*** ./src/api/resendEmail.ts ***!
  \********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resendEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resendEmail = void 0;
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var url = config_1.getConfig().apiUrl + "/users/magiclink/resend";
/**
 *
 * @param apiKey
 * @param state_id
 * @returns
 * @description post email to get a magic link on the user's email
 */
function resendEmail(apikey, state_id) {
    return request_1.request({
        method: 'POST',
        url: url,
        body: {
            state_id: state_id,
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
}
exports.resendEmail = resendEmail;


/***/ }),

/***/ "./src/api/verifyEmailOTP.ts":
/*!***********************************!*\
  !*** ./src/api/verifyEmailOTP.ts ***!
  \***********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export verifyEmailOTP [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verifyEmailOTP = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/users/emailotp/verify";
function verifyEmailOTP(apikey, state_id, otp) {
    return request_1.request({
        method: 'POST',
        url: url,
        body: {
            otp: otp,
            state_id: state_id,
        },
        headers: {
            'X-API-key': apikey,
        },
    });
}
exports.verifyEmailOTP = verifyEmailOTP;


/***/ }),

/***/ "./src/api/verifyToken.ts":
/*!********************************!*\
  !*** ./src/api/verifyToken.ts ***!
  \********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export verifyToken [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verifyToken = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/token/verify";
function verifyToken(token) {
    var apikey = this.apikey;
    return request_1.request({
        method: 'GET',
        url: url,
        headers: {
            'X-API-Key': apikey,
            Authorization: "Bearer " + token,
        },
    });
}
exports.verifyToken = verifyToken;


/***/ }),

/***/ "./src/api/webauthnCheck.ts":
/*!**********************************!*\
  !*** ./src/api/webauthnCheck.ts ***!
  \**********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export webauthnRegistered [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webauthnRegistered = void 0;
var request_1 = __webpack_require__(/*! ../helpers/request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var url = config_1.getConfig().apiUrl + "/webauthn/check";
function webauthnRegistered(apikey, email) {
    return request_1.request({
        method: 'GET',
        url: url,
        queryParams: {
            email: email,
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
}
exports.webauthnRegistered = webauthnRegistered;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getConfig [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getConfig = void 0;
// TODO: Fix api url not coming from node env
function getConfig() {
    return {
        apiUrl: 'https://dev-api.mojoauth.com' || 0,
    };
}
exports.getConfig = getConfig;


/***/ }),

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/*! flagged exports */
/*! export Defaults [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
exports.Defaults = {
    rootContainer: 'mojoauth-passwordless-form',
    loginFormContainer: 'mojoauth-login-container',
    postLoginContainerId: 'post-login-message',
    loginFormId: 'mojoauth-login',
    brandFooterId: 'mojoauth-brand-footer',
    otpVerificationId: 'mojoauth-otp-verification',
};


/***/ }),

/***/ "./src/helpers/common.ts":
/*!*******************************!*\
  !*** ./src/helpers/common.ts ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addStyles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addStyles = void 0;
function addStyles(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}
exports.addStyles = addStyles;


/***/ }),

/***/ "./src/helpers/projectConfig.ts":
/*!**************************************!*\
  !*** ./src/helpers/projectConfig.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProjectConfig = void 0;
var request_1 = __webpack_require__(/*! ./request */ "./src/helpers/request.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var promise;
var configUrl = config_1.getConfig().apiUrl + "/projects/branding";
var fetchConfig = function (apikey, language) {
    return request_1.request({
        method: 'GET',
        url: configUrl,
        queryParams: {
            language: language,
        },
        headers: {
            'X-API-Key': apikey,
        },
    });
};
function getProjectConfig(apikey, language) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchConfig(apikey, language)];
                case 1: 
                // if (promise) return promise;
                // promise = await fetchConfig(apikey, language);
                // if (promise) {
                // 	return promise;
                // } else {
                // 	throw new Error("Project Config promise not returned");
                // }
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getProjectConfig = getProjectConfig;
// const defaultConfig = {
// 	brand: 'LoginRadius',
// 	background: '#ffdddd',
// 	btn_color: 'pink',
// 	font: {
// 		url:
// 			'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
// 		family: 'Roboto',
// 	},
// 	brand_logo: 'https://mojoauth-cdn.netlify.app/assets/images/company_logo.svg',
// 	favicon: 'https://via.placeholder.com/50',
// 	login: {
// 		heading: 'Welcome to Mojoauth',
// 		sub_heading: 'Sign in or create a new account for free!',
// 		button: {
// 			text: 'Sign In Without Password',
// 		},
// 		input: {
// 			placeholder: 'Enter your Email',
// 		},
// 	},
// };


/***/ }),

/***/ "./src/helpers/request.ts":
/*!********************************!*\
  !*** ./src/helpers/request.ts ***!
  \********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export request [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = void 0;
var request = function (request) {
    var method = request.method, credentials = request.credentials, url = request.url, _a = request.queryParams, queryParams = _a === void 0 ? {} : _a, body = request.body, _b = request.headers, headers = _b === void 0 ? {} : _b;
    credentials = credentials ? credentials : "same-origin";
    var urlWithQueryParams = Object.keys(queryParams).length
        ? url + "?" + buildUrl(url, queryParams)
        : url;
    return fetch(urlWithQueryParams, {
        method: method,
        credentials: credentials,
        mode: "cors",
        headers: headers,
        body: body ? JSON.stringify(body) : null,
    }).then(function (response) { return response.json(); });
};
exports.request = request;
var buildUrl = function (url, queryParams) {
    var urlString = '';
    for (var key in queryParams) {
        urlString += encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]) + "&";
    }
    return urlString.substring(0, urlString.length - 1);
};


/***/ }),

/***/ "./src/helpers/svgIcons.ts":
/*!*********************************!*\
  !*** ./src/helpers/svgIcons.ts ***!
  \*********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mailIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mojoauthCapIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mojoauthCapIcon = exports.mailIcon = void 0;
exports.mailIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 150\"><defs><style>.cls-1{fill:#f6f5ff;}.cls-2{fill:#7b39ed;}.cls-3{fill:#5e00cf;}.cls-4{fill:#b48dff;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><rect class=\"cls-1\" width=\"150\" height=\"150\" rx=\"30\"/><path class=\"cls-2\" d=\"M75,85.83a15.1,15.1,0,0,1-6.67-1.33v4.67H80v-4A18,18,0,0,1,75,85.83Z\"/><path class=\"cls-3\" d=\"M115,65c0-8.75-17.92-15.83-40-15.83S35,56.25,35,65a2.3,2.3,0,0,0,0,.37,3.54,3.54,0,0,0,0,.46V107.5a6.69,6.69,0,0,0,6.67,6.67h66.66A6.69,6.69,0,0,0,115,107.5V65.83a3.54,3.54,0,0,0,0-.46A2.3,2.3,0,0,0,115,65ZM80,89.17H68.33V84.5A15.1,15.1,0,0,0,75,85.83a18,18,0,0,0,5-.66Z\"/><path class=\"cls-1\" d=\"M108.33,67.38V71L105,72.6l-6.67,3.28L74.73,87.5,51.67,76l-10-5V67.38A4.9,4.9,0,0,1,45,62.75a4.62,4.62,0,0,1,1.55-.25h56.9a4.62,4.62,0,0,1,1.55.25A4.9,4.9,0,0,1,108.33,67.38Z\"/><path class=\"cls-4\" d=\"M93.17,35.83H56.83A11.86,11.86,0,0,0,45,47.67v25L51.67,76,74.73,87.5l23.6-11.62L105,72.6V47.67A11.86,11.86,0,0,0,93.17,35.83Z\"/><path class=\"cls-1\" d=\"M98.33,46.42V75.88L74.73,87.5,51.67,76V46.42a3.93,3.93,0,0,1,3.91-3.92H94.42A3.93,3.93,0,0,1,98.33,46.42Z\"/><path class=\"cls-3\" d=\"M80,85.17v4H68.33V84.5A15.1,15.1,0,0,0,75,85.83,18,18,0,0,0,80,85.17Z\"/><path class=\"cls-3\" d=\"M74.39,48.05a13.5,13.5,0,1,0,13.5,13.5A13.51,13.51,0,0,0,74.39,48.05Zm7,9L72.69,67.41a1.06,1.06,0,0,1-.78.37h0a1,1,0,0,1-.77-.35l-3.74-4.15a1,1,0,0,1,1.52-1.43l0,0,2.94,3.27,7.95-9.48A1,1,0,0,1,81.41,57Z\"/></g></g></svg>";
exports.mojoauthCapIcon = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 93.72\"><defs><style>.cls-11{fill:#fff;}</style></defs><path d=\"M99.11,74.84a.14.14,0,0,0,0-.09c-1.35-2.34-4.32-4.4-8.86-6.14a3.23,3.23,0,0,0-.57-.23L88.43,68c.37.14.71.29,1.06.43a3.23,3.23,0,0,1,.57.23c4.25,1.77,7.34,3.85,8.85,6.14,0,0,.06.06.06.09a6.13,6.13,0,0,1,.72,1.42A6.07,6.07,0,0,0,99.11,74.84ZM72,92.12a79.05,79.05,0,0,0,18.11-4.68v-.06l-.14.06A78.53,78.53,0,0,1,72,92.12ZM64.74,93c1.23-.12,2.43-.26,3.63-.4-1.17.14-2.4.25-3.63.37ZM54.8,37.55a5.78,5.78,0,0,0-3.31-2.2,5.43,5.43,0,0,0-3.6.31A5.56,5.56,0,0,0,44.77,39a5.86,5.86,0,0,0,0,3.77,5.52,5.52,0,0,0,2.29,2.94.64.64,0,0,1,.25.49c-.05.45-.2.88-.28,1.31-.29,1.09-.57,2.17-.83,3.26S45.66,53,45.4,54s-.54,2.08-.77,3.14c-.14.57,0,.68.57.68h9.94c.6,0,.72-.11.57-.71-.2-1-.45-1.94-.68-2.91-.29-1.18-.6-2.35-.89-3.52-.34-1.4-.65-2.8-1-4.2a.68.68,0,0,1,.29-.88A5.74,5.74,0,0,0,54.8,37.55ZM8.4,69.29A19.5,19.5,0,0,0,2.54,73,21.79,21.79,0,0,1,8.4,69.29Z\"/><path d=\"M99.69,76.26A6.13,6.13,0,0,0,99,74.84s0-.06-.06-.09c-1.51-2.29-4.6-4.37-8.85-6.14a3.23,3.23,0,0,0-.57-.23c-.35-.14-.69-.29-1.06-.43h0c-1.26-.4-2.6-.8-4.06-1.2-2.31-.6-4.8-1.14-7.45-1.63l-.06-.37v-.17c-.34-2-1.23-5.23-2.8-10.66-2.37-8.34-5.63-19.8-8.54-33.46-.69-3.17-.29-5.74,1.22-7.91C70.23,7.38,79.06,6,82.31,5.41a7.51,7.51,0,0,1,1.15-.2c1.83-.4,2.05-1.63,2.05-2.17A2.22,2.22,0,0,0,83.6.86h-.2l-.09,0C74,0,65.14-.76,57.69,1.55,49.14,4.12,43.29,10.29,39.37,21L23.14,64.75v.06l-.28.4c-2.43.45-4.75,1-6.92,1.54-1.94.51-3.68,1.06-5.28,1.63a3.23,3.23,0,0,0-.57.23c-.55.2-1.06.43-1.55.63a.3.3,0,0,0-.14.05A21.79,21.79,0,0,0,2.54,73l0,0a10.17,10.17,0,0,0-1.28,1.69s-.06.06-.06.09A6,6,0,0,0,.4,77.75c0,3.77,3.6,7,10.74,9.57v.52a84.62,84.62,0,0,0,18.15,4.45c1.2.17,2.4.35,3.62.46s2.4.29,3.63.4h.15c4.22.37,8.71.57,13.31.57,5.09,0,10-.23,14.6-.68h.14v0c1.23-.12,2.46-.23,3.63-.37L72,92.12a78.53,78.53,0,0,0,18-4.68l.14-.06v-.46c6.49-2.48,9.75-5.57,9.75-9.17A5.46,5.46,0,0,0,99.69,76.26ZM44.77,39a5.56,5.56,0,0,1,3.12-3.35,5.43,5.43,0,0,1,3.6-.31A5.72,5.72,0,0,1,53.4,45.64a.68.68,0,0,0-.29.88c.38,1.4.69,2.8,1,4.2.29,1.17.6,2.34.89,3.52.23,1,.48,1.94.68,2.91.15.6,0,.71-.57.71H45.2c-.6,0-.71-.11-.57-.68.23-1.06.51-2.12.77-3.14s.51-2.18.8-3.26.54-2.17.83-3.26c.08-.43.23-.86.28-1.31a.64.64,0,0,0-.25-.49,5.52,5.52,0,0,1-2.29-2.94A5.86,5.86,0,0,1,44.77,39Z\"/><path class=\"cls-11\" d=\"M55.71,57.15c.15.6,0,.71-.57.71H45.2c-.6,0-.71-.11-.57-.68.23-1.06.51-2.12.77-3.14s.51-2.18.8-3.26.54-2.17.83-3.26c.08-.43.23-.86.28-1.31a.64.64,0,0,0-.25-.49,5.52,5.52,0,0,1-2.29-2.94,5.86,5.86,0,0,1,0-3.77,5.56,5.56,0,0,1,3.12-3.35,5.43,5.43,0,0,1,3.6-.31A5.72,5.72,0,0,1,53.4,45.64a.68.68,0,0,0-.29.88c.38,1.4.69,2.8,1,4.2.29,1.17.6,2.34.89,3.52C55.26,55.21,55.51,56.18,55.71,57.15Z\"/><path d=\"M10.09,68.61c-.55.2-1.06.43-1.55.63.46-.23.92-.43,1.4-.63a3.23,3.23,0,0,1,.57-.23A66.87,66.87,0,0,1,23,64.81v0c.06,0,.09,0,.14,0v.06l-.28.4c-2.43.45-4.75,1-6.92,1.54-1.94.51-3.68,1.06-5.28,1.63A3.23,3.23,0,0,0,10.09,68.61Z\"/><path d=\"M11.14,87.84a84.62,84.62,0,0,0,18.15,4.45A83.86,83.86,0,0,1,11,87.84C4.11,85.15,0,81.72,0,78a5.58,5.58,0,0,1,1-3.17s0-.06.06-.09a9.8,9.8,0,0,1,1.42-1.69,10.17,10.17,0,0,0-1.28,1.69s-.06.06-.06.09A6,6,0,0,0,.4,77.75c0,3.77,3.6,7,10.74,9.57Z\"/><path d=\"M76.83,64.75A71.21,71.21,0,0,1,88.4,68c-1.26-.4-2.6-.8-4.06-1.2-2.31-.6-4.8-1.14-7.45-1.63Z\"/><path d=\"M100,78c0,3.51-3.66,6.74-9.86,9.37v-.46c6.49-2.48,9.75-5.57,9.75-9.17a5.46,5.46,0,0,0-.2-1.49A5.29,5.29,0,0,1,100,78Z\"/></svg>";


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var signInWithEmailOTP_1 = __webpack_require__(/*! ./ui/signInWithEmailOTP */ "./src/ui/signInWithEmailOTP.ts");
var verifyToken_1 = __webpack_require__(/*! ./api/verifyToken */ "./src/api/verifyToken.ts");
var invalidateToken_1 = __webpack_require__(/*! ./api/invalidateToken */ "./src/api/invalidateToken.ts");
var singInWithMagicLink_1 = __webpack_require__(/*! ./ui/singInWithMagicLink */ "./src/ui/singInWithMagicLink.ts");
var enableWebauthn_1 = __webpack_require__(/*! ./ui/webauthn.ts/enableWebauthn */ "./src/ui/webauthn.ts/enableWebauthn.ts");
var signInWithStateID_1 = __webpack_require__(/*! ./ui/signInWithStateID */ "./src/ui/signInWithStateID.ts");
var MojoAuth = /** @class */ (function () {
    function MojoAuth(apikey, config) {
        if (!apikey) {
            console.error('apikey is required. Please pass valid apikey');
            return;
        }
        this.signInWithMagicLink = singInWithMagicLink_1.signInWithMagicLink.bind({ apikey: apikey, config: config });
        this.signInWithEmailOTP = signInWithEmailOTP_1.signInWithEmailOTP.bind({ apikey: apikey, config: config });
        this.verifyToken = verifyToken_1.verifyToken.bind({ apikey: apikey });
        this.invalidateToken = invalidateToken_1.invalidateToken.bind({ apikey: apikey });
        this.enableWebauthn = enableWebauthn_1.enableWebauthn.bind({ apikey: apikey });
        this.signInWithStateID = signInWithStateID_1.signInWithStateID.bind({ apikey: apikey });
    }
    return MojoAuth;
}());
exports.default = MojoAuth;


/***/ }),

/***/ "./src/ui/emailOTP.ts":
/*!****************************!*\
  !*** ./src/ui/emailOTP.ts ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emailOTP = void 0;
var createLoader_1 = __webpack_require__(/*! ./ui-helpers/createLoader */ "./src/ui/ui-helpers/createLoader.ts");
var createOTPVerificationPage_1 = __webpack_require__(/*! ./ui-helpers/createOTPVerificationPage */ "./src/ui/ui-helpers/createOTPVerificationPage.ts");
__webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
function emailOTP(apikey, email, emailResponse, projectConfig) {
    return __awaiter(this, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            promise = new Promise(function (resolve, reject) {
                var callback = function (response) {
                    resolve(response);
                };
                createLoader_1.createLoader();
                if (emailResponse.state_id) {
                    // show otp verification ui here
                    createOTPVerificationPage_1.createOTPVerificationPage({
                        type: 'email',
                        state_id: emailResponse.state_id,
                        value: email,
                        callback: callback,
                        apikey: apikey,
                        projectConfig: projectConfig,
                    });
                }
            });
            return [2 /*return*/, promise];
        });
    });
}
exports.emailOTP = emailOTP;


/***/ }),

/***/ "./src/ui/magicLink.ts":
/*!*****************************!*\
  !*** ./src/ui/magicLink.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.magicLink = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var ping_1 = __webpack_require__(/*! ../api/ping */ "./src/api/ping.ts");
var createPostMagicLinkLoginPage_1 = __webpack_require__(/*! ./ui-helpers/createPostMagicLinkLoginPage */ "./src/ui/ui-helpers/createPostMagicLinkLoginPage.ts");
var createLoader_1 = __webpack_require__(/*! ./ui-helpers/createLoader */ "./src/ui/ui-helpers/createLoader.ts");
__webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
function magicLink(apikey, email, emailResponse, projectConfig) {
    return __awaiter(this, void 0, Promise, function () {
        var promise;
        return __generator(this, function (_a) {
            promise = new Promise(function (resolve, reject) {
                var callback = function (response) {
                    resolve(response);
                };
                createLoader_1.createLoader();
                if (emailResponse.state_id) {
                    createPostMagicLinkLoginPage_1.createPostMagicLinkLoginPage(apikey, email, emailResponse.state_id, projectConfig);
                    // ping api will take callback and will call it on successful response
                    /**
                     * If I can somehow make the code wait here unless I get the success response it will be great
                     */
                    ping_1.ping(apikey, emailResponse.state_id, callback);
                }
            });
            return [2 /*return*/, promise];
        });
    });
}
exports.magicLink = magicLink;


/***/ }),

/***/ "./src/ui/signInWithEmailOTP.ts":
/*!**************************************!*\
  !*** ./src/ui/signInWithEmailOTP.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signInWithEmailOTP = void 0;
var postOTPEmail_1 = __webpack_require__(/*! ../api/postOTPEmail */ "./src/api/postOTPEmail.ts");
var createForm_1 = __webpack_require__(/*! ./ui-helpers/createForm */ "./src/ui/ui-helpers/createForm.ts");
var projectConfig_1 = __webpack_require__(/*! ../helpers/projectConfig */ "./src/helpers/projectConfig.ts");
var defaults_1 = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");
var createBrandFooter_1 = __webpack_require__(/*! ./ui-helpers/createBrandFooter */ "./src/ui/ui-helpers/createBrandFooter.ts");
var createLoader_1 = __webpack_require__(/*! ./ui-helpers/createLoader */ "./src/ui/ui-helpers/createLoader.ts");
var common_1 = __webpack_require__(/*! ../helpers/common */ "./src/helpers/common.ts");
__webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
var webauthnCheck_1 = __webpack_require__(/*! ../api/webauthnCheck */ "./src/api/webauthnCheck.ts");
var login_1 = __webpack_require__(/*! ./webauthn.ts/login */ "./src/ui/webauthn.ts/login.ts");
var registerPage_1 = __webpack_require__(/*! ./webauthn.ts/registerPage */ "./src/ui/webauthn.ts/registerPage.ts");
var emailOTP_1 = __webpack_require__(/*! ./emailOTP */ "./src/ui/emailOTP.ts");
function signInWithEmailOTP() {
    return __awaiter(this, void 0, Promise, function () {
        var apikey, webauthn_forced, language, projectConfig, e_1, rootContainerId, loginFormId, container, loginFormContainer, logoContainer, formTitle, formSubTitle, form, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apikey = this.apikey;
                    webauthn_forced = this.config.enable_webauthn;
                    language = this.config.language;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, projectConfig_1.getProjectConfig(apikey, language)];
                case 2:
                    projectConfig = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1.message);
                    return [2 /*return*/];
                case 4:
                    rootContainerId = defaults_1.Defaults.rootContainer;
                    loginFormId = defaults_1.Defaults.loginFormContainer;
                    container = document.getElementById(rootContainerId);
                    if (!container) {
                        console.error('HTML container not in the DOM');
                        return [2 /*return*/];
                    }
                    // add new font on the root container and add styles
                    container.style.fontFamily = projectConfig.data.font.family;
                    if (projectConfig.data.font.url) {
                        common_1.addStyles(projectConfig.data.font.url);
                    }
                    loginFormContainer = document.createElement('div');
                    loginFormContainer.id = loginFormId;
                    loginFormContainer.classList.add('mojoauth--card', 'mojoauth--shadow', 'mojoauth--v-center');
                    logoContainer = document.createElement('div');
                    logoContainer.classList.add('logo');
                    logoContainer.innerHTML = "<img src=" + projectConfig.data.brand_logo + " />";
                    loginFormContainer.appendChild(logoContainer);
                    formTitle = document.createElement('div');
                    formTitle.classList.add('title');
                    formTitle.textContent = projectConfig.data.localization.login.heading + " " + projectConfig.data.brand;
                    loginFormContainer.appendChild(formTitle);
                    formSubTitle = document.createElement('div');
                    formSubTitle.classList.add('subtitle');
                    formSubTitle.textContent = projectConfig.data.localization.login.sub_heading;
                    loginFormContainer.appendChild(formSubTitle);
                    form = createForm_1.createForm(projectConfig.data, defaults_1.Defaults.loginFormId);
                    loginFormContainer.appendChild(form);
                    container.appendChild(loginFormContainer);
                    // Step 5: Add brand footer
                    loginFormContainer.appendChild(createBrandFooter_1.createBrandFooter());
                    promise = new Promise(function (resolve, reject) {
                        var _this = this;
                        form.onsubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var email, check, emailResponse_1, emailResponse;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        createLoader_1.createLoader();
                                        email = form.email.value;
                                        return [4 /*yield*/, webauthnCheck_1.webauthnRegistered(apikey, email)];
                                    case 1:
                                        check = _a.sent();
                                        if (!(projectConfig.webauthn || webauthn_forced)) return [3 /*break*/, 5];
                                        if (!check.webauthn_registered) return [3 /*break*/, 2];
                                        //display here login page
                                        resolve(login_1.authenticate(apikey, email)
                                            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                            var emailResponse;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, postOTPEmail_1.postOTPEmail(apikey, email, language)];
                                                    case 1:
                                                        emailResponse = _a.sent();
                                                        return [2 /*return*/, emailOTP_1.emailOTP(apikey, email, emailResponse, projectConfig)];
                                                }
                                            });
                                        }); }));
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, postOTPEmail_1.postOTPEmail(apikey, email, language)];
                                    case 3:
                                        emailResponse_1 = _a.sent();
                                        emailOTP_1.emailOTP(apikey, email, emailResponse_1, projectConfig)
                                            .then(function (response) {
                                            //display here registeration page on condition
                                            if (check.first_login) {
                                                registerPage_1.webauthnRegister(apikey, email, check, projectConfig.data, response.oauth.access_token, emailResponse_1.state_id)
                                                    .then(function (res) {
                                                    resolve(res);
                                                })
                                                    .catch(function (error) { return resolve(response); });
                                            }
                                            else {
                                                resolve(response);
                                            }
                                        });
                                        _a.label = 4;
                                    case 4: return [3 /*break*/, 7];
                                    case 5: return [4 /*yield*/, postOTPEmail_1.postOTPEmail(apikey, email, language)];
                                    case 6:
                                        emailResponse = _a.sent();
                                        resolve(emailOTP_1.emailOTP(apikey, email, emailResponse, projectConfig));
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); };
                    });
                    return [2 /*return*/, promise];
            }
        });
    });
}
exports.signInWithEmailOTP = signInWithEmailOTP;


/***/ }),

/***/ "./src/ui/signInWithStateID.ts":
/*!*************************************!*\
  !*** ./src/ui/signInWithStateID.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signInWithStateID = void 0;
var ping_1 = __webpack_require__(/*! ../api/ping */ "./src/api/ping.ts");
var createLoader_1 = __webpack_require__(/*! ./ui-helpers/createLoader */ "./src/ui/ui-helpers/createLoader.ts");
function signInWithStateID() {
    return __awaiter(this, void 0, Promise, function () {
        var apikey, promise;
        return __generator(this, function (_a) {
            apikey = this.apikey;
            promise = new Promise(function (resolve, reject) {
                var callback = function (response) {
                    resolve(response);
                };
                createLoader_1.createLoader();
                if (window.location.search) {
                    var urlParams = new URLSearchParams(window.location.search);
                    var state_id = urlParams.get('state_id');
                    // ping api will take callback and will call it on successful response
                    /**
                     * If I can somehow make the code wait here unless I get the success response it will be great
                     */
                    ping_1.ping(apikey, state_id, callback);
                }
            });
            return [2 /*return*/, promise];
        });
    });
}
exports.signInWithStateID = signInWithStateID;


/***/ }),

/***/ "./src/ui/singInWithMagicLink.ts":
/*!***************************************!*\
  !*** ./src/ui/singInWithMagicLink.ts ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signInWithMagicLink = void 0;
var postEmail_1 = __webpack_require__(/*! ../api/postEmail */ "./src/api/postEmail.ts");
var webauthnCheck_1 = __webpack_require__(/*! ../api/webauthnCheck */ "./src/api/webauthnCheck.ts");
var defaults_1 = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");
var common_1 = __webpack_require__(/*! ../helpers/common */ "./src/helpers/common.ts");
var projectConfig_1 = __webpack_require__(/*! ../helpers/projectConfig */ "./src/helpers/projectConfig.ts");
var magicLink_1 = __webpack_require__(/*! ./magicLink */ "./src/ui/magicLink.ts");
var createBrandFooter_1 = __webpack_require__(/*! ./ui-helpers/createBrandFooter */ "./src/ui/ui-helpers/createBrandFooter.ts");
var createForm_1 = __webpack_require__(/*! ./ui-helpers/createForm */ "./src/ui/ui-helpers/createForm.ts");
var createLoader_1 = __webpack_require__(/*! ./ui-helpers/createLoader */ "./src/ui/ui-helpers/createLoader.ts");
var registerPage_1 = __webpack_require__(/*! ./webauthn.ts/registerPage */ "./src/ui/webauthn.ts/registerPage.ts");
var login_1 = __webpack_require__(/*! ./webauthn.ts/login */ "./src/ui/webauthn.ts/login.ts");
function signInWithMagicLink() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, Promise, function () {
        function setHttp(link) {
            console.log("this is link");
            console.log(link);
            if (link.search(/^http[s]?\:\/\//) == -1) {
                link = 'http://' + link;
            }
            return link;
        }
        var apikey, webauthn_forced, language, redirect_url, projectConfig, e_1, rootContainerId, loginFormId, container, loginFormContainer, logoContainer, formTitle, formSubTitle, form, promise;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    apikey = this.apikey;
                    webauthn_forced = (_a = this.config) === null || _a === void 0 ? void 0 : _a.enable_webauthn;
                    language = (_b = this.config) === null || _b === void 0 ? void 0 : _b.language;
                    redirect_url = ((_c = this.config) === null || _c === void 0 ? void 0 : _c.redirect_url) ? setHttp((_d = this.config) === null || _d === void 0 ? void 0 : _d.redirect_url) : null;
                    console.log(redirect_url);
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, projectConfig_1.getProjectConfig(apikey, language)];
                case 2:
                    projectConfig = _e.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _e.sent();
                    console.error(e_1.message);
                    return [2 /*return*/];
                case 4:
                    console.log(projectConfig);
                    rootContainerId = defaults_1.Defaults.rootContainer;
                    loginFormId = defaults_1.Defaults.loginFormContainer;
                    container = document.getElementById(rootContainerId);
                    if (!container) {
                        console.error('HTML container not in the DOM');
                        return [2 /*return*/];
                    }
                    // add new font on the root container and add styles
                    container.style.fontFamily = projectConfig.data.font.family;
                    if (projectConfig.data.font.url) {
                        common_1.addStyles(projectConfig.data.font.url);
                    }
                    loginFormContainer = document.createElement('div');
                    loginFormContainer.id = loginFormId;
                    loginFormContainer.classList.add('mojoauth--card', 'mojoauth--shadow', 'mojoauth--v-center');
                    logoContainer = document.createElement('div');
                    logoContainer.classList.add('logo');
                    logoContainer.innerHTML = "<img src=" + projectConfig.data.brand_logo + " />";
                    loginFormContainer.appendChild(logoContainer);
                    formTitle = document.createElement('div');
                    formTitle.classList.add('title');
                    formTitle.textContent = projectConfig.data.localization.login.heading + " " + projectConfig.data.brand;
                    loginFormContainer.appendChild(formTitle);
                    formSubTitle = document.createElement('div');
                    formSubTitle.classList.add('subtitle');
                    formSubTitle.textContent = projectConfig.data.localization.login.sub_heading;
                    loginFormContainer.appendChild(formSubTitle);
                    form = createForm_1.createForm(projectConfig.data, defaults_1.Defaults.loginFormId);
                    loginFormContainer.appendChild(form);
                    container.appendChild(loginFormContainer);
                    // Step 5: Add brand footer
                    loginFormContainer.appendChild(createBrandFooter_1.createBrandFooter());
                    promise = new Promise(function (resolve, reject) {
                        var _this = this;
                        form.onsubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var email, check, emailResponse_1, emailResponse;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        createLoader_1.createLoader();
                                        email = form.email.value;
                                        return [4 /*yield*/, webauthnCheck_1.webauthnRegistered(apikey, email)];
                                    case 1:
                                        check = _a.sent();
                                        if (!(projectConfig.webauthn || webauthn_forced)) return [3 /*break*/, 5];
                                        if (!check.webauthn_registered) return [3 /*break*/, 2];
                                        //display here login page
                                        resolve(login_1.authenticate(apikey, email)
                                            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                            var emailResponse;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, postEmail_1.postEmail(apikey, email, language, redirect_url)];
                                                    case 1:
                                                        emailResponse = _a.sent();
                                                        return [2 /*return*/, magicLink_1.magicLink(apikey, email, emailResponse, projectConfig)];
                                                }
                                            });
                                        }); }));
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, postEmail_1.postEmail(apikey, email, language, redirect_url)];
                                    case 3:
                                        emailResponse_1 = _a.sent();
                                        magicLink_1.magicLink(apikey, email, emailResponse_1, projectConfig)
                                            .then(function (response) {
                                            //Check if the user has visited first time
                                            if (check.first_login) {
                                                // Display the webauthn register page
                                                registerPage_1.webauthnRegister(apikey, email, check, projectConfig.data, response.oauth.access_token, emailResponse_1.state_id)
                                                    .then(function (res) {
                                                    resolve(res);
                                                })
                                                    .catch(function (error) {
                                                    console.log(error);
                                                    resolve(response);
                                                });
                                            }
                                            // 
                                            else {
                                                resolve(response);
                                            }
                                        });
                                        _a.label = 4;
                                    case 4: return [3 /*break*/, 7];
                                    case 5: return [4 /*yield*/, postEmail_1.postEmail(apikey, email, language, redirect_url)];
                                    case 6:
                                        emailResponse = _a.sent();
                                        resolve(magicLink_1.magicLink(apikey, email, emailResponse, projectConfig));
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); };
                    });
                    return [2 /*return*/, promise];
            }
        });
    });
}
exports.signInWithMagicLink = signInWithMagicLink;


/***/ }),

/***/ "./src/ui/ui-helpers/createBrandFooter.ts":
/*!************************************************!*\
  !*** ./src/ui/ui-helpers/createBrandFooter.ts ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createBrandFooter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBrandFooter = void 0;
var defaults_1 = __webpack_require__(/*! ../../defaults */ "./src/defaults.ts");
var svgIcons_1 = __webpack_require__(/*! ../../helpers/svgIcons */ "./src/helpers/svgIcons.ts");
function createBrandFooter() {
    var div = document.createElement('div');
    div.id = defaults_1.Defaults.brandFooterId;
    div.className = 'mojoauth-passwordless-footer';
    div.innerHTML = "\n    <p>\n\t\t\t<span class=\"footer-icon\">" + svgIcons_1.mojoauthCapIcon + "</span>\n      Secured by&nbsp;<a href=\"https://mojoauth.com\" target=\"_blank\">MojoAuth</a>\n    </p>\n  ";
    return div;
}
exports.createBrandFooter = createBrandFooter;


/***/ }),

/***/ "./src/ui/ui-helpers/createButton.ts":
/*!*******************************************!*\
  !*** ./src/ui/ui-helpers/createButton.ts ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createButton = void 0;
// if type is login then return login form and if type is pin return form to enter code
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createButton(config, id, buttonName, type) {
    var 
    // login: { input },
    localization = config.localization, btn_color = config.btn_color;
    var button1 = localization.webauthn_page.button1;
    var button = document.createElement('form');
    button.id = id;
    // Create input form group
    var inputFormGroup = document.createElement('div');
    inputFormGroup.classList.add('button-group');
    var inputField = document.createElement('input');
    inputField.id = "skip";
    inputField.type = 'submit';
    inputField.name = 'submit';
    inputField.value = buttonName;
    if (buttonName === "" + button1.text) {
        inputField.style.color = btn_color;
        inputField.style.backgroundColor = "white";
        inputField.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.1)";
    }
    else {
        inputField.style.backgroundColor = btn_color;
    }
    inputFormGroup.appendChild(inputField);
    button.appendChild(inputFormGroup);
    // create privacy text
    return button;
}
exports.createButton = createButton;


/***/ }),

/***/ "./src/ui/ui-helpers/createForm.ts":
/*!*****************************************!*\
  !*** ./src/ui/ui-helpers/createForm.ts ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createForm = void 0;
// if type is login then return login form and if type is pin return form to enter code
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createForm(config, id, type) {
    var localization = config.localization, btn_color = config.btn_color;
    var _a = localization.login, button = _a.button, input = _a.input, footer = _a.footer;
    var form = document.createElement('form');
    form.id = id;
    // Create input form group
    var inputFormGroup = document.createElement('div');
    inputFormGroup.classList.add('form-group');
    var inputField = document.createElement('input');
    ;
    inputField.type = 'email';
    inputField.required = true;
    inputField.name = 'email';
    inputField.id = 'mojoauth-passwordless-email';
    inputField.placeholder = input.placeholder;
    inputFormGroup.appendChild(inputField);
    form.appendChild(inputFormGroup);
    // create login button
    var btnFormGroup = document.createElement('div');
    btnFormGroup.classList.add('form-group');
    var btn = document.createElement('input');
    btn.type = 'submit';
    btn.value = button.text;
    // customize button background color
    btn.style.backgroundColor = btn_color;
    btnFormGroup.appendChild(btn);
    form.appendChild(btnFormGroup);
    // create privacy text
    var privacyPara = document.createElement('p');
    privacyPara.innerText = "" + footer;
    form.appendChild(privacyPara);
    return form;
}
exports.createForm = createForm;


/***/ }),

/***/ "./src/ui/ui-helpers/createLoader.ts":
/*!*******************************************!*\
  !*** ./src/ui/ui-helpers/createLoader.ts ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createLoader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createLoader = void 0;
var defaults_1 = __webpack_require__(/*! ../../defaults */ "./src/defaults.ts");
function createLoader() {
    var loginContainer = document.getElementById(defaults_1.Defaults.loginFormContainer);
    var loginForm = document.getElementById(defaults_1.Defaults.loginFormId);
    var brandFooter = document.getElementById(defaults_1.Defaults.brandFooterId);
    if (!loginContainer)
        return;
    if (loginForm) {
        loginContainer.removeChild(loginForm);
    }
    var loadingDiv = document.createElement('div');
    loadingDiv.classList.add('mojoauth--loader');
    loginContainer.insertBefore(loadingDiv, brandFooter);
}
exports.createLoader = createLoader;


/***/ }),

/***/ "./src/ui/ui-helpers/createOTPVerificationPage.ts":
/*!********************************************************!*\
  !*** ./src/ui/ui-helpers/createOTPVerificationPage.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createOTPVerificationPage = void 0;
var defaults_1 = __webpack_require__(/*! ../../defaults */ "./src/defaults.ts");
var createBrandFooter_1 = __webpack_require__(/*! ./createBrandFooter */ "./src/ui/ui-helpers/createBrandFooter.ts");
var verifyEmailOTP_1 = __webpack_require__(/*! ../../api/verifyEmailOTP */ "./src/api/verifyEmailOTP.ts");
__webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");
/**
 *
 * @param type what type of OTP verification, email or phone
 * @param value email or phone number which user entered
 * @returns void
 * @description This method is used to create OTP verification UI for both email and phone.
 */
function createOTPVerificationPage(_a) {
    var _this = this;
    var _b = _a.type, type = _b === void 0 ? 'email' : _b, state_id = _a.state_id, value = _a.value, apikey = _a.apikey, callback = _a.callback, projectConfig = _a.projectConfig;
    // const projectConfig = await getProjectConfig();
    var OTPSubmitHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var mojoauthPinContainer, inputElements, otp, response, errorMessage, otpRow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mojoauthPinContainer = document.querySelector('.mojoauth-otp-verification');
                    inputElements = mojoauthPinContainer.querySelectorAll('input');
                    otp = '';
                    inputElements.forEach(function (input) { return (otp += input.value); });
                    return [4 /*yield*/, verifyEmailOTP_1.verifyEmailOTP(apikey, state_id, otp)];
                case 1:
                    response = _a.sent();
                    if (response.error_code) {
                        errorMessage = document.createElement('p');
                        errorMessage.className = 'error';
                        errorMessage.textContent = "" + projectConfig.data.localization.magic_otp.error_text;
                        otpRow = document.querySelector('.mojoauth-otp-verification');
                        otpRow.parentNode.insertBefore(errorMessage, otpRow.nextSibling);
                        return [2 /*return*/];
                    }
                    callback(response);
                    return [2 /*return*/];
            }
        });
    }); };
    var rootContainerId = defaults_1.Defaults.rootContainer;
    var loginFormId = defaults_1.Defaults.loginFormContainer;
    var otpVerificationId = defaults_1.Defaults.otpVerificationId;
    var container = document.getElementById(rootContainerId);
    if (!container) {
        console.error('HTML container not in the DOM');
        return;
    }
    var loginFormContainer = document.getElementById(loginFormId);
    if (loginFormContainer) {
        container.removeChild(loginFormContainer);
    }
    // create otp verification UI
    var OTPVerificationContainer = document.createElement('div');
    OTPVerificationContainer.id = otpVerificationId;
    OTPVerificationContainer.classList.add('mojoauth--card', 'mojoauth--shadow', 'text-center', 'mojoauth--v-center');
    OTPVerificationContainer.innerHTML = "<p>" + projectConfig.data.localization.magic_otp.title_text + " " + value + "</p>";
    // crate input pin rows
    var mojoauthPinForm = createPinBoxes(6);
    mojoauthPinForm.className = 'mojoauth-otp-verification';
    OTPVerificationContainer.appendChild(mojoauthPinForm);
    // create submit button
    var submit = document.createElement('input');
    submit.type = 'button';
    submit.value = "" + projectConfig.data.localization.magic_otp.button.text;
    submit.id = 'otp-submit-button';
    OTPVerificationContainer.appendChild(submit);
    // Add brand footer
    OTPVerificationContainer.appendChild(createBrandFooter_1.createBrandFooter());
    container.appendChild(OTPVerificationContainer);
    // add submit handler
    document
        .getElementById('otp-submit-button')
        .addEventListener('click', OTPSubmitHandler);
}
exports.createOTPVerificationPage = createOTPVerificationPage;
function setAutoFocus(e, prev, next) {
    var regex = new RegExp(/^\d+$/);
    if (!regex.test(e.target.value)) {
        // make value empty if non numeric value entered
        e.target.value = '';
    }
    if (prev && (e.code === 'Backspace' || e.code === 'Delete')) {
        e.target.blur();
        document.getElementById(prev).focus();
        return;
    }
    if (next && regex.test(e.target.value)) {
        document.getElementById(next).focus();
    }
}
function createPinBoxes(total) {
    var div = document.createElement('div');
    var _loop_1 = function (i) {
        var inputGroup = document.createElement('div');
        inputGroup.className = 'form-group';
        var input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'pin_input';
        input.id = "pin" + i;
        input.inputMode = 'numeric';
        var next = "pin" + (i + 1);
        var prev = "pin" + (i - 1);
        input.addEventListener('keyup', function (e) {
            if (i === total - 1)
                next = null;
            if (i === 0)
                prev = null;
            setAutoFocus(e, prev, next);
        });
        inputGroup.appendChild(input);
        div.appendChild(inputGroup);
    };
    for (var i = 0; i < total; i++) {
        _loop_1(i);
    }
    return div;
}


/***/ }),

/***/ "./src/ui/ui-helpers/createPostMagicLinkLoginPage.ts":
/*!***********************************************************!*\
  !*** ./src/ui/ui-helpers/createPostMagicLinkLoginPage.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPostMagicLinkLoginPage = void 0;
var defaults_1 = __webpack_require__(/*! ../../defaults */ "./src/defaults.ts");
var svgIcons_1 = __webpack_require__(/*! ../../helpers/svgIcons */ "./src/helpers/svgIcons.ts");
var createBrandFooter_1 = __webpack_require__(/*! ./createBrandFooter */ "./src/ui/ui-helpers/createBrandFooter.ts");
__webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");
var resendEmail_1 = __webpack_require__(/*! ../../api/resendEmail */ "./src/api/resendEmail.ts");
var createLoader_1 = __webpack_require__(/*! ./createLoader */ "./src/ui/ui-helpers/createLoader.ts");
function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    var minutes = Math.floor(time / 60);
    // Seconds are the remainder of the time divided by 60 (modulus operator)
    var seconds = time % 60;
    // If the value of seconds is less than 10, then display seconds with a leading zero
    // The output in MM:SS format
    return (minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + (seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}
function createPostMagicLinkLoginPage(apikey, email, state_id, projectConfig) {
    var rootContainerId = defaults_1.Defaults.rootContainer;
    var loginFormId = defaults_1.Defaults.loginFormContainer;
    var postLoginId = defaults_1.Defaults.postLoginContainerId;
    var container = document.getElementById(rootContainerId);
    if (!container) {
        console.error('HTML container not in the DOM');
        return;
    }
    var loginFormContainer = document.getElementById(loginFormId);
    if (loginFormContainer) {
        container.removeChild(loginFormContainer);
    }
    var resendButtonDiv = document.createElement('div');
    var postLoginContainer = document.createElement('div');
    postLoginContainer.id = postLoginId;
    postLoginContainer.classList.add('mojoauth--card', 'mojoauth--shadow', 'text-center', 'mojoauth--v-center');
    postLoginContainer.innerHTML = "\n\t<p class=\"warning bold\" >" + projectConfig.data.localization.verification.help_text + "</p>\n\t<p class=\"warning\">" + projectConfig.data.localization.verification.help_subtext + "</p>\n\t\t<div class=\"logo\">\n\t\t\t" + svgIcons_1.mailIcon + "\n\t\t</div>\n\t\t<div class=\"title\">" + projectConfig.data.localization.verification.heading + "</div>\n\t\t<div class=\"subtitle\">\n\t\t\t" + projectConfig.data.localization.verification.sub_heading + " " + email + ".\n\t\t</div>\n  ";
    var buttonName = "" + projectConfig.data.localization.verification.button.resend;
    var ResendMailLink = document.createElement('input');
    ResendMailLink.classList.add('resend-link');
    ResendMailLink.id = "resend";
    ResendMailLink.type = 'submit';
    ResendMailLink.name = 'submit';
    ResendMailLink.value = buttonName;
    ResendMailLink.style.color = projectConfig.data.btn_color;
    // ResendMailButton.disabled="true";
    // setTimeout(function(){ResendMailButton.disabled = false;},10000);
    postLoginContainer.appendChild(ResendMailLink);
    postLoginContainer.appendChild(createBrandFooter_1.createBrandFooter());
    container.appendChild(postLoginContainer);
    function startTimer() {
        var TIME_LIMIT = 30;
        var timeLeft = TIME_LIMIT;
        var timerInterval = null;
        var timePassed = 0;
        timerInterval = setInterval(function () {
            // The amount of time passed increments by one
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            // The time left label is updated
            if (timeLeft > 0) {
                document.getElementById('resend').value = " " + projectConfig.data.localization.verification.button.resend_again + " " + formatTimeLeft(timeLeft) + " ";
            }
        }, 1000);
    }
    document.getElementById('resend').disabled = true;
    document.getElementById('resend').style.color = 'grey';
    document.getElementById('resend').classList.add('disabled');
    startTimer();
    setTimeout(function () {
        document.getElementById('resend').disabled = false;
        document.getElementById('resend').style.color = projectConfig.data.btn_color;
        document.getElementById('resend').classList.remove('disabled');
        document.getElementById('resend').value = "" + projectConfig.data.localization.verification.button.resend;
    }, 30000);
    var promise = new Promise(function (resolve, reject) {
        var _this = this;
        ResendMailLink.onclick = function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        createLoader_1.createLoader();
                        document.getElementById('resend').disabled = true;
                        document.getElementById('resend').style.color = 'grey';
                        document.getElementById('resend').classList.add('disabled');
                        startTimer();
                        return [4 /*yield*/, resendEmail_1.resendEmail(apikey, state_id)];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            document.getElementById('resend').disabled = false;
                            document.getElementById('resend').style.color = projectConfig.data.btn_color;
                            document.getElementById('resend').classList.remove('disabled');
                            document.getElementById('resend').value = "" + projectConfig.data.localization.verification.button.resend;
                        }, 30000);
                        return [2 /*return*/];
                }
            });
        }); };
    });
    return promise;
}
exports.createPostMagicLinkLoginPage = createPostMagicLinkLoginPage;


/***/ }),

/***/ "./src/ui/webauthn.ts/enableWebauthn.ts":
/*!**********************************************!*\
  !*** ./src/ui/webauthn.ts/enableWebauthn.ts ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enableWebauthn = void 0;
var registerationBegin_1 = __webpack_require__(/*! ../../api/registerationBegin */ "./src/api/registerationBegin.ts");
var registerationComplete_1 = __webpack_require__(/*! ../../api/registerationComplete */ "./src/api/registerationComplete.ts");
function enableWebauthn(access_token) {
    return __awaiter(this, void 0, Promise, function () {
        //api hit registeration begin
        function bufferDecode(value) {
            return Uint8Array.from(atob(value), function (c) { return c.charCodeAt(0); });
        }
        function bufferEncode(value) {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(value)))
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=/g, "");
            ;
        }
        var apikey, options, state_id, _i, _a, cred_1, cred, credential, clientDataJSON, attestationObject, promise;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    apikey = this.apikey;
                    return [4 /*yield*/, registerationBegin_1.registerationBegin(apikey, access_token)];
                case 1:
                    options = _b.sent();
                    state_id = options.state_id;
                    options.publicKey.user.id = bufferDecode(options.publicKey.user.id);
                    options.publicKey.challenge = bufferDecode(options.publicKey.challenge);
                    if (options.publicKey.excludeCredentials) {
                        for (_i = 0, _a = options.publicKey.excludeCredentials; _i < _a.length; _i++) {
                            cred_1 = _a[_i];
                            cred_1.id = bufferDecode(cred_1.id);
                        }
                    }
                    return [4 /*yield*/, navigator.credentials.create({
                            publicKey: options.publicKey
                        })];
                case 2:
                    cred = _b.sent();
                    credential = { id: null, rawId: null, type: null, response: null };
                    credential.id = cred.id;
                    credential.rawId = bufferEncode(cred.rawId);
                    credential.type = cred.type;
                    if (cred.response) {
                        clientDataJSON = bufferEncode(cred.response.clientDataJSON);
                        attestationObject = bufferEncode(cred.response.attestationObject);
                        credential.response = {
                            clientDataJSON: clientDataJSON,
                            attestationObject: attestationObject
                        };
                    }
                    localStorage.setItem("credId", credential.id);
                    promise = new Promise(function (resolve, reject) {
                        resolve(registerationComplete_1.registerationComplete(apikey, access_token, state_id, credential.id, credential.rawId, credential.type, credential.response.attestationObject, credential.response.clientDataJSON));
                    });
                    return [2 /*return*/, promise];
            }
        });
    });
}
exports.enableWebauthn = enableWebauthn;


/***/ }),

/***/ "./src/ui/webauthn.ts/login.ts":
/*!*************************************!*\
  !*** ./src/ui/webauthn.ts/login.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authenticate = void 0;
var loginBegin_1 = __webpack_require__(/*! ../../api/loginBegin */ "./src/api/loginBegin.ts");
var loginComplete_1 = __webpack_require__(/*! ../../api/loginComplete */ "./src/api/loginComplete.ts");
var authenticate = function (apikey, email) { return __awaiter(void 0, void 0, void 0, function () {
    //api hit login begin 
    function bufferDecode(value) {
        return Uint8Array.from(atob(value), function (c) { return c.charCodeAt(0); });
    }
    function bufferEncode(value) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(value)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
        ;
    }
    var options, state_id, _i, _a, cred_1, cred, credential, clientDataJSON, authenticatorData, signature, userHandle, promise;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, loginBegin_1.loginBegin(apikey, email)];
            case 1:
                options = _b.sent();
                state_id = options.state_id;
                if (options.publicKey.allowCredentials.length === 0) {
                    console.info('No registered credentials found.');
                    return [2 /*return*/, Promise.resolve(null)];
                }
                options.publicKey.challenge = bufferDecode(options.publicKey.challenge);
                for (_i = 0, _a = options.publicKey.allowCredentials; _i < _a.length; _i++) {
                    cred_1 = _a[_i];
                    cred_1.id = bufferDecode(cred_1.id);
                }
                return [4 /*yield*/, navigator.credentials.get({
                        publicKey: options.publicKey
                    })];
            case 2:
                cred = _b.sent();
                credential = { id: null, rawId: null, type: null, response: null };
                credential.id = cred.id;
                credential.type = cred.type;
                credential.rawId = bufferEncode(cred.rawId);
                if (cred.response) {
                    clientDataJSON = bufferEncode(cred.response.clientDataJSON);
                    authenticatorData = bufferEncode(cred.response.authenticatorData);
                    signature = bufferEncode(cred.response.signature);
                    userHandle = bufferEncode(cred.response.userHandle);
                    credential.response = {
                        clientDataJSON: clientDataJSON,
                        authenticatorData: authenticatorData,
                        signature: signature,
                        userHandle: userHandle,
                    };
                }
                promise = new Promise(function (resolve, reject) {
                    resolve(loginComplete_1.loginComplete(apikey, email, state_id, credential.id, credential.rawId, credential.type, credential.response.authenticatorData, credential.response.clientDataJSON, credential.response.signature, credential.response.userHandle));
                });
                return [2 /*return*/, promise];
        }
    });
}); };
exports.authenticate = authenticate;


/***/ }),

/***/ "./src/ui/webauthn.ts/register.ts":
/*!****************************************!*\
  !*** ./src/ui/webauthn.ts/register.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerCredential = void 0;
var registerationBegin_1 = __webpack_require__(/*! ../../api/registerationBegin */ "./src/api/registerationBegin.ts");
var registerationComplete_1 = __webpack_require__(/*! ../../api/registerationComplete */ "./src/api/registerationComplete.ts");
function registerCredential(apikey, email, access_token) {
    return __awaiter(this, void 0, Promise, function () {
        //api hit registeration begin
        function bufferDecode(value) {
            return Uint8Array.from(atob(value), function (c) { return c.charCodeAt(0); });
        }
        function bufferEncode(value) {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(value)))
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=/g, "");
            ;
        }
        var options, state_id, _i, _a, cred_1, cred, credential, clientDataJSON, attestationObject, promise;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, registerationBegin_1.registerationBegin(apikey, access_token)];
                case 1:
                    options = _b.sent();
                    console.log(options);
                    state_id = options.state_id;
                    options.publicKey.user.id = bufferDecode(options.publicKey.user.id);
                    options.publicKey.challenge = bufferDecode(options.publicKey.challenge);
                    if (options.publicKey.excludeCredentials) {
                        for (_i = 0, _a = options.publicKey.excludeCredentials; _i < _a.length; _i++) {
                            cred_1 = _a[_i];
                            cred_1.id = bufferDecode(cred_1.id);
                        }
                    }
                    return [4 /*yield*/, navigator.credentials.create({
                            publicKey: options.publicKey
                        })];
                case 2:
                    cred = _b.sent();
                    credential = { id: null, rawId: null, type: null, response: null };
                    credential.id = cred.id;
                    credential.rawId = bufferEncode(cred.rawId);
                    credential.type = cred.type;
                    if (cred.response) {
                        clientDataJSON = bufferEncode(cred.response.clientDataJSON);
                        attestationObject = bufferEncode(cred.response.attestationObject);
                        credential.response = {
                            clientDataJSON: clientDataJSON,
                            attestationObject: attestationObject
                        };
                    }
                    localStorage.setItem("credId", credential.id);
                    promise = new Promise(function (resolve, reject) {
                        resolve(registerationComplete_1.registerationComplete(apikey, access_token, state_id, credential.id, credential.rawId, credential.type, credential.response.attestationObject, credential.response.clientDataJSON));
                    });
                    return [2 /*return*/, promise];
            }
        });
    });
}
exports.registerCredential = registerCredential;


/***/ }),

/***/ "./src/ui/webauthn.ts/registerPage.ts":
/*!********************************************!*\
  !*** ./src/ui/webauthn.ts/registerPage.ts ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webauthnRegister = void 0;
var register_1 = __webpack_require__(/*! ./register */ "./src/ui/webauthn.ts/register.ts");
var defaults_1 = __webpack_require__(/*! ../../defaults */ "./src/defaults.ts");
var common_1 = __webpack_require__(/*! ../../helpers/common */ "./src/helpers/common.ts");
var createBrandFooter_1 = __webpack_require__(/*! ../ui-helpers/createBrandFooter */ "./src/ui/ui-helpers/createBrandFooter.ts");
var createButton_1 = __webpack_require__(/*! ../ui-helpers/createButton */ "./src/ui/ui-helpers/createButton.ts");
function webauthnRegister(apikey, email, check, projectConfig, access_token, state_id) {
    return __awaiter(this, void 0, Promise, function () {
        var rootContainerId, loginFormId, postLoginId, container, loginFormContainer, postLoginContainer, loginButtonContainer, formTitle, formSubTitle, buttonName, skipButton, webauthnButton, promise;
        return __generator(this, function (_a) {
            rootContainerId = defaults_1.Defaults.rootContainer;
            loginFormId = defaults_1.Defaults.loginFormContainer;
            postLoginId = defaults_1.Defaults.postLoginContainerId;
            container = document.getElementById(rootContainerId);
            if (!container) {
                console.error('HTML container not in the DOM');
                return [2 /*return*/];
            }
            // add new font on the root container and add styles
            container.style.fontFamily = projectConfig.font.family;
            if (projectConfig.font.url) {
                common_1.addStyles(projectConfig.font.url);
            }
            loginFormContainer = document.getElementById(loginFormId);
            if (loginFormContainer) {
                container.removeChild(loginFormContainer);
            }
            postLoginContainer = document.getElementById(postLoginId);
            if (postLoginContainer) {
                container.removeChild(postLoginContainer);
            }
            loginButtonContainer = document.createElement('div');
            loginButtonContainer.id = loginFormId;
            loginButtonContainer.classList.add('mojoauth--card', 'mojoauth--shadow', 'mojoauth--v-center');
            formTitle = document.createElement('div');
            formTitle.classList.add('title');
            formTitle.textContent = "" + projectConfig.localization.webauthn_page.title_text;
            loginButtonContainer.appendChild(formTitle);
            formSubTitle = document.createElement('div');
            formSubTitle.classList.add('subtitle');
            formSubTitle.textContent = "" + projectConfig.localization.webauthn_page.sub_title_text;
            loginButtonContainer.appendChild(formSubTitle);
            buttonName = "" + projectConfig.localization.webauthn_page.button1.text;
            skipButton = createButton_1.createButton(projectConfig, defaults_1.Defaults.loginFormId, buttonName);
            buttonName = "" + projectConfig.localization.webauthn_page.button2.text;
            webauthnButton = createButton_1.createButton(projectConfig, defaults_1.Defaults.loginFormId, buttonName);
            loginButtonContainer.appendChild(webauthnButton);
            loginButtonContainer.appendChild(skipButton);
            container.appendChild(loginButtonContainer);
            // Step 5: Add brand footer
            loginButtonContainer.appendChild(createBrandFooter_1.createBrandFooter());
            promise = new Promise(function (resolve, reject) {
                var _this = this;
                // if(check.first_login){
                skipButton.onsubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        e.preventDefault();
                        reject();
                        return [2 /*return*/];
                    });
                }); };
                // }
                // else{
                // 	skipButton.onsubmit = async (e) => {
                // 	e.preventDefault();
                // 	createLoader();
                // 	console.log("skipped")
                // 	const emailResponse = await postEmail(apikey, email);
                // 	resolve(signInWithMagicLink(apikey,email,check,emailResponse))
                // 	}
                // }
                webauthnButton.onsubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        e.preventDefault();
                        // if(check.webauthn_registered===false){
                        resolve(register_1.registerCredential(apikey, email, access_token).catch(function (error) {
                            console.log("this is webauthn error");
                            console.log(error);
                            return (webauthnRegister(apikey, email, check, projectConfig, access_token, state_id));
                        }));
                        return [2 /*return*/];
                    });
                }); };
                // else if(check.webauthn_registered===true){
                // resolve( authenticate(apikey,email) )
                // }
                // }
                // reject(webauthn(apikey,email,check,projectConfig))
            });
            return [2 /*return*/, promise];
        });
    });
}
exports.webauthnRegister = webauthnRegister;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=mojoauth.dev.js.map