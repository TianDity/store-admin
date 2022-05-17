import { ProductInfoUpdateManyWithoutProductCategoriesInput } from "./ProductInfoUpdateManyWithoutProductCategoriesInput";

export type ProductCategoryUpdateInput = {
  categoryCode?: string | null;
  categoryLevel?: string | null;
  categoryName?: string | null;
  categoryStatus?: "Option1" | null;
  parentId?: string | null;
  productOneCategoryId?: ProductInfoUpdateManyWithoutProductCategoriesInput;
  productThreeCategoryId?: ProductInfoUpdateManyWithoutProductCategoriesInput;
  productTwoCategoryId?: ProductInfoUpdateManyWithoutProductCategoriesInput;
};
