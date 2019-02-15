webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\gallery.js";




var photos = [{
  src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
  width: 4,
  height: 3
}, {
  src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
  width: 1,
  height: 1
}, {
  src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
  width: 3,
  height: 4
}, {
  src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
  width: 3,
  height: 4
}, {
  src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
  width: 3,
  height: 4
}, {
  src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
  width: 4,
  height: 3
}, {
  src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
  width: 3,
  height: 4
}, {
  src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
  width: 4,
  height: 3
}, {
  src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
  width: 4,
  height: 3
}];
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
  photos: photos,
  onClick: undefined.openLightbox,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_3___default.a, {
  images: photos,
  onClose: undefined.closeLightbox,
  onClickPrev: undefined.gotoPrevious,
  onClickNext: undefined.gotoNext,
  currentImage: undefined.state.currentImage,
  isOpen: undefined.state.lightboxIsOpen,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}));
/*
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
render(<App />, document.getElementById('app'));
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
//# sourceMappingURL=gallery.js.5ada2b06dc2723e1ddb5.hot-update.js.map