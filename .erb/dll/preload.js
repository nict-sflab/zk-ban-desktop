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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsaURBQWlEO0FBQ2pELGdDQUFnQztBQUNoQyxrSEFBbUQ7QUFLbkQsTUFBTSxNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVztJQUN2QixLQUFLLEVBQUUsQ0FBQyxNQUFrQixFQUFFLEVBQUU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRCxPQUFPLHlCQUF5QixDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFvQixFQUFFLEVBQUU7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0RCxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFDO0FBR0Ysa0JBQWEsRUFBaUIsTUFBZ0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJoRSxtRUFBeUM7QUFFekMsOEdBQXdDO0FBRXhDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBUyxNQUFzQixFQUFFLEVBQUU7SUFDMUQsa0JBQWMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBRXZDLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO1FBQzNDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztRQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0tBQ2xCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxxQkFBZSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1poQyxJQUFJLGNBQWMsR0FBRyxJQUFXLENBQUM7QUFFakMscUJBQWUsRUFBQyxjQUFjLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNKaEMscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9wcmVsb2FkLnRzIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlLy4vc3JjL3Byb3Zlci9iYWNrZW5kL2luaXQudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvcHJvdmVyL2JhY2tlbmQvaW5zdGFuY2UudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IEluaXRQcm92ZXJLaXQgZnJvbSAnLi4vcHJvdmVyL2JhY2tlbmQvaW5pdCc7XG5pbXBvcnQgUHJvdmVyIGZyb20gJy4uL3Byb3Zlci9iYWNrZW5kL3Byb3ZlcmtpdCc7XG5cbmltcG9ydCB7U2V0dXBJbnB1dCwgU2lnbklucHV0fSBmcm9tICcuLi9wcm92ZXIvYmFja2VuZC9pbyc7XG5cbmNvbnN0IHByb3ZlciA9IHtcbiAgTmFtZTogKCkgPT4gXCJwcm92ZXJraXRcIixcbiAgU2V0dXA6IChzaWduZXI6IFNldHVwSW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNldHVwIHdpdGggb3B0aW9uczpcIiwgc2lnbmVyLklucHV0KCkpO1xuICAgIHJldHVybiBcIlByb3ZlciBzZXR1cCBjb21wbGV0ZWQuXCI7XG4gIH0sXG4gIFNpZ246IChzaWduSW5wdXQ6IFNpZ25JbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lnbmluZyB3aXRoIG9wdGlvbnM6XCIsIHNpZ25JbnB1dC5VUkwoKSk7XG4gICAgcmV0dXJuIFwiUHJvdmVyIHNpZ24gY29tcGxldGVkLlwiO1xuICB9XG59O1xuXG5cbkluaXRQcm92ZXJLaXQ8c3RyaW5nLCBzdHJpbmc+KHByb3ZlciBhcyBQcm92ZXI8c3RyaW5nLCBzdHJpbmc+KTtcbiIsImltcG9ydCB7IGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgUHJvdmVyIGZyb20gJy4vcHJvdmVya2l0JztcbmltcG9ydCBQcm92ZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJztcblxuY29uc3QgSW5pdFByb3ZlckJyaWRnZSA9IDxUMSwgVDI+KHByb3ZlcjogUHJvdmVyPFQxLCBUMj4pID0+IHtcbiAgUHJvdmVySW5zdGFuY2UuUHJvdmVySW5zdGFuY2UgPSBwcm92ZXI7XG5cbiAgY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgncHJvdmVya2l0Jywge1xuICAgIFNldHVwOiBwcm92ZXIuU2V0dXAsXG4gICAgU2lnbjogcHJvdmVyLlNpZ24sXG4gICAgTmFtZTogcHJvdmVyLk5hbWUsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbml0UHJvdmVyQnJpZGdlOyIsImltcG9ydCBQcm92ZXIgZnJvbSAnLi9wcm92ZXJraXQnO1xuXG5sZXQgUHJvdmVySW5zdGFuY2UgPSBudWxsIGFzIGFueTtcblxuZXhwb3J0IGRlZmF1bHQge1Byb3Zlckluc3RhbmNlfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9wcmVsb2FkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9