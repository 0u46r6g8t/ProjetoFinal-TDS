import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'src/v1/utils/Errors';
import { ILoginDTO } from '../dtos/LoginAuth.DTO';
import { IResponseLoginDTO } from '../dtos/ResponseLogin.DTO';
import { ServiceAuth } from '../service/auth.service';

@ApiTags('User Authentication')
@Controller(`v1/auth`)
export class ControllerAuth {
  constructor(private readonly authService: ServiceAuth) {}

  @ApiOperation({ summary: 'loginIn' })
  @ApiBody({
    type: ILoginDTO,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiOkResponse({
    description: 'successfully logged in',
    type: IResponseLoginDTO,
  })
  // @UseGuards(AuthGuard('local'))
  // @HttpCode(200)
  @Post('login')
  async login(@Body() req: any): Promise<IResponseLoginDTO> {
    return this.authService.login(req);
  }
}
