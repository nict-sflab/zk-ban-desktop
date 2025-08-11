import { promises as fsp } from "fs";
import { spawn } from "child_process";
import axios from "axios";

const ZK_BAN_SIGNER = "../zk-ban-system/example/signer/signer"
const env = {
  URL: process.env.ZK_BAN_URL || "",
};



function run(cmd: string, args: string[]) {
  return new Promise<{ code: number, stdout: string, stderr: string }>((resolve, reject) => {
    const p = spawn(cmd, args, { env: process.env });
    let stdout = "", stderr = "";
    p.stdout.on("data", d => stdout += d.toString());
    p.stderr.on("data", d => stderr += d.toString());
    p.on("error", reject);
    p.on("close", code => resolve({ code: code ?? -1, stdout, stderr }));
  });
}

export const prover = {
  Name() { return "proverkit"; },

  async Setup(signer: string, option: any) {
    const base64decode = (data:string) => {
        return new Uint8Array([...atob(data)].map(s => s.charCodeAt(0)));
    }

    console.log("Setup with params:", signer, option);
    await fsp.writeFile("signer.json", signer, "utf-8");

    const resp = await axios.get('http://localhost:8080/group-public-key')
    if (resp.status !== 200) {
        throw new Error(`Failed to fetch group public key: ${resp.statusText}`);
    }

    const gpk = base64decode(resp.data);
    await fsp.writeFile("gpk.bin", gpk, "utf-8");


    return "Prover setup completed.";
  },

  async Sign(option: any) {
    console.log('zk-ban url', env.URL)
    const searchParams = new URLSearchParams(env.URL);

    const args = [
      "sign", 
      "--message", searchParams.get("message") || "hello",
      "--count", option,
      "--url", searchParams.get("callback") || "http://localhost:8000/verify",
    ]

    const { code, stdout, stderr } = await run(ZK_BAN_SIGNER, args);


    console.log("Signing result:", { args, code, stdout, stderr });
    if (code !== 0) throw new Error(`sign failed: ${stderr || stdout}`);
    return "Prover sign completed.";
  },

  async Update(option: any) {
    const { code, stdout, stderr } = await run("go", [
      "run", ".", "update", "--url", env.URL,
    ]);
    console.log("Updating result:", { code, stdout, stderr });
    if (code !== 0) throw new Error(`update failed: ${stderr || stdout}`);
    return "Prover update completed.";
  },
};
