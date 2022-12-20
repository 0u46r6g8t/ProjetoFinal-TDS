import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import Errors from 'src/v1/utils/Errors';
import { ServiceUser } from '../service/user.service';
import { EntityUser } from '../typeorm/entities/user.entity';

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/users`)
export class ControllerUserGET {
  constructor(private readonly serviceUser: ServiceUser) {}

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/all')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAllUser(): Promise<EntityUser[]> {
    return this.serviceUser.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/name/:name')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findByName(@Param('name') name: string): Promise<EntityUser> {
    return this.serviceUser.findByName(name);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/email/:email')
  findByEmail(@Param('email') email: string): Promise<EntityUser> {
    return this.serviceUser.findByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findById(@Param('id') id: string): Promise<EntityUser> {
    return this.serviceUser.findById(id);
  }
}
