import { Module } from '@nestjs/common';
import { AndamentosService } from './andamentos.service';
import { AndamentosController } from './andamentos.controller';

@Module({
  controllers: [AndamentosController],
  providers: [AndamentosService]
})
export class AndamentosModule {}
