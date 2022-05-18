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
import { ProductPicInfoService } from "../productPicInfo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { ProductPicInfoCreateInput } from "./ProductPicInfoCreateInput";
import { ProductPicInfoWhereInput } from "./ProductPicInfoWhereInput";
import { ProductPicInfoWhereUniqueInput } from "./ProductPicInfoWhereUniqueInput";
import { ProductPicInfoFindManyArgs } from "./ProductPicInfoFindManyArgs";
import { ProductPicInfoUpdateInput } from "./ProductPicInfoUpdateInput";
import { ProductPicInfo } from "./ProductPicInfo";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductPicInfoControllerBase {
  constructor(
    protected readonly service: ProductPicInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductPicInfo",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductPicInfo })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ProductPicInfoCreateInput
  ): Promise<ProductPicInfo> {
    return await this.service.create({
      data: {
        ...data,

        productId: data.productId
          ? {
              connect: data.productId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        isMaster: true,
        ossKey: true,
        picDesc: true,
        picOrder: true,
        picStatus: true,
        picUrl: true,

        productId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductPicInfo",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductPicInfo] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ProductPicInfoFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ProductPicInfo[]> {
    const args = plainToClass(ProductPicInfoFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isMaster: true,
        ossKey: true,
        picDesc: true,
        picOrder: true,
        picStatus: true,
        picUrl: true,

        productId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductPicInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProductPicInfoWhereUniqueInput
  ): Promise<ProductPicInfo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isMaster: true,
        ossKey: true,
        picDesc: true,
        picOrder: true,
        picStatus: true,
        picUrl: true,

        productId: {
          select: {
            id: true,
          },
        },

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
    resource: "ProductPicInfo",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductPicInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProductPicInfoWhereUniqueInput,
    @common.Body() data: ProductPicInfoUpdateInput
  ): Promise<ProductPicInfo | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          productId: data.productId
            ? {
                connect: data.productId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          isMaster: true,
          ossKey: true,
          picDesc: true,
          picOrder: true,
          picStatus: true,
          picUrl: true,

          productId: {
            select: {
              id: true,
            },
          },

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
    resource: "ProductPicInfo",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductPicInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProductPicInfoWhereUniqueInput
  ): Promise<ProductPicInfo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isMaster: true,
          ossKey: true,
          picDesc: true,
          picOrder: true,
          picStatus: true,
          picUrl: true,

          productId: {
            select: {
              id: true,
            },
          },

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
