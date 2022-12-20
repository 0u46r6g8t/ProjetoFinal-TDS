import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ServiceTypeUser } from 'src/v1/modules/types/services/typeUser.service';
import { IUpdateUserDTO } from 'src/v1/modules/user/dtos/Updateduser.DTO';
import IRepositoryUser from 'src/v1/modules/user/repositories/user.repository';
import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';
import IHashProvider from 'src/v1/provider/HashProvider/inteface';

interface IRequest {
  newUser: IUpdateUserDTO;
  repository: IRepositoryUser;
  userUpdate: EntityUser;
  typeUser: ServiceTypeUser;
  hashProvider: IHashProvider;
}

const update = async ({
  newUser,
  repository,
  userUpdate,
  typeUser,
  hashProvider,
}: IRequest): Promise<EntityUser> => {
  const type = await typeUser.findById(newUser.userId);

  if (!type) {
    throw new NotFoundException('Invalid type user');
  }

  const { password } = newUser;

  const passwordHash = await hashProvider.generateHash(password);

  if (!passwordHash) {
    throw new BadRequestException('Error create User, try again');
  }

  const user = await repository.findByEmail(newUser.email);

  if (!user) {
    throw new NotFoundException('User not found');
  }

  return repository.updateUser({
    ...newUser,
    ...userUpdate,
    content_id: undefined,
    userId: type,
    password: passwordHash,
  });
};

export default update;
