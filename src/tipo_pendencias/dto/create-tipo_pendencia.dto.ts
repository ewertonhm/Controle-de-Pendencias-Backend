import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateTipoPendenciaDto {
    @IsString()
    @MaxLength(120)
    @MinLength(3)
    @ApiProperty()
    tipo: string;

    @IsNumber()
    @ApiProperty()
    severidade: number;
}
