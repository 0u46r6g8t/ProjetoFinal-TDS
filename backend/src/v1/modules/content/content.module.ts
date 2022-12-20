import { Module } from '@nestjs/common';
import Controller from 'src/v1/modules/content/controller';
import Services from 'src/v1/modules/content/services';
import typeorm from 'src/v1/modules/content/typeorm';
import { TypesModule } from 'src/v1/modules/types/types.module';
import { UserModule } from 'src/v1/modules/user/user.module';
import HashProvider from 'src/v1/provider/HashProvider';

@Module({
  imports: [typeorm, TypesModule, UserModule],
  providers: [...Services, HashProvider],
  controllers: [...Controller],
  exports: [],
})
export class ContentModule {}
