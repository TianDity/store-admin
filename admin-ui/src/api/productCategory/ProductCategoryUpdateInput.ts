import { ProductSpuInfoUpdateManyWithoutProductCategoriesInput } from "./ProductSpuInfoUpdateManyWithoutProductCategoriesInput";

export type ProductCategoryUpdateInput = {
  categoryCode?: string | null;
  categoryLevel?: string | null;
  categoryName?: string | null;
  categoryStatus?: "Option1" | null;
  parentId?: string | null;
  productOneCategoryId?: ProductSpuInfoUpdateManyWithoutProductCategoriesInput;
  productThreeCategoryId?: ProductSpuInfoUpdateManyWithoutProductCategoriesInput;
  productTwoCategoryId?: ProductSpuInfoUpdateManyWithoutProductCategoriesInput;
};
