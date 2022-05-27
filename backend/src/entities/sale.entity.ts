import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Schema as MongooseSchema } from 'mongoose';

export type SaleDocument = Sale & Document;

@Schema()
export class Sale extends Document {
    @Prop({ required: true })
    name:string
    @Prop({ required: true })
    value:number
    @Prop({ required: true , type: Array})
    imgs: Array<any>
    @Prop({ required: true })
    desc: string
    @Prop({ required: true })
    tag: string
    @Prop({ required: true })
    type: string
    @Prop({ required: true , type: Date })
    time: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);