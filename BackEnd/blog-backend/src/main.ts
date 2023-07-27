import { NestFactory } from '@nestjs/core';
import { BootstrapModule } from './bootstrap.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BootstrapModule, { cors: true });
  const port = 3000;
  app.enableCors();
  await app.listen(port, () => {
    Logger.log(`Blog Backend is running on port ${port}`);
  });
}
bootstrap();
