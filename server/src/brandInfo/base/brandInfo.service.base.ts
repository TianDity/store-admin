/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, BrandInfo, ProductInfo } from "@prisma/client";

export class BrandInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BrandInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInfoFindManyArgs>
  ): Promise<number> {
    return this.prisma.brandInfo.count(args);
  }

  async findMany<T extends Prisma.BrandInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInfoFindManyArgs>
  ): Promise<BrandInfo[]> {
    return this.prisma.brandInfo.findMany(args);
  }
  async findOne<T extends Prisma.BrandInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInfoFindUniqueArgs>
  ): Promise<BrandInfo | null> {
    return this.prisma.brandInfo.findUnique(args);
  }
  async create<T extends Prisma.BrandInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInfoCreateArgs>
  ): Promise<BrandInfo> {
    return this.prisma.brandInfo.create<T>(args);
  }
  async update<T extends Prisma.BrandInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInfoUpdateArgs>
  ): Promise<BrandInfo> {
    return this.prisma.brandInfo.update<T>(args);
  }
  async delete<T extends Prisma.BrandInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInfoDeleteArgs>
  ): Promise<BrandInfo> {
    return this.prisma.brandInfo.delete(args);
  }

  async findProductBrandId(
    parentId: string,
    args: Prisma.ProductInfoFindManyArgs
  ): Promise<ProductInfo[]> {
    return this.prisma.brandInfo
      .findUnique({
        where: { id: parentId },
      })
      .productBrandId(args);
  }
}
