import { Module } from '@nestjs/common';
import { CldCustomActionsServiceController } from './cld-custom-actions-service.controller';
import { CldCustomActionsServiceService } from './cld-custom-actions-service.service';

@Module({
  imports: [],
  controllers: [CldCustomActionsServiceController],
  providers: [CldCustomActionsServiceService],
})
export class CldCustomActionsServiceModule {}
