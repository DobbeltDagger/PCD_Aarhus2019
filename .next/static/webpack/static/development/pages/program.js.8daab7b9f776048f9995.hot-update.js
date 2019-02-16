webpackHotUpdate("static\\development\\pages\\program.js",{

/***/ "./pages/program.js":
/*!**************************!*\
  !*** ./pages/program.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_ProgramEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProgramEntry */ "./components/ProgramEntry.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\program.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// pages/program.js




 // make the program as JSON

var prgJson = [{
  id: 0,
  time: '11.00 – 11.10',
  title: 'Introduction',
  lead: 'by PCD organizers'
}, {
  id: 1,
  time: '11.15 – 11.30',
  title: 'p5.js (video)',
  lead: 'by Lauren Lee McCarthy'
}, {
  id: 2,
  time: '11.35 – 11.50',
  title: 'Learning or mimicry? On mimetic bots and developmental robopsychology',
  lead: 'by Malthe Stavning Erslev'
}, {
  id: 3,
  time: '11.55 – 12.10',
  title: 'Object awareness',
  lead: 'by Ester Marie Aagard'
}, {
  id: 4,
  time: '12.15 – 12.30',
  title: 'i[x]',
  lead: 'by Alex Mørch'
}, {
  id: 5,
  time: '12.35 – 12.50',
  title: 'Turmites',
  lead: 'by Tobias Stenberg Christensen & Anders Visti'
}, {
  id: 6,
  time: '12.50 – 13.20',
  title: 'LUNCH BREAK',
  lead: ''
}, {
  id: 7,
  time: '13.20 – 13.35',
  title: 'Introducing Code in Graphic Design Education',
  lead: 'by Stig Møller Hansen'
}, {
  id: 8,
  time: '13.40 – 13.55',
  title: 'Who are YOU?',
  lead: 'by Ann Karring'
}, {
  id: 9,
  time: '14.00 – 14.15',
  title: 'Numbers, Networks, Noise',
  lead: 'by Andreja Andric & Anders Visti'
}, {
  id: 10,
  time: '14.20 – 14.35',
  title: 'Data Erasure — The Act of Forgetting',
  lead: 'by Tilde Lageri Damborg'
}, {
  id: 11,
  time: '14.40 – 14.55',
  title: 'Vocable Code',
  lead: 'by Winnie Soon'
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        txt: "Program",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), prgJson.map(function (pe, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProgramEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: pe.id,
          title: pe.title,
          lead: pe.lead,
          time: pe.time,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "11.30 \u2013 15.30", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), "[Code & Share]\xA0\xA0\xA0Presenters and audiences hang out together  to discuss presentations and share code"));
    }
  }]);

  return Program;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/*
class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // some code here
    return (
      <Layout>
        <Title txt="Program" />
        <p>To be announced ...</p>
        <p>Presenters so far:<br/>
        Ester Marie Aagard<br/>
        Andreja Andric<br/>
        Tobias Stenberg Christensen<br/>
        Malthe Stavning Erslev<br/>
        Stig Møller Hansen<br/>
        Ann Karring<br/>
        Tilde LD<br/>
        Lauren Lee McCarthy<br/>
        Alex Mørch<br/>
        Anders Visti<br/>
        </p>
      </Layout>
    )
  }
}
*/


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/program")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=program.js.8daab7b9f776048f9995.hot-update.js.map