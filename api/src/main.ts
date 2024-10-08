import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Handler } from 'aws-lambda';
import serverless from 'serverless-http';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

export const handler: Handler = serverless(expressApp);
