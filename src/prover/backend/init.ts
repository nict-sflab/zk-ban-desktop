import { contextBridge } from 'electron';
import Prover from './proverkit';
import ProverInstance from './instance';

const InitProverBridge = <T1, T2>(prover: Prover<T1, T2>) => {
  ProverInstance.ProverInstance = prover;

  contextBridge.exposeInMainWorld('proverkit', {
    Setup: prover.Setup,
    Sign: prover.Sign,
    Name: prover.Name,
  });
}

export default InitProverBridge;