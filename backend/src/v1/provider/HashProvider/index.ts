import { Provider } from '@nestjs/common';
import CryptoProvider from './HashProvider';

export default {
  provide: 'HashProvider',
  useClass: CryptoProvider,
} as Provider;
