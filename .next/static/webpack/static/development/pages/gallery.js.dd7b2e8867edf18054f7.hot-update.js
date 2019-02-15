webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./components/GalleryComplete.js":
/*!***************************************!*\
  !*** ./components/GalleryComplete.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\components\\GalleryComplete.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




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

var GalleryComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(GalleryComplete, _Component);

  function GalleryComplete() {
    var _this;

    _classCallCheck(this, GalleryComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GalleryComplete).call(this));
    _this.state = {
      currentImage: 0
    };
    _this.closeLightbox = _this.closeLightbox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.openLightbox = _this.openLightbox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.gotoNext = _this.gotoNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.gotoPrevious = _this.gotoPrevious.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GalleryComplete, [{
    key: "openLightbox",
    value: function openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: "gotoPrevious",
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: "gotoNext",
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
        photos: photos,
        onClick: this.openLightbox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_2___default.a, {
        images: photos,
        onClose: this.closeLightbox,
        onClickPrev: this.gotoPrevious,
        onClickNext: this.gotoNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }
  }]);

  return GalleryComplete;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GalleryComplete);
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

/***/ }),

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
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_GalleryComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GalleryComplete */ "./components/GalleryComplete.js");
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\PCD_AARHUS_NytDesign\\pages\\gallery.js";







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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: "Pics from PCD 2019 @Aarhus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    photos: photos,
    onClick: _this.openLightbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_4___default.a, {
    images: photos,
    onClose: _this.closeLightbox,
    onClickPrev: _this.gotoPrevious,
    onClickNext: _this.gotoNext,
    currentImage: _this.state.currentImage,
    isOpen: _this.state.lightboxIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
});
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
//# sourceMappingURL=gallery.js.dd7b2e8867edf18054f7.hot-update.js.map