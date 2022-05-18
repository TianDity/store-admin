import { Module } from "@nestjs/common";
import { ProductPicInfoModuleBase } from "./base/productPicInfo.module.base";
import { ProductPicInfoService } from "./productPicInfo.service";
import { ProductPicInfoController } from "./productPicInfo.controller";
import { ProductPicInfoResolver } from "./productPicInfo.resolver";

@Module({
  imports: [ProductPicInfoModuleBase],
  controllers: [ProductPicInfoController],
  providers: [ProductPicInfoService, ProductPicInfoResolver],
  exports: [ProductPicInfoService],
})
export class ProductPicInfoModule {}
