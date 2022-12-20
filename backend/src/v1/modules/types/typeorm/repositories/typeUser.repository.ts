import IRepositoryTypeUser from 'src/v1/modules/types/repositories/typeUser.repository';
import { EntityRepository, Repository, getRepository } from 'typeorm';
import { EntityTypeUser } from '../entities/typeUser.entity';
import { ICreateTypeUserDTO } from '../../dtos/CreateTypeUser.dto';
import { IUpdateTypeUserDTO } from 'src/v1/modules/types/dtos/UpdateTypeUser.dto';

@EntityRepository(EntityTypeUser)
export class RepositoryTypeUser
  extends Repository<RepositoryTypeUser>
  implements IRepositoryTypeUser
{
  private readonly ormRepository: Repository<EntityTypeUser>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityTypeUser);
  }

  public async createTypeUser(
    data: ICreateTypeUserDTO,
  ): Promise<EntityTypeUser> {
    const typeUser = this.ormRepository.create(data);

    return this.ormRepository.save(typeUser);
  }

  public async updateTypeUser(
    userData: IUpdateTypeUserDTO,
  ): Promise<EntityTypeUser> {
    await this.ormRepository.save(userData);
    return this.findByName(userData.name);
  }

  public async removeTypeUser(id: string): Promise<any> {
    return await this.ormRepository.delete(id);
  }

  public async findByAll(): Promise<EntityTypeUser[]> {
    const user = await this.ormRepository.find();
    return user;
  }

  public async findById(id: string): Promise<EntityTypeUser> {
    return !id
      ? undefined
      : this.ormRepository.findOne({
          id,
        });
  }

  public async findByOffice(office: string): Promise<EntityTypeUser> {
    return this.ormRepository.findOne({ where: { office } });
  }

  public async findByName(name: string): Promise<EntityTypeUser> {
    return !name
      ? undefined
      : this.ormRepository.findOne({ where: { name: name } });
  }
}
