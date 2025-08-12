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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5idW5kbGUuZGV2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7O0FDVkEscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsa0VBQWtFOztBQUVsRSxnQkFBZ0I7QUFDaEIsZ0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFDaEQsS0FBSztBQUVMLDhDQUE4QztBQUM5QyxnR0FBZ0c7QUFDaEcsd0RBQXdEO0FBQ3hELG9DQUFvQztBQUNwQyx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBQ3hELDZCQUE2QjtBQUM3Qiw0RUFBNEU7QUFDNUUsUUFBUTtBQUNSLElBQUk7QUFFSiwwQkFBMEI7QUFDMUIsb0NBQW9DO0FBRXBDLCtDQUErQztBQUMvQyx5REFBeUQ7QUFDekQsMkRBQTJEO0FBQzNELHdDQUF3QztBQUN4QyxPQUFPO0FBRVAsOEJBQThCO0FBQzlCLHlEQUF5RDtBQUN6RCw0QkFBNEI7QUFDNUIsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUIsVUFBVTtBQUNWLGdFQUFnRTtBQUNoRSwyRUFBMkU7QUFDM0UsdUNBQXVDO0FBQ3ZDLE9BQU87QUFFUCxnQ0FBZ0M7QUFDaEMseURBQXlEO0FBQ3pELGdEQUFnRDtBQUNoRCxVQUFVO0FBQ1YsaUVBQWlFO0FBQ2pFLDZFQUE2RTtBQUM3RSx5Q0FBeUM7QUFDekMsT0FBTztBQUNQLEtBQUs7QUFFTCxzREFBc0Q7QUFDdEQscUdBQXFHO0FBQ3JHLDJFQUEyRTtBQUMzRSwrRUFBK0U7QUFFL0UsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxpR0FBaUc7QUFDakcsd0VBQXdFO0FBQ3hFLDBFQUEwRTtBQUMxRSxNQUFNO0FBRU4sbUVBQXNEO0FBRXRELHdCQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO0lBQzNDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDN0MsS0FBSyxFQUFFLENBQUMsTUFBYyxFQUFFLE1BQVksRUFBRSxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDM0YsSUFBSSxFQUFHLENBQUMsTUFBWSxFQUFFLEVBQUUsQ0FBQyxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0lBQ2xFLE1BQU0sRUFBQyxDQUFDLE1BQVksRUFBRSxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQztDQUNyRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9wcmVsb2FkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnNwIH0gZnJvbSBcImZzXCI7XG4vLyBpbXBvcnQgeyBzcGF3biB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG4vLyBpbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgaXBjTWFpbiB9IGZyb20gXCJlbGVjdHJvblwiO1xuXG4vLyBjb25zdCBlbnYgPSB7XG4vLyAgIFVSTDogcHJvY2Vzcy5lbnYuUFJPVkVSX0tJVF9TSUdOX1VSTCB8fCBcIlwiLFxuLy8gICBNRVNTQUdFOiBwcm9jZXNzLmVudi5QUk9WRVJfS0lUX01FU1NBR0UgfHwgXCJcIixcbi8vICAgQ09VTlQ6IHByb2Nlc3MuZW52LlBST1ZFUl9LSVRfQ09VTlQgfHwgXCIwXCIsXG4vLyB9O1xuXG4vLyBmdW5jdGlvbiBydW4oY21kOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdKSB7XG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZTx7IGNvZGU6IG51bWJlciwgc3Rkb3V0OiBzdHJpbmcsIHN0ZGVycjogc3RyaW5nIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICBjb25zdCBwID0gc3Bhd24oY21kLCBhcmdzLCB7IGVudjogcHJvY2Vzcy5lbnYgfSk7XG4vLyAgICAgbGV0IHN0ZG91dCA9IFwiXCIsIHN0ZGVyciA9IFwiXCI7XG4vLyAgICAgcC5zdGRvdXQub24oXCJkYXRhXCIsIGQgPT4gc3Rkb3V0ICs9IGQudG9TdHJpbmcoKSk7XG4vLyAgICAgcC5zdGRlcnIub24oXCJkYXRhXCIsIGQgPT4gc3RkZXJyICs9IGQudG9TdHJpbmcoKSk7XG4vLyAgICAgcC5vbihcImVycm9yXCIsIHJlamVjdCk7XG4vLyAgICAgcC5vbihcImNsb3NlXCIsIGNvZGUgPT4gcmVzb2x2ZSh7IGNvZGU6IGNvZGUgPz8gLTEsIHN0ZG91dCwgc3RkZXJyIH0pKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBwcm92ZXIgPSB7XG4vLyAgIE5hbWUoKSB7IHJldHVybiBcInByb3ZlcmtpdFwiOyB9LFxuXG4vLyAgIGFzeW5jIFNldHVwKHNpZ25lcjogc3RyaW5nLCBvcHRpb246IGFueSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiU2V0dXAgd2l0aCBwYXJhbXM6XCIsIHNpZ25lciwgb3B0aW9uKTtcbi8vICAgICBhd2FpdCBmc3Aud3JpdGVGaWxlKFwic2lnbmVyLmpzb25cIiwgc2lnbmVyLCBcInV0Zi04XCIpO1xuLy8gICAgIHJldHVybiBcIlByb3ZlciBzZXR1cCBjb21wbGV0ZWQuXCI7XG4vLyAgIH0sXG5cbi8vICAgYXN5bmMgU2lnbihvcHRpb246IGFueSkge1xuLy8gICAgIGNvbnN0IHsgY29kZSwgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IHJ1bihcImdvXCIsIFtcbi8vICAgICAgIFwicnVuXCIsIFwiLlwiLCBcInNpZ25cIixcbi8vICAgICAgIFwiLS1tZXNzYWdlXCIsIGVudi5NRVNTQUdFLFxuLy8gICAgICAgXCItLWNvdW50XCIsIGVudi5DT1VOVCxcbi8vICAgICAgIFwiLS11cmxcIiwgZW52LlVSTCxcbi8vICAgICBdKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIlNpZ25pbmcgcmVzdWx0OlwiLCB7IGNvZGUsIHN0ZG91dCwgc3RkZXJyIH0pO1xuLy8gICAgIGlmIChjb2RlICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoYHNpZ24gZmFpbGVkOiAke3N0ZGVyciB8fCBzdGRvdXR9YCk7XG4vLyAgICAgcmV0dXJuIFwiUHJvdmVyIHNpZ24gY29tcGxldGVkLlwiO1xuLy8gICB9LFxuXG4vLyAgIGFzeW5jIFVwZGF0ZShvcHRpb246IGFueSkge1xuLy8gICAgIGNvbnN0IHsgY29kZSwgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IHJ1bihcImdvXCIsIFtcbi8vICAgICAgIFwicnVuXCIsIFwiLlwiLCBcInVwZGF0ZVwiLCBcIi0tdXJsXCIsIGVudi5VUkwsXG4vLyAgICAgXSk7XG4vLyAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyByZXN1bHQ6XCIsIHsgY29kZSwgc3Rkb3V0LCBzdGRlcnIgfSk7XG4vLyAgICAgaWYgKGNvZGUgIT09IDApIHRocm93IG5ldyBFcnJvcihgdXBkYXRlIGZhaWxlZDogJHtzdGRlcnIgfHwgc3Rkb3V0fWApO1xuLy8gICAgIHJldHVybiBcIlByb3ZlciB1cGRhdGUgY29tcGxldGVkLlwiO1xuLy8gICB9LFxuLy8gfTtcblxuLy8gaXBjTWFpbi5oYW5kbGUoXCJwcm92ZXI6bmFtZVwiLCAoKSA9PiBwcm92ZXIuTmFtZSgpKTtcbi8vIGlwY01haW4uaGFuZGxlKFwicHJvdmVyOnNldHVwXCIsIChfZSwgc2lnbmVyOiBzdHJpbmcsIG9wdGlvbjogYW55KSA9PiBwcm92ZXIuU2V0dXAoc2lnbmVyLCBvcHRpb24pKTtcbi8vIGlwY01haW4uaGFuZGxlKFwicHJvdmVyOnNpZ25cIiwgKF9lLCBvcHRpb246IGFueSkgPT4gcHJvdmVyLlNpZ24ob3B0aW9uKSk7XG4vLyBpcGNNYWluLmhhbmRsZShcInByb3Zlcjp1cGRhdGVcIiwgKF9lLCBvcHRpb246IGFueSkgPT4gcHJvdmVyLlVwZGF0ZShvcHRpb24pKTtcblxuLy8gY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZChcInByb3ZlcmtpdFwiLCB7XG4vLyAgIG5hbWU6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZShcInByb3ZlcjpuYW1lXCIpLFxuLy8gICBzZXR1cDogKHNpZ25lcjogc3RyaW5nLCBvcHRpb24/OiBhbnkpID0+IGlwY1JlbmRlcmVyLmludm9rZShcInByb3ZlcjpzZXR1cFwiLCBzaWduZXIsIG9wdGlvbiksXG4vLyAgIHNpZ246ICAob3B0aW9uPzogYW55KSA9PiBpcGNSZW5kZXJlci5pbnZva2UoXCJwcm92ZXI6c2lnblwiLCBvcHRpb24pLFxuLy8gICB1cGRhdGU6KG9wdGlvbj86IGFueSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicHJvdmVyOnVwZGF0ZVwiLCBvcHRpb24pLFxuLy8gfSk7XG5cbmltcG9ydCB7IGNvbnRleHRCcmlkZ2UsIGlwY1JlbmRlcmVyIH0gZnJvbSBcImVsZWN0cm9uXCI7XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXCJwcm92ZXJraXRcIiwge1xuICBuYW1lOiAoKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoXCJwcm92ZXI6bmFtZVwiKSxcbiAgc2V0dXA6IChzaWduZXI6IHN0cmluZywgb3B0aW9uPzogYW55KSA9PiBpcGNSZW5kZXJlci5pbnZva2UoXCJwcm92ZXI6c2V0dXBcIiwgc2lnbmVyLCBvcHRpb24pLFxuICBzaWduOiAgKG9wdGlvbj86IGFueSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicHJvdmVyOnNpZ25cIiwgb3B0aW9uKSxcbiAgdXBkYXRlOihvcHRpb24/OiBhbnkpID0+IGlwY1JlbmRlcmVyLmludm9rZShcInByb3Zlcjp1cGRhdGVcIiwgb3B0aW9uKSxcbn0pO1xuXG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=