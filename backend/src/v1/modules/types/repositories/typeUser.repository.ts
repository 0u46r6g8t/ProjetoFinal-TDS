import { IUpdateTypeUserDTO } from 'src/v1/modules/types/dtos/UpdateTypeUser.dto';
import { ICreateTypeUserDTO } from '../dtos/CreateTypeUser.dto';
import { EntityTypeUser } from '../typeorm/entities/typeUser.entity';

export default interface IRepositoryTypeUser {
  createTypeUser(data: ICreateTypeUserDTO): Promise<EntityTypeUser>;
  updateTypeUser(data: IUpdateTypeUserDTO): Promise<EntityTypeUser>;
  removeTypeUser(id: string): Promise<void>;

  findByAll(): Promise<EntityTypeUser[] | undefined>;
  findById(id: string): Promise<EntityTypeUser | undefined>;
  findByName(name: string): Promise<EntityTypeUser | undefined>;
  findByOffice(name: string): Promise<EntityTypeUser | undefined>;
}
