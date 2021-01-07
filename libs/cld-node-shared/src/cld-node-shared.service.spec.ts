import { Test, TestingModule } from '@nestjs/testing';
import { CldNodeSharedService } from './cld-node-shared.service';

describe('CldNodeSharedService', () => {
  let service: CldNodeSharedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CldNodeSharedService],
    }).compile();

    service = module.get<CldNodeSharedService>(CldNodeSharedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
