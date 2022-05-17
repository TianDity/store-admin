import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductSPUInfoServiceBase } from "./base/productSpuInfo.service.base";

@Injectable()
export class ProductSPUInfoService extends ProductSPUInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
