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
  thumb: '../static/images/resources/processing.jpg',
  name: 'Processing',
  desc: 'some short description here',
  link: 'https://processing.org/'
}, {
  thumb: '../static/images/resources/p5.jpg',
  name: 'p5.js',
  desc: 'some short description here',
  link: 'https://p5js.org/'
}, {
  thumb: '../static/images/resources/CodingTrain.jpg',
  name: 'Coding Train',
  desc: 'some short description here',
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
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        txt: "Resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "Grid Grid--gutters Grid--full large-Grid--fit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "Grid-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1234057544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "Grid-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1234057544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien eget posuere. Phasellus aliquet orci sed augue pulvinar tempor. Nullam non ipsum eget lorem ullamcorper tristique vel non leo.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "Grid-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1234057544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Cras pretium enim ac ex accumsan dapibus. Nullam luctus egestas semper. Sed rhoncus mollis est at porttitor. Sed placerat aliquet dignissim. Curabitur in tristique tortor. Fusce lorem metus, suscipit nec ante in, lobortis rutrum lacus."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        txt: "Resource links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "resourceWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, resources.map(function (re, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ResourceEntry__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: re.id,
          id: re.id,
          name: re.name,
          desc: re.desc,
          link: re.link,
          thumb: re.thumb,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        txt: "Additional resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "Grid Grid--gutters Grid--full large-Grid--fit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "Grid-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1234057544" + " " + "padlet-embed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1234057544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
        src: "https://padlet.com/embed/69nef43cadri",
        frameBorder: "0",
        allow: "camera;microphone;geolocation",
        className: "jsx-1234057544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1234057544",
        css: ".padlet-embed.jsx-1234057544{border:1px solid rgba(0,0,0,0.1);border-radius:2px;box-sizing:border-box;overflow:hidden;position:relative;width:100%;background:#F4F4F4;}.padlet-embed.jsx-1234057544 p.jsx-1234057544{padding:0;margin:0;}.padlet-embed.jsx-1234057544 iframe.jsx-1234057544{width:100%;height:608px;display:block;float:left;padding:0;margin:0;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxQQ0RfQUFSSFVTX055dERlc2lnblxccGFnZXNcXHJlc291cmNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRW9CLEFBRzhDLEFBU3hCLEFBSUMsVUFIRixDQUlLLFFBSGYsS0FJZ0IsU0FkSSxLQWVQLFdBQ0YsRUFmYSxRQWdCZCxTQUNTLEtBaEJELGFBaUJsQixHQWhCb0Isa0JBQ1AsV0FDUSxtQkFDckIiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXFBDRF9BQVJIVVNfTnl0RGVzaWduXFxwYWdlc1xccmVzb3VyY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcmVzb3VyY2VzLmpzXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSdcclxuaW1wb3J0IFJlc291cmNlRW50cnkgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNvdXJjZUVudHJ5J1xyXG5cclxuLy8gcmVzb3VyY2UgYXJyYXkgd2l0aCBpbWFnZXNcclxuY29uc3QgcmVzb3VyY2VzID0gW1xyXG4gIHtcclxuICAgIHRodW1iOiAnLi4vc3RhdGljL2ltYWdlcy9yZXNvdXJjZXMvcHJvY2Vzc2luZy5qcGcnLFxyXG4gICAgbmFtZTogJ1Byb2Nlc3NpbmcnLFxyXG4gICAgZGVzYzogJ3NvbWUgc2hvcnQgZGVzY3JpcHRpb24gaGVyZScsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9wcm9jZXNzaW5nLm9yZy8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHVtYjogJy4uL3N0YXRpYy9pbWFnZXMvcmVzb3VyY2VzL3A1LmpwZycsXHJcbiAgICBuYW1lOiAncDUuanMnLFxyXG4gICAgZGVzYzogJ3NvbWUgc2hvcnQgZGVzY3JpcHRpb24gaGVyZScsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9wNWpzLm9yZy8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHVtYjogJy4uL3N0YXRpYy9pbWFnZXMvcmVzb3VyY2VzL0NvZGluZ1RyYWluLmpwZycsXHJcbiAgICBuYW1lOiAnQ29kaW5nIFRyYWluJyxcclxuICAgIGRlc2M6ICdzb21lIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUN2amdYdkJsYlFpeWRmZlpVN20xX2F3JyAvLyB5b3V0dWJlXHJcbiAgfVxyXG5dO1xyXG5cclxuY2xhc3MgUHJvZ3JhbSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIHNvbWUgY29kZSBoZXJlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxUaXRsZSB0eHQ9XCJSZXNvdXJjZXNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZCBHcmlkLS1ndXR0ZXJzIEdyaWQtLWZ1bGwgbGFyZ2UtR3JpZC0tZml0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWQtY2VsbFwiPlxyXG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGNvbnNlcXVhdCBpbXBlcmRpZXQgc2FwaWVuIGVnZXQgcG9zdWVyZS4gUGhhc2VsbHVzIGFsaXF1ZXQgb3JjaSBzZWQgYXVndWUgcHVsdmluYXIgdGVtcG9yLiBOdWxsYW0gbm9uIGlwc3VtIGVnZXQgbG9yZW0gdWxsYW1jb3JwZXIgdHJpc3RpcXVlIHZlbCBub24gbGVvLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHcmlkLWNlbGxcIj5cclxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBjb25zZXF1YXQgaW1wZXJkaWV0IHNhcGllbiBlZ2V0IHBvc3VlcmUuIFBoYXNlbGx1cyBhbGlxdWV0IG9yY2kgc2VkIGF1Z3VlIHB1bHZpbmFyIHRlbXBvci4gTnVsbGFtIG5vbiBpcHN1bSBlZ2V0IGxvcmVtIHVsbGFtY29ycGVyIHRyaXN0aXF1ZSB2ZWwgbm9uIGxlby48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZC1jZWxsXCI+XHJcbiAgICAgICAgICAgIDxwPkNyYXMgcHJldGl1bSBlbmltIGFjIGV4IGFjY3Vtc2FuIGRhcGlidXMuIE51bGxhbSBsdWN0dXMgZWdlc3RhcyBzZW1wZXIuIFNlZCByaG9uY3VzIG1vbGxpcyBlc3QgYXQgcG9ydHRpdG9yLiBTZWQgcGxhY2VyYXQgYWxpcXVldCBkaWduaXNzaW0uIEN1cmFiaXR1ciBpbiB0cmlzdGlxdWUgdG9ydG9yLiBGdXNjZSBsb3JlbSBtZXR1cywgc3VzY2lwaXQgbmVjIGFudGUgaW4sIGxvYm9ydGlzIHJ1dHJ1bSBsYWN1cy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VGl0bGUgdHh0PVwiUmVzb3VyY2UgbGlua3NcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzb3VyY2VXcmFwcGVyXCI+XHJcbiAgICAgICAgICB7cmVzb3VyY2VzLm1hcCggZnVuY3Rpb24ocmUsIGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZXNvdXJjZUVudHJ5XHJcbiAgICAgICAgICAgICAga2V5PXtyZS5pZH1cclxuICAgICAgICAgICAgICBpZD17cmUuaWR9XHJcbiAgICAgICAgICAgICAgbmFtZT17cmUubmFtZX1cclxuICAgICAgICAgICAgICBkZXNjPXtyZS5kZXNjfVxyXG4gICAgICAgICAgICAgIGxpbms9e3JlLmxpbmt9XHJcbiAgICAgICAgICAgICAgdGh1bWI9e3JlLnRodW1ifSAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRpdGxlIHR4dD1cIkFkZGl0aW9uYWwgcmVzb3VyY2VzXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWQgR3JpZC0tZ3V0dGVycyBHcmlkLS1mdWxsIGxhcmdlLUdyaWQtLWZpdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHcmlkLWNlbGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRsZXQtZW1iZWRcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wYWRsZXQuY29tL2VtYmVkLzY5bmVmNDNjYWRyaVwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiY2FtZXJhO21pY3JvcGhvbmU7Z2VvbG9jYXRpb25cIj48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnBhZGxldC1lbWJlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZGxldC1lbWJlZCBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWRsZXQtZW1iZWQgaWZyYW1lIHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbSJdfQ== */\n/*@ sourceURL=C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\resources.js */",
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
//# sourceMappingURL=resources.js.d943106bb4f74b54cdf1.hot-update.js.map