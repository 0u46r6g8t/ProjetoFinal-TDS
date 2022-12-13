import { hash, compare } from 'bcryptjs';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

export default class CryptoProvider implements IHashProvider {
  generateHash(payload: string): Promise<string> {
    return hash(payload, 12);
  }
  verifyHash(payload: string, hash: string): Promise<boolean> {
    return compare(payload, hash);
  }
}
