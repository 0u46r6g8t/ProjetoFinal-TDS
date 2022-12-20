import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceTypeUser } from 'src/v1/modules/types/services/typeUser.service';
import { IUpdateUserDTO } from 'src/v1/modules/user/dtos/Updateduser.DTO';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';
import { ICreateUserDTO } from '../dtos/Createduser.DTO';
import IRepositoryUser from '../repositories/user.repository';
import { EntityUser } from '../typeorm/entities/user.entity';
import { RepositoryUser } from '../typeorm/repositories/user.repository';
import * as userService from './User';

@Injectable()
export class ServiceUser {
  constructor(
    @InjectRepository(RepositoryUser)
    private readonly repositoryUser: IRepositoryUser,

    private readonly serviceTypeUser: ServiceTypeUser,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,
  ) {}

  async create(data: ICreateUserDTO): Promise<EntityUser> {
    return userService.create({
      newUser: data,
      repository: this.repositoryUser,
      hashProvider: this.hashProvider,
      typeUser: this.serviceTypeUser,
    });
  }

  async update(data: IUpdateUserDTO): Promise<EntityUser> {
    const user = await this.repositoryUser.findByEmail(data.email);
    console.log(user);
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }

    return userService.update({
      hashProvider: this.hashProvider,
      newUser: data,
      repository: this.repositoryUser,
      userUpdate: user,
      typeUser: this.serviceTypeUser,
    });
  }

  async remove(id: string): Promise<void> {
    return userService.deleteUser({
      id,
      repository: this.repositoryUser,
    });
  }

  async findAll(): Promise<EntityUser[]> {
    return await this.repositoryUser.findAllUsers();
  }

  async findById(id: string): Promise<EntityUser> {
    const valida = await this.repositoryUser.findById(id);

    return valida;
  }

  async findByName(username: string): Promise<EntityUser | undefined> {
    const valida = await this.repositoryUser.findByName(username);
    return valida;
  }

  async findByEmail(email: string): Promise<EntityUser | undefined> {
    const valida = await this.repositoryUser.findByEmail(email);

    return valida;
  }
}
