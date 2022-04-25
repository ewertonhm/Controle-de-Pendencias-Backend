import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AndamentosService } from './andamentos.service';
import { CreateAndamentoDto } from './dto/create-andamento.dto';
import { UpdateAndamentoDto } from './dto/update-andamento.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('andamentos')
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
