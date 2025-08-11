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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/

// import { promises as fsp } from "fs";
// import { spawn } from "child_process";
// import { contextBridge, ipcRenderer, ipcMain } from "electron";
Object.defineProperty(exports, "__esModule", ({ value: true }));
// const env = {
//   URL: process.env.PROVER_KIT_SIGN_URL || "",
//   MESSAGE: process.env.PROVER_KIT_MESSAGE || "",
//   COUNT: process.env.PROVER_KIT_COUNT || "0",
// };
// function run(cmd: string, args: string[]) {
//   return new Promise<{ code: number, stdout: string, stderr: string }>((resolve, reject) => {
//     const p = spawn(cmd, args, { env: process.env });
//     let stdout = "", stderr = "";
//     p.stdout.on("data", d => stdout += d.toString());
//     p.stderr.on("data", d => stderr += d.toString());
//     p.on("error", reject);
//     p.on("close", code => resolve({ code: code ?? -1, stdout, stderr }));
//   });
// }
// export const prover = {
//   Name() { return "proverkit"; },
//   async Setup(signer: string, option: any) {
//     console.log("Setup with params:", signer, option);
//     await fsp.writeFile("signer.json", signer, "utf-8");
//     return "Prover setup completed.";
//   },
//   async Sign(option: any) {
//     const { code, stdout, stderr } = await run("go", [
//       "run", ".", "sign",
//       "--message", env.MESSAGE,
//       "--count", env.COUNT,
//       "--url", env.URL,
//     ]);
//     console.log("Signing result:", { code, stdout, stderr });
//     if (code !== 0) throw new Error(`sign failed: ${stderr || stdout}`);
//     return "Prover sign completed.";
//   },
//   async Update(option: any) {
//     const { code, stdout, stderr } = await run("go", [
//       "run", ".", "update", "--url", env.URL,
//     ]);
//     console.log("Updating result:", { code, stdout, stderr });
//     if (code !== 0) throw new Error(`update failed: ${stderr || stdout}`);
//     return "Prover update completed.";
//   },
// };
// ipcMain.handle("prover:name", () => prover.Name());
// ipcMain.handle("prover:setup", (_e, signer: string, option: any) => prover.Setup(signer, option));
// ipcMain.handle("prover:sign", (_e, option: any) => prover.Sign(option));
// ipcMain.handle("prover:update", (_e, option: any) => prover.Update(option));
// contextBridge.exposeInMainWorld("proverkit", {
//   name: () => ipcRenderer.invoke("prover:name"),
//   setup: (signer: string, option?: any) => ipcRenderer.invoke("prover:setup", signer, option),
//   sign:  (option?: any) => ipcRenderer.invoke("prover:sign", option),
//   update:(option?: any) => ipcRenderer.invoke("prover:update", option),
// });
const electron_1 = __webpack_require__(/*! electron */ "electron");
electron_1.contextBridge.exposeInMainWorld("proverkit", {
    name: () => electron_1.ipcRenderer.invoke("prover:name"),
    setup: (signer, option) => electron_1.ipcRenderer.invoke("prover:setup", signer, option),
    sign: (option) => electron_1.ipcRenderer.invoke("prover:sign", option),
    update: (option) => electron_1.ipcRenderer.invoke("prover:update", option),
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBLHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7OztBQ3RCQSx3Q0FBd0M7QUFDeEMseUNBQXlDO0FBQ3pDLGtFQUFrRTs7QUFFbEUsZ0JBQWdCO0FBQ2hCLGdEQUFnRDtBQUNoRCxtREFBbUQ7QUFDbkQsZ0RBQWdEO0FBQ2hELEtBQUs7QUFFTCw4Q0FBOEM7QUFDOUMsZ0dBQWdHO0FBQ2hHLHdEQUF3RDtBQUN4RCxvQ0FBb0M7QUFDcEMsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCw2QkFBNkI7QUFDN0IsNEVBQTRFO0FBQzVFLFFBQVE7QUFDUixJQUFJO0FBRUosMEJBQTBCO0FBQzFCLG9DQUFvQztBQUVwQywrQ0FBK0M7QUFDL0MseURBQXlEO0FBQ3pELDJEQUEyRDtBQUMzRCx3Q0FBd0M7QUFDeEMsT0FBTztBQUVQLDhCQUE4QjtBQUM5Qix5REFBeUQ7QUFDekQsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLFVBQVU7QUFDVixnRUFBZ0U7QUFDaEUsMkVBQTJFO0FBQzNFLHVDQUF1QztBQUN2QyxPQUFPO0FBRVAsZ0NBQWdDO0FBQ2hDLHlEQUF5RDtBQUN6RCxnREFBZ0Q7QUFDaEQsVUFBVTtBQUNWLGlFQUFpRTtBQUNqRSw2RUFBNkU7QUFDN0UseUNBQXlDO0FBQ3pDLE9BQU87QUFDUCxLQUFLO0FBRUwsc0RBQXNEO0FBQ3RELHFHQUFxRztBQUNyRywyRUFBMkU7QUFDM0UsK0VBQStFO0FBRS9FLGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQsaUdBQWlHO0FBQ2pHLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUsTUFBTTtBQUVOLG1FQUFzRDtBQUV0RCx3QkFBYSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRTtJQUMzQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzdDLEtBQUssRUFBRSxDQUFDLE1BQWMsRUFBRSxNQUFZLEVBQUUsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQzNGLElBQUksRUFBRyxDQUFDLE1BQVksRUFBRSxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztJQUNsRSxNQUFNLEVBQUMsQ0FBQyxNQUFZLEVBQUUsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7Q0FDckUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWJvaWxlcnBsYXRlLy4vc3JjL21haW4vcHJlbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCAoKSA9PiB7XG5yZXR1cm4gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGltcG9ydCB7IHByb21pc2VzIGFzIGZzcCB9IGZyb20gXCJmc1wiO1xuLy8gaW1wb3J0IHsgc3Bhd24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuLy8gaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIsIGlwY01haW4gfSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuLy8gY29uc3QgZW52ID0ge1xuLy8gICBVUkw6IHByb2Nlc3MuZW52LlBST1ZFUl9LSVRfU0lHTl9VUkwgfHwgXCJcIixcbi8vICAgTUVTU0FHRTogcHJvY2Vzcy5lbnYuUFJPVkVSX0tJVF9NRVNTQUdFIHx8IFwiXCIsXG4vLyAgIENPVU5UOiBwcm9jZXNzLmVudi5QUk9WRVJfS0lUX0NPVU5UIHx8IFwiMFwiLFxuLy8gfTtcblxuLy8gZnVuY3Rpb24gcnVuKGNtZDogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSkge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2U8eyBjb2RlOiBudW1iZXIsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZyB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgY29uc3QgcCA9IHNwYXduKGNtZCwgYXJncywgeyBlbnY6IHByb2Nlc3MuZW52IH0pO1xuLy8gICAgIGxldCBzdGRvdXQgPSBcIlwiLCBzdGRlcnIgPSBcIlwiO1xuLy8gICAgIHAuc3Rkb3V0Lm9uKFwiZGF0YVwiLCBkID0+IHN0ZG91dCArPSBkLnRvU3RyaW5nKCkpO1xuLy8gICAgIHAuc3RkZXJyLm9uKFwiZGF0YVwiLCBkID0+IHN0ZGVyciArPSBkLnRvU3RyaW5nKCkpO1xuLy8gICAgIHAub24oXCJlcnJvclwiLCByZWplY3QpO1xuLy8gICAgIHAub24oXCJjbG9zZVwiLCBjb2RlID0+IHJlc29sdmUoeyBjb2RlOiBjb2RlID8/IC0xLCBzdGRvdXQsIHN0ZGVyciB9KSk7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgcHJvdmVyID0ge1xuLy8gICBOYW1lKCkgeyByZXR1cm4gXCJwcm92ZXJraXRcIjsgfSxcblxuLy8gICBhc3luYyBTZXR1cChzaWduZXI6IHN0cmluZywgb3B0aW9uOiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIlNldHVwIHdpdGggcGFyYW1zOlwiLCBzaWduZXIsIG9wdGlvbik7XG4vLyAgICAgYXdhaXQgZnNwLndyaXRlRmlsZShcInNpZ25lci5qc29uXCIsIHNpZ25lciwgXCJ1dGYtOFwiKTtcbi8vICAgICByZXR1cm4gXCJQcm92ZXIgc2V0dXAgY29tcGxldGVkLlwiO1xuLy8gICB9LFxuXG4vLyAgIGFzeW5jIFNpZ24ob3B0aW9uOiBhbnkpIHtcbi8vICAgICBjb25zdCB7IGNvZGUsIHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBydW4oXCJnb1wiLCBbXG4vLyAgICAgICBcInJ1blwiLCBcIi5cIiwgXCJzaWduXCIsXG4vLyAgICAgICBcIi0tbWVzc2FnZVwiLCBlbnYuTUVTU0FHRSxcbi8vICAgICAgIFwiLS1jb3VudFwiLCBlbnYuQ09VTlQsXG4vLyAgICAgICBcIi0tdXJsXCIsIGVudi5VUkwsXG4vLyAgICAgXSk7XG4vLyAgICAgY29uc29sZS5sb2coXCJTaWduaW5nIHJlc3VsdDpcIiwgeyBjb2RlLCBzdGRvdXQsIHN0ZGVyciB9KTtcbi8vICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKGBzaWduIGZhaWxlZDogJHtzdGRlcnIgfHwgc3Rkb3V0fWApO1xuLy8gICAgIHJldHVybiBcIlByb3ZlciBzaWduIGNvbXBsZXRlZC5cIjtcbi8vICAgfSxcblxuLy8gICBhc3luYyBVcGRhdGUob3B0aW9uOiBhbnkpIHtcbi8vICAgICBjb25zdCB7IGNvZGUsIHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBydW4oXCJnb1wiLCBbXG4vLyAgICAgICBcInJ1blwiLCBcIi5cIiwgXCJ1cGRhdGVcIiwgXCItLXVybFwiLCBlbnYuVVJMLFxuLy8gICAgIF0pO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgcmVzdWx0OlwiLCB7IGNvZGUsIHN0ZG91dCwgc3RkZXJyIH0pO1xuLy8gICAgIGlmIChjb2RlICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoYHVwZGF0ZSBmYWlsZWQ6ICR7c3RkZXJyIHx8IHN0ZG91dH1gKTtcbi8vICAgICByZXR1cm4gXCJQcm92ZXIgdXBkYXRlIGNvbXBsZXRlZC5cIjtcbi8vICAgfSxcbi8vIH07XG5cbi8vIGlwY01haW4uaGFuZGxlKFwicHJvdmVyOm5hbWVcIiwgKCkgPT4gcHJvdmVyLk5hbWUoKSk7XG4vLyBpcGNNYWluLmhhbmRsZShcInByb3ZlcjpzZXR1cFwiLCAoX2UsIHNpZ25lcjogc3RyaW5nLCBvcHRpb246IGFueSkgPT4gcHJvdmVyLlNldHVwKHNpZ25lciwgb3B0aW9uKSk7XG4vLyBpcGNNYWluLmhhbmRsZShcInByb3ZlcjpzaWduXCIsIChfZSwgb3B0aW9uOiBhbnkpID0+IHByb3Zlci5TaWduKG9wdGlvbikpO1xuLy8gaXBjTWFpbi5oYW5kbGUoXCJwcm92ZXI6dXBkYXRlXCIsIChfZSwgb3B0aW9uOiBhbnkpID0+IHByb3Zlci5VcGRhdGUob3B0aW9uKSk7XG5cbi8vIGNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXCJwcm92ZXJraXRcIiwge1xuLy8gICBuYW1lOiAoKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoXCJwcm92ZXI6bmFtZVwiKSxcbi8vICAgc2V0dXA6IChzaWduZXI6IHN0cmluZywgb3B0aW9uPzogYW55KSA9PiBpcGNSZW5kZXJlci5pbnZva2UoXCJwcm92ZXI6c2V0dXBcIiwgc2lnbmVyLCBvcHRpb24pLFxuLy8gICBzaWduOiAgKG9wdGlvbj86IGFueSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicHJvdmVyOnNpZ25cIiwgb3B0aW9uKSxcbi8vICAgdXBkYXRlOihvcHRpb24/OiBhbnkpID0+IGlwY1JlbmRlcmVyLmludm9rZShcInByb3Zlcjp1cGRhdGVcIiwgb3B0aW9uKSxcbi8vIH0pO1xuXG5pbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciB9IGZyb20gXCJlbGVjdHJvblwiO1xuXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKFwicHJvdmVya2l0XCIsIHtcbiAgbmFtZTogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicHJvdmVyOm5hbWVcIiksXG4gIHNldHVwOiAoc2lnbmVyOiBzdHJpbmcsIG9wdGlvbj86IGFueSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicHJvdmVyOnNldHVwXCIsIHNpZ25lciwgb3B0aW9uKSxcbiAgc2lnbjogIChvcHRpb24/OiBhbnkpID0+IGlwY1JlbmRlcmVyLmludm9rZShcInByb3ZlcjpzaWduXCIsIG9wdGlvbiksXG4gIHVwZGF0ZToob3B0aW9uPzogYW55KSA9PiBpcGNSZW5kZXJlci5pbnZva2UoXCJwcm92ZXI6dXBkYXRlXCIsIG9wdGlvbiksXG59KTtcblxuZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9