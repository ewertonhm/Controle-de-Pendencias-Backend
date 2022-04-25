import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class CreateAndamentoFromPendenciaDto {
    @IsString()
    @ApiProperty()
    andamento: string;

    @IsDateString()
    @ApiProperty()
    dataAndamento: string;
}
