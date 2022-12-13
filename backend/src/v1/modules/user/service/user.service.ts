import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { RepositoryUser } from '../typeorm/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateUserDTO } from '../dtos/Createduser.DTO';
import { EntityUser } from '../typeorm/entities/user.entity';
import IRepositoryUser from '../repositories/user.repository';
import { IUpdateUserDTO } from 'src/v1/modules/user/dtos/Updateduser.DTO';
import * as userService from './User';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

@Injectable()
export class ServiceUser {
  constructor(
    @InjectRepository(RepositoryUser)
    private readonly repositoryUser: IRepositoryUser,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,
  ) {}

  async create(data: ICreateUserDTO): Promise<EntityUser> {
    return userService.create({
      newUser: data,
      repository: this.repositoryUser,
      hashProvider: this.hashProvider,
    });
  }

  async update(data: IUpdateUserDTO): Promise<EntityUser> {
    const user = await this.repositoryUser.findByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }

    return userService.update({
      newUser: data,
      repository: this.repositoryUser,
      userUpdate: user,
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
    return this.repositoryUser.findById(id);
  }

  async findByName(username: string): Promise<EntityUser | undefined> {
    return this.repositoryUser.findByName(username);
  }

  async findByEmail(email: string): Promise<EntityUser | undefined> {
    return this.repositoryUser.findByName(email);
  }
}
