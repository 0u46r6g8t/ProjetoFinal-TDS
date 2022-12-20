import { IUpdateTypeContentDTO } from 'src/v1/modules/types/dtos/UpdateTypeContent.dto';
import { ICreateTypeContentDTO } from '../dtos/CreateTypeContent.dto';
import { EntityTypeContent } from '../typeorm/entities/typeContent.entity';

export default interface IRepositoryTypeContent {
  createTypeContent(data: ICreateTypeContentDTO): Promise<EntityTypeContent>;
  updateTypeContent(data: IUpdateTypeContentDTO): Promise<EntityTypeContent>;
  removeTypeContent(id: string): Promise<void>;

  findByAll(): Promise<EntityTypeContent[] | undefined>;
  findById(id: string): Promise<EntityTypeContent | undefined>;
  findByName(name: string): Promise<EntityTypeContent | undefined>;
}
