"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #121715;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.fullScreenContainer {\\n  position: relative;\\n  width: 100%;\\n  height: 100vh;\\n}\\n.fullScreenContainer .signOutButton {\\n  position: absolute;\\n  top: 16px;\\n  right: 16px;\\n}\\n.fullScreenContainer .centerStage {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 75%;\\n  height: 50%;\\n  background-color: white;\\n  border-radius: 20px;\\n  padding: 10px;\\n}\\n.fullScreenContainer .centerStage h1 {\\n  text-align: center;\\n  margin: 0;\\n  padding: 0;\\n}\\n.fullScreenContainer .centerStage .buttonContainer {\\n  margin-top: 50%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 10px;\\n  justify-content: center;\\n  align-items: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBAAA;EACA,iCAAA;AADF;;AAIA;EACE,kBAAA;EACA,WAAA;EACA,aAAA;AADF;AAGE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;AADJ;AAME;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AAJJ;AAQI;EACE,kBAAA;EACA,SAAA;EACA,UAAA;AANN;AAWI;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;AATN\",\"sourcesContent\":[\"// handles sign out button positioned in the top right of the screen. \\n// keep rest of the styles as imported\\nbody {\\n  background-color: #121715;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.fullScreenContainer {\\n  position: relative;\\n  width: 100%;\\n  height: 100vh;\\n\\n  .signOutButton {\\n    position: absolute;\\n    top: 16px;\\n    right: 16px; \\n  }\\n\\n  // centered at the middle of the screen, horizontally and vertically\\n  // will be used to contain components in the middle of the screen\\n  .centerStage { \\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    width: 75%;\\n    height: 50%;\\n    background-color: white;\\n    border-radius: 20px;\\n    padding: 10px;\\n\\n    // h1 will contain the title of the page\\n    // it will be centered at the top of centerstage in the middle\\n    h1 {\\n      text-align: center;\\n      margin: 0;\\n      padding: 0;\\n    }\\n\\n    // buttonContainer will contain the buttons of the page\\n    // these will be centered in the middle of centerstage\\n    .buttonContainer {\\n      margin-top: 50%;\\n      display: flex;          // Use flexbox for layout\\n      flex-direction: column; // Align children (buttons) vertically]\\n      align-items: center;\\n      gap: 10px;              // Add a gap between buttons\\n      justify-content: center; // Center buttons vertically within the container\\n      align-items: center;    // Center buttons horizontally within the container\\n    }\\n  }\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2NzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELDhCQUE4Qix3Q0FBd0MsR0FBRywwQkFBMEIsdUJBQXVCLGdCQUFnQixrQkFBa0IsR0FBRyx1Q0FBdUMsdUJBQXVCLGNBQWMsZ0JBQWdCLEdBQUcscUNBQXFDLHVCQUF1QixhQUFhLGNBQWMscUNBQXFDLGVBQWUsZ0JBQWdCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsd0NBQXdDLHVCQUF1QixjQUFjLGVBQWUsR0FBRyxzREFBc0Qsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsNEJBQTRCLHdCQUF3QixHQUFHLE9BQU8sd0ZBQXdGLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsK0lBQStJLDhCQUE4QixzQ0FBc0MsR0FBRywwQkFBMEIsdUJBQXVCLGdCQUFnQixrQkFBa0Isc0JBQXNCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLEtBQUssa0tBQWtLLHlCQUF5QixlQUFlLGdCQUFnQix1Q0FBdUMsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLG9CQUFvQiw4SEFBOEgsMkJBQTJCLGtCQUFrQixtQkFBbUIsT0FBTyxtSkFBbUosd0JBQXdCLGdDQUFnQyx5REFBeUQsbUVBQW1FLGdDQUFnQyw2REFBNkQsaUZBQWlGLDBEQUEwRCxLQUFLLEdBQUcsdUJBQXVCO0FBQ3J2RjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5zY3NzPzIwYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTcxNTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZ1bGxTY3JlZW5Db250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uZnVsbFNjcmVlbkNvbnRhaW5lciAuc2lnbk91dEJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICByaWdodDogMTZweDtcXG59XFxuLmZ1bGxTY3JlZW5Db250YWluZXIgLmNlbnRlclN0YWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uZnVsbFNjcmVlbkNvbnRhaW5lciAuY2VudGVyU3RhZ2UgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZ1bGxTY3JlZW5Db250YWluZXIgLmNlbnRlclN0YWdlIC5idXR0b25Db250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFESjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUpKO0FBUUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTk47QUFXSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gaGFuZGxlcyBzaWduIG91dCBidXR0b24gcG9zaXRpb25lZCBpbiB0aGUgdG9wIHJpZ2h0IG9mIHRoZSBzY3JlZW4uIFxcbi8vIGtlZXAgcmVzdCBvZiB0aGUgc3R5bGVzIGFzIGltcG9ydGVkXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxNzE1O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZnVsbFNjcmVlbkNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICAuc2lnbk91dEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNnB4O1xcbiAgICByaWdodDogMTZweDsgXFxuICB9XFxuXFxuICAvLyBjZW50ZXJlZCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4sIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseVxcbiAgLy8gd2lsbCBiZSB1c2VkIHRvIGNvbnRhaW4gY29tcG9uZW50cyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW5cXG4gIC5jZW50ZXJTdGFnZSB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8vIGgxIHdpbGwgY29udGFpbiB0aGUgdGl0bGUgb2YgdGhlIHBhZ2VcXG4gICAgLy8gaXQgd2lsbCBiZSBjZW50ZXJlZCBhdCB0aGUgdG9wIG9mIGNlbnRlcnN0YWdlIGluIHRoZSBtaWRkbGVcXG4gICAgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAvLyBidXR0b25Db250YWluZXIgd2lsbCBjb250YWluIHRoZSBidXR0b25zIG9mIHRoZSBwYWdlXFxuICAgIC8vIHRoZXNlIHdpbGwgYmUgY2VudGVyZWQgaW4gdGhlIG1pZGRsZSBvZiBjZW50ZXJzdGFnZVxcbiAgICAuYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiA1MCU7XFxuICAgICAgZGlzcGxheTogZmxleDsgICAgICAgICAgLy8gVXNlIGZsZXhib3ggZm9yIGxheW91dFxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8vIEFsaWduIGNoaWxkcmVuIChidXR0b25zKSB2ZXJ0aWNhbGx5XVxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxMHB4OyAgICAgICAgICAgICAgLy8gQWRkIGEgZ2FwIGJldHdlZW4gYnV0dG9uc1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvLyBDZW50ZXIgYnV0dG9ucyB2ZXJ0aWNhbGx5IHdpdGhpbiB0aGUgY29udGFpbmVyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLy8gQ2VudGVyIGJ1dHRvbnMgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgY29udGFpbmVyXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss\n"));

/***/ })

});