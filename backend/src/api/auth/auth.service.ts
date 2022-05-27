import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/entities/admin.entity';
import * as bcrypt from 'bcrypt';
import { requestRegister } from './models/request.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name) private admincollection : Model<AdminDocument>,
    private jwtService: JwtService
  ) {}

  
  private async hashPassword(password : string): Promise<string>{
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash
  } 

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.admincollection.findOne({'name': username})
    if(!user) new UnauthorizedException();
    if(!password) new UnauthorizedException();

    if(password === user.passwordHash)new UnauthorizedException();
    return user
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(request:requestRegister): Promise<any>{
    if(request.secrectKEY === process.env.SECRETEREGISTER){
      const user : Admin = await this.admincollection.findOne({'name': request.admin.name})
      if(user) {throw new UnauthorizedException()}
      else{        
        request.admin.passwordHash = await this.hashPassword(request.admin.passwordHash)
        const response = await this.admincollection.create(request.admin)
        return response
      }
  }
  else{
      throw new UnauthorizedException();
  }
  }

}