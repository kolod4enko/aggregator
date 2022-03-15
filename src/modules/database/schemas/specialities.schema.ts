import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SpecialtiesDocument = Specialties & Document;

@Schema({ toJSON: { virtuals: true }, timestamps: true })
export class Specialties {
    @Prop()
    name: string;

    @Prop()
    uri: string
}

export const SpecialtiesSchema = SchemaFactory.createForClass(Specialties);