import { Module } from '@nestjs/common';
import Controller from 'src/v1/modules/content/controller';
import Services from 'src/v1/modules/content/services';
import typeorm from 'src/v1/modules/content/typeorm';
import HashProvider from 'src/v1/provider/HashProvider';

@Module({
  imports: [typeorm],
  providers: [...Services, HashProvider],
  controllers: [...Controller],
  exports: [],
})
export class ContentModule {}
