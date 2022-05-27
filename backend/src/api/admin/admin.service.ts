import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/entities/admin.entity';
import { Sale, SaleDocument } from 'src/entities/sale.entity';
import { requestAddProduct } from './models/request.model';

@Injectable()
export class AdminService {


    constructor(
        @InjectModel(Admin.name) private admincollection : Model<AdminDocument>,
        @InjectModel(Sale.name) private salecollection : Model<SaleDocument>,      
    ) {}

    async getList() : Promise<any> {
        const response = await this.salecollection.find({})
        return response
  
  }
 

    async addNewProduct(request:any) : Promise<any> {
        try {         
            const product : requestAddProduct = {
                name: request.name,
                value: request.value,
                imgs: request.imgs,
                desc: request.desc,
                tag: request.tag,
                type: request.type,
                time: new Date()
            }
            const response = await this.salecollection.create(product)
            return response 
        } catch (error) {
            console.log('error ____<',error)
        }
        return {}
    
    }
   

    async deleteProduct(request:any) : Promise<any> {
        const response = await this.salecollection.deleteOne({'name':request.name})
        return response
    }

   
    async updateProduct(request:any) : Promise<any> {
        const response = await this.salecollection
            .findOne({'name':request.name})
            .updateOne(request)
        return response
    }

 }

