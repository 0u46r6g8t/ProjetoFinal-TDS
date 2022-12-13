import { Module } from '@nestjs/common';
import { Modules } from 'src/v1/modules';

@Module({
  imports: [...Modules],
})
export class V1Module {}
