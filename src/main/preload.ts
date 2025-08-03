// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import InitProverKit from '../prover/backend/init';
import Prover from '../prover/backend/proverkit';
import { contextBridge } from 'electron';

const prover = {
  Name: () => "proverkit",
  Setup: (url: string, option: any) => {
    console.log("Setup with params:", url, option);
    return "Prover setup completed.";
  },
  Sign: (option: any) => {
    const url = process.env.PROVER_KIT_SIGN_URL || "";
    console.log("Signing with params:", url, option);
    return "Prover sign completed.";
  }
};


InitProverKit<string, string>(prover as Prover<string, string>);
