import { Module } from '@nestjs/common';
import Controllers from 'src/v1/modules/user/controller';
import HashProvider from 'src/v1/provider/HashProvider';
import Services from './service';
import Typeorm from './typeorm';
import { JwtModule } from '@nestjs/jwt';
import authConfig from '../../config/auth';
import { PassportModule } from '@nestjs/passport';
import Strategies from 'src/v1/modules/user/strategy';

const jwtConfig = JwtModule.register({
  secret: authConfig.jwt.secret,
  signOptions: {
    expiresIn: authConfig.jwt.expiresIn,
  },
});

@Module({
  imports: [Typeorm, jwtConfig, PassportModule],
  controllers: [...Controllers],
  providers: [...Services, HashProvider, ...Strategies],
  exports: [...Services],
})
export class UserModule {}
