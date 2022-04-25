import { forwardRef, Module } from '@nestjs/common';
import { AndamentosService } from './andamentos.service';
import { AndamentosController } from './andamentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Andamento } from './entities/andamento.entity';
import { User } from 'src/users/entities/user.entity';
import { Pendencia } from 'src/pendencias/entities/pendencia.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { PendenciasModule } from 'src/pendencias/pendencias.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Andamento,User,Pendencia]), 
    forwardRef(() => AuthModule),
    UsersModule,
    PendenciasModule,
  ],
  controllers: [AndamentosController],
  providers: [AndamentosService],
  exports: [AndamentosService]
})
export class AndamentosModule {}
