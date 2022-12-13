import { ControllerAuth } from 'src/v1/modules/user/controller/auth.controller';
import { ControllerUserCRUD } from 'src/v1/modules/user/controller/user.controller';
import { ControllerUserGET } from 'src/v1/modules/user/controller/userFind.controller';

export default [ControllerUserCRUD, ControllerUserGET, ControllerAuth];
