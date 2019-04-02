webpackHotUpdate("static/development/pages/readings.js",{

/***/ "./pages/readings.jsx":
/*!****************************!*\
  !*** ./pages/readings.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/header */ "./components/shared/header.jsx");
/* harmony import */ var _components_shared_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/typography */ "./components/shared/typography.jsx");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/Patrick/workspace/pd-smith.github.io/pages/readings.jsx";





var SNIPPET_LINKS = [{
  title: 'React',
  links: [{
    linkTitle: '',
    description: '',
    link: ''
  }]
}, {
  title: 'Select All',
  description: 'A "back to basics" test of a select all checkbox.',
  link: {
    title: 'CodePen',
    href: 'https://codepen.io/pd-smith/pen/vQyqWN'
  }
}];
var SnippetHolder = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div({
  margin: '30px auto',
  maxWidth: '800px'
});
var SectionHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].section({
  height: '100px',
  backgroundColor: _components_shared_typography__WEBPACK_IMPORTED_MODULE_4__["colors"].prettypink
});

var Readings = function Readings() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Readings")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_shared_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentPageHref: "/readings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SnippetHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Readings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Here's a collection of readings that I've found that I personally have found useful."), SNIPPET_LINKS.map(function (_ref, index) {
    var title = _ref.title,
        description = _ref.description,
        link = _ref.link;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkBrick, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, {
      title: title,
      description: description,
      link: link
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }));
  })));
};

Readings.displayName = 'Readings';
/* harmony default export */ __webpack_exports__["default"] = (Readings);

/***/ })

})
//# sourceMappingURL=readings.js.0530fd1c7d21361f8bdf.hot-update.js.map