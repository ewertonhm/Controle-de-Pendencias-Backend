import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/get-user.decorator';
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
  create(@Body() createAndamentoDto: CreateAndamentoDto, @GetUser() user) {
    createAndamentoDto.userId = user.userId;
    return this.andamentosService.create(createAndamentoDto);
  }

  @Get()
  findAll() {
    return this.andamentosService.findAll();
  }

  @Get('extend')
  findAllExtend() {
    return this.andamentosService.findAllFull();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.andamentosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAndamentoDto: UpdateAndamentoDto) {
    return this.andamentosService.update(id, updateAndamentoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.andamentosService.remove(id);
  }
}
