import { BadRequestException } from '@nestjs/common';
import IRepositoryUser from 'src/v1/modules/user/repositories/user.repository';

interface IRequest {
  id: string;
  repository: IRepositoryUser;
}

const deleteUser = async ({ id, repository }: IRequest): Promise<void> => {
  const userFind = repository.findById(id);

  if (!userFind) {
    throw new BadRequestException('User not found');
  }

  await repository.removeUser(id);
};

export default deleteUser;
