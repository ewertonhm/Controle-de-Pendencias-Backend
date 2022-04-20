import { Test, TestingModule } from '@nestjs/testing';
import { PendenciasService } from './pendencias.service';

describe('PendenciasService', () => {
  let service: PendenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendenciasService],
    }).compile();

    service = module.get<PendenciasService>(PendenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
