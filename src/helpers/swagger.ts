import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ClinicsModule } from '../modules/clinics/clinics.module';
import { DoctorsModule } from '../modules/doctors/doctors.module';
import { FeedbacksModule } from '../modules/feedbacks/feedbacks.module';
import { TypesModule } from '../modules/types/types.module';
import { UsersModule } from '../modules/users/users.module';

interface IConfiguration {
  title: string;
  version: string;
  authName: string;
}

export class Swagger {
  private readonly app: INestApplication;
  private readonly config: any;

  constructor(app: INestApplication, config: any) {
    this.app = app;
    this.config = config;
  }

  siteBuilder() {
    const title = 'Delivery';
    const version = '1.0';
    const authName = 'site';
    const modules = [ClinicsModule, DoctorsModule, FeedbacksModule, TypesModule, UsersModule];
    const config = { title, version, authName };

    this.baseBuilder('swagger', modules, config);
  }

  private baseBuilder(path: string, modules: any[], configuration: IConfiguration) {
    const config = new DocumentBuilder()
      .setTitle(configuration.title)
      .setVersion(configuration.version)
      .addBearerAuth({ type: 'http' }, configuration.authName)
      .build();
    const options = { include: modules };
    const document = SwaggerModule.createDocument(this.app, config, options);

    SwaggerModule.setup(path, this.app, document);
  }
}
