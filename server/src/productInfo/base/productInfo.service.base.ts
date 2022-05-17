/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ProductInfo } from "@prisma/client";

export class ProductInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductInfoFindManyArgs>
  ): Promise<number> {
    return this.prisma.productInfo.count(args);
  }

  async findMany<T extends Prisma.ProductInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductInfoFindManyArgs>
  ): Promise<ProductInfo[]> {
    return this.prisma.productInfo.findMany(args);
  }
  async findOne<T extends Prisma.ProductInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductInfoFindUniqueArgs>
  ): Promise<ProductInfo | null> {
    return this.prisma.productInfo.findUnique(args);
  }
  async create<T extends Prisma.ProductInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductInfoCreateArgs>
  ): Promise<ProductInfo> {
    return this.prisma.productInfo.create<T>(args);
  }
  async update<T extends Prisma.ProductInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductInfoUpdateArgs>
  ): Promise<ProductInfo> {
    return this.prisma.productInfo.update<T>(args);
  }
  async delete<T extends Prisma.ProductInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductInfoDeleteArgs>
  ): Promise<ProductInfo> {
    return this.prisma.productInfo.delete(args);
  }
}