import { Controller, Get, Request, Post, UseGuards, Body, UseFilters, Req, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { request } from 'http';
import { AllExceptionsFilter } from 'src/commum/All-Exception-Filter';
import { HttpExceptionFilter } from 'src/commum/http-exception.filter';
import { UsersService } from './user.service';


@ApiTags("User")
@UseFilters(AllExceptionsFilter, HttpExceptionFilter)
@Controller("user")
export class UserController { 

    constructor(
        private userService: UsersService
    ){}

    @Post('getList')
    @ApiCreatedResponse({status:200,description: 'success',type: ''})
    async getList(@Body() tag:string) : Promise<any> {
        return await this.userService.getList(tag['tag'])
    }


    @Get('getDetail/:detailName')
    @ApiCreatedResponse({status:200,description: 'success',type: ''})
    async getDetail(@Param('detailName') detailName: string ) : Promise<any> {
        return await this.userService.getdetail(detailName)
    }
}
