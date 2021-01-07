import { NestFactory } from "@nestjs/core";
import { CldCustomActionsServiceModule } from "./cld-custom-actions-service.module";
import { Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";

const logger = new Logger("Blog");

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CldCustomActionsServiceModule, {
    transport: Transport.TCP,
    options: {
      port: 4000
    }
  });
  await app.listen(() => logger.log("CldCustomActionsService is listening"));
}

bootstrap();