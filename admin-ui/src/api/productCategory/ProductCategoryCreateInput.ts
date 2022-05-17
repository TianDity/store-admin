import { ProductSpuInfoCreateNestedManyWithoutProductCategoriesInput } from "./ProductSpuInfoCreateNestedManyWithoutProductCategoriesInput";

export type ProductCategoryCreateInput = {
  categoryCode?: string | null;
  categoryLevel?: string | null;
  categoryName?: string | null;
  categoryStatus?: "Option1" | null;
  parentId?: string | null;
  productOneCategoryId?: ProductSpuInfoCreateNestedManyWithoutProductCategoriesInput;
  productThreeCategoryId?: ProductSpuInfoCreateNestedManyWithoutProductCategoriesInput;
  productTwoCategoryId?: ProductSpuInfoCreateNestedManyWithoutProductCategoriesInput;
};
