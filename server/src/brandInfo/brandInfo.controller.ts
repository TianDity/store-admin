import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BrandInfoService } from "./brandInfo.service";
import { BrandInfoControllerBase } from "./base/brandInfo.controller.base";

@swagger.ApiTags("brandInfos")
@common.Controller("brandInfos")
export class BrandInfoController extends BrandInfoControllerBase {
  constructor(
    protected readonly service: BrandInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
