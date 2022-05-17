import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GoodsSkuInfoResolverBase } from "./base/goodsSkuInfo.resolver.base";
import { GoodsSkuInfo } from "./base/GoodsSkuInfo";
import { GoodsSkuInfoService } from "./goodsSkuInfo.service";

@graphql.Resolver(() => GoodsSkuInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GoodsSkuInfoResolver extends GoodsSkuInfoResolverBase {
  constructor(
    protected readonly service: GoodsSkuInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
