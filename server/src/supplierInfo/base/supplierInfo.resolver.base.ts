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
import { CreateSupplierInfoArgs } from "./CreateSupplierInfoArgs";
import { UpdateSupplierInfoArgs } from "./UpdateSupplierInfoArgs";
import { DeleteSupplierInfoArgs } from "./DeleteSupplierInfoArgs";
import { SupplierInfoFindManyArgs } from "./SupplierInfoFindManyArgs";
import { SupplierInfoFindUniqueArgs } from "./SupplierInfoFindUniqueArgs";
import { SupplierInfo } from "./SupplierInfo";
import { ProductInfoFindManyArgs } from "../../productInfo/base/ProductInfoFindManyArgs";
import { ProductInfo } from "../../productInfo/base/ProductInfo";
import { SupplierInfoService } from "../supplierInfo.service";

@graphql.Resolver(() => SupplierInfo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupplierInfoResolverBase {
  constructor(
    protected readonly service: SupplierInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SupplierInfo",
    action: "read",
    possession: "any",
  })
  async _supplierInfosMeta(
    @graphql.Args() args: SupplierInfoFindManyArgs
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
  @graphql.Query(() => [SupplierInfo])
  @nestAccessControl.UseRoles({
    resource: "SupplierInfo",
    action: "read",
    possession: "any",
  })
  async supplierInfos(
    @graphql.Args() args: SupplierInfoFindManyArgs
  ): Promise<SupplierInfo[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SupplierInfo, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SupplierInfo",
    action: "read",
    possession: "own",
  })
  async supplierInfo(
    @graphql.Args() args: SupplierInfoFindUniqueArgs
  ): Promise<SupplierInfo | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SupplierInfo)
  @nestAccessControl.UseRoles({
    resource: "SupplierInfo",
    action: "create",
    possession: "any",
  })
  async createSupplierInfo(
    @graphql.Args() args: CreateSupplierInfoArgs
  ): Promise<SupplierInfo> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SupplierInfo)
  @nestAccessControl.UseRoles({
    resource: "SupplierInfo",
    action: "update",
    possession: "any",
  })
  async updateSupplierInfo(
    @graphql.Args() args: UpdateSupplierInfoArgs
  ): Promise<SupplierInfo | null> {
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

  @graphql.Mutation(() => SupplierInfo)
  @nestAccessControl.UseRoles({
    resource: "SupplierInfo",
    action: "delete",
    possession: "any",
  })
  async deleteSupplierInfo(
    @graphql.Args() args: DeleteSupplierInfoArgs
  ): Promise<SupplierInfo | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductInfo])
  @nestAccessControl.UseRoles({
    resource: "ProductInfo",
    action: "read",
    possession: "any",
  })
  async productSupplierId(
    @graphql.Parent() parent: SupplierInfo,
    @graphql.Args() args: ProductInfoFindManyArgs
  ): Promise<ProductInfo[]> {
    const results = await this.service.findProductSupplierId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
