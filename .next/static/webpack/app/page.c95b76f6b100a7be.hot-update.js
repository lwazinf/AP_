"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Stage_.tsx":
/*!***********************************!*\
  !*** ./app/components/Stage_.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/events-3515660a.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Center.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var _utils_stage_Model___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/stage_/Model_ */ \"(app-pages-browser)/./app/components/utils/stage_/Model_.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n// This component adjusts the camera to fit the model\nconst CameraAdjuster = (param)=>{\n    let { modelRef } = param;\n    _s();\n    const { camera } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.D)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Ensure the model has been loaded\n        if (modelRef.current) {\n            // Adjust the Box3 to fit the model\n            const box = new three__WEBPACK_IMPORTED_MODULE_4__.Box3().setFromObject(modelRef.current);\n            const size = box.getSize(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n            const center = box.getCenter(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n            const maxDim = Math.max(size.x, size.y, size.z);\n            const fovRadians = camera.fov * Math.PI / 180; // Convert FOV to radians\n            const cameraZ = Math.abs(maxDim / (2 * Math.tan(fovRadians / 2)));\n            // Position camera to fit the model\n            camera.position.set(cameraZ * 1.5, 0, cameraZ * 1.5); // Adjust to a comfortable distance\n            camera.lookAt(center);\n            camera.updateProjectionMatrix();\n        }\n    }, [\n        camera,\n        modelRef\n    ]);\n    return null;\n};\n_s(CameraAdjuster, \"Wo14/kl28HhoRfDX+Cg7MK2EhFU=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.D\n    ];\n});\n_c = CameraAdjuster;\nconst Stage_ = ()=>{\n    _s1();\n    const modelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.Canvas, {\n            shadows: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera, {\n                    makeDefault: true,\n                    position: [\n                        -9,\n                        0,\n                        9\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.5\n                }, void 0, false, {\n                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                    castShadow: true,\n                    position: [\n                        2.5,\n                        8,\n                        5\n                    ],\n                    intensity: 1.5,\n                    \"shadow-mapSize-width\": 1024,\n                    \"shadow-mapSize-height\": 1024\n                }, void 0, false, {\n                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {\n                    enableZoom: false,\n                    enablePan: false,\n                    enableRotate: true,\n                    minPolarAngle: Math.PI / 2 - 0.2,\n                    maxPolarAngle: Math.PI / 2,\n                    minAzimuthAngle: -Infinity,\n                    maxAzimuthAngle: Infinity\n                }, void 0, false, {\n                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading model...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 29\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.Center, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_stage_Model___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            ref: modelRef\n                        }, void 0, false, {\n                            fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CameraAdjuster, {\n                    modelRef: modelRef\n                }, void 0, false, {\n                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Stage_, \"dOYu21pZTlOWXlQXpyo3NUAam4E=\");\n_c1 = Stage_;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stage_);\nvar _c, _c1;\n$RefreshReg$(_c, \"CameraAdjuster\");\n$RefreshReg$(_c1, \"Stage_\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N0YWdlXy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUyRDtBQUNMO0FBQ3VCO0FBQ3ZDO0FBQ0s7QUFFM0MscURBQXFEO0FBQ3JELE1BQU1ZLGlCQUFpQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDbEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1QscURBQVFBO0lBRTNCSCxnREFBU0EsQ0FBQztRQUNSLG1DQUFtQztRQUNuQyxJQUFJVyxTQUFTRSxPQUFPLEVBQUU7WUFDcEIsbUNBQW1DO1lBQ25DLE1BQU1DLE1BQU0sSUFBSVAsdUNBQUlBLEdBQUdRLGFBQWEsQ0FBQ0osU0FBU0UsT0FBTztZQUNyRCxNQUFNRyxPQUFPRixJQUFJRyxPQUFPLENBQUMsSUFBSVQsMENBQU9BO1lBQ3BDLE1BQU1VLFNBQVNKLElBQUlLLFNBQVMsQ0FBQyxJQUFJWCwwQ0FBT0E7WUFFeEMsTUFBTVksU0FBU0MsS0FBS0MsR0FBRyxDQUFDTixLQUFLTyxDQUFDLEVBQUVQLEtBQUtRLENBQUMsRUFBRVIsS0FBS1MsQ0FBQztZQUM5QyxNQUFNQyxhQUFhLE9BQVFDLEdBQUcsR0FBR04sS0FBS08sRUFBRSxHQUFJLEtBQUsseUJBQXlCO1lBQzFFLE1BQU1DLFVBQVVSLEtBQUtTLEdBQUcsQ0FBQ1YsU0FBVSxLQUFJQyxLQUFLVSxHQUFHLENBQUNMLGFBQWEsRUFBQztZQUU5RCxtQ0FBbUM7WUFDbkNkLE9BQU9vQixRQUFRLENBQUNDLEdBQUcsQ0FBQ0osVUFBVSxLQUFLLEdBQUdBLFVBQVUsTUFBTSxtQ0FBbUM7WUFDekZqQixPQUFPc0IsTUFBTSxDQUFDaEI7WUFDZE4sT0FBT3VCLHNCQUFzQjtRQUMvQjtJQUNGLEdBQUc7UUFBQ3ZCO1FBQVFEO0tBQVM7SUFFckIsT0FBTztBQUNUO0dBdkJNRDs7UUFDZVAsaURBQVFBOzs7S0FEdkJPO0FBeUJOLE1BQU0wQixTQUFTOztJQUNiLE1BQU16QixXQUFXViw2Q0FBTUE7SUFFdkIscUJBQ0UsOERBQUNvQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDcEMsc0RBQU1BO1lBQUNxQyxPQUFPOzs4QkFFYiw4REFBQ2xDLGdFQUFpQkE7b0JBQUNtQyxXQUFXO29CQUFDUixVQUFVO3dCQUFDLENBQUM7d0JBQUc7d0JBQUc7cUJBQUU7Ozs7Ozs4QkFDbkQsOERBQUNTO29CQUFhQyxXQUFXOzs7Ozs7OEJBQ3pCLDhEQUFDQztvQkFDQ0MsVUFBVTtvQkFDVlosVUFBVTt3QkFBQzt3QkFBSzt3QkFBRztxQkFBRTtvQkFDckJVLFdBQVc7b0JBQ1hHLHdCQUFzQjtvQkFDdEJDLHlCQUF1Qjs7Ozs7OzhCQUd6Qiw4REFBQzFDLDREQUFhQTtvQkFDWjJDLFlBQVk7b0JBQ1pDLFdBQVc7b0JBQ1hDLGNBQWM7b0JBQ2RDLGVBQWU3QixLQUFLTyxFQUFFLEdBQUcsSUFBSTtvQkFDN0J1QixlQUFlOUIsS0FBS08sRUFBRSxHQUFHO29CQUN6QndCLGlCQUFpQixDQUFDQztvQkFDbEJDLGlCQUFpQkQ7Ozs7Ozs4QkFFbkIsOERBQUN0RCwyQ0FBUUE7b0JBQUN3RCx3QkFBVSw4REFBQ2xCO2tDQUFJOzs7Ozs7OEJBQ3ZCLDRFQUFDL0IscURBQU1BO2tDQUVMLDRFQUFDRywyREFBTUE7NEJBQUMrQyxLQUFLN0M7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSWpCLDhEQUFDRDtvQkFBZUMsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxDO0lBckNNeUI7TUFBQUE7QUF1Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU3RhZ2VfLnRzeD83Mjc0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYW52YXMsIHVzZVRocmVlIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scywgUGVyc3BlY3RpdmVDYW1lcmEsIENlbnRlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IHsgQm94MywgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IE1vZGVsXyBmcm9tIFwiLi91dGlscy9zdGFnZV8vTW9kZWxfXCI7XG5cbi8vIFRoaXMgY29tcG9uZW50IGFkanVzdHMgdGhlIGNhbWVyYSB0byBmaXQgdGhlIG1vZGVsXG5jb25zdCBDYW1lcmFBZGp1c3RlciA9ICh7IG1vZGVsUmVmIH0pID0+IHtcbiAgY29uc3QgeyBjYW1lcmEgfSA9IHVzZVRocmVlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBFbnN1cmUgdGhlIG1vZGVsIGhhcyBiZWVuIGxvYWRlZFxuICAgIGlmIChtb2RlbFJlZi5jdXJyZW50KSB7XG4gICAgICAvLyBBZGp1c3QgdGhlIEJveDMgdG8gZml0IHRoZSBtb2RlbFxuICAgICAgY29uc3QgYm94ID0gbmV3IEJveDMoKS5zZXRGcm9tT2JqZWN0KG1vZGVsUmVmLmN1cnJlbnQpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGJveC5nZXRTaXplKG5ldyBWZWN0b3IzKCkpO1xuICAgICAgY29uc3QgY2VudGVyID0gYm94LmdldENlbnRlcihuZXcgVmVjdG9yMygpKTtcblxuICAgICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgoc2l6ZS54LCBzaXplLnksIHNpemUueik7XG4gICAgICBjb25zdCBmb3ZSYWRpYW5zID0gKGNhbWVyYS5mb3YgKiBNYXRoLlBJKSAvIDE4MDsgLy8gQ29udmVydCBGT1YgdG8gcmFkaWFuc1xuICAgICAgY29uc3QgY2FtZXJhWiA9IE1hdGguYWJzKG1heERpbSAvICgyICogTWF0aC50YW4oZm92UmFkaWFucyAvIDIpKSk7XG5cbiAgICAgIC8vIFBvc2l0aW9uIGNhbWVyYSB0byBmaXQgdGhlIG1vZGVsXG4gICAgICBjYW1lcmEucG9zaXRpb24uc2V0KGNhbWVyYVogKiAxLjUsIDAsIGNhbWVyYVogKiAxLjUpOyAvLyBBZGp1c3QgdG8gYSBjb21mb3J0YWJsZSBkaXN0YW5jZVxuICAgICAgY2FtZXJhLmxvb2tBdChjZW50ZXIpO1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG4gIH0sIFtjYW1lcmEsIG1vZGVsUmVmXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBTdGFnZV8gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGVsUmVmID0gdXNlUmVmKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgPENhbnZhcyBzaGFkb3dzPlxuICAgICAgICB7LyogU2V0IGluaXRpYWwgY2FtZXJhIHBvc2l0aW9uICovfVxuICAgICAgICA8UGVyc3BlY3RpdmVDYW1lcmEgbWFrZURlZmF1bHQgcG9zaXRpb249e1stOSwgMCwgOV19IC8+XG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXswLjV9IC8+XG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0XG4gICAgICAgICAgY2FzdFNoYWRvd1xuICAgICAgICAgIHBvc2l0aW9uPXtbMi41LCA4LCA1XX1cbiAgICAgICAgICBpbnRlbnNpdHk9ezEuNX1cbiAgICAgICAgICBzaGFkb3ctbWFwU2l6ZS13aWR0aD17MTAyNH1cbiAgICAgICAgICBzaGFkb3ctbWFwU2l6ZS1oZWlnaHQ9ezEwMjR9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBDb250cm9scyBmb3Igb3JiaXQgaW50ZXJhY3Rpb24gKi99XG4gICAgICAgIDxPcmJpdENvbnRyb2xzXG4gICAgICAgICAgZW5hYmxlWm9vbT17ZmFsc2V9XG4gICAgICAgICAgZW5hYmxlUGFuPXtmYWxzZX1cbiAgICAgICAgICBlbmFibGVSb3RhdGU9e3RydWV9XG4gICAgICAgICAgbWluUG9sYXJBbmdsZT17TWF0aC5QSSAvIDIgLSAwLjJ9IC8vIFNsaWdodGx5IGJlbG93IGhvcml6b250YWxcbiAgICAgICAgICBtYXhQb2xhckFuZ2xlPXtNYXRoLlBJIC8gMn0gLy8gU2xpZ2h0bHkgYWJvdmUgaG9yaXpvbnRhbFxuICAgICAgICAgIG1pbkF6aW11dGhBbmdsZT17LUluZmluaXR5fSAvLyBBbGxvdyBmdWxsIGhvcml6b250YWwgcm90YXRpb25cbiAgICAgICAgICBtYXhBemltdXRoQW5nbGU9e0luZmluaXR5fVxuICAgICAgICAvPlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZyBtb2RlbC4uLjwvZGl2Pn0+XG4gICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgIHsvKiBBdHRhY2ggdGhlIHJlZiB0byB0aGUgbW9kZWwgKi99XG4gICAgICAgICAgICA8TW9kZWxfIHJlZj17bW9kZWxSZWZ9IC8+XG4gICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIHsvKiBBZGp1c3QgY2FtZXJhIGJhc2VkIG9uIHRoZSBtb2RlbCAqL31cbiAgICAgICAgPENhbWVyYUFkanVzdGVyIG1vZGVsUmVmPXttb2RlbFJlZn0gLz5cbiAgICAgIDwvQ2FudmFzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VfO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYW52YXMiLCJ1c2VUaHJlZSIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIkNlbnRlciIsIkJveDMiLCJWZWN0b3IzIiwiTW9kZWxfIiwiQ2FtZXJhQWRqdXN0ZXIiLCJtb2RlbFJlZiIsImNhbWVyYSIsImN1cnJlbnQiLCJib3giLCJzZXRGcm9tT2JqZWN0Iiwic2l6ZSIsImdldFNpemUiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJtYXhEaW0iLCJNYXRoIiwibWF4IiwieCIsInkiLCJ6IiwiZm92UmFkaWFucyIsImZvdiIsIlBJIiwiY2FtZXJhWiIsImFicyIsInRhbiIsInBvc2l0aW9uIiwic2V0IiwibG9va0F0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIlN0YWdlXyIsImRpdiIsImNsYXNzTmFtZSIsInNoYWRvd3MiLCJtYWtlRGVmYXVsdCIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsImRpcmVjdGlvbmFsTGlnaHQiLCJjYXN0U2hhZG93Iiwic2hhZG93LW1hcFNpemUtd2lkdGgiLCJzaGFkb3ctbWFwU2l6ZS1oZWlnaHQiLCJlbmFibGVab29tIiwiZW5hYmxlUGFuIiwiZW5hYmxlUm90YXRlIiwibWluUG9sYXJBbmdsZSIsIm1heFBvbGFyQW5nbGUiLCJtaW5BemltdXRoQW5nbGUiLCJJbmZpbml0eSIsIm1heEF6aW11dGhBbmdsZSIsImZhbGxiYWNrIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Stage_.tsx\n"));

/***/ })

});