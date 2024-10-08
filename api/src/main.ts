import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Handler } from 'aws-lambda';
import * as express from 'express';
import serverless from 'serverless-http';
import { AppModule } from './app.module';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 5000;

  if (process.env.NODE_ENV !== 'production') {
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
  } else {
    await app.init();
  }
}

bootstrap();

// For serverless deployment (like Vercel), export the serverless handler
export const handler: Handler = serverless(expressApp);
