import { BasicEntity } from '../../../BasicEntity';
import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import ITypeUser from 'src/v1/modules/types/dtos/interfaces/typeUser.interface';
import { EntityUser } from 'src/v1/modules/user/typeorm/entities/user.entity';

@Entity('TypeUser')
export class EntityTypeUser extends BasicEntity implements ITypeUser {
  constructor(data?: Partial<EntityTypeUser>) {
    super();
    Object.assign(this, data);
  }

  @ApiProperty({
    example: 'Gustavo Perereir',
    description: 'Name of type',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    example: 'varchar',
    description: 'Description of type',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  description: string;

  @ApiProperty({
    example: 'varchar',
    description: 'Office in user',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  office: string;

  @OneToMany(() => EntityUser, (member) => member.userId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  users: EntityUser[];
}
