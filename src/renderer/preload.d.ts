import Prover from '../prover/backend/proverkit';

import { SetupInput, SignInput } from '../prover/backend/io';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    proverkit: Prover<SetupInput, SignInput>;
  }
}

export {};
