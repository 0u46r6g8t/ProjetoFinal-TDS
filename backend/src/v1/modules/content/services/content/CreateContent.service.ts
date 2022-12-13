import { BadRequestException, ConflictException } from '@nestjs/common';
import { ICreateContentDTO } from 'src/v1/modules/content/dtos/Createdcontent.DTO';
import IRepositoryContent from 'src/v1/modules/content/repositories/content.repository';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

interface IRequest {
  newContent: ICreateContentDTO;
  repository: IRepositoryContent;
  hashProvider: IHashProvider;
}

const create = async ({
  newContent,
  repository,
}: IRequest): Promise<EntityContent> => {
  if (await repository.findByName(newContent.name)) {
    throw new ConflictException([
      `Content ${newContent.name} already registered`,
    ]);
  }

  if (newContent.guiaID) {
    const guia = repository.findByGuiaId(newContent.guiaID.id);

    if (!guia) {
      throw new BadRequestException(`User ${newContent.guiaID.id} not found`);
    }
  }

  return repository.createContent(newContent);
};

export default create;
