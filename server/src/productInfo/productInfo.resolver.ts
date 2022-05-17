import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductInfoResolverBase } from "./base/productInfo.resolver.base";
import { ProductInfo } from "./base/ProductInfo";
import { ProductInfoService } from "./productInfo.service";

@graphql.Resolver(() => ProductInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductInfoResolver extends ProductInfoResolverBase {
  constructor(
    protected readonly service: ProductInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
