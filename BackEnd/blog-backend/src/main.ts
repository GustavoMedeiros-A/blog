import { NestFactory } from '@nestjs/core';
import { BootstrapModule } from './bootstrap.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BootstrapModule);
  const port = 3000;
  await app.listen(port, () => {
    Logger.log(`Blog Backend is running on port ${port}`);
  });
}
bootstrap();
