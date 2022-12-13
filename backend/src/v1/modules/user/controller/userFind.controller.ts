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
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
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
  findAllUser(): Promise<EntityUser[]> {
    return this.serviceUser.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/name/:name')
  findByName(@Param('name') name: string): Promise<EntityUser> {
    return this.serviceUser.findByName(name);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/email/:email')
  findByEmail(@Param('email') email: string): Promise<EntityUser> {
    return this.serviceUser.findByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  findById(@Param('id') id: string): Promise<EntityUser> {
    return this.serviceUser.findById(id);
  }
}
