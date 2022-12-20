import { Module } from '@nestjs/common';
import typeorm from 'src/v1/modules/types/typeorm';
import Controllers from './controller';
import Services from './services';

@Module({
  imports: [typeorm],
  controllers: [...Controllers],
  providers: [...Services],
  exports: [...Services],
})
export class TypesModule {}
