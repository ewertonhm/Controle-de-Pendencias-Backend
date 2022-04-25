import { forwardRef, Module } from '@nestjs/common';
import { PendenciasService } from './pendencias.service';
import { PendenciasController } from './pendencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pendencia } from './entities/pendencia.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TipoPendenciasModule } from 'src/tipo_pendencias/tipo_pendencias.module';
import { UsersModule } from 'src/users/users.module';
import { AndamentosModule } from 'src/andamentos/andamentos.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Pendencia]), 
    forwardRef(() => AuthModule),
    TipoPendenciasModule,
    UsersModule,
    forwardRef(() => AndamentosModule)
  ],
  controllers: [PendenciasController],
  providers: [PendenciasService],
  exports: [PendenciasService]
})
export class PendenciasModule {}
