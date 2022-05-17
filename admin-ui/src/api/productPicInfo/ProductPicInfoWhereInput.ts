import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductInfoWhereUniqueInput } from "../productInfo/ProductInfoWhereUniqueInput";

export type ProductPicInfoWhereInput = {
  id?: StringFilter;
  isMaster?: IntNullableFilter;
  ossKey?: StringNullableFilter;
  picDesc?: StringNullableFilter;
  picOrder?: StringNullableFilter;
  picStatus?: IntNullableFilter;
  picUrl?: StringNullableFilter;
  productId?: ProductInfoWhereUniqueInput;
};
