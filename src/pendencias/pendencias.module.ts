import { forwardRef, Module } from '@nestjs/common';
import { PendenciasService } from './pendencias.service';
import { PendenciasController } from './pendencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pendencia } from './entities/pendencia.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TipoPendenciasModule } from 'src/tipo_pendencias/tipo_pendencias.module';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Pendencia]), 
    forwardRef(() => AuthModule),
    TipoPendenciasModule,
    UsersModule
  ],
  controllers: [PendenciasController],
  providers: [PendenciasService],
  exports: []
})
export class PendenciasModule {}
