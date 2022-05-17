import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BrandInfoServiceBase } from "./base/brandInfo.service.base";

@Injectable()
export class BrandInfoService extends BrandInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
