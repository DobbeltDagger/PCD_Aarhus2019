module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components
var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid Grid--gutters Grid--full large-Grid--fit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.txt)));
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-responsive-navbar");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ActiveLink.js


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // from here: https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59
// Excellent

var ActiveLink = Object(router_["withRouter"])(function (_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  return external_react_default.a.createElement(link_default.a, props, external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    className: router.pathname === props.href ? "active" : null
  }));
});
/* harmony default export */ var components_ActiveLink = (ActiveLink);
// EXTERNAL MODULE: external "react-responsive-navbar"
var external_react_responsive_navbar_ = __webpack_require__(6);
var external_react_responsive_navbar_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_navbar_);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(2);

// CONCATENATED MODULE: ./components/navbar.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { FaBars, FaTimes } from 'react-icons/fa'
// import { IoIosMenu, IoIosClose } from 'react-icons/io'

 // https://www.npmjs.com/package/react-responsive-navbar

var navbar_NavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_responsive_navbar_default.a, {
        menuOpenButton: external_react_default.a.createElement(md_["MdMenu"], {
          size: 54
        }),
        menuCloseButton: external_react_default.a.createElement(md_["MdClose"], {
          size: 54
        }),
        changeMenuOn: "800px",
        largeMenuClassName: "large-menu",
        smallMenuClassName: "small-menu",
        menu: external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(components_ActiveLink, {
          href: "/program"
        }, external_react_default.a.createElement("a", {
          className: "active"
        }, "program"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(components_ActiveLink, {
          href: "/resources"
        }, external_react_default.a.createElement("a", null, "resources"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(components_ActiveLink, {
          href: "/about"
        }, external_react_default.a.createElement("a", null, "about"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(components_ActiveLink, {
          href: "/opencall"
        }, external_react_default.a.createElement("a", {
          className: "openCall"
        }, "open call"))))
      });
    }
  }]);

  return NavBar;
}(external_react_["Component"]);

/* harmony default export */ var navbar = (navbar_NavBar);
// CONCATENATED MODULE: ./components/Header.js




var Header_Header = function Header() {
  return external_react_default.a.createElement("header", null, external_react_default.a.createElement("div", {
    id: "logo"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
    src: "../static/images/pcdLogo2.png"
  })))), external_react_default.a.createElement("div", {
    id: "headerMenu"
  }, external_react_default.a.createElement(navbar, null)), external_react_default.a.createElement("div", {
    id: "info"
  }, external_react_default.a.createElement("p", null, "Processing", external_react_default.a.createElement("br", null), "Community", external_react_default.a.createElement("br", null), "Day", external_react_default.a.createElement("br", null), "Aarhus", external_react_default.a.createElement("br", null), "Saturday,", external_react_default.a.createElement("br", null), "February 9th", external_react_default.a.createElement("br", null), "11.00\u201315.30", external_react_default.a.createElement("br", null), "@DOKK1")));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/SubHeader.js




var SubHeader_SubHeader = function SubHeader() {
  return external_react_default.a.createElement("section", {
    id: "SubHeader"
  }, external_react_default.a.createElement(navbar, null));
};

/* harmony default export */ var components_SubHeader = (SubHeader_SubHeader);
// CONCATENATED MODULE: ./components/Footer.js



var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    id: "Footer"
  }, external_react_default.a.createElement("div", {
    className: "Grid Grid--gutters Grid--full large-Grid--fit"
  }, external_react_default.a.createElement("div", {
    className: "Grid-cell"
  }, external_react_default.a.createElement("div", {
    className: "bar"
  }, "\xA0"))), external_react_default.a.createElement("div", {
    className: "Grid Grid--gutters Grid--full large-Grid--fit"
  }, external_react_default.a.createElement("div", {
    className: "Grid-cell"
  }, external_react_default.a.createElement("p", null, "Processing Community Day Aarhus.", external_react_default.a.createElement("br", null), "Saturday, February 9th from 11.00\u201315.30 @DOKK1", external_react_default.a.createElement("br", null), external_react_default.a.createElement("a", {
    href: "#",
    target: "_top"
  }, "top")))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./static/css/reset.css
var css_reset = __webpack_require__(8);

// EXTERNAL MODULE: ./static/css/grid.css
var grid = __webpack_require__(9);

// EXTERNAL MODULE: ./static/css/style.css
var style = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MyLayout.js









var MyLayout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", {
    id: "pageWrapper"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Processing Community Day @ Aarhus 2019"), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "../static/images/favicon.png"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css",
    integrity: "sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==",
    crossOrigin: ""
  }), external_react_default.a.createElement("script", {
    src: "https://unpkg.com/leaflet@1.3.4/dist/leaflet.js",
    integrity: "sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==",
    crossOrigin: ""
  }), external_react_default.a.createElement("script", {
    src: "../static/js/functions.js"
  })), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(components_SubHeader, null), external_react_default.a.createElement("main", {
    id: "MainContent"
  }, external_react_default.a.createElement("div", {
    className: "maxWidth"
  }, props.children)), external_react_default.a.createElement(components_Footer, null));
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(11);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/MyLayout.js + 5 modules
var MyLayout = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(4);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/ResourceEntry.js

 // styled jsx for props in css
// https://nextjs.org/learn/basics/styling-components/no-effect-for-nested-components

var ResourceEntry_ResourceEntry = function ResourceEntry(props) {
  return external_react_default.a.createElement("div", {
    className: "resourceEntry",
    id: props.id
  }, external_react_default.a.createElement("span", {
    className: "thumb"
  }, external_react_default.a.createElement(link_default.a, {
    href: props.link
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    src: props.thumb
  })))), external_react_default.a.createElement("span", {
    className: "name"
  }, props.name), external_react_default.a.createElement("span", {
    className: "desc"
  }, props.desc));
};

/* harmony default export */ var components_ResourceEntry = (ResourceEntry_ResourceEntry);
// CONCATENATED MODULE: ./pages/resources.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// pages/resources.js




 // resource array with images

var resources = [{
  id: 0,
  thumb: '../static/images/resources/processing.jpg',
  name: 'Processing',
  desc: 'A flexible software sketchbook and a language for learning how to code within the context of the visual arts',
  link: 'https://processing.org/'
}, {
  id: 1,
  thumb: '../static/images/resources/p5.jpg',
  name: 'p5.js',
  desc: 'A javascript client-side library for creating graphic and interactive experiences, based on the core principles of Processing',
  link: 'https://p5js.org/'
}, {
  id: 2,
  thumb: '../static/images/resources/CodingTrain.jpg',
  name: 'Coding Train',
  desc: 'A YouTube channel dedicated to beginner-friendly creative coding tutorials and challenges',
  link: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw' // youtube

}];

var resources_Program =
/*#__PURE__*/
function (_Component) {
  _inherits(Program, _Component);

  function Program(props) {
    var _this;

    _classCallCheck(this, Program);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Program).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Program, [{
    key: "render",
    value: function render() {
      // some code here
      return external_react_default.a.createElement(MyLayout["a" /* default */], null, external_react_default.a.createElement(Title["a" /* default */], {
        txt: "Resource links"
      }), external_react_default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "resourceWrapper"
      }, resources.map(function (re, i) {
        return external_react_default.a.createElement(components_ResourceEntry, {
          id: re.id,
          name: re.name,
          desc: re.desc,
          link: re.link,
          thumb: re.thumb
        });
      })), external_react_default.a.createElement("br", {
        className: "jsx-1172490371"
      }), external_react_default.a.createElement(Title["a" /* default */], {
        txt: "Additional resources"
      }), external_react_default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "Grid Grid--gutters Grid--full large-Grid--fit"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "Grid-cell"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "padlet-embed"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1172490371"
      }, external_react_default.a.createElement("iframe", {
        src: "https://padlet.com/embed/69nef43cadri",
        frameBorder: "0",
        allow: "camera;microphone;geolocation",
        className: "jsx-1172490371"
      }))))), external_react_default.a.createElement(style_default.a, {
        styleId: "1172490371",
        css: [".padlet-embed.jsx-1172490371{border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden;position:relative;width:100%;background:#F4F4F4;}", ".padlet-embed.jsx-1172490371 p.jsx-1172490371{padding:0;margin:0;}", ".padlet-embed.jsx-1172490371 iframe.jsx-1172490371{width:100%;height:608px;display:block;float:left;padding:0;margin:0;overflow-x:hidden;}"]
      }));
    }
  }]);

  return Program;
}(external_react_["Component"]);

/* harmony default export */ var pages_resources = __webpack_exports__["default"] = (resources_Program);

/***/ })
/******/ ]);