import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class CredentialsDto{
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    senha: string;
}