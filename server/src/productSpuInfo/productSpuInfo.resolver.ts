import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductSPUInfoResolverBase } from "./base/productSpuInfo.resolver.base";
import { ProductSPUInfo } from "./base/ProductSPUInfo";
import { ProductSPUInfoService } from "./productSpuInfo.service";

@graphql.Resolver(() => ProductSPUInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductSPUInfoResolver extends ProductSPUInfoResolverBase {
  constructor(
    protected readonly service: ProductSPUInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
