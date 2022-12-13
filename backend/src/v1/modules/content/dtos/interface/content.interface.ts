import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';

export default interface IContent {
  name: string;
  description: string;
  distance: string;
  photoURL: string;
  type: string;
  filesURL: string[];
  guiaID: EntityUser;
}
