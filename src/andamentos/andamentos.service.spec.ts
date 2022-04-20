import { Test, TestingModule } from '@nestjs/testing';
import { AndamentosService } from './andamentos.service';

describe('AndamentosService', () => {
  let service: AndamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AndamentosService],
    }).compile();

    service = module.get<AndamentosService>(AndamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
