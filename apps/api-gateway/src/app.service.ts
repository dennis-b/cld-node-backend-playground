import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {

  constructor(@Inject("CUSTOM_ACTIONS_SERVICE") private client: ClientProxy) {
  }

  public getHello(): Promise<string> {
    return this.client
      .send<string, string>("getHello", "Dennis")
      .toPromise();
  }
}
