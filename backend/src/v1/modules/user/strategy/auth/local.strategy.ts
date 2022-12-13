import { EntityUser } from '../../typeorm/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ServiceAuth } from '../../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: ServiceAuth) {
    super();
  }

  async validate(username: string, password: string): Promise<EntityUser> {
    const member = await this.authService.validate({
      username,
      password,
    });

    if (!member) {
      throw new UnauthorizedException(['Not authorized']);
    }
    return member;
  }
}
