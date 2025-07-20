import { contextBridge } from 'electron';
import Prover from './proverkit';
import ProverInstance from './instance';

const InitProverBridge = (prover: Prover) => {
  ProverInstance.ProverInstance = prover;

  contextBridge.exposeInMainWorld('proverkit', {
    Setup: prover.Setup,
    Sign: prover.Sign,
    Name: prover.Name,
  });
}

export default InitProverBridge;