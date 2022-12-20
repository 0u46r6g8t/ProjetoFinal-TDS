import { ApiProperty } from '@nestjs/swagger';
import { BasicEntity } from 'src/v1/modules/BasicEntity';
import IContent from 'src/v1/modules/content/dtos/interface/content.interface';
import { EntityUser } from '../../../user/typeorm/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { EntityTypeContent } from 'src/v1/modules/types/typeorm/entities/typeContent.entity';

@Entity('Content')
export class EntityContent extends BasicEntity implements IContent {
  constructor(data?: Partial<EntityContent>) {
    super();
    Object.assign(this, data);
  }
  type: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  @ApiProperty({
    description: 'The name of the entity',
    example: 'Entity Name',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  @ApiProperty({
    description: 'The description of the entity',
    example: 'Entity Description',
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    description: 'The distance of the entity',
    example: 'Entity Distance',
  })
  distance: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    description: 'The photoURL of the entity',
    example: 'Entity PhotoURL',
  })
  photoURL: string;

  @ApiProperty({
    type: EntityTypeContent,
    description: 'type Content',
    example: {
      name: 'Trilha',
      id: '2bac045b-7109-473f-af2a-32234b067694',
      description: 'Lab freshman',
    } as EntityTypeContent,
  })
  @ManyToOne(() => EntityTypeContent, (patent) => patent.contents, {
    eager: true,
    nullable: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  contentId: EntityTypeContent;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
    array: true,
  })
  @ApiProperty({
    description: 'The filesURL of the entity',
    example: 'Entity filesURL',
  })
  filesURL: string[];

  @ManyToMany(() => EntityUser)
  @JoinTable()
  users_id: EntityUser[];
}
