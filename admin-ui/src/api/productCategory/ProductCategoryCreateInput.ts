import { ProductInfoCreateNestedManyWithoutProductCategoriesInput } from "./ProductInfoCreateNestedManyWithoutProductCategoriesInput";

export type ProductCategoryCreateInput = {
  categoryCode?: string | null;
  categoryLevel?: string | null;
  categoryName?: string | null;
  categoryStatus?: "Option1" | null;
  parentId?: string | null;
  productOneCategoryId?: ProductInfoCreateNestedManyWithoutProductCategoriesInput;
  productThreeCategoryId?: ProductInfoCreateNestedManyWithoutProductCategoriesInput;
  productTwoCategoryId?: ProductInfoCreateNestedManyWithoutProductCategoriesInput;
};
