import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ClinicsDocument = Clinics & Document;

@Schema({ toJSON: { virtuals: true }, timestamps: true })
export class Clinics {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Types', index: true })
  type?: Types.ObjectId;

  @Prop()
  address: string;

  @Prop()
  phone: number;

  @Prop()
  description: string;

  @Prop()
  photos: string[];

  @Prop({ default: 0 })
  rating: number;

  @Prop()
  licenses: string[];

  @Prop({ default: false })
  active: boolean;
}

export const ClinicsSchema = SchemaFactory.createForClass(Clinics);
