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
    Setup: (url, option) => {
        console.log("Setup with params:", url, option);
        return "Prover setup completed.";
    },
    Sign: (option) => {
        const url = process.env.PROVER_KIT_SIGN_URL || "";
        console.log("Signing with params:", url, option);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5idW5kbGUuZGV2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpREFBaUQ7QUFDakQsZ0NBQWdDO0FBQ2hDLGtIQUFtRDtBQUluRCxNQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXO0lBQ3ZCLEtBQUssRUFBRSxDQUFDLEdBQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLHlCQUF5QixDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUNwQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFDO0FBR0Ysa0JBQWEsRUFBaUIsTUFBZ0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJoRSxtRUFBeUM7QUFFekMsOEdBQXdDO0FBRXhDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBUyxNQUFzQixFQUFFLEVBQUU7SUFDMUQsa0JBQWMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBRXZDLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO1FBQzNDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztRQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0tBQ2xCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxxQkFBZSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1poQyxJQUFJLGNBQWMsR0FBRyxJQUFXLENBQUM7QUFFakMscUJBQWUsRUFBQyxjQUFjLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNKaEMscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9wcmVsb2FkLnRzIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlLy4vc3JjL3Byb3Zlci9iYWNrZW5kL2luaXQudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvcHJvdmVyL2JhY2tlbmQvaW5zdGFuY2UudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IEluaXRQcm92ZXJLaXQgZnJvbSAnLi4vcHJvdmVyL2JhY2tlbmQvaW5pdCc7XG5pbXBvcnQgUHJvdmVyIGZyb20gJy4uL3Byb3Zlci9iYWNrZW5kL3Byb3ZlcmtpdCc7XG5pbXBvcnQgeyBjb250ZXh0QnJpZGdlIH0gZnJvbSAnZWxlY3Ryb24nO1xuXG5jb25zdCBwcm92ZXIgPSB7XG4gIE5hbWU6ICgpID0+IFwicHJvdmVya2l0XCIsXG4gIFNldHVwOiAodXJsOiBzdHJpbmcsIG9wdGlvbjogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTZXR1cCB3aXRoIHBhcmFtczpcIiwgdXJsLCBvcHRpb24pO1xuICAgIHJldHVybiBcIlByb3ZlciBzZXR1cCBjb21wbGV0ZWQuXCI7XG4gIH0sXG4gIFNpZ246IChvcHRpb246IGFueSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LlBST1ZFUl9LSVRfU0lHTl9VUkwgfHwgXCJcIjtcbiAgICBjb25zb2xlLmxvZyhcIlNpZ25pbmcgd2l0aCBwYXJhbXM6XCIsIHVybCwgb3B0aW9uKTtcbiAgICByZXR1cm4gXCJQcm92ZXIgc2lnbiBjb21wbGV0ZWQuXCI7XG4gIH1cbn07XG5cblxuSW5pdFByb3ZlcktpdDxzdHJpbmcsIHN0cmluZz4ocHJvdmVyIGFzIFByb3ZlcjxzdHJpbmcsIHN0cmluZz4pO1xuIiwiaW1wb3J0IHsgY29udGV4dEJyaWRnZSB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBQcm92ZXIgZnJvbSAnLi9wcm92ZXJraXQnO1xuaW1wb3J0IFByb3Zlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnO1xuXG5jb25zdCBJbml0UHJvdmVyQnJpZGdlID0gPFQxLCBUMj4ocHJvdmVyOiBQcm92ZXI8VDEsIFQyPikgPT4ge1xuICBQcm92ZXJJbnN0YW5jZS5Qcm92ZXJJbnN0YW5jZSA9IHByb3ZlcjtcblxuICBjb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdwcm92ZXJraXQnLCB7XG4gICAgU2V0dXA6IHByb3Zlci5TZXR1cCxcbiAgICBTaWduOiBwcm92ZXIuU2lnbixcbiAgICBOYW1lOiBwcm92ZXIuTmFtZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRQcm92ZXJCcmlkZ2U7IiwiaW1wb3J0IFByb3ZlciBmcm9tICcuL3Byb3ZlcmtpdCc7XG5cbmxldCBQcm92ZXJJbnN0YW5jZSA9IG51bGwgYXMgYW55O1xuXG5leHBvcnQgZGVmYXVsdCB7UHJvdmVySW5zdGFuY2V9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL3ByZWxvYWQudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=