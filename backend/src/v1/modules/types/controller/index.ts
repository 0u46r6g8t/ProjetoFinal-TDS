import { ControllerTypeContentCRUD } from 'src/v1/modules/types/controller/typeContent.controller';
import { ControllerTypeContentGET } from 'src/v1/modules/types/controller/typeContent_Find.controller';
import { ControllerTypeUserCRUD } from 'src/v1/modules/types/controller/typeUser.controller';
import { ControllerTypeUserGET } from 'src/v1/modules/types/controller/typeUser_Find.controller';

export default [
  ControllerTypeContentCRUD,
  ControllerTypeUserCRUD,
  ControllerTypeUserGET,
  ControllerTypeContentGET,
];
