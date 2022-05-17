import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductPicInfoResolverBase } from "./base/productPicInfo.resolver.base";
import { ProductPicInfo } from "./base/ProductPicInfo";
import { ProductPicInfoService } from "./productPicInfo.service";

@graphql.Resolver(() => ProductPicInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductPicInfoResolver extends ProductPicInfoResolverBase {
  constructor(
    protected readonly service: ProductPicInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
