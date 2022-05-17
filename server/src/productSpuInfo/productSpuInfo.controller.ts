import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductSPUInfoService } from "./productSpuInfo.service";
import { ProductSPUInfoControllerBase } from "./base/productSpuInfo.controller.base";

@swagger.ApiTags("productSpuInfos")
@common.Controller("productSpuInfos")
export class ProductSPUInfoController extends ProductSPUInfoControllerBase {
  constructor(
    protected readonly service: ProductSPUInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
