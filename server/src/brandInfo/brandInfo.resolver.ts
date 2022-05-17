import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BrandInfoResolverBase } from "./base/brandInfo.resolver.base";
import { BrandInfo } from "./base/BrandInfo";
import { BrandInfoService } from "./brandInfo.service";

@graphql.Resolver(() => BrandInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BrandInfoResolver extends BrandInfoResolverBase {
  constructor(
    protected readonly service: BrandInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
