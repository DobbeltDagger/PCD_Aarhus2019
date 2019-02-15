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
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\gallery.js";



 // https://benhowell.github.io/react-grid-gallery/
// gallery options: https://github.com/benhowell/react-grid-gallery#image-options

var IMAGES = [{
  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  // isSelected: true,
  caption: "After Rain (Jeshu John - designerspics.com)"
}, {
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{
    value: "Ocean",
    title: "Ocean"
  }, {
    value: "People",
    title: "People"
  }],
  caption: "Boats (Jeshu John - designerspics.com)"
}, {
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: "Pics from PCD @Aarhus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
    images: IMAGES,
    enableImageSelection: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
});
/*
render(
  <Gallery images={IMAGES}/>,
  document.getElementById('example-0')
);
*/
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
//# sourceMappingURL=gallery.js.fbd9608ad6441ef38732.hot-update.js.map