import { ProductInfoUpdateManyWithoutSupplierInfosInput } from "./ProductInfoUpdateManyWithoutSupplierInfosInput";

export type SupplierInfoUpdateInput = {
  address?: string | null;
  bankAccount?: string | null;
  bankName?: string | null;
  linkMan?: string | null;
  phoneNumber?: string | null;
  productSupplierId?: ProductInfoUpdateManyWithoutSupplierInfosInput;
  supplierCode?: string | null;
  supplierName?: string | null;
  supplierStatus?: "Option1" | null;
  supplierType?: string | null;
};
