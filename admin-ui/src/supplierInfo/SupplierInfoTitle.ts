import { SupplierInfo as TSupplierInfo } from "../api/supplierInfo/SupplierInfo";

export const SUPPLIERINFO_TITLE_FIELD = "bankName";

export const SupplierInfoTitle = (record: TSupplierInfo): string => {
  return record.bankName || record.id;
};
