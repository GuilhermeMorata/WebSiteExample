import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { requestLogin } from 'src/api/auth/models/request.model';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(adminName:string ,password:string): Promise<any> {
    const user = await this.authService.validateUser(adminName, password);
    if (!user) {
      throw new UnauthorizedException();
    } 
    return {adminName,password};
  }
}