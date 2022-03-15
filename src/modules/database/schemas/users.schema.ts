import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsersDocument = Users & Document;

@Schema({ toJSON: { virtuals: true }, timestamps: true })
export class Users {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);