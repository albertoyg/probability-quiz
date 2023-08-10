"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./src/pages/quiz.js":
/*!***************************!*\
  !*** ./src/pages/quiz.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries */ \"./src/graphql/queries.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _questions_;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { difficulty } = router.query;\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [questionNumber, setQuestionNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (difficulty) {\n            fetchQuizIdByDifficulty(difficulty);\n        }\n    }, [\n        difficulty\n    ]);\n    async function fetchQuizIdByDifficulty(difficulty) {\n        try {\n            var _response_data_listQuizzes_items_;\n            const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_5__.API.graphql((0,aws_amplify__WEBPACK_IMPORTED_MODULE_5__.graphqlOperation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.listQuizzes, {\n                filter: {\n                    difficulty: {\n                        eq: difficulty.toUpperCase()\n                    }\n                },\n                limit: 1 // assuming one quiz per difficulty\n            }));\n            const quizId = (_response_data_listQuizzes_items_ = response.data.listQuizzes.items[0]) === null || _response_data_listQuizzes_items_ === void 0 ? void 0 : _response_data_listQuizzes_items_.id;\n            if (quizId) {\n                fetchQuestionsByQuizID(quizId);\n            }\n        } catch (error) {\n            console.error(\"Error fetching quiz ID:\", error);\n        }\n    }\n    async function fetchQuestionsByQuizID(quizId) {\n        try {\n            const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_5__.API.graphql((0,aws_amplify__WEBPACK_IMPORTED_MODULE_5__.graphqlOperation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.questionsByQuizID, {\n                quizID: quizId\n            }));\n            setQuestions(response.data.questionsByQuizID.items);\n            console.log(\"Questions:\", response.data.questionsByQuizID.items);\n        } catch (error) {\n            console.error(\"Error fetching questions:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fullScreenContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    variant: \"outlined\",\n                    className: \"homeButton\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/albertoy/Desktop/github/projects/probability-quiz/src/pages/quiz.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/albertoy/Desktop/github/projects/probability-quiz/src/pages/quiz.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"centerStage\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Question \",\n                            questionNumber,\n                            \": \",\n                            (_questions_ = questions[questionNumber - 1]) === null || _questions_ === void 0 ? void 0 : _questions_.text\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertoy/Desktop/github/projects/probability-quiz/src/pages/quiz.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"buttonContainer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoy/Desktop/github/projects/probability-quiz/src/pages/quiz.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoy/Desktop/github/projects/probability-quiz/src/pages/quiz.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoy/Desktop/github/projects/probability-quiz/src/pages/quiz.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Quiz, \"SWHQ8u0ez/MsiLoj0Vazh9YnBAM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpei5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUN2QjtBQUNXO0FBQ0k7QUFDUTtBQUMrQjtBQUMzQjtBQUV6QyxTQUFTWTtRQW9EZ0JDOztJQW5EdEMsTUFBTUMsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVksVUFBVSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFbkMsTUFBTSxDQUFDSCxXQUFXSSxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVyREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxZQUFZO1lBQ2RLLHdCQUF3Qkw7UUFDMUI7SUFDRixHQUFHO1FBQUNBO0tBQVc7SUFFZixlQUFlSyx3QkFBd0JMLFVBQVU7UUFDL0MsSUFBSTtnQkFNYU07WUFMZixNQUFNQSxXQUFXLE1BQU1mLDRDQUFHQSxDQUFDZ0IsT0FBTyxDQUFDZiw2REFBZ0JBLENBQUNFLHlEQUFXQSxFQUFFO2dCQUMvRGMsUUFBUTtvQkFBRVIsWUFBWTt3QkFBRVMsSUFBSVQsV0FBV1UsV0FBVztvQkFBRztnQkFBRTtnQkFDdkRDLE9BQU8sRUFBRSxtQ0FBbUM7WUFDOUM7WUFFQSxNQUFNQyxVQUFTTixvQ0FBQUEsU0FBU08sSUFBSSxDQUFDbkIsV0FBVyxDQUFDb0IsS0FBSyxDQUFDLEVBQUUsY0FBbENSLHdEQUFBQSxrQ0FBb0NTLEVBQUU7WUFDckQsSUFBSUgsUUFBUTtnQkFDVkksdUJBQXVCSjtZQUN6QjtRQUNGLEVBQUUsT0FBT0ssT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUMzQztJQUNGO0lBRUEsZUFBZUQsdUJBQXVCSixNQUFNO1FBQzFDLElBQUk7WUFDRixNQUFNTixXQUFXLE1BQU1mLDRDQUFHQSxDQUFDZ0IsT0FBTyxDQUFDZiw2REFBZ0JBLENBQUNHLCtEQUFpQkEsRUFBRTtnQkFDckV3QixRQUFRUDtZQUNWO1lBRUFWLGFBQWFJLFNBQVNPLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDbUIsS0FBSztZQUNsREksUUFBUUUsR0FBRyxDQUFDLGNBQWNkLFNBQVNPLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDbUIsS0FBSztRQUNqRSxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDN0M7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ25DLGtEQUFJQTtnQkFBQ29DLE1BQUs7MEJBQ1QsNEVBQUNyQyxpREFBU0E7b0JBQUNzQyxTQUFRO29CQUFXRixXQUFVOzhCQUFhOzs7Ozs7Ozs7OzswQkFLdkQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0c7OzRCQUFHOzRCQUFVdEI7NEJBQWU7NkJBQUdMLGNBQUFBLFNBQVMsQ0FBQ0ssaUJBQWlCLEVBQUUsY0FBN0JMLGtDQUFBQSxZQUErQjRCLElBQUk7Ozs7Ozs7a0NBRW5FLDhEQUFDTDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBNUR3QnpCOztRQUNQVCxrREFBU0E7OztLQURGUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcXVpei5qcz8xYjg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiBhcyBNVUlCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQVBJLCBncmFwaHFsT3BlcmF0aW9uIH0gZnJvbSAnYXdzLWFtcGxpZnknO1xuaW1wb3J0IHsgbGlzdFF1ZXN0aW9ucywgbGlzdFF1aXp6ZXMsIHF1ZXN0aW9uc0J5UXVpeklEIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzJztcbmltcG9ydCB7IEdyYXBoUUxRdWVyeSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hcGktZ3JhcGhxbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRpZmZpY3VsdHkgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcXVlc3Rpb25OdW1iZXIsIHNldFF1ZXN0aW9uTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlmZmljdWx0eSkge1xuICAgICAgZmV0Y2hRdWl6SWRCeURpZmZpY3VsdHkoZGlmZmljdWx0eSk7XG4gICAgfVxuICB9LCBbZGlmZmljdWx0eV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUXVpeklkQnlEaWZmaWN1bHR5KGRpZmZpY3VsdHkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBUEkuZ3JhcGhxbChncmFwaHFsT3BlcmF0aW9uKGxpc3RRdWl6emVzLCB7XG4gICAgICAgIGZpbHRlcjogeyBkaWZmaWN1bHR5OiB7IGVxOiBkaWZmaWN1bHR5LnRvVXBwZXJDYXNlKCkgfSB9LFxuICAgICAgICBsaW1pdDogMSAvLyBhc3N1bWluZyBvbmUgcXVpeiBwZXIgZGlmZmljdWx0eVxuICAgICAgfSkpO1xuICAgICAgXG4gICAgICBjb25zdCBxdWl6SWQgPSByZXNwb25zZS5kYXRhLmxpc3RRdWl6emVzLml0ZW1zWzBdPy5pZDtcbiAgICAgIGlmIChxdWl6SWQpIHtcbiAgICAgICAgZmV0Y2hRdWVzdGlvbnNCeVF1aXpJRChxdWl6SWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcXVpeiBJRDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUXVlc3Rpb25zQnlRdWl6SUQocXVpeklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVBJLmdyYXBocWwoZ3JhcGhxbE9wZXJhdGlvbihxdWVzdGlvbnNCeVF1aXpJRCwge1xuICAgICAgICBxdWl6SUQ6IHF1aXpJZFxuICAgICAgfSkpO1xuXG4gICAgICBzZXRRdWVzdGlvbnMocmVzcG9uc2UuZGF0YS5xdWVzdGlvbnNCeVF1aXpJRC5pdGVtcyk7XG4gICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uczpcIiwgcmVzcG9uc2UuZGF0YS5xdWVzdGlvbnNCeVF1aXpJRC5pdGVtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBxdWVzdGlvbnM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsU2NyZWVuQ29udGFpbmVyJz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxNVUlCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPSdob21lQnV0dG9uJz5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvTVVJQnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICAgey8qIGNlbnRlciBzdGFnZSAod2hlcmUgY29tcG9udGVudHMgZ28pICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlclN0YWdlJz5cbiAgICAgICAgey8qIHRpdGxlIG9mIHRoZSBwYWdlICovfVxuICAgICAgICA8aDE+UXVlc3Rpb24ge3F1ZXN0aW9uTnVtYmVyfToge3F1ZXN0aW9uc1txdWVzdGlvbk51bWJlciAtIDFdPy50ZXh0fTwvaDE+XG4gICAgICAgIHsvKiBidXR0b24gY29udGFpbmVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQ29udGFpbmVyJz5cbiAgICAgICAgICB7LyogQ2hlY2sgaWYgYSBxdWVzdGlvbiBleGlzdHMgZm9yIHRoZSBjdXJyZW50IGluZGV4LiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1VSUJ1dHRvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSSIsImdyYXBocWxPcGVyYXRpb24iLCJsaXN0UXVlc3Rpb25zIiwibGlzdFF1aXp6ZXMiLCJxdWVzdGlvbnNCeVF1aXpJRCIsIkdyYXBoUUxRdWVyeSIsIlF1aXoiLCJxdWVzdGlvbnMiLCJyb3V0ZXIiLCJkaWZmaWN1bHR5IiwicXVlcnkiLCJzZXRRdWVzdGlvbnMiLCJxdWVzdGlvbk51bWJlciIsInNldFF1ZXN0aW9uTnVtYmVyIiwiZmV0Y2hRdWl6SWRCeURpZmZpY3VsdHkiLCJyZXNwb25zZSIsImdyYXBocWwiLCJmaWx0ZXIiLCJlcSIsInRvVXBwZXJDYXNlIiwibGltaXQiLCJxdWl6SWQiLCJkYXRhIiwiaXRlbXMiLCJpZCIsImZldGNoUXVlc3Rpb25zQnlRdWl6SUQiLCJlcnJvciIsImNvbnNvbGUiLCJxdWl6SUQiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwidmFyaWFudCIsImgxIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz.js\n"));

/***/ })

});