import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiceContent } from '../services/content.service';
import { EntityContent } from '../typeorm/entities/content.entity';

@ApiTags('Content')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/content`)
export class ControllerContentGET {
  constructor(private readonly serviceContent: ServiceContent) {}

  @Get('/all')
  findAllUser(): Promise<EntityContent[]> {
    return this.serviceContent.findAll();
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string): Promise<EntityContent> {
    return this.serviceContent.findByName(name);
  }

  @Get('/id/:id')
  findByEmail(@Param('id') email: string): Promise<EntityContent> {
    return this.serviceContent.findById(email);
  }
}
