import { Module } from "@nestjs/common";
import { BrandInfoModuleBase } from "./base/brandInfo.module.base";
import { BrandInfoService } from "./brandInfo.service";
import { BrandInfoController } from "./brandInfo.controller";
import { BrandInfoResolver } from "./brandInfo.resolver";

@Module({
  imports: [BrandInfoModuleBase],
  controllers: [BrandInfoController],
  providers: [BrandInfoService, BrandInfoResolver],
  exports: [BrandInfoService],
})
export class BrandInfoModule {}
