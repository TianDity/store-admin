import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductSPUInfoListRelationFilter } from "../productSpuInfo/ProductSPUInfoListRelationFilter";

export type SupplierInfoWhereInput = {
  address?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  bankName?: StringNullableFilter;
  id?: StringFilter;
  linkMan?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  productSupplierId?: ProductSPUInfoListRelationFilter;
  supplierCode?: StringNullableFilter;
  supplierName?: StringNullableFilter;
  supplierStatus?: "Option1";
  supplierType?: StringNullableFilter;
};
