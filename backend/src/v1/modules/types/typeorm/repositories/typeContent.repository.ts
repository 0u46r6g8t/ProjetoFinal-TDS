import IRepositoryTypeContent from 'src/v1/modules/types/repositories/typeContent.repository';
import { EntityRepository, Repository, getRepository } from 'typeorm';
import { EntityTypeContent } from 'src/v1/modules/types/typeorm/entities/typeContent.entity';
import { ICreateTypeContentDTO } from 'src/v1/modules/types/dtos/CreateTypeContent.dto';
import { IUpdateTypeContentDTO } from 'src/v1/modules/types/dtos/UpdateTypeContent.dto';

@EntityRepository(EntityTypeContent)
export class RepositoryTypeContent
  extends Repository<RepositoryTypeContent>
  implements IRepositoryTypeContent
{
  private readonly ormRepository: Repository<EntityTypeContent>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityTypeContent);
  }

  public async createTypeContent(
    data: ICreateTypeContentDTO,
  ): Promise<EntityTypeContent> {
    const typeUser = this.ormRepository.create(data);

    return this.ormRepository.save(typeUser);
  }

  public async updateTypeContent(
    userData: IUpdateTypeContentDTO,
  ): Promise<EntityTypeContent> {
    await this.ormRepository.save(userData);
    return this.findByName(userData.name);
  }

  public async removeTypeContent(id: string): Promise<any> {
    return await this.ormRepository.delete(id);
  }

  public async findByAll(): Promise<EntityTypeContent[]> {
    const user = await this.ormRepository.find();
    return user;
  }

  public async findById(id: string): Promise<EntityTypeContent> {
    return !id
      ? undefined
      : this.ormRepository.findOne({
          id,
        });
  }

  public async findByName(name: string): Promise<EntityTypeContent> {
    return !name
      ? undefined
      : this.ormRepository.findOne({ where: { name: name } });
  }
}
