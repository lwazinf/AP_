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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/events-3515660a.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Center.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var _utils_stage_Model___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/stage_/Model_ */ \"(app-pages-browser)/./app/components/utils/stage_/Model_.tsx\");\n/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-three/postprocessing */ \"(app-pages-browser)/./node_modules/@react-three/postprocessing/dist/EffectComposer.js\");\n/* harmony import */ var _react_three_postprocessing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-three/postprocessing */ \"(app-pages-browser)/./node_modules/@react-three/postprocessing/dist/effects/Bloom.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst GlassMaterial = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereBufferGeometry\", {\n                args: [\n                    1,\n                    64,\n                    64\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhysicalMaterial\", {\n                transmission: 1,\n                transparent: true,\n                roughness: 0,\n                thickness: 1,\n                envMapIntensity: 1,\n                metalness: 0,\n                roughness: 0.05\n            }, void 0, false, {\n                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GlassMaterial;\n// This component adjusts the camera to fit the model\n// @ts-expect-error - no type\nconst CameraAdjuster = (param)=>{\n    let { modelRef } = param;\n    _s();\n    const { camera } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.D)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Ensure the model has been loaded\n        if (modelRef.current) {\n            const box = new three__WEBPACK_IMPORTED_MODULE_4__.Box3().setFromObject(modelRef.current);\n            const size = box.getSize(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n            const center = box.getCenter(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n            const maxDim = Math.max(size.x, size.y, size.z);\n            // @ts-expect-error - FOV unknown\n            const fovRadians = camera.fov * Math.PI / 180;\n            const cameraZ = Math.abs(maxDim / (2 * Math.tan(fovRadians / 2)));\n            camera.position.set(cameraZ * 1.5, 0, cameraZ * 1.5);\n            camera.lookAt(center);\n            camera.updateProjectionMatrix();\n        }\n    }, [\n        camera,\n        modelRef\n    ]);\n    return null;\n};\n_s(CameraAdjuster, \"Wo14/kl28HhoRfDX+Cg7MK2EhFU=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.D\n    ];\n});\n_c1 = CameraAdjuster;\nconst Stage_ = ()=>{\n    _s1();\n    const modelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.Canvas, {\n                shadows: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera, {\n                        makeDefault: true,\n                        position: [\n                            -9,\n                            0,\n                            9\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                        intensity: 0.5\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                        castShadow: true,\n                        position: [\n                            10,\n                            10,\n                            10\n                        ],\n                        intensity: 1.5,\n                        \"shadow-mapSize-width\": 1024,\n                        \"shadow-mapSize-height\": 1024\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {\n                        enableZoom: false,\n                        enablePan: false,\n                        enableRotate: true,\n                        minPolarAngle: Math.PI / 2 - 0.2,\n                        maxPolarAngle: Math.PI / 2,\n                        minAzimuthAngle: -Infinity,\n                        maxAzimuthAngle: Infinity\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                        fallback: null,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlassMaterial, {}, void 0, false, {\n                                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.Environment, {\n                                preset: \"sunset\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.Center, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_stage_Model___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    ref: modelRef\n                                }, void 0, false, {\n                                    fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_10__.EffectComposer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_postprocessing__WEBPACK_IMPORTED_MODULE_11__.Bloom, {\n                            luminanceThreshold: 0,\n                            luminanceSmoothing: 0.9,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CameraAdjuster, {\n                        modelRef: modelRef\n                    }, void 0, false, {\n                        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 left-0 text-white\",\n                children: \"Loading model...\"\n            }, void 0, false, {\n                fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nietzsche/Desktop/x/AP_/app/components/Stage_.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Stage_, \"dOYu21pZTlOWXlQXpyo3NUAam4E=\");\n_c2 = Stage_;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stage_);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlassMaterial\");\n$RefreshReg$(_c1, \"CameraAdjuster\");\n$RefreshReg$(_c2, \"Stage_\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N0YWdlXy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUyRDtBQUNMO0FBQ29DO0FBQ3BEO0FBQ0s7QUFDeUI7QUFFcEUsTUFBTWUsZ0JBQWdCO0lBQ3BCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFxQkMsTUFBTTtvQkFBQztvQkFBRztvQkFBSTtpQkFBRzs7Ozs7OzBCQUN2Qyw4REFBQ0M7Z0JBQ0NDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFdBQVc7Z0JBQ1hDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLFdBQVc7Z0JBQ1hILFdBQVc7Ozs7Ozs7Ozs7OztBQUluQjtLQWZNUDtBQWlCTixxREFBcUQ7QUFDckQsNkJBQTZCO0FBQzdCLE1BQU1XLGlCQUFpQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDbEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR3ZCLHFEQUFRQTtJQUUzQkgsZ0RBQVNBLENBQUM7UUFDUixtQ0FBbUM7UUFDbkMsSUFBSXlCLFNBQVNFLE9BQU8sRUFBRTtZQUNwQixNQUFNQyxNQUFNLElBQUlwQix1Q0FBSUEsR0FBR3FCLGFBQWEsQ0FBQ0osU0FBU0UsT0FBTztZQUNyRCxNQUFNRyxPQUFPRixJQUFJRyxPQUFPLENBQUMsSUFBSXRCLDBDQUFPQTtZQUNwQyxNQUFNdUIsU0FBU0osSUFBSUssU0FBUyxDQUFDLElBQUl4QiwwQ0FBT0E7WUFFeEMsTUFBTXlCLFNBQVNDLEtBQUtDLEdBQUcsQ0FBQ04sS0FBS08sQ0FBQyxFQUFFUCxLQUFLUSxDQUFDLEVBQUVSLEtBQUtTLENBQUM7WUFDOUMsaUNBQWlDO1lBQ2pDLE1BQU1DLGFBQWEsT0FBUUMsR0FBRyxHQUFHTixLQUFLTyxFQUFFLEdBQUk7WUFDNUMsTUFBTUMsVUFBVVIsS0FBS1MsR0FBRyxDQUFDVixTQUFVLEtBQUlDLEtBQUtVLEdBQUcsQ0FBQ0wsYUFBYSxFQUFDO1lBRTlEZCxPQUFPb0IsUUFBUSxDQUFDQyxHQUFHLENBQUNKLFVBQVUsS0FBSyxHQUFHQSxVQUFVO1lBQ2hEakIsT0FBT3NCLE1BQU0sQ0FBQ2hCO1lBQ2ROLE9BQU91QixzQkFBc0I7UUFDL0I7SUFDRixHQUFHO1FBQUN2QjtRQUFRRDtLQUFTO0lBRXJCLE9BQU87QUFDVDtHQXRCTUQ7O1FBQ2VyQixpREFBUUE7OztNQUR2QnFCO0FBd0JOLE1BQU0wQixTQUFTOztJQUNiLE1BQU16QixXQUFXeEIsNkNBQU1BO0lBRXZCLHFCQUNFLDhEQUFDa0Q7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNsRCxzREFBTUE7Z0JBQUNtRCxPQUFPOztrQ0FDYiw4REFBQ2hELGdFQUFpQkE7d0JBQUNpRCxXQUFXO3dCQUFDUixVQUFVOzRCQUFDLENBQUM7NEJBQUc7NEJBQUc7eUJBQUU7Ozs7OztrQ0FDbkQsOERBQUNTO3dCQUFhQyxXQUFXOzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFDQ0MsVUFBVTt3QkFDVlosVUFBVTs0QkFBQzs0QkFBSTs0QkFBSTt5QkFBRzt3QkFDdEJVLFdBQVc7d0JBQ1hHLHdCQUFzQjt3QkFDdEJDLHlCQUF1Qjs7Ozs7O2tDQUVqQiw4REFBQ3hELDREQUFhQTt3QkFDWnlELFlBQVk7d0JBQ1pDLFdBQVc7d0JBQ1hDLGNBQWM7d0JBQ2RDLGVBQWU3QixLQUFLTyxFQUFFLEdBQUcsSUFBSTt3QkFDN0J1QixlQUFlOUIsS0FBS08sRUFBRSxHQUFHO3dCQUN6QndCLGlCQUFpQixDQUFDQzt3QkFDbEJDLGlCQUFpQkQ7Ozs7OztrQ0FFbkIsOERBQUNwRSwyQ0FBUUE7d0JBQUNzRSxVQUFVOzswQ0FDbEIsOERBQUN4RDs7Ozs7MENBQ0gsOERBQUNOLDBEQUFXQTtnQ0FBQytELFFBQU87Ozs7OzswQ0FDbEIsOERBQUNoRSxxREFBTUE7MENBRUwsNEVBQUNJLDJEQUFNQTtvQ0FBQzZELEtBQUs5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2pCLDhEQUFDYix3RUFBY0E7a0NBQ2pCLDRFQUFDRCwrREFBS0E7NEJBQUM2RCxvQkFBb0I7NEJBQUdDLG9CQUFvQjs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7a0NBRTdELDhEQUFDbEQ7d0JBQWVDLFVBQVVBOzs7Ozs7Ozs7Ozs7MEJBSTVCLDhEQUFDMEI7Z0JBQUlDLFdBQVU7MEJBQXNDOzs7Ozs7Ozs7Ozs7QUFLM0Q7SUE3Q01GO01BQUFBO0FBK0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1N0YWdlXy50c3g/NzI3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FudmFzLCB1c2VUaHJlZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMsIFBlcnNwZWN0aXZlQ2FtZXJhLCBDZW50ZXIsIEVudmlyb25tZW50IH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgeyBCb3gzLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgTW9kZWxfIGZyb20gXCIuL3V0aWxzL3N0YWdlXy9Nb2RlbF9cIjtcbmltcG9ydCB7IEJsb29tLCBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvcG9zdHByb2Nlc3NpbmdcIjtcblxuY29uc3QgR2xhc3NNYXRlcmlhbCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWVzaD5cbiAgICAgIDxzcGhlcmVCdWZmZXJHZW9tZXRyeSBhcmdzPXtbMSwgNjQsIDY0XX0gLz5cbiAgICAgIDxtZXNoUGh5c2ljYWxNYXRlcmlhbFxuICAgICAgICB0cmFuc21pc3Npb249ezF9IC8vIEVuYWJsZXMgZ2xhc3MgZWZmZWN0IChyZWZyYWN0aW9uKVxuICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICByb3VnaG5lc3M9ezB9IC8vIFNtb290aCBnbGFzc1xuICAgICAgICB0aGlja25lc3M9ezF9ICAvLyBUaGlja25lc3Mgb2YgdGhlIG1hdGVyaWFsXG4gICAgICAgIGVudk1hcEludGVuc2l0eT17MX0gLy8gU3RyZW5ndGggb2YgdGhlIGVudmlyb25tZW50IG1hcFxuICAgICAgICBtZXRhbG5lc3M9ezB9IC8vIE5vbi1tZXRhbGxpYyBnbGFzc1xuICAgICAgICByb3VnaG5lc3M9ezAuMDV9IC8vIFNsaWdodCByb3VnaG5lc3MgZm9yIHJlYWxpc21cbiAgICAgIC8+XG4gICAgPC9tZXNoPlxuICApO1xufTtcblxuLy8gVGhpcyBjb21wb25lbnQgYWRqdXN0cyB0aGUgY2FtZXJhIHRvIGZpdCB0aGUgbW9kZWxcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBubyB0eXBlXG5jb25zdCBDYW1lcmFBZGp1c3RlciA9ICh7IG1vZGVsUmVmIH0pID0+IHtcbiAgY29uc3QgeyBjYW1lcmEgfSA9IHVzZVRocmVlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBFbnN1cmUgdGhlIG1vZGVsIGhhcyBiZWVuIGxvYWRlZFxuICAgIGlmIChtb2RlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBib3ggPSBuZXcgQm94MygpLnNldEZyb21PYmplY3QobW9kZWxSZWYuY3VycmVudCk7XG4gICAgICBjb25zdCBzaXplID0gYm94LmdldFNpemUobmV3IFZlY3RvcjMoKSk7XG4gICAgICBjb25zdCBjZW50ZXIgPSBib3guZ2V0Q2VudGVyKG5ldyBWZWN0b3IzKCkpO1xuXG4gICAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heChzaXplLngsIHNpemUueSwgc2l6ZS56KTtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGT1YgdW5rbm93blxuICAgICAgY29uc3QgZm92UmFkaWFucyA9IChjYW1lcmEuZm92ICogTWF0aC5QSSkgLyAxODA7XG4gICAgICBjb25zdCBjYW1lcmFaID0gTWF0aC5hYnMobWF4RGltIC8gKDIgKiBNYXRoLnRhbihmb3ZSYWRpYW5zIC8gMikpKTtcblxuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldChjYW1lcmFaICogMS41LCAwLCBjYW1lcmFaICogMS41KTtcbiAgICAgIGNhbWVyYS5sb29rQXQoY2VudGVyKTtcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuICB9LCBbY2FtZXJhLCBtb2RlbFJlZl0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgU3RhZ2VfID0gKCkgPT4ge1xuICBjb25zdCBtb2RlbFJlZiA9IHVzZVJlZigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgIHsvKiBBbGwgM0QgY29udGVudCBtdXN0IGJlIGluc2lkZSBDYW52YXMgKi99XG4gICAgICA8Q2FudmFzIHNoYWRvd3M+XG4gICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBtYWtlRGVmYXVsdCBwb3NpdGlvbj17Wy05LCAwLCA5XX0gLz5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cbjxkaXJlY3Rpb25hbExpZ2h0XG4gIGNhc3RTaGFkb3dcbiAgcG9zaXRpb249e1sxMCwgMTAsIDEwXX1cbiAgaW50ZW5zaXR5PXsxLjV9XG4gIHNoYWRvdy1tYXBTaXplLXdpZHRoPXsxMDI0fVxuICBzaGFkb3ctbWFwU2l6ZS1oZWlnaHQ9ezEwMjR9XG4vPlxuICAgICAgICA8T3JiaXRDb250cm9sc1xuICAgICAgICAgIGVuYWJsZVpvb209e2ZhbHNlfVxuICAgICAgICAgIGVuYWJsZVBhbj17ZmFsc2V9XG4gICAgICAgICAgZW5hYmxlUm90YXRlPXt0cnVlfVxuICAgICAgICAgIG1pblBvbGFyQW5nbGU9e01hdGguUEkgLyAyIC0gMC4yfVxuICAgICAgICAgIG1heFBvbGFyQW5nbGU9e01hdGguUEkgLyAyfVxuICAgICAgICAgIG1pbkF6aW11dGhBbmdsZT17LUluZmluaXR5fVxuICAgICAgICAgIG1heEF6aW11dGhBbmdsZT17SW5maW5pdHl9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPEdsYXNzTWF0ZXJpYWwgLz5cbiAgICAgICAgPEVudmlyb25tZW50IHByZXNldD1cInN1bnNldFwiIC8+XG4gICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgIHsvKiBAdHMtZXhwZWN0LWVycm9yIC0gcmVmICovfVxuICAgICAgICAgICAgPE1vZGVsXyByZWY9e21vZGVsUmVmfSAvPlxuICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8RWZmZWN0Q29tcG9zZXI+XG4gICAgICA8Qmxvb20gbHVtaW5hbmNlVGhyZXNob2xkPXswfSBsdW1pbmFuY2VTbW9vdGhpbmc9ezAuOX0gaGVpZ2h0PXszMDB9IC8+XG4gICAgPC9FZmZlY3RDb21wb3Nlcj5cbiAgICAgICAgPENhbWVyYUFkanVzdGVyIG1vZGVsUmVmPXttb2RlbFJlZn0gLz5cbiAgICAgIDwvQ2FudmFzPlxuXG4gICAgICB7LyogSFRNTCBlbGVtZW50cyBzdWNoIGFzIGRpdiBnbyBvdXRzaWRlIG9mIENhbnZhcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHRleHQtd2hpdGVcIj5cbiAgICAgICAgTG9hZGluZyBtb2RlbC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFnZV87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhbnZhcyIsInVzZVRocmVlIiwiT3JiaXRDb250cm9scyIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiQ2VudGVyIiwiRW52aXJvbm1lbnQiLCJCb3gzIiwiVmVjdG9yMyIsIk1vZGVsXyIsIkJsb29tIiwiRWZmZWN0Q29tcG9zZXIiLCJHbGFzc01hdGVyaWFsIiwibWVzaCIsInNwaGVyZUJ1ZmZlckdlb21ldHJ5IiwiYXJncyIsIm1lc2hQaHlzaWNhbE1hdGVyaWFsIiwidHJhbnNtaXNzaW9uIiwidHJhbnNwYXJlbnQiLCJyb3VnaG5lc3MiLCJ0aGlja25lc3MiLCJlbnZNYXBJbnRlbnNpdHkiLCJtZXRhbG5lc3MiLCJDYW1lcmFBZGp1c3RlciIsIm1vZGVsUmVmIiwiY2FtZXJhIiwiY3VycmVudCIsImJveCIsInNldEZyb21PYmplY3QiLCJzaXplIiwiZ2V0U2l6ZSIsImNlbnRlciIsImdldENlbnRlciIsIm1heERpbSIsIk1hdGgiLCJtYXgiLCJ4IiwieSIsInoiLCJmb3ZSYWRpYW5zIiwiZm92IiwiUEkiLCJjYW1lcmFaIiwiYWJzIiwidGFuIiwicG9zaXRpb24iLCJzZXQiLCJsb29rQXQiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiU3RhZ2VfIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hhZG93cyIsIm1ha2VEZWZhdWx0IiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiZGlyZWN0aW9uYWxMaWdodCIsImNhc3RTaGFkb3ciLCJzaGFkb3ctbWFwU2l6ZS13aWR0aCIsInNoYWRvdy1tYXBTaXplLWhlaWdodCIsImVuYWJsZVpvb20iLCJlbmFibGVQYW4iLCJlbmFibGVSb3RhdGUiLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIkluZmluaXR5IiwibWF4QXppbXV0aEFuZ2xlIiwiZmFsbGJhY2siLCJwcmVzZXQiLCJyZWYiLCJsdW1pbmFuY2VUaHJlc2hvbGQiLCJsdW1pbmFuY2VTbW9vdGhpbmciLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Stage_.tsx\n"));

/***/ })

});