import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsUUID } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { CreatePendenciaDto } from "./create-pendencia.dto";

export class FecharPendenciaDto{
    @IsDateString()
    @ApiProperty()
    fim: Date;
}