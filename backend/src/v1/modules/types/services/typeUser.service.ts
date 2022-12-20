import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IRepositoryTypeUser from 'src/v1/modules/types/repositories/typeUser.repository';
import { EntityTypeUser } from 'src/v1/modules/types/typeorm/entities/typeUser.entity';
import { RepositoryTypeUser } from 'src/v1/modules/types/typeorm/repositories/typeUser.repository';
import { ICreateTypeUserDTO } from '../dtos/CreateTypeUser.dto';

@Injectable()
export class ServiceTypeUser {
  constructor(
    @InjectRepository(RepositoryTypeUser)
    private readonly repositoryTypeUser: IRepositoryTypeUser,
  ) {}

  async create(data: ICreateTypeUserDTO): Promise<EntityTypeUser> {
    const valida = await this.repositoryTypeUser.findByName(data.name);

    if (valida) {
      throw new ConflictException(`Type User already exists`);
    }

    return this.repositoryTypeUser.createTypeUser(data);
  }

  async update(data: EntityTypeUser): Promise<EntityTypeUser> {
    const user = await this.repositoryTypeUser.findByName(data.name);

    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }

    return this.repositoryTypeUser.updateTypeUser(data);
  }

  async remove(id: string): Promise<void> {
    const valid = await this.repositoryTypeUser.findById(id);

    if (!valid) {
      throw new NotFoundException(`Type user not found `);
    }

    return this.repositoryTypeUser.removeTypeUser(id);
  }

  async findAll(): Promise<EntityTypeUser[]> {
    return await this.repositoryTypeUser.findByAll();
  }

  async findById(id: string): Promise<EntityTypeUser> {
    const valid = await this.repositoryTypeUser.findById(id);

    return valid;
  }

  async findByName(name: string): Promise<EntityTypeUser | undefined> {
    const valid = await this.repositoryTypeUser.findById(name);

    return valid;
  }
}
