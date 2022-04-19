import { Test, TestingModule } from '@nestjs/testing';
import { TipoPendenciasController } from './tipo_pendencias.controller';
import { TipoPendenciasService } from './tipo_pendencias.service';

describe('TipoPendenciasController', () => {
  let controller: TipoPendenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPendenciasController],
      providers: [TipoPendenciasService],
    }).compile();

    controller = module.get<TipoPendenciasController>(TipoPendenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
