import { config as conDotEnv } from 'dotenv';

const dotenv = conDotEnv({
  path: `.env`,
});
const envConfig = dotenv.parsed;
process.env = envConfig;

import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { Swagger } from '@helpers/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const swagger = new Swagger(app, config);
  swagger.siteBuilder();

  app.use(morgan('dev'));

  app.enableCors();

  await app.listen(config.get('PORT'), config.get('HOST'));
}

bootstrap();
