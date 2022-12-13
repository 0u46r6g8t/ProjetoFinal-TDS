import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
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
