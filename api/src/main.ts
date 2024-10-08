import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global validation
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 7000);
}
bootstrap();
