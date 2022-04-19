import { Test, TestingModule } from '@nestjs/testing';
import { TipoPendenciasService } from './tipo_pendencias.service';

describe('TipoPendenciasService', () => {
  let service: TipoPendenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPendenciasService],
    }).compile();

    service = module.get<TipoPendenciasService>(TipoPendenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
