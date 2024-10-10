import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_PRODUCTION,
  ].filter(Boolean);

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTION',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
  });

  // global validation
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
