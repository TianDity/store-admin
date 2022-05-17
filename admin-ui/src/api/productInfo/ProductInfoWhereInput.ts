import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProductInfoWhereInput = {
  auditStatus?: IntNullableFilter;
  averageCost?: FloatNullableFilter;
  barCode?: StringNullableFilter;
  brandId?: IntNullableFilter;
  descript?: StringNullableFilter;
  id?: StringFilter;
  oneCategoryId?: IntNullableFilter;
  price?: FloatNullableFilter;
  productCore?: StringNullableFilter;
  productionDate?: DateTimeNullableFilter;
  productKeywords?: StringNullableFilter;
  productName?: StringNullableFilter;
  productSubtitle?: StringNullableFilter;
  publishStatus?: IntNullableFilter;
  purchasePrice?: FloatNullableFilter;
  shelfLife?: IntNullableFilter;
  supplierId?: StringNullableFilter;
  threeCategoryId?: IntNullableFilter;
  twoCategoryId?: IntNullableFilter;
};
