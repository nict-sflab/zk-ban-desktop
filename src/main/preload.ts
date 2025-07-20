// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import InitProverKit from '../prover/backend/init';
import Prover from '../prover/backend/proverkit';

import {SetupInput, SignInput} from '../prover/backend/io';

const prover = {
  Name: () => "proverkit",
  Setup: (signer: SetupInput) => {
    console.log("Setup with options:", signer.Input());
    return "Prover setup completed.";
  },
  Sign: (signInput: SignInput) => {
    console.log("Signing with options:", signInput.URL());
    return "Prover sign completed.";
  }
};


InitProverKit<string, string>(prover as Prover<string, string>);
