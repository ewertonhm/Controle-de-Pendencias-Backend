import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TipoPendenciasModule } from './tipo_pendencias/tipo_pendencias.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    AuthModule, 
    TipoPendenciasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
