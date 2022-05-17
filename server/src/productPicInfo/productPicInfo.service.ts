import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductPicInfoServiceBase } from "./base/productPicInfo.service.base";

@Injectable()
export class ProductPicInfoService extends ProductPicInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
