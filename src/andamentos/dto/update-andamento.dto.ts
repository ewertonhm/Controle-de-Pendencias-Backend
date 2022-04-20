import { PartialType } from '@nestjs/swagger';
import { CreateAndamentoDto } from './create-andamento.dto';

export class UpdateAndamentoDto extends PartialType(CreateAndamentoDto) {}
