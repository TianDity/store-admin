import { Module } from "@nestjs/common";
import { SupplierInfoModuleBase } from "./base/supplierInfo.module.base";
import { SupplierInfoService } from "./supplierInfo.service";
import { SupplierInfoController } from "./supplierInfo.controller";
import { SupplierInfoResolver } from "./supplierInfo.resolver";

@Module({
  imports: [SupplierInfoModuleBase],
  controllers: [SupplierInfoController],
  providers: [SupplierInfoService, SupplierInfoResolver],
  exports: [SupplierInfoService],
})
export class SupplierInfoModule {}
