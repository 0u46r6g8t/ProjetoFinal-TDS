import { BasicEntity } from '../../../BasicEntity';
import { IUser } from '../../dtos/interface/user.interface';
import { Entity, Column, OneToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';

@Entity('User')
export class EntityUser extends BasicEntity implements IUser {
  constructor(data?: Partial<EntityUser>) {
    super();
    Object.assign(this, data);
  }

  @ApiProperty({
    example: 'Gustavo Perereir',
    description: 'Name of user',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    example: 'varchar',
    description: 'Email of user',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;

  @ApiProperty({
    example: 'das;ldksaldk;alkd;salkd',
    description: 'Password user',
  })
  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  password: string;

  @ApiProperty({
    example: 'Turista',
    description: 'Type of user',
  })
  @Column({
    type: 'varchar',
    unique: false,
  })
  typeUser: string;

  @ApiProperty({
    example: '54392139219321',
    description: 'Phone number of user',
  })
  @Column({
    type: 'integer',
    unique: true,
    nullable: false,
  })
  phone: number;

  @Column({
    type: 'integer',
    unique: true,
    nullable: false,
  })
  @ApiProperty({
    example: '123213213',
    description: 'NumberDoc of user',
  })
  numberDoc: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  @ApiProperty({
    example: 'assets/profile/1.jpg',
    description: 'Photo profile of user',
  })
  photoURL: string;

  @Column({
    type: 'integer',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    example: '1',
    description: 'Age of user',
  })
  age: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    example: '01/02/2000',
    description: 'BirthDate of user',
  })
  birthdate: string;

  @OneToMany(() => EntityContent, (content) => content.guiaID)
  @JoinTable({
    name: 'tb_user_content',
  })
  content_id: EntityContent;
}
