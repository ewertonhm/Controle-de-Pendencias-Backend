import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoPendenciaDto } from './create-tipo_pendencia.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateTipoPendenciaDto extends PartialType(CreateTipoPendenciaDto) {}
