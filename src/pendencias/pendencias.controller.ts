import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { PendenciasService } from './pendencias.service';
import { CreatePendenciaDto } from './dto/create-pendencia.dto';
import { UpdatePendenciaDto } from './dto/update-pendencia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateAndamentoDto } from 'src/andamentos/dto/create-andamento.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('pendencias')
@Controller('pendencias')
export class PendenciasController {
  constructor(private readonly pendenciasService: PendenciasService) {}
  
  @Post()
  create(@Body() createPendenciaDto: CreatePendenciaDto) {
    return this.pendenciasService.create(createPendenciaDto);
  }

  @Post(':id/andamento')
  createAndamento(@Param('id', ParseUUIDPipe) id: string, @Body() createAndamentoDto: CreateAndamentoDto) {
    return this.pendenciasService.createAndamento(id, createAndamentoDto);
  }


  @Get()
  findAll() {
    return this.pendenciasService.findAll();
  }

  @Get('extend')
  findAllFull() {
    return this.pendenciasService.findAllFull();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pendenciasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updatePendenciaDto: UpdatePendenciaDto) {
    return this.pendenciasService.update(id, updatePendenciaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pendenciasService.remove(id);
  }

  @Get(':id/andamentos/')
  findAndamentos(@Param('id', ParseUUIDPipe) id: string) {
    return this.pendenciasService.findAllAndamentos(id);
  }

  @Get(':id/andamentos/last/')
  findUltimoAndamento(@Param('id', ParseUUIDPipe) id: string) {
    return this.pendenciasService.findLastAndamento(id);
  }
}
