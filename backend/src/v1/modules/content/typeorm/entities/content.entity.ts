import { ApiProperty } from '@nestjs/swagger';
import { BasicEntity } from 'src/v1/modules/BasicEntity';
import IContent from 'src/v1/modules/content/dtos/interface/content.interface';
import { EntityUser } from '../../../user/typeorm/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('Content')
export class EntityContent extends BasicEntity implements IContent {
  constructor(data?: Partial<EntityContent>) {
    super();
    Object.assign(this, data);
  }

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

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    description: 'The type of the entity',
    example: 'Entity type',
  })
  type: string;

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

  @ManyToOne(() => EntityUser, (user) => user.content_id)
  guiaID: EntityUser;
}
