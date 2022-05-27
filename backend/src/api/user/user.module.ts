import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleSchema } from 'src/entities/sale.entity';
import { UserController } from './user.controller';
import { UsersService } from './user.service';


@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers:[UserController]
})
export class UsersModule {}