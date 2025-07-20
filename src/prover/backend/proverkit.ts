export default interface Prover {
  Name(): string;
  Setup(signer: string): string;
  Sign(option: any): string;
}

