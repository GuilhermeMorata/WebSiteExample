import { AdminModule } from './api/admin/admin.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AdminModule, 
    AuthModule, 
    UsersModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASEURL)],
  controllers: [],
  providers: [],
})
export class AppModule { }