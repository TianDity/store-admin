import { ProductPicInfo as TProductPicInfo } from "../api/productPicInfo/ProductPicInfo";

export const PRODUCTPICINFO_TITLE_FIELD = "ossKey";

export const ProductPicInfoTitle = (record: TProductPicInfo): string => {
  return record.ossKey || record.id;
};
