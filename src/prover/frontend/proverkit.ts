export default interface Prover<SetupOutput, SignOutput> {
  Name(): string;
  Setup(signer: string, option: any): SetupOutput;
  Sign(url: string, option: any): SignOutput;
}

