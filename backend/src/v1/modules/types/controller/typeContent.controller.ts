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
import { ServiceTypeContent } from 'src/v1/modules/types/services/typeContent.service';
import { EntityTypeContent } from 'src/v1/modules/types/typeorm/entities/typeContent.entity';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import Errors from 'src/v1/utils/Errors';
import { ICreateTypeContentDTO } from '../dtos/CreateTypeContent.dto';

@ApiTags('Content')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/content/typeContent`)
export class ControllerTypeContentCRUD {
  constructor(private readonly serviceTypeContent: ServiceTypeContent) {}

  @ApiOperation({ summary: 'Create a new content' })
  @ApiCreatedResponse({
    description: 'Create with success',
    type: EntityTypeContent,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiConflictResponse(Errors.Conflict)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createContent(
    @Body() data: ICreateTypeContentDTO,
  ): Promise<EntityTypeContent> {
    return this.serviceTypeContent.create(data);
  }

  @ApiOperation({ summary: 'Update a type content' })
  @ApiCreatedResponse({
    description: 'Update with success',
    type: EntityTypeContent,
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
  async updateContent(
    @Body() data: EntityTypeContent,
  ): Promise<EntityTypeContent | undefined> {
    return this.serviceTypeContent.update(data);
  }

  @ApiOperation({ summary: 'Delete a type content' })
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
  async deleteTypeContent(@Body() id: string): Promise<void> {
    await this.serviceTypeContent.remove(id);
  }
}
