import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
    if(createPendenciaDto.userAberturaId){
      const userAbertura = await this.usersService.findOne(createPendenciaDto.userAberturaId);
      if(!userAbertura){
        throw new NotFoundException("userAbertura not found!");
      }
      createPendenciaDto.userAbertura = userAbertura;
    }

    if(createPendenciaDto.userFechamentoId){
      const userFechamento = await this.usersService.findOne(createPendenciaDto.userFechamentoId);
      if(!userFechamento){
        throw new NotFoundException("userFechamento not found!");
      }
      createPendenciaDto.userFechamento = userFechamento;
    }

    if(createPendenciaDto.tipoPendenciaId){
      const tipoPendencia = await this.tipoPendenciasService.findOne(createPendenciaDto.tipoPendenciaId);
      if(!tipoPendencia){
        throw new NotFoundException("tipoPendencia not found!");
      }
      createPendenciaDto.tipoPendencia = tipoPendencia;
    }

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

    if(!pendencia){
      throw new NotFoundException("Pendencia não encontrada!");
    }

    if(updatePendenciaDto.userAberturaId){
      const userAbertura = await this.usersService.findOne(updatePendenciaDto.userAberturaId);
      if(!userAbertura){
        throw new NotFoundException("userAbertura not found!");
      }
      updatePendenciaDto.userAbertura = userAbertura;
    }

    if(updatePendenciaDto.userFechamentoId){
      const userFechamento = await this.usersService.findOne(updatePendenciaDto.userFechamentoId);
      if(!userFechamento){
        throw new NotFoundException("userFechamento not found!");
      }
      updatePendenciaDto.userFechamento = userFechamento;
    }

    if(updatePendenciaDto.tipoPendenciaId){
      const tipoPendencia = await this.tipoPendenciasService.findOne(updatePendenciaDto.tipoPendenciaId);
      if(!tipoPendencia){
        throw new NotFoundException("tipoPendencia not found!");
      }
      updatePendenciaDto.tipoPendencia = tipoPendencia;
    }

    updatePendenciaDto.userFechamento = await this.usersService.findOne(updatePendenciaDto.userFechamentoId);

    await this.model.update(id, updatePendenciaDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    let pendencia: Pendencia = await this.findOne(id);

    if(!pendencia){
      throw new NotFoundException("Pendencia não encontrada!");
    }
    
    return await this.model.delete(id);
  }
}
