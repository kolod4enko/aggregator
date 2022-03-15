import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@db/database.module';

import { ClinicsModule } from './modules/clinics/clinics.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { FeedbacksModule } from './modules/feedbacks/feedbacks.module';
import { TypesModule } from './modules/types/types.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
    }),
    DatabaseModule,
    ClinicsModule,
    DoctorsModule,
    FeedbacksModule,
    TypesModule,
    UsersModule,
  ],
})
export class AppModule {}
