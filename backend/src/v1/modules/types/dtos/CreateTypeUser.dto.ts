import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import ITypeUser from 'src/v1/modules/types/dtos/interfaces/typeUser.interface';

export class ICreateTypeUserDTO implements ITypeUser {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Coordinator',
    description: 'name type of user',
  })
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Description of type user',
    description: 'Description of type user',
  })
  description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'COORDINATOR',
    description: 'Office to user',
  })
  office: string;
}
