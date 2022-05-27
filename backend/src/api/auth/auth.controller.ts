/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { requestLogin, requestRegister } from 'src/api/auth/models/request.model';
import { AllExceptionsFilter } from 'src/commum/All-Exception-Filter';
import { HttpExceptionFilter } from 'src/commum/http-exception.filter';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    
    constructor(
        private authService: AuthService ,
    ) {}


    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiCreatedResponse({status:200,description: 'Create system admin',type: requestLogin})
    async login(@Body() req : requestLogin ) {
      return this.authService.login(req);
    }

    @Post('register')
    @ApiCreatedResponse({status:200,description: 'Create system admin',type: requestRegister})
    async register(@Body() req : requestRegister ) {
      return this.authService.register(req);
    }
    
    @Put('validateUser')
    @UseGuards(JwtAuthGuard)
    @UseFilters(AllExceptionsFilter, HttpExceptionFilter)
    @ApiBearerAuth("access-token")
    @ApiCreatedResponse({status:200,description: 'Create system admin',})
    async validateUser() {
        return true
    }

}
