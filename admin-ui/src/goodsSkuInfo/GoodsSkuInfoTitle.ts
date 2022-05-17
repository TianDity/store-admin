import { GoodsSkuInfo as TGoodsSkuInfo } from "../api/goodsSkuInfo/GoodsSkuInfo";

export const GOODSSKUINFO_TITLE_FIELD = "goodsName";

export const GoodsSkuInfoTitle = (record: TGoodsSkuInfo): string => {
  return record.goodsName || record.id;
};
