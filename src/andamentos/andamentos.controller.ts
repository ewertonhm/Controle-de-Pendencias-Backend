import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AndamentosService } from './andamentos.service';
import { CreateAndamentoDto } from './dto/create-andamento.dto';
import { UpdateAndamentoDto } from './dto/update-andamento.dto';

@Controller('andamentos')
export class AndamentosController {
  constructor(private readonly andamentosService: AndamentosService) {}

  @Post()
  create(@Body() createAndamentoDto: CreateAndamentoDto) {
    return this.andamentosService.create(createAndamentoDto);
  }

  @Get()
  findAll() {
    return this.andamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.andamentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAndamentoDto: UpdateAndamentoDto) {
    return this.andamentosService.update(+id, updateAndamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.andamentosService.remove(+id);
  }
}
