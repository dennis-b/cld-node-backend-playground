import { Transport } from "@nestjs/microservices";
import { ClientsModuleOptions } from "@nestjs/microservices/module/interfaces";

export const Clients: ClientsModuleOptions = [
  {
    name: 'CUSTOM_ACTIONS_SERVICE',
    transport: Transport.TCP,
    options: {
      port: 4000
    }
  }
];