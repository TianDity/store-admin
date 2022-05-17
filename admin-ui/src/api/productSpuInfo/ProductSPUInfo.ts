import { BrandInfo } from "../brandInfo/BrandInfo";
import { ProductCategory } from "../productCategory/ProductCategory";
import { ProductPicInfo } from "../productPicInfo/ProductPicInfo";
import { SupplierInfo } from "../supplierInfo/SupplierInfo";

export type ProductSPUInfo = {
  auditStatus: number | null;
  averageCost: number | null;
  barCode: string | null;
  brandId?: BrandInfo | null;
  createdAt: Date;
  descript: string | null;
  id: string;
  oneCategoryId?: ProductCategory | null;
  picInfoProductId?: Array<ProductPicInfo>;
  price: number | null;
  productCore: string | null;
  productionDate: Date | null;
  productKeywords: string | null;
  productName: string | null;
  productSubtitle: string | null;
  publishStatus: number | null;
  purchasePrice: number | null;
  shelfLife: number | null;
  supplierId?: SupplierInfo | null;
  threeCategoryId?: ProductCategory | null;
  twoCategoryId?: ProductCategory | null;
  updatedAt: Date;
};
