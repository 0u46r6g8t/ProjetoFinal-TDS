import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDefined, IsNotEmpty, IsString } from 'class-validator';
import IContent from 'src/v1/modules/content/dtos/interface/content.interface';
import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';

export class IUpdateContentDTO implements IContent {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Name of content',
    description: 'The name of the content to create.',
  })
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'description of content',
    description: 'The description of the content to create.',
  })
  description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'distance of content',
    description: 'The distance of the content to create.',
  })
  distance: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'photo url of content',
    description: 'The photo url of the content to create.',
  })
  photoURL: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'type of content',
    description: 'The type of the content to create.',
  })
  type: string;

  @IsArray()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'type of content',
    description: 'The type of the content to create.',
  })
  filesURL: string[];
  guiaID: EntityUser;
}
