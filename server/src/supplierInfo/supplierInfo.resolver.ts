import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupplierInfoResolverBase } from "./base/supplierInfo.resolver.base";
import { SupplierInfo } from "./base/SupplierInfo";
import { SupplierInfoService } from "./supplierInfo.service";

@graphql.Resolver(() => SupplierInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupplierInfoResolver extends SupplierInfoResolverBase {
  constructor(
    protected readonly service: SupplierInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
