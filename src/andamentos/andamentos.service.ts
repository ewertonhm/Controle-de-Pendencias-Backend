import { Injectable } from '@nestjs/common';
import { CreateAndamentoDto } from './dto/create-andamento.dto';
import { UpdateAndamentoDto } from './dto/update-andamento.dto';

@Injectable()
export class AndamentosService {
  create(createAndamentoDto: CreateAndamentoDto) {
    return 'This action adds a new andamento';
  }

  findAll() {
    return `This action returns all andamentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} andamento`;
  }

  update(id: number, updateAndamentoDto: UpdateAndamentoDto) {
    return `This action updates a #${id} andamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} andamento`;
  }
}
