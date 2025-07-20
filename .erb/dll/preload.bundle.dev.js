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

/***/ "./src/main/init.ts":
/*!**************************!*\
  !*** ./src/main/init.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const electron_1 = __webpack_require__(/*! electron */ "electron");
const instance_1 = __importDefault(__webpack_require__(/*! ./instance */ "./src/main/instance.ts"));
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

/***/ "./src/main/instance.ts":
/*!******************************!*\
  !*** ./src/main/instance.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let ProverInstance = null;
exports["default"] = { ProverInstance };


/***/ }),

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
const init_1 = __importDefault(__webpack_require__(/*! ./init */ "./src/main/init.ts"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5idW5kbGUuZGV2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWQSxtRUFBeUM7QUFFekMsb0dBQXdDO0FBRXhDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUMxQyxrQkFBYyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7SUFFdkMsd0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7UUFDM0MsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1FBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELHFCQUFlLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDWmhDLElBQUksY0FBYyxHQUFZLElBQVcsQ0FBQztBQUUxQyxxQkFBZSxFQUFDLGNBQWMsRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmhDLGlEQUFpRDtBQUNqRCxnQ0FBZ0M7QUFDaEMsd0ZBQW1DO0FBRW5DLE1BQU0sTUFBTSxHQUFHO0lBQ2IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVc7SUFDdkIsS0FBSyxFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsTUFBVyxFQUFFLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFDO0FBR0Ysa0JBQWEsRUFBQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDaEJyQixxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9tYWluL2luaXQudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9tYWluL3ByZWxvYWQudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBjb250ZXh0QnJpZGdlIH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IFByb3ZlciBmcm9tICcuL3Byb3ZlcmtpdCc7XG5pbXBvcnQgUHJvdmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSc7XG5cbmNvbnN0IEluaXRQcm92ZXJCcmlkZ2UgPSAocHJvdmVyOiBQcm92ZXIpID0+IHtcbiAgUHJvdmVySW5zdGFuY2UuUHJvdmVySW5zdGFuY2UgPSBwcm92ZXI7XG5cbiAgY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgncHJvdmVya2l0Jywge1xuICAgIFNldHVwOiBwcm92ZXIuU2V0dXAsXG4gICAgU2lnbjogcHJvdmVyLlNpZ24sXG4gICAgTmFtZTogcHJvdmVyLk5hbWUsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbml0UHJvdmVyQnJpZGdlOyIsImltcG9ydCBQcm92ZXIgZnJvbSAnLi9wcm92ZXJraXQnO1xuXG5sZXQgUHJvdmVySW5zdGFuY2UgOiBQcm92ZXIgPSBudWxsIGFzIGFueTtcblxuZXhwb3J0IGRlZmF1bHQge1Byb3Zlckluc3RhbmNlfTsiLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IEluaXRQcm92ZXJLaXQgZnJvbSAnLi9pbml0JztcblxuY29uc3QgcHJvdmVyID0ge1xuICBOYW1lOiAoKSA9PiBcInByb3ZlcmtpdFwiLFxuICBTZXR1cDogKHNpZ25lcjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIFwiUHJvdmVyIHNldHVwIGNvbXBsZXRlZC5cIjtcbiAgfSxcbiAgU2lnbjogKG9wdGlvbjogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaWduaW5nIHdpdGggb3B0aW9uczpcIiwgb3B0aW9uKTtcbiAgICByZXR1cm4gXCJQcm92ZXIgc2lnbiBjb21wbGV0ZWQuXCI7XG4gIH1cbn07XG5cblxuSW5pdFByb3ZlcktpdChwcm92ZXIpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9wcmVsb2FkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9