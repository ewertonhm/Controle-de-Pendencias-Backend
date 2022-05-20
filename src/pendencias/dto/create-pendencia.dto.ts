import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString, IsUUID } from "class-validator";
import { TipoPendencia } from "src/tipo_pendencias/entities/tipo_pendencia.entity";
import { User } from "src/users/entities/user.entity";

export class CreatePendenciaDto {
    @IsUUID()
    @ApiProperty()
    tipoPendenciaId: string;

    @IsOptional()
    tipoPendencia: TipoPendencia;

    @IsUUID()
    @IsOptional()
    userAberturaId: string;

    @IsOptional()
    userAbertura: User;

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    userFechamentoId: string;

    @IsOptional()
    userFechamento: User;

    @IsString()
    @ApiProperty()
    titulo: string;

    @IsString()
    @ApiProperty()
    descricao: string;

    @IsString()
    @ApiProperty()
    responsavel: string;

    @IsDateString()
    @ApiProperty()
    inicio: Date;

    @IsDateString()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    previsao: Date;

    @IsDateString()
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
