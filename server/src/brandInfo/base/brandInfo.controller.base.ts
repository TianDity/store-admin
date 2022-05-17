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
import { BrandInfoService } from "../brandInfo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BrandInfoCreateInput } from "./BrandInfoCreateInput";
import { BrandInfoWhereInput } from "./BrandInfoWhereInput";
import { BrandInfoWhereUniqueInput } from "./BrandInfoWhereUniqueInput";
import { BrandInfoFindManyArgs } from "./BrandInfoFindManyArgs";
import { BrandInfoUpdateInput } from "./BrandInfoUpdateInput";
import { BrandInfo } from "./BrandInfo";
import { ProductSPUInfoFindManyArgs } from "../../productSpuInfo/base/ProductSPUInfoFindManyArgs";
import { ProductSPUInfo } from "../../productSpuInfo/base/ProductSPUInfo";
import { ProductSPUInfoWhereUniqueInput } from "../../productSpuInfo/base/ProductSPUInfoWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BrandInfoControllerBase {
  constructor(
    protected readonly service: BrandInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BrandInfo",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BrandInfo })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: BrandInfoCreateInput): Promise<BrandInfo> {
    return await this.service.create({
      data: data,
      select: {
        brandDesc: true,
        brandLogo: true,
        brandName: true,
        brandOrder: true,
        brandStatus: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BrandInfo",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [BrandInfo] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(BrandInfoFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<BrandInfo[]> {
    const args = plainToClass(BrandInfoFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        brandDesc: true,
        brandLogo: true,
        brandName: true,
        brandOrder: true,
        brandStatus: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "BrandInfo",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BrandInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BrandInfoWhereUniqueInput
  ): Promise<BrandInfo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        brandDesc: true,
        brandLogo: true,
        brandName: true,
        brandOrder: true,
        brandStatus: true,
        createdAt: true,
        id: true,
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
    resource: "BrandInfo",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BrandInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: BrandInfoWhereUniqueInput,
    @common.Body() data: BrandInfoUpdateInput
  ): Promise<BrandInfo | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          brandDesc: true,
          brandLogo: true,
          brandName: true,
          brandOrder: true,
          brandStatus: true,
          createdAt: true,
          id: true,
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
    resource: "BrandInfo",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BrandInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: BrandInfoWhereUniqueInput
  ): Promise<BrandInfo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          brandDesc: true,
          brandLogo: true,
          brandName: true,
          brandOrder: true,
          brandStatus: true,
          createdAt: true,
          id: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductSPUInfo",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/productBrandId")
  @ApiNestedQuery(ProductSPUInfoFindManyArgs)
  async findManyProductBrandId(
    @common.Req() request: Request,
    @common.Param() params: BrandInfoWhereUniqueInput
  ): Promise<ProductSPUInfo[]> {
    const query = plainToClass(ProductSPUInfoFindManyArgs, request.query);
    const results = await this.service.findProductBrandId(params.id, {
      ...query,
      select: {
        auditStatus: true,
        averageCost: true,
        barCode: true,

        brandId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        descript: true,
        id: true,

        oneCategoryId: {
          select: {
            id: true,
          },
        },

        price: true,
        productCore: true,
        productionDate: true,
        productKeywords: true,
        productName: true,
        productSubtitle: true,
        publishStatus: true,
        purchasePrice: true,
        shelfLife: true,

        supplierId: {
          select: {
            id: true,
          },
        },

        threeCategoryId: {
          select: {
            id: true,
          },
        },

        twoCategoryId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "BrandInfo",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productBrandId")
  async connectProductBrandId(
    @common.Param() params: BrandInfoWhereUniqueInput,
    @common.Body() body: ProductSPUInfoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productBrandId: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "BrandInfo",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productBrandId")
  async updateProductBrandId(
    @common.Param() params: BrandInfoWhereUniqueInput,
    @common.Body() body: ProductSPUInfoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productBrandId: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "BrandInfo",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productBrandId")
  async disconnectProductBrandId(
    @common.Param() params: BrandInfoWhereUniqueInput,
    @common.Body() body: ProductSPUInfoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productBrandId: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
