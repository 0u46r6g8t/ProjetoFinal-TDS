import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ICreateContentDTO } from 'src/v1/modules/content/dtos/Createdcontent.DTO';
import IRepositoryContent from 'src/v1/modules/content/repositories/content.repository';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';
import { ServiceTypeContent } from 'src/v1/modules/types/services/typeContent.service';
import { ServiceUser } from 'src/v1/modules/user/service/user.service';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

interface IRequest {
  newContent: ICreateContentDTO;
  repository: IRepositoryContent;
  hashProvider: IHashProvider;
  typeContent: ServiceTypeContent;
  users: ServiceUser;
}

const create = async ({
  newContent,
  repository,
  typeContent,
  users,
}: IRequest): Promise<EntityContent> => {
  if (await repository.findByName(newContent.name)) {
    throw new ConflictException([
      `Content ${newContent.name} already registered`,
    ]);
  }

  const type = await typeContent.findById(newContent.contentId);

  if (!type) {
    throw new NotFoundException(`Content ${newContent.name} not found`);
  }

  if (newContent.guiaID) {
    const guia = repository.findByGuiaId(newContent.guiaID.id);

    if (!guia) {
      throw new BadRequestException(`User ${newContent.guiaID.id} not found`);
    }
  }

  const listUser = await users.findById(newContent.users_id);

  if (!listUser) {
    throw new NotFoundException('User not found');
  }

  return repository.createContent({
    ...newContent,
    contentId: type,
    users_id: [listUser],
  });
};

export default create;
