import { GoodsSkuInfoWhereInput } from "./GoodsSkuInfoWhereInput";
import { GoodsSkuInfoOrderByInput } from "./GoodsSkuInfoOrderByInput";

export type GoodsSkuInfoFindManyArgs = {
  where?: GoodsSkuInfoWhereInput;
  orderBy?: Array<GoodsSkuInfoOrderByInput>;
  skip?: number;
  take?: number;
};
