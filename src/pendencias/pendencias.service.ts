import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPendenciasService } from 'src/tipo_pendencias/tipo_pendencias.service';
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
    createPendenciaDto.userAbertura = await this.usersService.findOne(createPendenciaDto.userAberturaId);
    createPendenciaDto.userFechamento = await this.usersService.findOne(createPendenciaDto.userFechamentoId);
    createPendenciaDto.tipoPendencia = await this.tipoPendenciasService.findOne(createPendenciaDto.tipoPendenciaId);
  
    return await this.model.save(createPendenciaDto);
  }

  async findAll() {
    let pendencias = await this.model.find();
    return pendencias;
  }

  async findAllFull() {
    let pendencias = await this.model.find({
      relations: {
        tipoPendencia: true,
        userAbertura: true,
        userFechamento: true
      }
    });
    return pendencias;
  }

  async findOne(id: string) {
    const pendencia = await this.model.findOne({
      where: {
        id
      },
      relations: {
        tipoPendencia: true,
        userAbertura: true,
        userFechamento: true
      },
    });

    if(!pendencia){
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return pendencia;
  }

  async update(id: string, updatePendenciaDto: UpdatePendenciaDto) {
    let pendencia: Pendencia = await this.findOne(id);

    updatePendenciaDto.userFechamento = await this.usersService.findOne(updatePendenciaDto.userFechamentoId);

    await this.model.update(id, updatePendenciaDto);
    return await this.findOne(id);
  }

  remove(id: string) {
    return `This action removes a #${id} pendencia`;
  }
}
