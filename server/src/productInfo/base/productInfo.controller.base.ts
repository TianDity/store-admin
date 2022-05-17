/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductInfoService } from "../productInfo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductInfoCreateInput } from "./ProductInfoCreateInput";
import { ProductInfoWhereInput } from "./ProductInfoWhereInput";
import { ProductInfoWhereUniqueInput } from "./ProductInfoWhereUniqueInput";
import { ProductInfoFindManyArgs } from "./ProductInfoFindManyArgs";
import { ProductInfoUpdateInput } from "./ProductInfoUpdateInput";
import { ProductInfo } from "./ProductInfo";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductInfoControllerBase {
  constructor(
    protected readonly service: ProductInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductInfo",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductInfo })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ProductInfoCreateInput
  ): Promise<ProductInfo> {
    return await this.service.create({
      data: data,
      select: {
        auditStatus: true,
        averageCost: true,
        barCode: true,
        brandId: true,
        createdAt: true,
        descript: true,
        id: true,
        oneCategoryId: true,
        price: true,
        productCore: true,
        productionDate: true,
        productKeywords: true,
        productName: true,
        productSubtitle: true,
        publishStatus: true,
        purchasePrice: true,
        shelfLife: true,
        supplierId: true,
        threeCategoryId: true,
        twoCategoryId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductInfo",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductInfo] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ProductInfoFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ProductInfo[]> {
    const args = plainToClass(ProductInfoFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        auditStatus: true,
        averageCost: true,
        barCode: true,
        brandId: true,
        createdAt: true,
        descript: true,
        id: true,
        oneCategoryId: true,
        price: true,
        productCore: true,
        productionDate: true,
        productKeywords: true,
        productName: true,
        productSubtitle: true,
        publishStatus: true,
        purchasePrice: true,
        shelfLife: true,
        supplierId: true,
        threeCategoryId: true,
        twoCategoryId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductInfo",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProductInfoWhereUniqueInput
  ): Promise<ProductInfo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        auditStatus: true,
        averageCost: true,
        barCode: true,
        brandId: true,
        createdAt: true,
        descript: true,
        id: true,
        oneCategoryId: true,
        price: true,
        productCore: true,
        productionDate: true,
        productKeywords: true,
        productName: true,
        productSubtitle: true,
        publishStatus: true,
        purchasePrice: true,
        shelfLife: true,
        supplierId: true,
        threeCategoryId: true,
        twoCategoryId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductInfo",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProductInfoWhereUniqueInput,
    @common.Body() data: ProductInfoUpdateInput
  ): Promise<ProductInfo | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          auditStatus: true,
          averageCost: true,
          barCode: true,
          brandId: true,
          createdAt: true,
          descript: true,
          id: true,
          oneCategoryId: true,
          price: true,
          productCore: true,
          productionDate: true,
          productKeywords: true,
          productName: true,
          productSubtitle: true,
          publishStatus: true,
          purchasePrice: true,
          shelfLife: true,
          supplierId: true,
          threeCategoryId: true,
          twoCategoryId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "ProductInfo",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProductInfoWhereUniqueInput
  ): Promise<ProductInfo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          auditStatus: true,
          averageCost: true,
          barCode: true,
          brandId: true,
          createdAt: true,
          descript: true,
          id: true,
          oneCategoryId: true,
          price: true,
          productCore: true,
          productionDate: true,
          productKeywords: true,
          productName: true,
          productSubtitle: true,
          publishStatus: true,
          purchasePrice: true,
          shelfLife: true,
          supplierId: true,
          threeCategoryId: true,
          twoCategoryId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
