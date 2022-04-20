import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TipoPendenciasModule } from './tipo_pendencias/tipo_pendencias.module';
import { AuthModule } from './auth/auth.module';
import { AndamentosModule } from './andamentos/andamentos.module';
import { PendenciasModule } from './pendencias/pendencias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    AuthModule, 
    TipoPendenciasModule, AndamentosModule, PendenciasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
