import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GoodsSkuInfoService } from "./goodsSkuInfo.service";
import { GoodsSkuInfoControllerBase } from "./base/goodsSkuInfo.controller.base";

@swagger.ApiTags("goodsSkuInfos")
@common.Controller("goodsSkuInfos")
export class GoodsSkuInfoController extends GoodsSkuInfoControllerBase {
  constructor(
    protected readonly service: GoodsSkuInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
