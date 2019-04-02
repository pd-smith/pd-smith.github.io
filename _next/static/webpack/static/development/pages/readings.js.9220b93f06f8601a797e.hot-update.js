webpackHotUpdate("static/development/pages/readings.js",{

/***/ "./components/snippets/reading-brick.jsx":
/*!***********************************************!*\
  !*** ./components/snippets/reading-brick.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/typography */ "./components/shared/typography.jsx");
var _jsxFileName = "/Users/Patrick/workspace/pd-smith.github.io/components/snippets/reading-brick.jsx";




var SnippetContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  maxWidth: '800px',
  marginTop: '40px',
  padding: '40px',
  backgroundColor: 'white',
  borderRadius: '5px',
  boxShadow: '0px 3px 7px 0px #d3dcec'
});
var SectionTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h2({
  color: _shared_typography__WEBPACK_IMPORTED_MODULE_3__["colors"].coolpurple
});
var ReadingTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h3({
  color: _shared_typography__WEBPACK_IMPORTED_MODULE_3__["colors"].coolpurple
});
var ArticleLink = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_shared_typography__WEBPACK_IMPORTED_MODULE_3__["Anchor"])({
  display: 'block',
  textAlign: 'right'
});

var ReadingBrick = function ReadingBrick(_ref) {
  var title = _ref.title,
      links = _ref.links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SnippetContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, title), links.map(function (_ref2, index) {
    var linkTitle = _ref2.linkTitle,
        description = _ref2.description,
        link = _ref2.link;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadingTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, linkTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_typography__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
      target: "_blank",
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, link.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }));
};

ReadingBrick.displayName = 'ReadingBrick';
ReadingBrick.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  links: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    linkTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ReadingBrick);

/***/ })

})
//# sourceMappingURL=readings.js.9220b93f06f8601a797e.hot-update.js.map