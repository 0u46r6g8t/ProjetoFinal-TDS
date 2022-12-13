import { EntityRepository, Repository, getRepository } from 'typeorm';
import { ICreateContentDTO } from '../../dtos/Createdcontent.DTO';
import { IUpdateContentDTO } from '../../dtos/Updatedcontent.DTO';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';
import IRepositoryContent from '../../repositories/content.repository';

@EntityRepository(EntityContent)
export class RepositoryContent
  extends Repository<RepositoryContent>
  implements IRepositoryContent
{
  private readonly ormRepository: Repository<EntityContent>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityContent);
  }

  public async createContent(data: ICreateContentDTO): Promise<EntityContent> {
    const content = this.ormRepository.create(data);

    return this.ormRepository.save(content);
  }

  public async updateContent(data: IUpdateContentDTO): Promise<EntityContent> {
    await this.ormRepository.save(data);

    return this.findByName(data.name);
  }

  public async removeContent(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<EntityContent[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: string): Promise<EntityContent> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  public async findByName(name: string): Promise<EntityContent> {
    return await this.ormRepository.findOne({ where: { name } });
  }

  public async findByGuiaId(id: string): Promise<EntityContent> {
    return !id
      ? undefined
      : await this.ormRepository.findOne({ where: { guiaID: id } });
  }

  public async findByLocation(location: string): Promise<EntityContent> {
    return !location
      ? undefined
      : await this.ormRepository.findOne({ where: { location } });
  }
}
