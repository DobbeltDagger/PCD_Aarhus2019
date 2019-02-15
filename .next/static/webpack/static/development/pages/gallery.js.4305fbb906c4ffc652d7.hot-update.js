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
  src: "../static/images/PCDimgs/0.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/0.jpg",
  thumbnailWidth: 200,
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/1.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/1.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/2.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/2.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/3.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/3.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/4.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/4.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/5.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/5.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/6.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/6.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/7.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/7.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/8.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/8.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/9.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/9.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/10.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/10.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/11.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/11.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/12.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/12.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/13.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/13.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/14.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/14.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/15.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/15.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/16.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/16.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/17.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/17.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/18.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/18.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/19.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/19.jpg",
  caption: "PCD 2019 @Aarhus"
}, {
  src: "../static/images/PCDimgs/20.jpg",
  thumbnail: "../static/images/PCDimgs/thumbs/20.jpg",
  caption: "PCD 2019 @Aarhus"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: "Pics from PCD 2019 @Aarhus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
    images: IMAGES,
    enableImageSelection: false,
    showImageCount: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }));
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
//# sourceMappingURL=gallery.js.4305fbb906c4ffc652d7.hot-update.js.map