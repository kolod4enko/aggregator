import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FeedbacksDocument = Feedbacks & Document;

@Schema({ toJSON: { virtuals: true }, timestamps: true })
export class Feedbacks {
    @Prop({ type: Types.ObjectId, ref: 'Users', index: true })
    userID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Clinics', index: true })
    clinicID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Doctors', index: true })
    doctorID: Types.ObjectId;

    @Prop()
    estimation: number;

    @Prop()
    message: string;
}

export const FeedbacksSchema = SchemaFactory.createForClass(Feedbacks);