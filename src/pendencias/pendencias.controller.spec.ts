import { Test, TestingModule } from '@nestjs/testing';
import { PendenciasController } from './pendencias.controller';
import { PendenciasService } from './pendencias.service';

describe('PendenciasController', () => {
  let controller: PendenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendenciasController],
      providers: [PendenciasService],
    }).compile();

    controller = module.get<PendenciasController>(PendenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
