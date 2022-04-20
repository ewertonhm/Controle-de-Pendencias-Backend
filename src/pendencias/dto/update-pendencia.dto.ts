import { PartialType } from '@nestjs/swagger';
import { CreatePendenciaDto } from './create-pendencia.dto';

export class UpdatePendenciaDto extends PartialType(CreatePendenciaDto) {}
