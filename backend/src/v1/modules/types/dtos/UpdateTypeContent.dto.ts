import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import ITypeContent from 'src/v1/modules/types/dtos/interfaces/typeContent.interface';

export class IUpdateTypeContentDTO implements ITypeContent {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Coordinator',
    description: 'name type of content',
  })
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Description of type content',
    description: 'Description of type content',
  })
  description: string;
}
