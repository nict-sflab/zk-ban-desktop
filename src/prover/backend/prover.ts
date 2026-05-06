import { promises as fsp } from "fs";
import { spawn } from "child_process";
import axios from "axios";

const env = {
  URL: process.env.ZK_BAN_URL || "",
  SIGNER : process.env.ZK_BAN_SIGNER || "",
  KEYPATH : process.env.ZK_BAN_KEYPATH || "",
  VERIFIER : process.env.ZK_BAN_VERIFIER_URL || "",
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
    const base64decode = (data: string) => {
      const cleaned = data
          .replace(/^data:.*?base64,/, '')
          .replace(/[\r\n\s]/g, '')
          .replace(/-/g, '+')
          .replace(/_/g, '/');             

      const padded = cleaned + '='.repeat((4 - cleaned.length % 4) % 4);

      return new Uint8Array(
          [...atob(padded)].map(s => s.charCodeAt(0))
      );
    };


    console.log("Setup with params:", signer, option);
    const signerBin = base64decode(signer)
    await fsp.writeFile("signer.gob", signerBin, "utf-8");

    const resp = await axios.get('http://localhost:8080/group-public-key')
    if (resp.status !== 200) {
        throw new Error(`Failed to fetch group public key: ${resp.statusText}`);
    }

    console.log("Fetched group public key:", resp.data);
    
    const gpk = base64decode(resp.data);
    await fsp.writeFile("gpk.bin", gpk, "utf-8");


    return "Prover setup completed.";
  },

  async Sign(option: any) {
    console.log('zk-ban url', env.URL)
    const searchParams = new URLSearchParams(env.URL);
    let cwd = process.cwd();
    console.log("current directry", cwd);

    const args = [
      "sign", 
      "--message", searchParams.get("message") || "hello",
      "--count", option,
      "--url", env.VERIFIER,
      "--keyPath", env.KEYPATH,
    ]

    console.log('signer command', env.SIGNER, args)

    const { code, stdout, stderr } = await run(env.SIGNER, args);

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
