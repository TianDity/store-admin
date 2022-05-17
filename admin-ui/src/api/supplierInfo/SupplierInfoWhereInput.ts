import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierInfoWhereInput = {
  address?: StringNullableFilter;
  bankAccount?: StringNullableFilter;
  bankName?: StringNullableFilter;
  id?: StringFilter;
  linkMan?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  supplierCode?: StringNullableFilter;
  supplierName?: StringNullableFilter;
  supplierStatus?: "Option1";
  supplierType?: StringNullableFilter;
};
