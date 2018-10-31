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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_ProgramEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProgramEntry */ "./components/ProgramEntry.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
// pages/program.js





 // make the program as JSON

var prgJson = [{
  id: 0,
  title: 'title #1',
  lead: 'First Middle Namesen',
  desc: 'This is some dummy text here to the first guy here',
  link: 'https://somelink.com',
  time: '12.15 - 12.30'
}, {
  id: 1,
  title: 'title #2, the Second Title of the day!',
  lead: 'This is the name of the 2nd',
  desc: 'This is some dummy text here to the second guy here',
  link: 'https://somelinkOrOther.com',
  time: '12.30 - 12.45'
}, {
  id: 2,
  title: 'title #3',
  lead: 'This is the name #3',
  desc: 'This is some dummy text here',
  link: 'https://somelink.com',
  time: '12.45 - 13.00'
}];
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
        {prgJson.map( function(pe, i) {
          return <ProgramEntry
            key={pe.id}
            id={pe.id}
            title={pe.title}
            lead={pe.lead}
            desc={pe.desc}
            link={pe.link}
            time={pe.time}    
            />
        })}        
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
//# sourceMappingURL=program.js.dfe2df979d7385393ca2.hot-update.js.map