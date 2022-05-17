import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductInfoService } from "./productInfo.service";
import { ProductInfoControllerBase } from "./base/productInfo.controller.base";

@swagger.ApiTags("productInfos")
@common.Controller("productInfos")
export class ProductInfoController extends ProductInfoControllerBase {
  constructor(
    protected readonly service: ProductInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
