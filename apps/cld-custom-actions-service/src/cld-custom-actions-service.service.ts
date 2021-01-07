import { Injectable } from "@nestjs/common";

@Injectable()
export class CldCustomActionsServiceService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
