import { Module } from "@nestjs/common";
import { ProductInfoModuleBase } from "./base/productInfo.module.base";
import { ProductInfoService } from "./productInfo.service";
import { ProductInfoController } from "./productInfo.controller";
import { ProductInfoResolver } from "./productInfo.resolver";

@Module({
  imports: [ProductInfoModuleBase],
  controllers: [ProductInfoController],
  providers: [ProductInfoService, ProductInfoResolver],
  exports: [ProductInfoService],
})
export class ProductInfoModule {}
