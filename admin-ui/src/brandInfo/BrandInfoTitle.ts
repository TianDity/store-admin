import { BrandInfo as TBrandInfo } from "../api/brandInfo/BrandInfo";

export const BRANDINFO_TITLE_FIELD = "brandName";

export const BrandInfoTitle = (record: TBrandInfo): string => {
  return record.brandName || record.id;
};
