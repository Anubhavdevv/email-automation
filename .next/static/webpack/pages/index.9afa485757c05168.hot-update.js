"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_sendMail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sendMail */ \"./src/services/sendMail.js\");\n\n\n\nfunction HomePage() {\n    async function handleOnClick() {\n        let response = await (0,_services_sendMail__WEBPACK_IMPORTED_MODULE_2__.sendMail)(\"https://craftcode.design/\");\n        console.log(response);\n    }\n    const buttonWrapperStyle = {\n        color: \"white\",\n        display: \"inline-block\",\n        backgroundColor: \"DodgerBlue\",\n        padding: \"10px\",\n        fontFamily: \"Arial\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: buttonWrapperStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"name\",\n                placeholder: true\n            }, void 0, false, {\n                fileName: \"D:\\\\selerkin\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\"\n            }, void 0, false, {\n                fileName: \"D:\\\\selerkin\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleOnClick(),\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\selerkin\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\selerkin\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNzQjtBQUdoRCxTQUFTRTtJQUVQLGVBQWVDO1FBQ2IsSUFBSUMsV0FBVyxNQUFNSCw0REFBUUEsQ0FBQztRQUM5QkksUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEsTUFBTUcscUJBQXFCO1FBQ3pCQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsaUJBQWlCO1FBQ2pCQyxTQUFTO1FBQ1RDLFlBQVk7SUFDZDtJQUVBLHFCQUFPLDhEQUFDQztRQUFJQyxPQUFPUDs7MEJBRWYsOERBQUNRO2dCQUFNQyxNQUFLO2dCQUFPQyxXQUFXOzs7Ozs7MEJBQzlCLDhEQUFDRjtnQkFBTUMsTUFBSzs7Ozs7OzBCQUNaLDhEQUFDRTtnQkFBUUMsU0FBVSxJQUFNaEI7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFFaEQ7S0FyQlNEO0FBdUJULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2VuZE1haWwgfSBmcm9tIFwiLi4vc2VydmljZXMvc2VuZE1haWxcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25DbGljayAoKXtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHNlbmRNYWlsKCdodHRwczovL2NyYWZ0Y29kZS5kZXNpZ24vJyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXR0b25XcmFwcGVyU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJEb2RnZXJCbHVlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIlxyXG4gIH07XHJcblxyXG4gIHJldHVybig8ZGl2IHN0eWxlPXtidXR0b25XcmFwcGVyU3R5bGV9PlxyXG4gICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJodHRwczovL2NyYWZ0Y29kZS5kZXNpZ24vXCIgLz4gKi99XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwibmFtZVwiIHBsYWNlaG9sZGVyIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiAgLz5cclxuICAgICAgPGJ1dHRvbiAgb25DbGljaz17ICgpID0+IGhhbmRsZU9uQ2xpY2soKX0+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInNlbmRNYWlsIiwiSG9tZVBhZ2UiLCJoYW5kbGVPbkNsaWNrIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uV3JhcHBlclN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJkaXYiLCJzdHlsZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});