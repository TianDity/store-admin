import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GoodsSkuInfoWhereInput = {
  goodsCode?: StringNullableFilter;
  goodsName?: StringNullableFilter;
  id?: StringFilter;
  productCode?: StringNullableFilter;
  productId?: StringNullableFilter;
  productName?: StringNullableFilter;
  qrCode?: StringNullableFilter;
};
