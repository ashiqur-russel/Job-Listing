import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const corsOptions = {
    origin: '*',
  } as CorsOptions;

  app.enableCors(corsOptions);

  // global validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 5000);
}

bootstrap();
