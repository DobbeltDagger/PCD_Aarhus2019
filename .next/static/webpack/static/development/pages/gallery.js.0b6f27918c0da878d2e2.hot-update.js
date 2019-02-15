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
/* harmony import */ var _components_PeopleEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PeopleEntry */ "./components/PeopleEntry.js");
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\gallery.js";

// pages/about.js




var people = [{
  id: 0,
  thumb: '../static/images/people/EsterMarieAagard.jpg',
  name: 'Ester Marie Aagard',
  desc: 'My name is Ester Marie Aagaard and I’m 23 years old. I study Digital Design, IT, Aesthetics and Interaction at Aarhus University in my 4th semester. I first started programming last year, where I was introduced to aesthetic programming as a part of my education. I have always explored my creativity with different materials and find the materiality of programming and what you can do with it very inspiring',
  link: '',
  newWindow: ''
}, {
  id: 1,
  thumb: '../static/images/people/AndrejaAndric.jpg',
  name: 'Andreja Andric',
  desc: 'Andreja Andric is a Serbian composer and programmer, living in Aarhus. Using computer programming as key means of artistic expression, he aims at discovering pristine, dynamic and complex sound worlds. Pioneer of smartphone recital as a concert practice. Holds a PhD in Music Informatics from Milan University, Italy',
  link: 'http://andrejaandric.altervista.org/',
  newWindow: '_blank'
}, {
  id: 2,
  thumb: '../static/images/people/AnnaBrynskov.jpg',
  name: 'Anna Brynskov',
  desc: 'Anna Brynskov is studying her master’s degree in Digital Design at Aarhus University. She has her bachelor’s degree in Literary History, and before starting university, she wrote and directed films. She has a particular interest in storytelling, language and technology, and enjoys exploring themes like power relations, sexuality and alienation',
  link: 'https://vimeo.com/annabrynskov',
  newWindow: '_blank'
}, {
  id: 3,
  thumb: '../static/images/people/Tilde.jpg',
  name: 'Tilde Lageri Damborg',
  desc: '25 years old. Currently working on my master thesis at digital design. Interested in how data is constructing society',
  link: '',
  newWindow: ''
}, {
  id: 4,
  thumb: '../static/images/people/MalteStavningErslev.jpg',
  name: 'Malthe Stavning Erslev',
  desc: 'Malthe is a PhD fellow at Aarhus University. He is currently finishing his MSc in Digital Design as part of his PhD studies. His academic work is based on practice and experimentation, with a research through- design-and-art approach, mostly within the realms of conceptual software design (and/or software art) and speculative/critical design',
  link: '',
  newWindow: ''
}, {
  id: 5,
  thumb: '../static/images/people/StigMoellerHansen.jpg',
  name: 'Stig Møller Hansen',
  desc: 'Graphic designer, coder, teacher and researcher. Bought an Amiga 500 in 1989 and quickly developed a passion for mixing art and code. Thirty years later, Stig has made his childhood excitement his professional career, teaching programming for graphic designers',
  link: 'http://www.stigmollerhansen.dk/',
  newWindow: '_blank'
}, {
  id: 6,
  thumb: '../static/images/people/AnnKarring.jpg',
  name: 'Ann Karring',
  desc: 'Ann is a master degree student in Digital Design at Aarhus University. She took a course in Aesthetic programming in 2016 and has since taken several courses in Computer Science. Her passion is spreading the joy of coding. Nowadays she is mostly interested in Physical Computing and combining code with CNC machines',
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
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: "Pics from PCD @Aarhus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "galleryWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, people.map(function (pe, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GalleryEntry, {
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
        lineNumber: 88
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
//# sourceMappingURL=gallery.js.0b6f27918c0da878d2e2.hot-update.js.map