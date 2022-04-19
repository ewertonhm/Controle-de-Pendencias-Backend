import { Module } from '@nestjs/common';
import { TipoPendenciasService } from './tipo_pendencias.service';
import { TipoPendenciasController } from './tipo_pendencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPendencia } from './entities/tipo_pendencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPendencia])],
  controllers: [TipoPendenciasController],
  providers: [TipoPendenciasService]
})
export class TipoPendenciasModule {}
