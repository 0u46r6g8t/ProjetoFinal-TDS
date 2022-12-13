import { ConflictException } from '@nestjs/common';
import { ICreateUserDTO } from 'src/v1/modules/user/dtos/Createduser.DTO';
import IRepositoryUser from 'src/v1/modules/user/repositories/user.repository';
import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';

interface IRequest {
  newUser: ICreateUserDTO;
  repository: IRepositoryUser;
  userUpdate: EntityUser;
}

const update = async ({
  newUser,
  repository,
  userUpdate,
}: IRequest): Promise<EntityUser> => {
  return repository.createUser({ ...newUser, ...userUpdate });
};

export default update;
