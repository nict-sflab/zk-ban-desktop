(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/preload.ts":
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
const init_1 = __importDefault(__webpack_require__(/*! ../prover/backend/init */ "./src/prover/backend/init.ts"));
const prover = {
    Name: () => "proverkit",
    Setup: (signer) => {
        console.log("Setup with options:", signer.Input());
        return "Prover setup completed.";
    },
    Sign: (signInput) => {
        console.log("Signing with options:", signInput.URL());
        return "Prover sign completed.";
    }
};
(0, init_1.default)(prover);


/***/ }),

/***/ "./src/prover/backend/init.ts":
/*!************************************!*\
  !*** ./src/prover/backend/init.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const electron_1 = __webpack_require__(/*! electron */ "electron");
const instance_1 = __importDefault(__webpack_require__(/*! ./instance */ "./src/prover/backend/instance.ts"));
const InitProverBridge = (prover) => {
    instance_1.default.ProverInstance = prover;
    electron_1.contextBridge.exposeInMainWorld('proverkit', {
        Setup: prover.Setup,
        Sign: prover.Sign,
        Name: prover.Name,
    });
};
exports["default"] = InitProverBridge;


/***/ }),

/***/ "./src/prover/backend/instance.ts":
/*!****************************************!*\
  !*** ./src/prover/backend/instance.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let ProverInstance = null;
exports["default"] = { ProverInstance };


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/preload.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5idW5kbGUuZGV2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpREFBaUQ7QUFDakQsZ0NBQWdDO0FBQ2hDLGtIQUFtRDtBQUtuRCxNQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXO0lBQ3ZCLEtBQUssRUFBRSxDQUFDLE1BQWtCLEVBQUUsRUFBRTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8seUJBQXlCLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLFNBQW9CLEVBQUUsRUFBRTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUM7QUFHRixrQkFBYSxFQUFpQixNQUFnQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmhFLG1FQUF5QztBQUV6Qyw4R0FBd0M7QUFFeEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFTLE1BQXNCLEVBQUUsRUFBRTtJQUMxRCxrQkFBYyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7SUFFdkMsd0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7UUFDM0MsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1FBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELHFCQUFlLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDWmhDLElBQUksY0FBYyxHQUFHLElBQVcsQ0FBQztBQUVqQyxxQkFBZSxFQUFDLGNBQWMsRUFBQyxDQUFDOzs7Ozs7Ozs7OztBQ0poQyxxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9tYWluL3ByZWxvYWQudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvcHJvdmVyL2JhY2tlbmQvaW5pdC50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9wcm92ZXIvYmFja2VuZC9pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgKCkgPT4ge1xucmV0dXJuICIsIi8vIERpc2FibGUgbm8tdW51c2VkLXZhcnMsIGJyb2tlbiBmb3Igc3ByZWFkIGFyZ3Ncbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogb2ZmICovXG5pbXBvcnQgSW5pdFByb3ZlcktpdCBmcm9tICcuLi9wcm92ZXIvYmFja2VuZC9pbml0JztcbmltcG9ydCBQcm92ZXIgZnJvbSAnLi4vcHJvdmVyL2JhY2tlbmQvcHJvdmVya2l0JztcblxuaW1wb3J0IHtTZXR1cElucHV0LCBTaWduSW5wdXR9IGZyb20gJy4uL3Byb3Zlci9iYWNrZW5kL2lvJztcblxuY29uc3QgcHJvdmVyID0ge1xuICBOYW1lOiAoKSA9PiBcInByb3ZlcmtpdFwiLFxuICBTZXR1cDogKHNpZ25lcjogU2V0dXBJbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2V0dXAgd2l0aCBvcHRpb25zOlwiLCBzaWduZXIuSW5wdXQoKSk7XG4gICAgcmV0dXJuIFwiUHJvdmVyIHNldHVwIGNvbXBsZXRlZC5cIjtcbiAgfSxcbiAgU2lnbjogKHNpZ25JbnB1dDogU2lnbklucHV0KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaWduaW5nIHdpdGggb3B0aW9uczpcIiwgc2lnbklucHV0LlVSTCgpKTtcbiAgICByZXR1cm4gXCJQcm92ZXIgc2lnbiBjb21wbGV0ZWQuXCI7XG4gIH1cbn07XG5cblxuSW5pdFByb3ZlcktpdDxzdHJpbmcsIHN0cmluZz4ocHJvdmVyIGFzIFByb3ZlcjxzdHJpbmcsIHN0cmluZz4pO1xuIiwiaW1wb3J0IHsgY29udGV4dEJyaWRnZSB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBQcm92ZXIgZnJvbSAnLi9wcm92ZXJraXQnO1xuaW1wb3J0IFByb3Zlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnO1xuXG5jb25zdCBJbml0UHJvdmVyQnJpZGdlID0gPFQxLCBUMj4ocHJvdmVyOiBQcm92ZXI8VDEsIFQyPikgPT4ge1xuICBQcm92ZXJJbnN0YW5jZS5Qcm92ZXJJbnN0YW5jZSA9IHByb3ZlcjtcblxuICBjb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdwcm92ZXJraXQnLCB7XG4gICAgU2V0dXA6IHByb3Zlci5TZXR1cCxcbiAgICBTaWduOiBwcm92ZXIuU2lnbixcbiAgICBOYW1lOiBwcm92ZXIuTmFtZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRQcm92ZXJCcmlkZ2U7IiwiaW1wb3J0IFByb3ZlciBmcm9tICcuL3Byb3ZlcmtpdCc7XG5cbmxldCBQcm92ZXJJbnN0YW5jZSA9IG51bGwgYXMgYW55O1xuXG5leHBvcnQgZGVmYXVsdCB7UHJvdmVySW5zdGFuY2V9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL3ByZWxvYWQudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=