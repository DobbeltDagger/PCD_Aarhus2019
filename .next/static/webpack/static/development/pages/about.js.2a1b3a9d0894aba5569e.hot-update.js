webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\about.js";

// pages/about.js




var people = [{
  key: 0,
  thumb: '../static/images/people/EsterMarieAagard.jpg',
  name: 'Ester Marie Aagard',
  desc: 'My name is Ester Marie Aagaard and I’m 23 years old. I study Digital Design, IT, Aesthetics and Interaction at Aarhus University in my 4th semester. I first started programming last year, where I was introduced to aesthetic programming as a part of my education. I have always explored my creativity with different materials and find the materiality of programming and what you can do with it very inspiring',
  link: '#',
  newWindow: ''
}, {
  key: 1,
  thumb: '../static/images/people/AndrejaAndric.jpg',
  name: 'Andreja Andric',
  desc: 'Andreja Andric is a Serbian composer and programmer, living in Aarhus. Using computer programming as key means of artistic expression, he aims at discovering pristine, dynamic and complex sound worlds. Pioneer of smartphone recital as a concert practice. Holds a PhD in Music Informatics from Milan University, Italy',
  link: 'http://andrejaandric.altervista.org/',
  newWindow: '_blank'
}, {
  key: 2,
  thumb: '../static/images/people/AnnaBrynskov.jpg',
  name: 'Anna Brynskov',
  desc: 'Anna Brynskov is studying her master’s degree in Digital Design at Aarhus University. She has her bachelor’s degree in Literary History, and before starting university, she wrote and directed films. She has a particular interest in storytelling, language and technology, and enjoys exploring themes like power relations, sexuality and alienation',
  link: '',
  newWindow: '_blank'
}, {
  key: 3,
  thumb: '../static/images/people/MalteStavningErslev.jpg',
  name: 'Malthe Stavning Erslev',
  desc: 'Malthe is a PhD fellow at Aarhus University. He is currently finishing his MSc in Digital Design as part of his PhD studies. His academic work is based on practice and experimentation, with a research through- design-and-art approach, mostly within the realms of conceptual software design (and/or software art) and speculative/critical design',
  link: '',
  newWindow: '_blank'
}, {
  key: 4,
  thumb: '../static/images/people/StigMoellerHansen.jpg',
  name: 'Stig Møller Hansen',
  desc: 'Graphic designer, coder, teacher and researcher. Bought an Amiga 500 in 1989 and quickly developed a passion for mixing art and code. Thirty years later, Stig has made his childhood excitement his professional career, teaching programming for graphic designers',
  link: 'http://www.stigmollerhansen.dk/',
  newWindow: '_blank'
}, {
  key: 5,
  thumb: '../static/images/people/FrederikLaCour.jpg',
  name: 'Frederik la Cour',
  desc: 'Digital Design student at Aarhus University, Sound & Media Artist. Attended the course on Aesthetic Programming, where he learned how to perceive code as a material for critical reflection on conceptual matters. Coupling his appreciation for aesthetic programming with his passion for audio-design and electronic music, has installed a new perception on sound experimentation.',
  link: '',
  newWindow: '_blank'
}, {
  key: 6,
  thumb: '../static/images/people/NathaliaNovais.jpg',
  name: 'Nathalia Novais',
  desc: 'Graphic designer, researcher and filmmaker-producer from Brazil based in Denmark. Currently a master student of the Information Studies program at Aarhus University. Some work available at ',
  link: 'https://behance.net/nathnovais',
  newWindow: '_blank'
}, {
  key: 7,
  thumb: '../static/images/people/LaurenMcCarthy.jpg',
  name: 'Lauren Lee McCarthy',
  desc: 'Lauren (US) is the creator of p5.js, an open source platform for learning creative expression. As an artist, her work has been exhibited internationally, examining how issues of surveillance, automation, and network culture affect our social relationships. She is an Assistant Professor at UCLA Design Media Arts',
  link: 'http://lauren-mccarthy.com/',
  newWindow: '_blank'
}, {
  key: 8,
  thumb: '../static/images/people/MarkPoulsen.jpg',
  name: 'Mark Staun Poulsen',
  desc: 'Student of Digital Design BA program at Aarhus University. Especially interested in the expressive use of software processing in relation to digital genres such as video games and electronic literature. Wrote his very first line of code one year ago as part of the “Aesthetic Programming” university course',
  link: '',
  newWindow: '_blank'
}, {
  key: 9,
  thumb: '../static/images/people/WinnieSoon.jpg',
  name: 'Winnie Soon',
  desc: 'Artist-researcher examining the cultural implications of technologies in which computational processes and infrastructure underwrite our experiences, which are ever more programmed. Her current research focuses on aesthetic coding in the realm of software studies, working on two books titled “Aesthetic Programming” (w/ Geoff Cox) and “Fix My Code” (w/ Cornelia Sollfrank) ',
  link: 'http://www.siusoon.net',
  newWindow: '_blank'
}, {
  key: 10,
  thumb: '../static/images/people/TobiasStenberg.jpg',
  name: 'Tobias Stenberg Christensen',
  desc: 'Graphic designer and visual artist. Currently a master student of the Digital Design program at Aarhus University',
  link: 'http://tobiasstenberg.dk/',
  newWindow: '_blank'
}, {
  key: 11,
  thumb: '../static/images/people/AndersVisti.jpg',
  name: 'Anders Visti',
  desc: 'Visual artist working with code. Founder and co-editor of the publishing house * [asterisk] from 2002-12. Founder and editor of the printed web publication ‡ DobbeltDagger and initiator of !=null, a public forum for artists, researchers, developers and hackers using contemporary technology for creative expression and aesthetic inquiry',
  link: 'https://andersvisti.dk',
  newWindow: '_blank'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid Grid--gutters Grid--full large-Grid--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "PCD @Aarhus takes place Saturday, February 9th from 11.00-15.30 at DOKK1, Hack Kampmanns Pl. 2, 8000 Aarhus"), ". PCD @Aarhus is organised by Nathalia Novais, Tobias Stenberg Christensen, Winnie Soon & Anders Visti")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Winnie Soon / ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "mailto:rwx@siusoon.net",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "mail: rwx@siusoon.net")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), "Anders Visti / ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "mailto:andersvisti@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "mail: andersvisti@gmail.com"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: "People",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "peopleWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, people.map(function (pe, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PeopleEntry__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: pe.key,
      name: pe.name,
      desc: pe.desc,
      link: pe.link,
      newWindow: pe.newWindow,
      thumb: pe.thumb,
      whyCode: pe.whyCode,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: "Partnerships",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid Grid--gutters Grid--full large-Grid--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid-cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "The event is supported by:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://notnull.andersvisti.dk/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "!=null")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "http://cc.au.dk/en/about-the-school/departments/digital-design-and-information-studies/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Department of Digital Design and Information Studies, Aarhus University")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://dokk1.dk/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "DOKK1, Aarhus Public Library"))))));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.2a1b3a9d0894aba5569e.hot-update.js.map