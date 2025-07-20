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
        return "Prover setup completed.";
    },
    Sign: (option) => {
        console.log("Signing with options:", option);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsaURBQWlEO0FBQ2pELGdDQUFnQztBQUNoQyxrSEFBbUQ7QUFFbkQsTUFBTSxNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVztJQUN2QixLQUFLLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRTtRQUN4QixPQUFPLHlCQUF5QixDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUM7QUFHRixrQkFBYSxFQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCckIsbUVBQXlDO0FBRXpDLDhHQUF3QztBQUV4QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDMUMsa0JBQWMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBRXZDLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO1FBQzNDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztRQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0tBQ2xCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxxQkFBZSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1poQyxJQUFJLGNBQWMsR0FBWSxJQUFXLENBQUM7QUFFMUMscUJBQWUsRUFBQyxjQUFjLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNKaEMscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9wcmVsb2FkLnRzIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlLy4vc3JjL3Byb3Zlci9iYWNrZW5kL2luaXQudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvcHJvdmVyL2JhY2tlbmQvaW5zdGFuY2UudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IEluaXRQcm92ZXJLaXQgZnJvbSAnLi4vcHJvdmVyL2JhY2tlbmQvaW5pdCc7XG5cbmNvbnN0IHByb3ZlciA9IHtcbiAgTmFtZTogKCkgPT4gXCJwcm92ZXJraXRcIixcbiAgU2V0dXA6IChzaWduZXI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBcIlByb3ZlciBzZXR1cCBjb21wbGV0ZWQuXCI7XG4gIH0sXG4gIFNpZ246IChvcHRpb246IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lnbmluZyB3aXRoIG9wdGlvbnM6XCIsIG9wdGlvbik7XG4gICAgcmV0dXJuIFwiUHJvdmVyIHNpZ24gY29tcGxldGVkLlwiO1xuICB9XG59O1xuXG5cbkluaXRQcm92ZXJLaXQocHJvdmVyKVxuIiwiaW1wb3J0IHsgY29udGV4dEJyaWRnZSB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBQcm92ZXIgZnJvbSAnLi9wcm92ZXJraXQnO1xuaW1wb3J0IFByb3Zlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnO1xuXG5jb25zdCBJbml0UHJvdmVyQnJpZGdlID0gKHByb3ZlcjogUHJvdmVyKSA9PiB7XG4gIFByb3Zlckluc3RhbmNlLlByb3Zlckluc3RhbmNlID0gcHJvdmVyO1xuXG4gIGNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ3Byb3ZlcmtpdCcsIHtcbiAgICBTZXR1cDogcHJvdmVyLlNldHVwLFxuICAgIFNpZ246IHByb3Zlci5TaWduLFxuICAgIE5hbWU6IHByb3Zlci5OYW1lLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5pdFByb3ZlckJyaWRnZTsiLCJpbXBvcnQgUHJvdmVyIGZyb20gJy4vcHJvdmVya2l0JztcblxubGV0IFByb3Zlckluc3RhbmNlIDogUHJvdmVyID0gbnVsbCBhcyBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IHtQcm92ZXJJbnN0YW5jZX07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vcHJlbG9hZC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==