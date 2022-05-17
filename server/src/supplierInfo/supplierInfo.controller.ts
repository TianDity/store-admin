import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupplierInfoService } from "./supplierInfo.service";
import { SupplierInfoControllerBase } from "./base/supplierInfo.controller.base";

@swagger.ApiTags("supplierInfos")
@common.Controller("supplierInfos")
export class SupplierInfoController extends SupplierInfoControllerBase {
  constructor(
    protected readonly service: SupplierInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
