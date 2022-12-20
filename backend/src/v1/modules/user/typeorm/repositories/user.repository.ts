import { EntityRepository, getRepository, Repository } from 'typeorm';
import { ICreateUserBasicDTO } from '../../dtos/Createduser.DTO';
import { IUpdateUserBasicDTO } from '../../dtos/Updateduser.DTO';
import IRepositoryUser from '../../repositories/user.repository';
import { EntityUser } from '../entities/user.entity';

@EntityRepository(EntityUser)
export class RepositoryUser
  extends Repository<RepositoryUser>
  implements IRepositoryUser
{
  private readonly ormRepository: Repository<EntityUser>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityUser);
  }

  public async createUser(userData: ICreateUserBasicDTO): Promise<EntityUser> {
    const user = this.ormRepository.create(userData);

    return this.ormRepository.save(user);
  }

  public async updateUser(userData: IUpdateUserBasicDTO): Promise<EntityUser> {
    await this.ormRepository.save(userData);
    return this.findByEmail(userData.email);
  }

  public async removeUser(id: string): Promise<any> {
    return await this.ormRepository.delete(id);
  }
  public async findAllUsers(): Promise<EntityUser[]> {
    const user = await this.ormRepository.find();
    return user;
  }

  public async findById(id: string): Promise<EntityUser> {
    return !id
      ? undefined
      : this.ormRepository.findOne({
          id,
        });
  }

  public async findByEmail(email: string): Promise<EntityUser> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async findByPhone(phone: number): Promise<EntityUser> {
    return this.ormRepository.findOne(phone);
  }

  public async findByName(username: string): Promise<EntityUser> {
    return !username
      ? undefined
      : this.ormRepository.findOne({ where: { name: username } });
  }

  public async findByType(type: string): Promise<EntityUser> {
    return this.ormRepository.findOne({ where: { typeUser: type } });
  }
}
