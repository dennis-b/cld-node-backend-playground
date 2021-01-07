import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule } from "@nestjs/microservices";
import { Clients } from "./clients";

@Module({
  imports: [
    ClientsModule.register(Clients)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
