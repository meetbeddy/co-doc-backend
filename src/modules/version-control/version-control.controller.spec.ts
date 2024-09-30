import { Test, TestingModule } from '@nestjs/testing';
import { VersionControlController } from './version-control.controller';

describe('VersionControlController', () => {
  let controller: VersionControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionControlController],
    }).compile();

    controller = module.get<VersionControlController>(VersionControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
