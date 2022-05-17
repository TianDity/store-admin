import { ProductSpuInfoUpdateManyWithoutSupplierInfosInput } from "./ProductSpuInfoUpdateManyWithoutSupplierInfosInput";

export type SupplierInfoUpdateInput = {
  address?: string | null;
  bankAccount?: string | null;
  bankName?: string | null;
  linkMan?: string | null;
  phoneNumber?: string | null;
  productSupplierId?: ProductSpuInfoUpdateManyWithoutSupplierInfosInput;
  supplierCode?: string | null;
  supplierName?: string | null;
  supplierStatus?: "Option1" | null;
  supplierType?: string | null;
};
