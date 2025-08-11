// import { promises as fsp } from "fs";
// import { spawn } from "child_process";
// import { contextBridge, ipcRenderer, ipcMain } from "electron";

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

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("proverkit", {
  name: () => ipcRenderer.invoke("prover:name"),
  setup: (signer: string, option?: any) => ipcRenderer.invoke("prover:setup", signer, option),
  sign:  (option?: any) => ipcRenderer.invoke("prover:sign", option),
  update:(option?: any) => ipcRenderer.invoke("prover:update", option),
});

export {};
