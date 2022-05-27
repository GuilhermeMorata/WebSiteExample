import { Controller, Get, Request, Post, UseGuards, Body, UseFilters } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/api/auth/guard/jwt-auth.guard';
import { AllExceptionsFilter } from 'src/commum/All-Exception-Filter';
import { HttpExceptionFilter } from 'src/commum/http-exception.filter';


import { requestLogin } from '../auth/models/request.model';
import { AdminService } from './admin.service';

@ApiTags("Admin")
@UseFilters(AllExceptionsFilter, HttpExceptionFilter)
@Controller("admin")
export class AdminController {
 
    constructor(
      private readonly AdminService: AdminService, 
    ) {}

    
    @Post('Test-JWT')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("access-token")
    @ApiCreatedResponse({status:200,description: 'Create system admin',type: requestLogin})
    async teste(@Body() req : any ) {
      return true
    }

    @Get('getList')
    @UseGuards(JwtAuthGuard) 
    @ApiBearerAuth("access-token")
    @ApiCreatedResponse({status:200,description: 'success',type: ''})
    async getListAdmin() : Promise<any> {
        return await this.AdminService.getList()
    }

    
    @Post('addNewProduct')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("access-token") 
    @ApiCreatedResponse({status:200,description: 'success',type: ''})
    async addNewProduct(@Body() request:any) : Promise<any> {
        return await this.AdminService.addNewProduct(request)
    }


    @Post('deleteProduct')
    @UseGuards(JwtAuthGuard) 
    @ApiBearerAuth("access-token")
    @ApiCreatedResponse({status:200,description: 'success',type: ''}) 
    async deleteProduct(@Body() request:any) : Promise<any> {
        return await this.AdminService.deleteProduct(request)
    }

    @Post('updateProduct')
    @UseGuards(JwtAuthGuard) 
    @ApiBearerAuth("access-token")
    @ApiCreatedResponse({status:200,description: 'success',type: ''})
    async updateProduct(@Body() request:any) : Promise<any> {
        return await this.AdminService.updateProduct(request)
    }



 }
