import Prover from '../prover/backend/proverkit';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    proverkit: Prover;
  }
}

export {};
