webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/header.jsx":
/*!**************************************!*\
  !*** ./components/shared/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography */ "./components/shared/typography.jsx");


var _jsxFileName = "/Users/Patrick/workspace/pd-smith.github.io/components/shared/header.jsx";





var LINKS = [{
  title: 'Snippets',
  href: '/snippets'
}, {
  title: 'Readings',
  href: '/readings'
}];
var HeaderLink = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(_typography__WEBPACK_IMPORTED_MODULE_6__["Anchor"])({
  display: 'inline-block',
  padding: '10px',
  borderRadius: '5px'
});
var SectionLink = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderLink)(function (_ref) {
  var _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected;
  var backgroundColor = isSelected ? _typography__WEBPACK_IMPORTED_MODULE_6__["colors"].coolpurple : 'none';
  var color = isSelected ? _typography__WEBPACK_IMPORTED_MODULE_6__["colors"].lightgray : 'black';
  var styles = {
    transition: 'all 0.3s ease-in-out 0s',
    marginLeft: '10px',
    backgroundColor: backgroundColor,
    color: color,
    opacity: '0.8',
    ':first-of-type': {
      marginLeft: '0'
    },
    ':hover': {
      opacity: '0.9',
      color: color
    }
  };
  return;
});
var HomeLink = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderLink)({
  fontSize: '18px',
  opacity: 1,
  fontWeight: 'bold',
  ':hover': {
    opacity: 1
  }
});
var HeaderContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].header(function (_ref2) {
  var dark = _ref2.dark;
  return {
    width: '100%',
    padding: '30px 0px 0px',
    flexShrink: 0,
    zIndex: '10',
    position: 'absolute',
    top: '0px',
    color: dark ? _typography__WEBPACK_IMPORTED_MODULE_6__["colors"].coolpurple : _typography__WEBPACK_IMPORTED_MODULE_6__["colors"].lightgray
  };
});
var Navigation = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].nav({
  display: 'flex',
  justifyContent: 'space-between'
});
var NavigationAlignment = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div({
  width: '100%',
  maxWidth: '800px',
  margin: '0px auto'
});

var Header = function Header(_ref3) {
  var currentPageHref = _ref3.currentPageHref,
      dark = _ref3.dark,
      otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["currentPageHref", "dark"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationAlignment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Navigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HomeLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dark: dark
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "Pat Smith"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, LINKS.map(function (_ref4) {
    var title = _ref4.title,
        href = _ref4.href;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: title,
      href: href,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SectionLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      dark: dark,
      isSelected: currentPageHref === href
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), title));
  })))));
};

Header.propTypes = {
  currentPageHref: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
Header.defaultProps = {
  dark: false
};
Header.displayName = 'Header';
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a93211845fda47ec6b5b.hot-update.js.map