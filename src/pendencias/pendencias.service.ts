import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPendenciasService } from 'src/tipo_pendencias/tipo_pendencias.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePendenciaDto } from './dto/create-pendencia.dto';
import { UpdatePendenciaDto } from './dto/update-pendencia.dto';
import { Pendencia } from './entities/pendencia.entity';

@Injectable()
export class PendenciasService {
  constructor(
    @InjectRepository(Pendencia) 
    private model: Repository<Pendencia>,
    private usersService: UsersService,
    private tipoPendenciasService: TipoPendenciasService,
    ) {}

  async create(createPendenciaDto: CreatePendenciaDto) {
    
    const userAbertura = await this.usersService.findOne(createPendenciaDto.usuarioAbertura);
    let userFechamento: User;

    if(createPendenciaDto.usuarioFechamento){
      userFechamento = await this.usersService.findOne(createPendenciaDto.usuarioFechamento);
    }

    const tipoPendencia = await this.tipoPendenciasService.findOne(createPendenciaDto.tipoPendencia);

    let pendenciaToSave = new Pendencia;
    pendenciaToSave.tipoPendencia = tipoPendencia;
    pendenciaToSave.userAbertura = userAbertura;
    pendenciaToSave.userFechamento = userFechamento;
    pendenciaToSave.titulo = createPendenciaDto.titulo;
    pendenciaToSave.descricao = createPendenciaDto.descricao;
    pendenciaToSave.inicio = createPendenciaDto.inicio;
    pendenciaToSave.previsao = createPendenciaDto.previsao;
    pendenciaToSave.fim = createPendenciaDto.fim;
    pendenciaToSave.task = createPendenciaDto.task;
    pendenciaToSave.incidente = createPendenciaDto.task;
  
    return await this.model.save(pendenciaToSave);
  }

  findAll() {
    return `This action returns all pendencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendencia`;
  }

  update(id: number, updatePendenciaDto: UpdatePendenciaDto) {
    return `This action updates a #${id} pendencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendencia`;
  }
}
