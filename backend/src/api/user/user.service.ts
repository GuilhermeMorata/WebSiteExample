import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale, SaleDocument } from 'src/entities/sale.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(Sale.name) private saleCollection : Model<SaleDocument>,   
    ){}


    async getList(tag:string): Promise<Array<any> | null>{
        let matchquery:any
        matchquery = tag !== null ? {"$eq" : tag} : {"$ne" : "ALL"}
        const list = await this.saleCollection
            .find({"tag" : matchquery},{name:1,imgs:{$slice: 1},tag:1})
        return list 
    } 

    async getdetail(detailName: any): Promise<any>{
        const detail = await this.saleCollection.findOne({"name": detailName })
        return detail
    } 
    
}