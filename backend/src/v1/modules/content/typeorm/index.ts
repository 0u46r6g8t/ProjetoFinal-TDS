import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityContent } from 'src/v1/modules/content/typeorm/entities/content.entity';
import { RepositoryContent } from 'src/v1/modules/content/typeorm/repositories/content.repository';

export default TypeOrmModule.forFeature([EntityContent, RepositoryContent]);
