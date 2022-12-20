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
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ServiceTypeUser } from 'src/v1/modules/types/services/typeUser.service';
import { EntityTypeUser } from 'src/v1/modules/types/typeorm/entities/typeUser.entity';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import Errors from 'src/v1/utils/Errors';
import { ICreateTypeUserDTO } from '../dtos/CreateTypeUser.dto';

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/typeUser`)
export class ControllerTypeUserCRUD {
  constructor(private readonly serviceTypeUser: ServiceTypeUser) {}

  @ApiOperation({ summary: 'Create a new type user' })
  @ApiCreatedResponse({
    description: 'Create with success',
    type: EntityTypeUser,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiConflictResponse(Errors.Conflict)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post()
  async createTypeUser(
    @Body() data: ICreateTypeUserDTO,
  ): Promise<EntityTypeUser> {
    return this.serviceTypeUser.create(data);
  }

  @ApiOperation({ summary: 'Update a type user' })
  @ApiCreatedResponse({
    description: 'Update with success',
    type: EntityTypeUser,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiConflictResponse(Errors.Conflict)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Put('/')
  async updateTypeUser(
    @Body() data: EntityTypeUser,
  ): Promise<EntityTypeUser | undefined> {
    return this.serviceTypeUser.update(data);
  }

  @ApiOperation({ summary: 'Delete a type user' })
  @ApiCreatedResponse({
    description: 'Delete with success',
    type: 'ID',
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiConflictResponse(Errors.Conflict)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Delete('/')
  async deleteTypeUser(@Body() id: string): Promise<void> {
    await this.serviceTypeUser.remove(id);
  }
}
