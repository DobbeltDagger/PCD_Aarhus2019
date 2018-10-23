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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
var router_ = __webpack_require__(4);

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
          size: 48
        }),
        menuCloseButton: external_react_default.a.createElement(md_["MdClose"], {
          size: 48
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
    src: "../static/images/pcdLogo.png"
  })))), external_react_default.a.createElement("div", {
    id: "headerMenu"
  }, external_react_default.a.createElement(navbar, null)), external_react_default.a.createElement("div", {
    id: "info"
  }, external_react_default.a.createElement("p", null, "Processing", external_react_default.a.createElement("br", null), "Community", external_react_default.a.createElement("br", null), "Day", external_react_default.a.createElement("br", null), "Aarhus", external_react_default.a.createElement("br", null), "Sat 9th Feb", external_react_default.a.createElement("br", null), "12.00-15.30", external_react_default.a.createElement("br", null), "@DOKK1")));
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
  }, external_react_default.a.createElement("p", null, "Some stuff here .. maybe contact info and such")), external_react_default.a.createElement("div", {
    className: "Grid-cell"
  }, external_react_default.a.createElement("p", null, "Something else here: ", external_react_default.a.createElement("a", {
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




 // import "../static/css/font.css"





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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    txt: "Open Call"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid Grid--gutters Grid--full large-Grid--fit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam. Sed vitae lectus sit amet magna congue pretium.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo. Curabitur vel mauris nunc. Suspendisse non semper diam.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cras pretium enim ac ex accumsan dapibus. Nullam luctus egestas semper. Sed rhoncus mollis est at porttitor. Sed placerat aliquet dignissim. Curabitur in tristique tortor. Fusce lorem metus, suscipit nec ante in, lobortis rutrum lacus. Nunc id viverra lacus. Nulla blandit vehicula sodales. Vivamus facilisis blandit diam, in pretium leo volutpat non"))));
});

/***/ })
/******/ ]);