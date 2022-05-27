import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { adminSchema } from 'src/entities/admin.entity';
import { SaleSchema } from 'src/entities/sale.entity';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Admin', schema: adminSchema }]),
        MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
    ],
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule {}
