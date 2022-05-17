import { ProductSPUInfo } from "../productSpuInfo/ProductSPUInfo";

export type SupplierInfo = {
  address: string | null;
  bankAccount: string | null;
  bankName: string | null;
  createdAt: Date;
  id: string;
  linkMan: string | null;
  phoneNumber: string | null;
  productSupplierId?: Array<ProductSPUInfo>;
  supplierCode: string | null;
  supplierName: string | null;
  supplierStatus?: "Option1" | null;
  supplierType: string | null;
  updatedAt: Date;
};
