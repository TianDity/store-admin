import { ProductInfo as TProductInfo } from "../api/productInfo/ProductInfo";

export const PRODUCTINFO_TITLE_FIELD = "productName";

export const ProductInfoTitle = (record: TProductInfo): string => {
  return record.productName || record.id;
};
