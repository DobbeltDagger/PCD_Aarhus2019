webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var _components_GalleryEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GalleryEntry */ "./components/GalleryEntry.js");
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\gallery.js";

// pages/about.js




var people = [{
  id: 0,
  thumb: '../static/images/people/EsterMarieAagard.jpg',
  link: '',
  newWindow: ''
}, {
  id: 1,
  thumb: '../static/images/people/AndrejaAndric.jpg',
  name: 'Andreja Andric',
  link: 'http://andrejaandric.altervista.org/',
  newWindow: '_blank'
}, {
  id: 2,
  thumb: '../static/images/people/AnnaBrynskov.jpg',
  link: 'https://vimeo.com/annabrynskov',
  newWindow: '_blank'
}, {
  id: 3,
  thumb: '../static/images/people/Tilde.jpg',
  link: '',
  newWindow: ''
}, {
  id: 4,
  thumb: '../static/images/people/MalteStavningErslev.jpg',
  link: '',
  newWindow: ''
}, {
  id: 5,
  thumb: '../static/images/people/StigMoellerHansen.jpg',
  link: 'http://www.stigmollerhansen.dk/',
  newWindow: '_blank'
}, {
  id: 6,
  thumb: '../static/images/people/AnnKarring.jpg',
  link: '',
  newWindow: ''
}, {
  id: 7,
  thumb: '../static/images/people/FrederikLaCour.jpg',
  name: 'Frederik la Cour',
  desc: 'Digital Design student at Aarhus University, Sound & Media Artist. Attended the course on Aesthetic Programming, where he learned how to perceive code as a material for critical reflection on conceptual matters. Coupling his appreciation for aesthetic programming with his passion for audio-design and electronic music, has installed a new perception on sound experimentation.',
  link: 'https://vimeo.com/l4cour',
  newWindow: '_blank'
}, {
  id: 8,
  thumb: '../static/images/people/AlexMorch.jpg',
  name: 'Alex Mørch',
  desc: '(b. 1987, Denmark) is a transdisciplinary composer and artist. His works are typically a mixture of homebrewn machinery in spatial installations, involving human interaction. Alex Mørch is currently studying the soloist programme in electronic composition at DIEM (Danish Institute of Electronic Music) at the Royal Academy of Music, Aarhus, from where he also holds a master degree',
  link: 'https://alexmorch.com/',
  newWindow: '_blank'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: "Pics from PCD @Aarhus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "galleryWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, people.map(function (pe, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GalleryEntry__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: pe.id,
      key: pe.id,
      name: pe.name,
      desc: pe.desc,
      link: pe.link,
      newWindow: pe.newWindow,
      thumb: pe.thumb,
      whyCode: pe.whyCode,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    });
  })));
});
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/gallery")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=gallery.js.d8df15381cb566fd2b96.hot-update.js.map