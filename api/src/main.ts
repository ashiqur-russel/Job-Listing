import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const allowedOrigins = [
    'http://localhost:3000',
    'https://find-job-eight.vercel.app',
    '*',
  ].filter(Boolean);

  app.use(
    cors({
      origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
    }),
  );

  // global validation
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
