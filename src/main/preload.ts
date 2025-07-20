// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import InitProverKit from '../prover/backend/init';

const prover = {
  Name: () => "proverkit",
  Setup: (signer: string) => {
    return "Prover setup completed.";
  },
  Sign: (option: any) => {
    console.log("Signing with options:", option);
    return "Prover sign completed.";
  }
};


InitProverKit(prover)
