import { Module } from '@nestjs/common';
import { CldNodeSharedService } from './cld-node-shared.service';

@Module({
  providers: [CldNodeSharedService],
  exports: [CldNodeSharedService],
})
export class CldNodeSharedModule {}
