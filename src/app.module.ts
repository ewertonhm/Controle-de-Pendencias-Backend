import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { TipoPendenciasModule } from './tipo_pendencias/tipo_pendencias.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, TipoPendenciasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
