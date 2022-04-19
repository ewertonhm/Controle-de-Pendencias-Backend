import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoPendenciaDto } from './create-tipo_pendencia.dto';

export class UpdateTipoPendenciaDto extends PartialType(CreateTipoPendenciaDto) {}
