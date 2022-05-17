import { ProductSPUInfo } from "../productSpuInfo/ProductSPUInfo";

export type BrandInfo = {
  brandDesc: string | null;
  brandLogo: string | null;
  brandName: string | null;
  brandOrder: string | null;
  brandStatus: number | null;
  createdAt: Date;
  id: string;
  productBrandId?: Array<ProductSPUInfo>;
  updatedAt: Date;
};
