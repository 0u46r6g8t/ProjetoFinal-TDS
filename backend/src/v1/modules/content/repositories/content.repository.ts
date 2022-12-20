import { ICreateContentBasicDTO } from 'src/v1/modules/content/dtos/Createdcontent.DTO';
import { IUpdateContentBasicDTO } from 'src/v1/modules/content/dtos/Updatedcontent.DTO';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';

export default interface IRepositoryContent {
  createContent(data: ICreateContentBasicDTO): Promise<EntityContent>;
  updateContent(data: IUpdateContentBasicDTO): Promise<EntityContent>;
  removeContent(id: string): Promise<void>;

  findAll(): Promise<EntityContent[]>;
  findById(id: string): Promise<EntityContent>;
  findByName(name: string): Promise<EntityContent>;
  findByGuiaId(id: string): Promise<EntityContent>;
  findByLocation(location: string): Promise<EntityContent>;
}
