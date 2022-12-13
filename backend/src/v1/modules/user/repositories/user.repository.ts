import { ICreateUserDTO } from '../dtos/Createduser.DTO';
import { IUpdateUserDTO } from '../dtos/Updateduser.DTO';
import { EntityUser } from '../typeorm/entities/user.entity';

export default interface IRepositoryUser {
  createUser(userData: ICreateUserDTO): Promise<EntityUser | undefined>;
  updateUser(userData: IUpdateUserDTO): Promise<EntityUser | undefined>;
  removeUser(id: string): Promise<any>;

  // Find User
  findAllUsers(): Promise<EntityUser[] | undefined>;
  findById(id: string): Promise<EntityUser | undefined>;
  findByEmail(email: string): Promise<EntityUser | undefined>;
  findByName(username: string): Promise<EntityUser | undefined>;
  findByType(type: string): Promise<EntityUser | undefined>;
  findByPhone(phone: number): Promise<EntityUser | undefined>;
}
