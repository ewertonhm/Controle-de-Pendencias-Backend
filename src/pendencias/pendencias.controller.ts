import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendenciasService } from './pendencias.service';
import { CreatePendenciaDto } from './dto/create-pendencia.dto';
import { UpdatePendenciaDto } from './dto/update-pendencia.dto';

@Controller('pendencias')
export class PendenciasController {
  constructor(private readonly pendenciasService: PendenciasService) {}

  @Post()
  create(@Body() createPendenciaDto: CreatePendenciaDto) {
    return this.pendenciasService.create(createPendenciaDto);
  }

  @Get()
  findAll() {
    return this.pendenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePendenciaDto: UpdatePendenciaDto) {
    return this.pendenciasService.update(+id, updatePendenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendenciasService.remove(+id);
  }
}
