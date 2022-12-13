import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { IUpdateUserDTO } from 'src/v1/modules/user/dtos/Updateduser.DTO';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import { ICreateUserDTO } from '../dtos/Createduser.DTO';
import { ServiceUser } from '../service/user.service';
import { EntityUser } from '../typeorm/entities/user.entity';

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/users`)
export class ControllerUserCRUD {
  constructor(private readonly serviceUser: ServiceUser) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'Create with success',
    type: EntityUser,
  })
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createUser(@Body() data: ICreateUserDTO): Promise<EntityUser> {
    return this.serviceUser.create(data);
  }

  @ApiOperation({ summary: 'Update a user' })
  @ApiCreatedResponse({
    description: 'Update with success',
    type: EntityUser,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Put('/')
  async updateUser(
    @Body() data: IUpdateUserDTO,
  ): Promise<EntityUser | undefined> {
    return this.serviceUser.update(data);
  }

  @ApiOperation({ summary: 'Delete a user' })
  @ApiCreatedResponse({
    description: 'Delete with success',
    type: 'ID',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Delete('/')
  async deleteUser(@Body() id: string): Promise<void> {
    await this.serviceUser.remove(id);
  }
}
