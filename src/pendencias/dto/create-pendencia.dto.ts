import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreatePendenciaDto {
    @IsUUID()
    @ApiProperty()
    tipoPendencia: string;

    @IsUUID()
    @ApiProperty()
    usuarioAbertura: string;

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    usuarioFechamento: string;

    @IsString()
    @ApiProperty()
    titulo: string;

    @IsString()
    @ApiProperty()
    descricao: string;

    @IsDate()
    @ApiProperty()
    inicio: string;

    @IsDate()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    previsao: Date;

    @IsDate()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    fim: Date;

    @IsString()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    task: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    incidente: string;

}
