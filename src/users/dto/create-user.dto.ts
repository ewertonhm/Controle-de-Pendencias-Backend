import { IsString, MaxLength, IsEmail, MinLength, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MaxLength(120)
    @MinLength(3)
    nome: string;

    @IsString()
    @MaxLength(120)
    @MinLength(2)
    sobrenome: string;

    @IsString()
    @MaxLength(120)
    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    senha: string;

    @IsBoolean()
    @IsOptional()
    ativo: boolean;

    @IsString()
    @IsOptional()
    btv_usuario: string;

    @IsString()
    @IsOptional()
    btv_senha: string;

    @IsInt()
    @IsOptional()
    id_bitrix: number;
}
