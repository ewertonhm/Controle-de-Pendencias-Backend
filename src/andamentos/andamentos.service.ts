import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pendencia } from 'src/pendencias/entities/pendencia.entity';
import { PendenciasService } from 'src/pendencias/pendencias.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateAndamentoDto } from './dto/create-andamento.dto';
import { UpdateAndamentoDto } from './dto/update-andamento.dto';
import { Andamento } from './entities/andamento.entity';

@Injectable()
export class AndamentosService {

  constructor(
    @InjectRepository(Andamento)
    private andamento: Repository<Andamento>,
    private usersService: UsersService,
    private pendenciaService: PendenciasService
  ) {}

  async create(createAndamentoDto: CreateAndamentoDto) {
      const user = await this.usersService.findOne(createAndamentoDto.userId);
      if(!user){
        throw new NotFoundException("user not found!");
      }
      createAndamentoDto.user = user;

      const pendencia = await this.pendenciaService.findOne(createAndamentoDto.pendenciaId);
      if(!pendencia){
        throw new NotFoundException("pendencia not found!");
      }
      createAndamentoDto.pendencia = pendencia;

      return await this.andamento.save(createAndamentoDto);
  }

  async findAll() {
    let andamentos = await this.andamento.find();

    return andamentos;
  }

  async findAllFull() {
    let andamentos = await this.andamento.find({
      relations: {
        user: true,
        pendencia: true,
      }
    });

    return andamentos;
  }

  async findOne(id: string) {
    const andamento = await this.andamento.findOne({
      where: {
        id
      },
      relations: {
        user: true,
        pendencia: true
      },
    });

    if(!andamento){
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return andamento;
  }

  async findLastOneFromPendencia(pendencia: Pendencia) {
    const andamento = this.andamento.createQueryBuilder("andamento").where("andamento.pendenciaId = :id", {id: pendencia.id}).addOrderBy("andamento.id","ASC").getOne();

    return andamento;
  }

  async findAllFromPendencia(pendencia: Pendencia) {
    const andamentos = this.andamento.createQueryBuilder("andamento").where("andamento.pendenciaId = :id", {id: pendencia.id}).getMany();
    return andamentos;
  }

  async update(id: string, updateAndamentoDto: UpdateAndamentoDto) {
    let andamento: Andamento = await this.findOne(id);

    if(!andamento){
      throw new NotFoundException("Andamento não encontrado!");
    }

    if(updateAndamentoDto.userId){
      let user = await this.usersService.findOne(updateAndamentoDto.userId)
      if(!user){
        throw new NotFoundException("user not found!");
      }
      updateAndamentoDto.user = user;
    }
    
    if(updateAndamentoDto.pendenciaId){
      let pendencia = await this.pendenciaService.findOne(updateAndamentoDto.pendenciaId)
      if(!pendencia){
        throw new NotFoundException("pendencia not found!");
      }
      updateAndamentoDto.pendencia = pendencia;
    }

    await this.andamento.update(id, updateAndamentoDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    let andamento: Andamento = await this.findOne(id);

    if(!andamento){
      throw new NotFoundException("Andamento não encontrado!");
    }

    return await this.andamento.delete(id);
  }
  
}
