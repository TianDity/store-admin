import { ProductSPUInfo } from "../productSpuInfo/ProductSPUInfo";

export type ProductCategory = {
  categoryCode: string | null;
  categoryLevel: string | null;
  categoryName: string | null;
  categoryStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  parentId: string | null;
  productOneCategoryId?: Array<ProductSPUInfo>;
  productThreeCategoryId?: Array<ProductSPUInfo>;
  productTwoCategoryId?: Array<ProductSPUInfo>;
  updatedAt: Date;
};
