import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Schema as MongooseSchema } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin extends Document {
    @Prop({ required: true })
    name:string
    @Prop({ required: true })
    passwordHash:string
    @Prop({required: true})
    email?: string
 
}

export const adminSchema = SchemaFactory.createForClass(Admin);