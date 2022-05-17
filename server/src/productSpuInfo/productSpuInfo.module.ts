import { Module } from "@nestjs/common";
import { ProductSPUInfoModuleBase } from "./base/productSpuInfo.module.base";
import { ProductSPUInfoService } from "./productSpuInfo.service";
import { ProductSPUInfoController } from "./productSpuInfo.controller";
import { ProductSPUInfoResolver } from "./productSpuInfo.resolver";

@Module({
  imports: [ProductSPUInfoModuleBase],
  controllers: [ProductSPUInfoController],
  providers: [ProductSPUInfoService, ProductSPUInfoResolver],
  exports: [ProductSPUInfoService],
})
export class ProductSPUInfoModule {}
