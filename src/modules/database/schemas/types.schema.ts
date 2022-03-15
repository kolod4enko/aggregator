import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TypesDocument = Types & Document;

@Schema({ toJSON: { virtuals: true }, timestamps: true })
export class Types {
    @Prop()
    name: string;

    @Prop()
    uri: string;
}

export const TypesSchema = SchemaFactory.createForClass(Types);