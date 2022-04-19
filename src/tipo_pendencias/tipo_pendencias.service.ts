import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoPendenciaDto } from './dto/create-tipo_pendencia.dto';
import { UpdateTipoPendenciaDto } from './dto/update-tipo_pendencia.dto';
import { Repository } from 'typeorm';
import { TipoPendencia } from './entities/tipo_pendencia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoPendenciasService {
  constructor(@InjectRepository(TipoPendencia) private model: Repository<TipoPendencia>) { }

  async create(createTipoPendenciaDto: CreateTipoPendenciaDto): Promise<TipoPendencia> {
    const tipoPendenciaCreated = await this.model.save(createTipoPendenciaDto);

    return tipoPendenciaCreated;
  }

  async findAll(): Promise<TipoPendencia[]> {
    const list = await this.model.find();
    return list;
  }

  async findOne(id: string): Promise<TipoPendencia> {
    const tipoPendencia = await this.model.findOne({ where: { id } });
    if(!tipoPendencia){
      throw new NotFoundException(`Nenhum registro com o ID "${id}" foi encontrado!`);
    }

    return tipoPendencia;
  }

  async update(id: string, updateTipoPendenciaDto: UpdateTipoPendenciaDto): Promise<TipoPendencia> {
    const tipoPendencia = await this.model.findOne({ where: { id } });
    if(!tipoPendencia){
      throw new NotFoundException(`Nenhum registro com o ID "${id}" foi encontrado!`);
    }

    await this.model.update({ id }, updateTipoPendenciaDto);

    return await this.model.findOne({ where: { id } });
  }

  async remove(id: string): Promise<string> {
    const tipoPendencia = await this.model.findOne({ where: { id } });
    if(!tipoPendencia){
      throw new NotFoundException(`Nenhum registro com o ID "${id}" foi encontrado!`);
    }

    await this.model.delete({ id });

    return `Registro com o ID "${id}" foi removido!`;
  }
}
