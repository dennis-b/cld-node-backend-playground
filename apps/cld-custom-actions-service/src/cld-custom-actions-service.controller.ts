import { Controller } from "@nestjs/common";
import { CldCustomActionsServiceService } from "./cld-custom-actions-service.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class CldCustomActionsServiceController {
  constructor(private readonly cldCustomActionsServiceService: CldCustomActionsServiceService) {}

  @MessagePattern('getHello')
  getHello(name: string): string {
    return this.cldCustomActionsServiceService.getHello(name);
  }
}
