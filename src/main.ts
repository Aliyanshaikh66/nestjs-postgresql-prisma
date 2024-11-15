import "dotenv/config"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser"

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.use(cookieParser())
  app.setGlobalPrefix('api/v1')

  const PORT = process.env.PORT || 5002
  await app.listen(PORT);

}

bootstrap();