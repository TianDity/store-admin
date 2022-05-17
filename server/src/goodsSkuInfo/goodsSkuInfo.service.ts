import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GoodsSkuInfoServiceBase } from "./base/goodsSkuInfo.service.base";

@Injectable()
export class GoodsSkuInfoService extends GoodsSkuInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
