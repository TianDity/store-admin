import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductInfoServiceBase } from "./base/productInfo.service.base";

@Injectable()
export class ProductInfoService extends ProductInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
