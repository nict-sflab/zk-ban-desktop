import Prover from '../main/proverkit';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    proverkit: Prover;
  }
}

export {};
