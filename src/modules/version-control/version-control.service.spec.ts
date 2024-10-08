import { Test, TestingModule } from '@nestjs/testing';
import { VersionControlService } from './version-control.service';

describe('VersionControlService', () => {
  let service: VersionControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionControlService],
    }).compile();

    service = module.get<VersionControlService>(VersionControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
