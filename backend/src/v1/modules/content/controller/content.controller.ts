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
import { IUpdateContentDTO } from 'src/v1/modules/content/dtos/Updatedcontent.DTO';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import { ICreateContentDTO } from '../dtos/Createdcontent.DTO';
import { ServiceContent } from '../services/content.service';
import { EntityContent } from '../typeorm/entities/content.entity';

@ApiTags('Content')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/content`)
export class ControllerContentCRUD {
  constructor(private readonly serviceContent: ServiceContent) {}

  @ApiOperation({ summary: 'Create a new content' })
  @ApiCreatedResponse({
    description: 'Create with success',
    type: EntityContent,
  })
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createContent(@Body() data: ICreateContentDTO): Promise<EntityContent> {
    return this.serviceContent.create(data);
  }

  @ApiOperation({ summary: 'Update a content' })
  @ApiCreatedResponse({
    description: 'Update with success',
    type: EntityContent,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Put('/put')
  async updateContent(
    @Body() data: IUpdateContentDTO,
  ): Promise<EntityContent | undefined> {
    return this.serviceContent.update(data);
  }

  @ApiOperation({ summary: 'Delete a content' })
  @ApiCreatedResponse({
    description: 'Delete with success',
    type: 'ID',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Delete('/delete')
  async deleteContent(@Body() id: string): Promise<void> {
    await this.serviceContent.remove(id);
  }
}
