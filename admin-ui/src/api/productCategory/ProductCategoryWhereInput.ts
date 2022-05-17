import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductSPUInfoListRelationFilter } from "../productSpuInfo/ProductSPUInfoListRelationFilter";

export type ProductCategoryWhereInput = {
  categoryCode?: StringNullableFilter;
  categoryLevel?: StringNullableFilter;
  categoryName?: StringNullableFilter;
  categoryStatus?: "Option1";
  id?: StringFilter;
  parentId?: StringNullableFilter;
  productOneCategoryId?: ProductSPUInfoListRelationFilter;
  productThreeCategoryId?: ProductSPUInfoListRelationFilter;
  productTwoCategoryId?: ProductSPUInfoListRelationFilter;
};
