import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';
import { IUser } from '../dtos/interface/user.interface';

export class ICreateUserDTO implements IUser {
  content_id: EntityContent;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Gustavo Quie',
    description: 'Name of user',
  })
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'gustavo.quie@gmail.com',
    description: 'Email of user',
  })
  email: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'password',
    description: 'Password of user',
  })
  password: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Turista',
    description: 'Type of user',
  })
  typeUser: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '550000000',
    description: 'Phone number of user',
  })
  phone: number;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '550000000',
    description: 'Number doc number of user',
  })
  numberDoc: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'assets/images/profile/1.jpg',
    description: 'Profile picture of user',
  })
  photoURL: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '12',
    description: 'Age of user',
  })
  age: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Date',
    description: 'Birth date of user',
  })
  birthdate: string;
}
