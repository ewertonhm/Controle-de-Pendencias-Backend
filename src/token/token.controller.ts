import { Body, Controller, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RefreshTokenDto } from "./dto/refresh.token.dto";
import { Token } from "./entities/token.entity";
import { TokenService } from "./token.service";

@ApiTags('users')
@Controller('token')
export class TokenController{
    constructor(
        private tokenService: TokenService,
    ){}
    @Put('refresh')
    async refreshToken(@Body() data: RefreshTokenDto): Promise<any>{
        return await this.tokenService.refreshToken(data.oldToken)
    }
}