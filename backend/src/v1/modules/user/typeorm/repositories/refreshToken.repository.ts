import ICreateRefreshTokenDTO from '../../dtos/CreateRefreshToken.DTO';
import IRepositoryRefreshToken from '../../repositories/refreshToken.repository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { EntityRefreshToken } from '../entities/refreshToken.entity';

@EntityRepository(EntityRefreshToken)
export class RepositoryRefreshToken
  extends Repository<IRepositoryRefreshToken>
  implements IRepositoryRefreshToken
{
  private ormRepository: Repository<EntityRefreshToken>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityRefreshToken);
  }

  public async createSave(
    data: ICreateRefreshTokenDTO,
  ): Promise<EntityRefreshToken> {
    const refreshToken = this.ormRepository.create(data);

    return this.ormRepository.save(refreshToken);
  }

  public async updateSave(
    data: EntityRefreshToken,
  ): Promise<EntityRefreshToken> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByLogin(
    login: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { email: login } });
  }

  public async findByHash(
    hash: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { hash } });
  }

  public async findValidByLogin(
    login: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { login: { login } } });
  }

  public async findValidByHash(
    hash: string,
  ): Promise<EntityRefreshToken | undefined> {
    return this.ormRepository.findOne({ where: { hash, status: true } });
  }
}
