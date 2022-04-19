import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { TipoPendenciasService } from './tipo_pendencias.service';
import { CreateTipoPendenciaDto } from './dto/create-tipo_pendencia.dto';
import { UpdateTipoPendenciaDto } from './dto/update-tipo_pendencia.dto';

@Controller('tipo-pendencias')
export class TipoPendenciasController {
  constructor(private readonly tipoPendenciasService: TipoPendenciasService) {}

  @Post()
  create(@Body() createTipoPendenciaDto: CreateTipoPendenciaDto) {
    return this.tipoPendenciasService.create(createTipoPendenciaDto);
  }

  @Get()
  findAll() {
    return this.tipoPendenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tipoPendenciasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTipoPendenciaDto: UpdateTipoPendenciaDto) {
    return this.tipoPendenciasService.update(id, updateTipoPendenciaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.tipoPendenciasService.remove(id);
  }
}
