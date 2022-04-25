import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsOptional, IsString, IsUUID } from "class-validator";
import { Pendencia } from "src/pendencias/entities/pendencia.entity";
import { User } from "src/users/entities/user.entity";

export class CreateAndamentoDto {
    @IsUUID()
    @ApiProperty()
    @IsOptional()
    pendenciaId: string;

    @IsOptional()
    pendencia: Pendencia;

    @IsUUID()
    @IsOptional()
    userId: string;

    @IsOptional()
    user: User;

    @IsString()
    @ApiProperty()
    andamento: string;

    @IsDateString()
    @ApiProperty()
    dataAndamento: string;
}
