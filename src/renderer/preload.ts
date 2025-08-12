declare global {
  interface Window {
    proverkit: {
      name(): Promise<string>;
      setup(signer: string, option?: any): Promise<string>;
      sign(option?: any): Promise<string>;
      update(option?: any): Promise<string>;
    };
  }
}
