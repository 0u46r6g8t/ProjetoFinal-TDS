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
import { ServiceTypeUser } from 'src/v1/modules/types/services/typeUser.service';
import { EntityTypeUser } from 'src/v1/modules/types/typeorm/entities/typeUser.entity';
import { JwtAuthGuard } from 'src/v1/modules/user/guards/jwt.guard';
import Errors from 'src/v1/utils/Errors';

@ApiTags('TypeUser')
@UseInterceptors(ClassSerializerInterceptor)
@Controller(`v1/users/typeUser`)
export class ControllerTypeUserGET {
  constructor(private readonly serviceTypeUser: ServiceTypeUser) {}

  @Get('/all')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  findAllContent(): Promise<EntityTypeUser[]> {
    return this.serviceTypeUser.findAll();
  }

  @Get('/name/:name')
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  findByName(@Param('name') name: string): Promise<EntityTypeUser> {
    return this.serviceTypeUser.findByName(name);
  }

  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  findById(@Param('id') id: string): Promise<EntityTypeUser> {
    return this.serviceTypeUser.findById(id);
  }
}
