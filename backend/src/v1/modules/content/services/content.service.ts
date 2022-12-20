import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RepositoryContent } from '../typeorm/repositories/content.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateContentDTO } from '../dtos/Createdcontent.DTO';
import { EntityContent } from '../typeorm/entities/content.entity';
import IRepositoryContent from '../repositories/content.repository';
import { IUpdateContentDTO } from '../dtos/Updatedcontent.DTO';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';
import * as ContentService from './content';
import { ServiceTypeContent } from 'src/v1/modules/types/services/typeContent.service';
import { ServiceUser } from 'src/v1/modules/user/service/user.service';

@Injectable()
export class ServiceContent {
  constructor(
    @InjectRepository(RepositoryContent)
    private readonly repositoryContent: IRepositoryContent,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    private readonly serviceTypeContent: ServiceTypeContent,

    private readonly serviceUsers: ServiceUser,
  ) {}

  async create(data: ICreateContentDTO): Promise<EntityContent> {
    return ContentService.create({
      typeContent: this.serviceTypeContent,
      newContent: data,
      users: this.serviceUsers,
      repository: this.repositoryContent,
      hashProvider: this.hashProvider,
    });
  }

  async update(data: IUpdateContentDTO): Promise<EntityContent> {
    const Content = await this.repositoryContent.findByName(data.name);

    if (!Content) {
      throw new BadRequestException('Content não encontrado');
    }

    const type = await this.serviceTypeContent.findById(data.contentId);
    if (!type) {
      throw new NotFoundException(`Type not found`);
    }

    const listUser = await this.serviceUsers.findById(data.users_id);

    if (!listUser) {
      throw new NotFoundException('User not found');
    }

    return this.repositoryContent.updateContent({
      ...data,
      contentId: type,
      users_id: [listUser],
    });
  }

  async remove(id: string): Promise<void> {
    const valida = await this.repositoryContent.findById(id);
    console.log(valida);
    if (!valida) {
      throw new NotFoundException('Content not found');
    }

    return ContentService.deleteContent({
      id,
      repository: this.repositoryContent,
    });
  }

  async findAll(): Promise<EntityContent[]> {
    return await this.repositoryContent.findAll();
  }

  async findById(id: string): Promise<EntityContent> {
    const valida = await this.repositoryContent.findById(id);

    if (!valida) {
      throw new NotFoundException('Content not found');
    }

    return this.repositoryContent.findById(id);
  }

  async findByName(name: string): Promise<EntityContent | undefined> {
    const valida = await this.repositoryContent.findByName(name);

    if (!valida) {
      throw new NotFoundException('Content not found');
    }
    return this.repositoryContent.findByName(name);
  }
}
