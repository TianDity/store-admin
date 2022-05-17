import { ProductInfo } from "../productInfo/ProductInfo";

export type ProductCategory = {
  categoryCode: string | null;
  categoryLevel: string | null;
  categoryName: string | null;
  categoryStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  parentId: string | null;
  productOneCategoryId?: Array<ProductInfo>;
  productThreeCategoryId?: Array<ProductInfo>;
  productTwoCategoryId?: Array<ProductInfo>;
  updatedAt: Date;
};
