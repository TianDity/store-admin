import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductCategoryWhereInput = {
  categoryCode?: StringNullableFilter;
  categoryLevel?: StringNullableFilter;
  categoryName?: StringNullableFilter;
  categoryStatus?: "Option1";
  id?: StringFilter;
  parentId?: StringNullableFilter;
};
