import { BasicEntity } from '../../../BasicEntity';
import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import ITypeContent from 'src/v1/modules/types/dtos/interfaces/typeContent.interface';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';

@Entity('TypeUser')
export class EntityTypeContent extends BasicEntity implements ITypeContent {
  constructor(data?: Partial<EntityTypeContent>) {
    super();
    Object.assign(this, data);
  }

  @ApiProperty({
    example: 'Trilha',
    description: 'Name of type',
  })
  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  name: string;

  @ApiProperty({
    example: 'varchar',
    description: 'Description of type',
  })
  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  description: string;

  @OneToMany(() => EntityContent, (content) => content.contentId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  contents: EntityTypeContent[];
}
