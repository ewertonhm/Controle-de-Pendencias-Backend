import { Injectable } from '@nestjs/common';
import { CreatePendenciaDto } from './dto/create-pendencia.dto';
import { UpdatePendenciaDto } from './dto/update-pendencia.dto';

@Injectable()
export class PendenciasService {
  create(createPendenciaDto: CreatePendenciaDto) {
    return 'This action adds a new pendencia';
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
