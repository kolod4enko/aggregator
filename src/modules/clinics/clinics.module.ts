import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { ClinicsController } from './clinics.controller';
import { ClinicsService } from './clinics.service';

@Module({
  imports: [MulterModule.register({ dest: './src/upload' })],
  controllers: [ClinicsController],
  providers: [ClinicsService],
})
export class ClinicsModule {}
