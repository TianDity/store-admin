/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ProductPicInfo, ProductInfo } from "@prisma/client";

export class ProductPicInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductPicInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductPicInfoFindManyArgs>
  ): Promise<number> {
    return this.prisma.productPicInfo.count(args);
  }

  async findMany<T extends Prisma.ProductPicInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductPicInfoFindManyArgs>
  ): Promise<ProductPicInfo[]> {
    return this.prisma.productPicInfo.findMany(args);
  }
  async findOne<T extends Prisma.ProductPicInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductPicInfoFindUniqueArgs>
  ): Promise<ProductPicInfo | null> {
    return this.prisma.productPicInfo.findUnique(args);
  }
  async create<T extends Prisma.ProductPicInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductPicInfoCreateArgs>
  ): Promise<ProductPicInfo> {
    return this.prisma.productPicInfo.create<T>(args);
  }
  async update<T extends Prisma.ProductPicInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductPicInfoUpdateArgs>
  ): Promise<ProductPicInfo> {
    return this.prisma.productPicInfo.update<T>(args);
  }
  async delete<T extends Prisma.ProductPicInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductPicInfoDeleteArgs>
  ): Promise<ProductPicInfo> {
    return this.prisma.productPicInfo.delete(args);
  }

  async getProductId(parentId: string): Promise<ProductInfo | null> {
    return this.prisma.productPicInfo
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }
}
