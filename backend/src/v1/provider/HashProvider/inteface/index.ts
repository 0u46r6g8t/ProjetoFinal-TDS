export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  verifyHash(payload: string, hash: string): Promise<boolean>;
}
