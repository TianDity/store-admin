import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BrandInfoWhereInput = {
  brandDesc?: StringNullableFilter;
  brandLogo?: StringNullableFilter;
  brandName?: StringNullableFilter;
  brandOrder?: StringNullableFilter;
  brandStatus?: IntNullableFilter;
  id?: StringFilter;
};
