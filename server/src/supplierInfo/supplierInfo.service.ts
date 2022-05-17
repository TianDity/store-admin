import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupplierInfoServiceBase } from "./base/supplierInfo.service.base";

@Injectable()
export class SupplierInfoService extends SupplierInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
