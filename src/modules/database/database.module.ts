import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { Clinics, ClinicsSchema } from '@db/schemas/clinics.schema';
import { Doctors, DoctorsSchema } from '@db/schemas/doctors.schema';
import { Feedbacks, FeedbacksSchema } from '@db/schemas/feedbacks.schema';
import { Specialties, SpecialtiesSchema } from '@db/schemas/specialities.schema';
import { Types, TypesSchema } from '@db/schemas/types.schema';
import { Users, UsersSchema } from '@db/schemas/users.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({ uri: config.get<string>('MONGODB_URI') }),
    }),
    MongooseModule.forFeature([{ name: Clinics.name, schema: ClinicsSchema }]),
    MongooseModule.forFeature([{ name: Doctors.name, schema: DoctorsSchema }]),
    MongooseModule.forFeature([{ name: Feedbacks.name, schema: FeedbacksSchema }]),
    MongooseModule.forFeature([{ name: Specialties.name, schema: SpecialtiesSchema }]),
    MongooseModule.forFeature([{ name: Types.name, schema: TypesSchema }]),
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
