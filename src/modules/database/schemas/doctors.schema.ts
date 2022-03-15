import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DoctorsDocument = Doctors & Document;

@Schema({ toJSON: { virtuals: true }, timestamps: true })
export class Doctors {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    photo: string;

    @Prop({ type: [Types.ObjectId], ref: 'Specialties', index: true })
    specialties: Types.ObjectId[];

    @Prop()
    experience: number;

    @Prop()
    description: string;

    @Prop()
    education: string;

    @Prop({ type: [Types.ObjectId], ref: 'Clinics', index: true })
    clinics: Types.ObjectId[];

    @Prop()
    rating: number;
}

export const DoctorsSchema = SchemaFactory.createForClass(Doctors);