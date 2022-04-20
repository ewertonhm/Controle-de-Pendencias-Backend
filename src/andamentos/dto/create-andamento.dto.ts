import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateAndamentoDto {
    @IsUUID()
    @ApiProperty()
    pendencia: string;

    @IsUUID()
    @ApiProperty()
    user: string;

    @IsString()
    @ApiProperty()
    andamento: string;

    @IsDate()
    @ApiProperty()
    dataAndamento: string;
}
