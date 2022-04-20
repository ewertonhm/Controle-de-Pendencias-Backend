import { Test, TestingModule } from '@nestjs/testing';
import { AndamentosController } from './andamentos.controller';
import { AndamentosService } from './andamentos.service';

describe('AndamentosController', () => {
  let controller: AndamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AndamentosController],
      providers: [AndamentosService],
    }).compile();

    controller = module.get<AndamentosController>(AndamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
