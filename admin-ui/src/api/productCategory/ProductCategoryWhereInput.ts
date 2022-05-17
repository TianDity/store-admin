import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductInfoListRelationFilter } from "../productInfo/ProductInfoListRelationFilter";

export type ProductCategoryWhereInput = {
  categoryCode?: StringNullableFilter;
  categoryLevel?: StringNullableFilter;
  categoryName?: StringNullableFilter;
  categoryStatus?: "Option1";
  id?: StringFilter;
  parentId?: StringNullableFilter;
  productOneCategoryId?: ProductInfoListRelationFilter;
  productThreeCategoryId?: ProductInfoListRelationFilter;
  productTwoCategoryId?: ProductInfoListRelationFilter;
};
