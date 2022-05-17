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
import { CreateProductCategoryArgs } from "./CreateProductCategoryArgs";
import { UpdateProductCategoryArgs } from "./UpdateProductCategoryArgs";
import { DeleteProductCategoryArgs } from "./DeleteProductCategoryArgs";
import { ProductCategoryFindManyArgs } from "./ProductCategoryFindManyArgs";
import { ProductCategoryFindUniqueArgs } from "./ProductCategoryFindUniqueArgs";
import { ProductCategory } from "./ProductCategory";
import { ProductSPUInfoFindManyArgs } from "../../productSpuInfo/base/ProductSPUInfoFindManyArgs";
import { ProductSPUInfo } from "../../productSpuInfo/base/ProductSPUInfo";
import { ProductCategoryService } from "../productCategory.service";

@graphql.Resolver(() => ProductCategory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductCategoryResolverBase {
  constructor(
    protected readonly service: ProductCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async _productCategoriesMeta(
    @graphql.Args() args: ProductCategoryFindManyArgs
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
  @graphql.Query(() => [ProductCategory])
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async productCategories(
    @graphql.Args() args: ProductCategoryFindManyArgs
  ): Promise<ProductCategory[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "own",
  })
  async productCategory(
    @graphql.Args() args: ProductCategoryFindUniqueArgs
  ): Promise<ProductCategory | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "create",
    possession: "any",
  })
  async createProductCategory(
    @graphql.Args() args: CreateProductCategoryArgs
  ): Promise<ProductCategory> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "update",
    possession: "any",
  })
  async updateProductCategory(
    @graphql.Args() args: UpdateProductCategoryArgs
  ): Promise<ProductCategory | null> {
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

  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "delete",
    possession: "any",
  })
  async deleteProductCategory(
    @graphql.Args() args: DeleteProductCategoryArgs
  ): Promise<ProductCategory | null> {
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
  @graphql.ResolveField(() => [ProductSPUInfo])
  @nestAccessControl.UseRoles({
    resource: "ProductSPUInfo",
    action: "read",
    possession: "any",
  })
  async productOneCategoryId(
    @graphql.Parent() parent: ProductCategory,
    @graphql.Args() args: ProductSPUInfoFindManyArgs
  ): Promise<ProductSPUInfo[]> {
    const results = await this.service.findProductOneCategoryId(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductSPUInfo])
  @nestAccessControl.UseRoles({
    resource: "ProductSPUInfo",
    action: "read",
    possession: "any",
  })
  async productThreeCategoryId(
    @graphql.Parent() parent: ProductCategory,
    @graphql.Args() args: ProductSPUInfoFindManyArgs
  ): Promise<ProductSPUInfo[]> {
    const results = await this.service.findProductThreeCategoryId(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductSPUInfo])
  @nestAccessControl.UseRoles({
    resource: "ProductSPUInfo",
    action: "read",
    possession: "any",
  })
  async productTwoCategoryId(
    @graphql.Parent() parent: ProductCategory,
    @graphql.Args() args: ProductSPUInfoFindManyArgs
  ): Promise<ProductSPUInfo[]> {
    const results = await this.service.findProductTwoCategoryId(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
