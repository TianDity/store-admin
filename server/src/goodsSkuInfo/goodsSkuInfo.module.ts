import { Module } from "@nestjs/common";
import { GoodsSkuInfoModuleBase } from "./base/goodsSkuInfo.module.base";
import { GoodsSkuInfoService } from "./goodsSkuInfo.service";
import { GoodsSkuInfoController } from "./goodsSkuInfo.controller";
import { GoodsSkuInfoResolver } from "./goodsSkuInfo.resolver";

@Module({
  imports: [GoodsSkuInfoModuleBase],
  controllers: [GoodsSkuInfoController],
  providers: [GoodsSkuInfoService, GoodsSkuInfoResolver],
  exports: [GoodsSkuInfoService],
})
export class GoodsSkuInfoModule {}
