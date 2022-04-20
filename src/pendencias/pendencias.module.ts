import { Module } from '@nestjs/common';
import { PendenciasService } from './pendencias.service';
import { PendenciasController } from './pendencias.controller';

@Module({
  controllers: [PendenciasController],
  providers: [PendenciasService]
})
export class PendenciasModule {}
