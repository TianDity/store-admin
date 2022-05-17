import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductSPUInfoWhereUniqueInput } from "../productSpuInfo/ProductSPUInfoWhereUniqueInput";

export type ProductPicInfoWhereInput = {
  id?: StringFilter;
  isMaster?: IntNullableFilter;
  ossKey?: StringNullableFilter;
  picDesc?: StringNullableFilter;
  picOrder?: StringNullableFilter;
  picStatus?: IntNullableFilter;
  picUrl?: StringNullableFilter;
  productId?: ProductSPUInfoWhereUniqueInput;
};
