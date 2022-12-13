import { JwtStrategy } from 'src/v1/modules/user/strategy/auth/jwt.strategy';
import { LocalStrategy } from 'src/v1/modules/user/strategy/auth/local.strategy';

export default [JwtStrategy, LocalStrategy];
