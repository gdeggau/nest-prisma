import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EntityNotFoundInterceptor } from './interceptors/entity-not-found.interceptor';
import { DatabaseInterceptor } from './interceptors/database.interceptor';
import { ConflictInterceptor } from './interceptors/conflict.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new EntityNotFoundInterceptor());
  app.useGlobalInterceptors(new DatabaseInterceptor());

  await app.listen(3000);
}
bootstrap();
