import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductInfoListRelationFilter } from "../productInfo/ProductInfoListRelationFilter";

export type SupplierInfoWhereInput = {
  address?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  bankName?: StringNullableFilter;
  id?: StringFilter;
  linkMan?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  productSupplierId?: ProductInfoListRelationFilter;
  supplierCode?: StringNullableFilter;
  supplierName?: StringNullableFilter;
  supplierStatus?: "Option1";
  supplierType?: StringNullableFilter;
};
