import { ApiProperty } from '@nestjs/swagger';
import { EntityTypeUser } from 'src/v1/modules/types/typeorm/entities/typeUser.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BasicEntity } from '../../../BasicEntity';
import { IUser } from '../../dtos/interface/user.interface';

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
    unique: false,
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

  @ApiProperty({
    type: EntityTypeUser,
    description: "Member's patent",
    example: {
      name: 'Notavo',
      id: '2bac045b-7109-473f-af2a-32234b067694',
      description: 'Lab freshman',
    } as EntityTypeUser,
  })
  @ManyToOne(() => EntityTypeUser, (patent) => patent.users, {
    eager: true,
    nullable: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  userId: EntityTypeUser;
}
