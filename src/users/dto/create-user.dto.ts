import { IsString, MaxLength, IsEmail, MinLength, IsBoolean, IsOptional, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {
    @IsString()
    @MaxLength(120)
    @MinLength(3)
    @ApiProperty()
    nome: string;

    @IsString()
    @MaxLength(120)
    @MinLength(2)
    @ApiProperty()
    sobrenome: string;

    @IsString()
    @MaxLength(120)
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    @ApiProperty()
    senha: string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({
        required: false,
        default: true
    })
    ativo: boolean;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({
        required: false,
        default: false
    })
    admin: boolean;

    @IsString()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    btv_usuario: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    btv_senha: string;

    @IsInt()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    id_bitrix: number;
}
