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
import { ServiceTypeContent } from 'src/v1/modules/types/services/typeContent.service';
import { EntityTypeContent } from 'src/v1/modules/types/typeorm/entities/typeContent.entity';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import Errors from 'src/v1/utils/Errors';

@ApiTags('TypeContent')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/content/typeContent`)
export class ControllerTypeContentGET {
  constructor(private readonly serviceTypeContent: ServiceTypeContent) {}

  @Get('/all')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  findAllContent(): Promise<EntityTypeContent[]> {
    return this.serviceTypeContent.findAll();
  }

  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @Get('/name/:name')
  findByName(@Param('name') name: string): Promise<EntityTypeContent> {
    return this.serviceTypeContent.findByName(name);
  }

  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  findById(@Param('id') id: string): Promise<EntityTypeContent> {
    return this.serviceTypeContent.findById(id);
  }
}
