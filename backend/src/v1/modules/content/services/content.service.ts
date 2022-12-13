import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { RepositoryContent } from '../typeorm/repositories/content.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateContentDTO } from '../dtos/Createdcontent.DTO';
import { EntityContent } from '../typeorm/entities/content.entity';
import IRepositoryContent from '../repositories/content.repository';
import { IUpdateContentDTO } from '../dtos/Updatedcontent.DTO';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';
import * as ContentService from './content';

@Injectable()
export class ServiceContent {
  constructor(
    @InjectRepository(RepositoryContent)
    private readonly repositoryContent: IRepositoryContent,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,
  ) {}

  async create(data: ICreateContentDTO): Promise<EntityContent> {
    return ContentService.create({
      newContent: data,
      repository: this.repositoryContent,
      hashProvider: this.hashProvider,
    });
  }

  async update(data: IUpdateContentDTO): Promise<EntityContent> {
    const Content = await this.repositoryContent.findByName(data.name);

    if (!Content) {
      throw new BadRequestException('Usuário não encontrado');
    }

    return this.repositoryContent.updateContent(data);
  }

  async remove(id: string): Promise<void> {
    return ContentService.deleteContent({
      id,
      repository: this.repositoryContent,
    });
  }

  async findAll(): Promise<EntityContent[]> {
    return await this.repositoryContent.findAll();
  }

  async findById(id: string): Promise<EntityContent> {
    return this.repositoryContent.findById(id);
  }

  async findByName(name: string): Promise<EntityContent | undefined> {
    return this.repositoryContent.findByName(name);
  }
}
