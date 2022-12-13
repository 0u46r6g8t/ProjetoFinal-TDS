import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';

export interface IUser {
  name: string;
  email: string;
  password: string;
  typeUser: string;
  phone: number;
  numberDoc: number;
  photoURL: string;
  age: number;
  birthdate: string;
  content_id: EntityContent;
}
