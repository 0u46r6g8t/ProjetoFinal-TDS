import { BadRequestException } from '@nestjs/common';
import IRepositoryContent from 'src/v1/modules/content/repositories/content.repository';

interface IRequest {
  id: string;
  repository: IRepositoryContent;
}

const deleteContent = async ({ id, repository }: IRequest): Promise<void> => {
  const content = repository.findById(id);

  if (!content) {
    throw new BadRequestException('User not found');
  }

  await repository.removeContent(id);
};

export default deleteContent;
