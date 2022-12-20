import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ILoginDTO } from 'src/v1/modules/user/dtos/LoginAuth.DTO';
import { IResponseLoginDTO } from 'src/v1/modules/user/dtos/ResponseLogin.DTO';
import IRepositoryRefreshToken from 'src/v1/modules/user/repositories/refreshToken.repository';
import IRepositoryUser from 'src/v1/modules/user/repositories/user.repository';
import { EntityRefreshToken } from 'src/v1/modules/user/typeorm/entities/refreshToken.entity';
import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';
import { RepositoryRefreshToken } from 'src/v1/modules/user/typeorm/repositories/refreshToken.repository';
import { RepositoryUser } from 'src/v1/modules/user/typeorm/repositories/user.repository';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

@Injectable()
export class ServiceAuth {
  constructor(
    @InjectRepository(RepositoryUser)
    private readonly userRepository: IRepositoryUser,

    @InjectRepository(RepositoryRefreshToken)
    private readonly refreshTokenRepository: IRepositoryRefreshToken,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    private readonly jwtService: JwtService,
  ) {}

  async validate({
    username,
    password,
  }: ILoginDTO): Promise<EntityUser | undefined> {
    const user = await this.userRepository.findByEmail(username);

    if (user && this.hashProvider.verifyHash(user.password, password)) {
      return user;
    }

    return null;
  }

  private async invalidateToken(token: EntityRefreshToken): Promise<void> {
    await this.refreshTokenRepository.updateSave({
      ...token,
      status: false,
    });
  }

  async login(userFind: any): Promise<IResponseLoginDTO> {
    const user = await this.userRepository.findByEmail(userFind.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const payload = {
      sub: user.id,
      login: user.email,
      type: user.userId.name,
    };
    const hash = this.jwtService.sign(payload);
    if (!user) {
      throw new Error('User not found');
    }

    await this.refreshTokenRepository.createSave({
      hash,
      login: user.email,
    });
    return {
      auth: {
        accessToken: hash,
      },
      member: user,
    };
  }
}
