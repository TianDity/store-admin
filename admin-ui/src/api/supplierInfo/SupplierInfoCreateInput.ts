import { ProductInfoCreateNestedManyWithoutSupplierInfosInput } from "./ProductInfoCreateNestedManyWithoutSupplierInfosInput";

export type SupplierInfoCreateInput = {
  address?: string | null;
  bankAccount?: string | null;
  bankName?: string | null;
  linkMan?: string | null;
  phoneNumber?: string | null;
  productSupplierId?: ProductInfoCreateNestedManyWithoutSupplierInfosInput;
  supplierCode?: string | null;
  supplierName?: string | null;
  supplierStatus?: "Option1" | null;
  supplierType?: string | null;
};
