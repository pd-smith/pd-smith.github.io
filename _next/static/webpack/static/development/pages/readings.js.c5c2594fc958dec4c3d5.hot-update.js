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
/* harmony import */ var _components_snippets_reading_brick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/snippets/reading-brick */ "./components/snippets/reading-brick.jsx");

var _jsxFileName = "/Users/Patrick/workspace/pd-smith.github.io/pages/readings.jsx";






var READING_LINKS = [{
  title: 'Blogs',
  links: [{
    linkTitle: 'Overreacted',
    description: 'Dan Abramov is a master of explaining React in a way that strikes a balance between accessible and "in the weeds".',
    link: {
      title: 'Visit',
      href: 'https://overreacted.io/'
    }
  }, {
    linkTitle: 'Kent C Dodds\'s Blog',
    description: 'Kent (The Doddfather) is a prolific member of the React (and Javascript) community. His blog is filled with many wisdom nuggets that will help you take your skills to the next level.',
    link: {
      title: 'Visit',
      href: 'https://kentcdodds.com/blog/'
    }
  }]
}, {
  title: 'React',
  links: [{
    linkTitle: 'A Complete Guide to useEffect',
    description: 'Dan Abramov walks gives an in depth guide of how to use useEffect. This article was very important for me recognizing how to properly use hooks.',
    link: {
      title: 'Read Article',
      href: 'https://overreacted.io/a-complete-guide-to-useeffect/'
    }
  }, {
    linkTitle: 'The State Reducer Pattern with React Hooks',
    description: 'Kent C Dodds walks through some great patterns for building customer hooks that create simple and clean components.',
    link: {
      title: 'Read Article',
      href: 'https://overreacted.io/a-complete-guide-to-useeffect/'
    }
  }]
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
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Readings")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_shared_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentPageHref: "/readings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SnippetHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Readings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Here's a collection of readings that I've found that I personally have found useful."), READING_LINKS.map(function (_ref, index) {
    var title = _ref.title,
        links = _ref.links;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_snippets_reading_brick__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, {
      title: title,
      links: links
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }));
  })));
};

Readings.displayName = 'Readings';
/* harmony default export */ __webpack_exports__["default"] = (Readings);

/***/ })

})
//# sourceMappingURL=readings.js.c5c2594fc958dec4c3d5.hot-update.js.map