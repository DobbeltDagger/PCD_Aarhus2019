webpackHotUpdate("static\\development\\pages\\resources.js",{

/***/ "./pages/resources.js":
/*!****************************!*\
  !*** ./pages/resources.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var _components_ResourceEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResourceEntry */ "./components/ResourceEntry.js");
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\resources.js";



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
  desc: 'some short description here',
  link: 'https://processing.org/'
}, {
  id: 1,
  thumb: '../static/images/resources/p5.jpg',
  name: 'p5.js',
  desc: 'p5.js a JS client-side library for creating graphic and interactive experiences, based on the core principles of Processing',
  link: 'https://p5js.org/'
}, {
  id: 2,
  thumb: '../static/images/resources/CodingTrain.jpg',
  name: 'Coding Train',
  desc: 'A YouTube channel dedicated to beginner-friendly creative coding tutorials and challenges',
  link: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw' // youtube

}];

var Program =
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        txt: "Resource links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "resourceWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, resources.map(function (re, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ResourceEntry__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: re.id,
          name: re.name,
          desc: re.desc,
          link: re.link,
          thumb: re.thumb,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1172490371",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        txt: "Additional resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "Grid Grid--gutters Grid--full large-Grid--fit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "Grid-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1172490371" + " " + "padlet-embed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1172490371",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
        src: "https://padlet.com/embed/69nef43cadri",
        frameBorder: "0",
        allow: "camera;microphone;geolocation",
        className: "jsx-1172490371",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1172490371",
        css: ".padlet-embed.jsx-1172490371{border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden;position:relative;width:100%;background:#F4F4F4;}.padlet-embed.jsx-1172490371 p.jsx-1172490371{padding:0;margin:0;}.padlet-embed.jsx-1172490371 iframe.jsx-1172490371{width:100%;height:608px;display:block;float:left;padding:0;margin:0;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxQQ0RfQUFSSFVTX055dERlc2lnblxccGFnZXNcXHJlc291cmNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBRytCLEFBVVIsQUFJQSxVQUhELENBSUksT0FkaUIsQ0FXaEMsS0FJZ0IsY0FDSCxVQWZnQixDQWdCbEIsVUFDRCxTQUNTLE9BakJLLFdBa0J4QixXQWpCa0IsZ0JBQ0Usa0JBQ1AsV0FDUSxtQkFDckIiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXFBDRF9BQVJIVVNfTnl0RGVzaWduXFxwYWdlc1xccmVzb3VyY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcmVzb3VyY2VzLmpzXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSdcclxuaW1wb3J0IFJlc291cmNlRW50cnkgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNvdXJjZUVudHJ5J1xyXG5cclxuLy8gcmVzb3VyY2UgYXJyYXkgd2l0aCBpbWFnZXNcclxuY29uc3QgcmVzb3VyY2VzID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGh1bWI6ICcuLi9zdGF0aWMvaW1hZ2VzL3Jlc291cmNlcy9wcm9jZXNzaW5nLmpwZycsXHJcbiAgICBuYW1lOiAnUHJvY2Vzc2luZycsXHJcbiAgICBkZXNjOiAnc29tZSBzaG9ydCBkZXNjcmlwdGlvbiBoZXJlJyxcclxuICAgIGxpbms6ICdodHRwczovL3Byb2Nlc3Npbmcub3JnLydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGh1bWI6ICcuLi9zdGF0aWMvaW1hZ2VzL3Jlc291cmNlcy9wNS5qcGcnLFxyXG4gICAgbmFtZTogJ3A1LmpzJyxcclxuICAgIGRlc2M6ICdwNS5qcyBhIEpTIGNsaWVudC1zaWRlIGxpYnJhcnkgZm9yIGNyZWF0aW5nIGdyYXBoaWMgYW5kIGludGVyYWN0aXZlIGV4cGVyaWVuY2VzLCBiYXNlZCBvbiB0aGUgY29yZSBwcmluY2lwbGVzIG9mIFByb2Nlc3NpbmcnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcDVqcy5vcmcvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aHVtYjogJy4uL3N0YXRpYy9pbWFnZXMvcmVzb3VyY2VzL0NvZGluZ1RyYWluLmpwZycsXHJcbiAgICBuYW1lOiAnQ29kaW5nIFRyYWluJyxcclxuICAgIGRlc2M6ICdBIFlvdVR1YmUgY2hhbm5lbCBkZWRpY2F0ZWQgdG8gYmVnaW5uZXItZnJpZW5kbHkgY3JlYXRpdmUgY29kaW5nIHR1dG9yaWFscyBhbmQgY2hhbGxlbmdlcycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3ZqZ1h2QmxiUWl5ZGZmWlU3bTFfYXcnIC8vIHlvdXR1YmVcclxuICB9XHJcbl07XHJcblxyXG5jbGFzcyBQcm9ncmFtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gc29tZSBjb2RlIGhlcmVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFRpdGxlIHR4dD1cIlJlc291cmNlIGxpbmtzXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc291cmNlV3JhcHBlclwiPlxyXG4gICAgICAgICAge3Jlc291cmNlcy5tYXAoIGZ1bmN0aW9uKHJlLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVzb3VyY2VFbnRyeVxyXG4gICAgICAgICAgICAgIGlkPXtyZS5pZH1cclxuICAgICAgICAgICAgICBuYW1lPXtyZS5uYW1lfVxyXG4gICAgICAgICAgICAgIGRlc2M9e3JlLmRlc2N9XHJcbiAgICAgICAgICAgICAgbGluaz17cmUubGlua31cclxuICAgICAgICAgICAgICB0aHVtYj17cmUudGh1bWJ9ICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxUaXRsZSB0eHQ9XCJBZGRpdGlvbmFsIHJlc291cmNlc1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHcmlkIEdyaWQtLWd1dHRlcnMgR3JpZC0tZnVsbCBsYXJnZS1HcmlkLS1maXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZC1jZWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkbGV0LWVtYmVkXCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vcGFkbGV0LmNvbS9lbWJlZC82OW5lZjQzY2FkcmlcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImNhbWVyYTttaWNyb3Bob25lO2dlb2xvY2F0aW9uXCI+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5wYWRsZXQtZW1iZWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZGxldC1lbWJlZCBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZGxldC1lbWJlZCBpZnJhbWUge1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtIl19 */\n/*@ sourceURL=C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\resources.js */",
        __self: this
      }));
    }
  }]);

  return Program;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Program);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/resources")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=resources.js.1e99ef67c55b9c22d779.hot-update.js.map