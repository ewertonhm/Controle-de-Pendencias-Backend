import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTipoPendenciaDto {
    @IsString()
    @MaxLength(120)
    @MinLength(3)
    tipo: string;

    @IsNumber()
    severidade: number;
}
