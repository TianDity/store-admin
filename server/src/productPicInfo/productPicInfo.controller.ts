import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductPicInfoService } from "./productPicInfo.service";
import { ProductPicInfoControllerBase } from "./base/productPicInfo.controller.base";

@swagger.ApiTags("productPicInfos")
@common.Controller("productPicInfos")
export class ProductPicInfoController extends ProductPicInfoControllerBase {
  constructor(
    protected readonly service: ProductPicInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
