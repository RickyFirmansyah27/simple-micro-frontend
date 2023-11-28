"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmicro_app"] = self["webpackChunkmicro_app"] || []).push([["src_Feature3_js"],{

/***/ "./src/Feature3.js":
/*!*************************!*\
  !*** ./src/Feature3.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?e042\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst styles = {\n  textAreaWrapper: {\n    margin: '20px',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'flex-start',\n    position: 'relative'\n  },\n  label: {\n    fontFamily: 'Poppins',\n    fontSize: '18px',\n    fontWeight: '500',\n    lineHeight: '18px',\n    letterSpacing: '0em',\n    textAlign: 'left',\n    marginBottom: '8px'\n  },\n  textArea: {\n    width: '552px',\n    height: '136px',\n    padding: '10px',\n    fontSize: '16px',\n    borderRadius: '4px',\n    border: '1.5px solid #ccc',\n    outline: 'none',\n    '&:focus': {\n      borderColor: '#87CEEB',\n      outline: '2px solid #87CEEB'\n    },\n    resize: 'vertical'\n  },\n  characterCount: {\n    fontFamily: 'Poppins',\n    fontSize: '12px',\n    fontWeight: '400',\n    position: 'absolute',\n    bottom: 0,\n    left: '520px',\n    color: '#333333'\n  },\n  errorText: {\n    fontFamily: 'Poppins',\n    color: 'red',\n    fontSize: '12px',\n    lineHeight: '18px',\n    position: 'absolute',\n    bottom: 0,\n    left: '10px'\n  }\n};\nfunction TextArea() {\n  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const maxCharacters = 201;\n  const handleChange = event => {\n    const newText = event.target.value;\n    if (newText.length < maxCharacters) {\n      setText(newText);\n      setError(false);\n    } else {\n      setError(true);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.textAreaWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    style: styles.label\n  }, \"Label\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    style: {\n      ...styles.textArea,\n      borderColor: error ? 'red' : '#ccc'\n    },\n    placeholder: \"Placeholder\",\n    value: text,\n    onChange: handleChange,\n    maxLength: maxCharacters\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: '20px'\n    }\n  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.errorText\n  }, \"Error Label\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.characterCount\n  }, text.length, \"/200\")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);\n\n//# sourceURL=webpack://micro_app/./src/Feature3.js?");

/***/ })

}]);