import { ApiProperty } from "@nestjs/swagger";

export class requestLogin{
    @ApiProperty({required: true, default: 'admin'})
    username: string;
    @ApiProperty({required: true, default: 'password'})
    password: string;
}

interface adminregister{
    name: string,
    passwordHash:string
    email: string
}

export class requestRegister{
    @ApiProperty({required: true , default : {name:"admin", passwordHash:"admin1234", email:"admin@example.com"}})
    admin: adminregister
    @ApiProperty({required: true , default: "AdminRegister"})
    secrectKEY: string


}