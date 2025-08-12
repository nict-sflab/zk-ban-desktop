export interface Prover<TSetup, TSign> {
  Name(): string;
  Setup(signer: string, option: any): Promise<TSetup>;
  Sign(option: any): Promise<TSign>;
  Update(option: any): Promise<string>;
}