import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ServiceTypeUser } from 'src/v1/modules/types/services/typeUser.service';
import { ICreateUserDTO } from 'src/v1/modules/user/dtos/Createduser.DTO';
import IRepositoryUser from 'src/v1/modules/user/repositories/user.repository';
import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

interface IRequest {
  newUser: ICreateUserDTO;
  repository: IRepositoryUser;
  hashProvider: IHashProvider;
  typeUser: ServiceTypeUser;
}

const create = async ({
  newUser,
  repository,
  hashProvider,
  typeUser,
}: IRequest): Promise<EntityUser> => {
  if (
    (await repository.findByEmail(newUser.email)) ||
    (await repository.findByName(newUser.name)) ||
    (await repository.findByPhone(newUser.phone))
  ) {
    throw new ConflictException([`User ${newUser.name} already registered`]);
  }

  const type = await typeUser.findById(newUser.userId);

  if (!type) {
    throw new NotFoundException('Type User not is valid');
  }

  const { password } = newUser;

  const passwordHash = await hashProvider.generateHash(password);

  if (!passwordHash) {
    throw new BadRequestException('Error create User, try again');
  }

  return repository.createUser({
    ...newUser,
    userId: type,
    content_id: undefined,
    password: passwordHash,
  });
};

export default create;
