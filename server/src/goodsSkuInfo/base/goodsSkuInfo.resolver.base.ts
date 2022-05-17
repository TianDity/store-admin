/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateGoodsSkuInfoArgs } from "./CreateGoodsSkuInfoArgs";
import { UpdateGoodsSkuInfoArgs } from "./UpdateGoodsSkuInfoArgs";
import { DeleteGoodsSkuInfoArgs } from "./DeleteGoodsSkuInfoArgs";
import { GoodsSkuInfoFindManyArgs } from "./GoodsSkuInfoFindManyArgs";
import { GoodsSkuInfoFindUniqueArgs } from "./GoodsSkuInfoFindUniqueArgs";
import { GoodsSkuInfo } from "./GoodsSkuInfo";
import { GoodsSkuInfoService } from "../goodsSkuInfo.service";

@graphql.Resolver(() => GoodsSkuInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GoodsSkuInfoResolverBase {
  constructor(
    protected readonly service: GoodsSkuInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GoodsSkuInfo",
    action: "read",
    possession: "any",
  })
  async _goodsSkuInfosMeta(
    @graphql.Args() args: GoodsSkuInfoFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GoodsSkuInfo])
  @nestAccessControl.UseRoles({
    resource: "GoodsSkuInfo",
    action: "read",
    possession: "any",
  })
  async goodsSkuInfos(
    @graphql.Args() args: GoodsSkuInfoFindManyArgs
  ): Promise<GoodsSkuInfo[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GoodsSkuInfo, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GoodsSkuInfo",
    action: "read",
    possession: "own",
  })
  async goodsSkuInfo(
    @graphql.Args() args: GoodsSkuInfoFindUniqueArgs
  ): Promise<GoodsSkuInfo | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GoodsSkuInfo)
  @nestAccessControl.UseRoles({
    resource: "GoodsSkuInfo",
    action: "create",
    possession: "any",
  })
  async createGoodsSkuInfo(
    @graphql.Args() args: CreateGoodsSkuInfoArgs
  ): Promise<GoodsSkuInfo> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GoodsSkuInfo)
  @nestAccessControl.UseRoles({
    resource: "GoodsSkuInfo",
    action: "update",
    possession: "any",
  })
  async updateGoodsSkuInfo(
    @graphql.Args() args: UpdateGoodsSkuInfoArgs
  ): Promise<GoodsSkuInfo | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GoodsSkuInfo)
  @nestAccessControl.UseRoles({
    resource: "GoodsSkuInfo",
    action: "delete",
    possession: "any",
  })
  async deleteGoodsSkuInfo(
    @graphql.Args() args: DeleteGoodsSkuInfoArgs
  ): Promise<GoodsSkuInfo | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
