import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IRepositoryTypeContent from 'src/v1/modules/types/repositories/typeContent.repository';
import { EntityTypeContent } from 'src/v1/modules/types/typeorm/entities/typeContent.entity';
import { RepositoryTypeContent } from 'src/v1/modules/types/typeorm/repositories/typeContent.repository';
import { ICreateTypeContentDTO } from '../dtos/CreateTypeContent.dto';

@Injectable()
export class ServiceTypeContent {
  constructor(
    @InjectRepository(RepositoryTypeContent)
    private readonly repositoryContent: IRepositoryTypeContent,
  ) {}

  async create(data: ICreateTypeContentDTO): Promise<EntityTypeContent> {
    const validaType = await this.repositoryContent.findByName(data.name);

    if (validaType) {
      throw new ConflictException(
        `Type content already exists, please verify your params`,
      );
    }

    return this.repositoryContent.createTypeContent(data);
  }

  async update(data: EntityTypeContent): Promise<EntityTypeContent> {
    const content = await this.repositoryContent.findByName(data.name);

    if (!content) {
      throw new BadRequestException('Conteudo não encontrado');
    }

    return this.repositoryContent.updateTypeContent(data);
  }

  async remove(id: string): Promise<void> {
    const valida = await this.repositoryContent.findById(id);

    if (!valida) {
      throw new NotFoundException('Type Content not found');
    }
    return this.repositoryContent.removeTypeContent(id.toString());
  }

  async findAll(): Promise<EntityTypeContent[]> {
    return await this.repositoryContent.findByAll();
  }

  async findById(id: string): Promise<EntityTypeContent> {
    const valida = await this.repositoryContent.findById(id);

    if (!valida) {
      throw new NotFoundException('Type Content not found');
    }

    return this.repositoryContent.findById(id);
  }

  async findByName(name: string): Promise<EntityTypeContent | undefined> {
    const valida = await this.repositoryContent.findById(name);

    if (!valida) {
      throw new NotFoundException('Type Content not found');
    }
    return this.repositoryContent.findByName(name);
  }
}
