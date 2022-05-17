import { ProductSPUInfo as TProductSPUInfo } from "../api/productSpuInfo/ProductSPUInfo";

export const PRODUCTSPUINFO_TITLE_FIELD = "productName";

export const ProductSPUInfoTitle = (record: TProductSPUInfo): string => {
  return record.productName || record.id;
};
