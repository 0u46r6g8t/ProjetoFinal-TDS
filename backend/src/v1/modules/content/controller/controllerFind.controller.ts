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
import { ServiceContent } from '../services/content.service';
import { EntityContent } from '../typeorm/entities/content.entity';

@ApiTags('Content')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/content`)
export class ControllerContentGET {
  constructor(private readonly serviceContent: ServiceContent) {}

  @Get('/all')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  findAllUser(): Promise<EntityContent[]> {
    return this.serviceContent.findAll();
  }

  @Get('/name/:name')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  findByName(@Param('name') name: string): Promise<EntityContent> {
    return this.serviceContent.findByName(name);
  }

  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  findByEmail(@Param('id') email: string): Promise<EntityContent> {
    return this.serviceContent.findById(email);
  }
}
