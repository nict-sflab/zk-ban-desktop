import { SetupInput, SignInput } from "./io";

export default interface Prover<SetupOutput, SignOutput> {
  Name(): string;
  Setup(signer: SetupInput): SetupOutput;
  Sign(option: SignInput): SignOutput;
}

