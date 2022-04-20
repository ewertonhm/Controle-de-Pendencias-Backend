import { CreateTipoPendenciaDto } from './create-tipo_pendencia.dto';
import { PartialType } from '@nestjs/swagger';


export class UpdateTipoPendenciaDto extends PartialType(CreateTipoPendenciaDto) {}
