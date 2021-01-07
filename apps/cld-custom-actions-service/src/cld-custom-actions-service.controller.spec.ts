import { Test, TestingModule } from '@nestjs/testing';
import { CldCustomActionsServiceController } from './cld-custom-actions-service.controller';
import { CldCustomActionsServiceService } from './cld-custom-actions-service.service';

describe('CldCustomActionsServiceController', () => {
  let cldCustomActionsServiceController: CldCustomActionsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CldCustomActionsServiceController],
      providers: [CldCustomActionsServiceService],
    }).compile();

    cldCustomActionsServiceController = app.get<CldCustomActionsServiceController>(CldCustomActionsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cldCustomActionsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
