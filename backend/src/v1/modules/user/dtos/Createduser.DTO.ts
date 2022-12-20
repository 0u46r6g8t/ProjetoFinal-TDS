import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';
import { EntityTypeUser } from 'src/v1/modules/types/typeorm/entities/typeUser.entity';
import { IUser } from '../dtos/interface/user.interface';

export class ICreateUserDTO implements IUser {
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

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: "User's patent",
    example: '2bac045b-7109-473f-af2a-32234b067694',
  })
  userId: string;

  @IsString()
  @IsOptional()
  @IsDefined()
  @IsUUID()
  @ApiProperty({
    description: "User's patent",
    example: '2bac045b-7109-473f-af2a-32234b067694',
  })
  content_id: string;
}

export class ICreateUserBasicDTO implements IUser {
  name: string;
  email: string;
  password: string;
  phone: number;
  numberDoc: number;
  photoURL: string;
  age: number;
  birthdate: string;
  userId: EntityTypeUser;
  content_id: EntityContent;
}
