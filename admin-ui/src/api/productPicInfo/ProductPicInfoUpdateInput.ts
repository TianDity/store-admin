import { ProductSPUInfoWhereUniqueInput } from "../productSpuInfo/ProductSPUInfoWhereUniqueInput";

export type ProductPicInfoUpdateInput = {
  isMaster?: number | null;
  ossKey?: string | null;
  picDesc?: string | null;
  picOrder?: string | null;
  picStatus?: number | null;
  picUrl?: string | null;
  productId?: ProductSPUInfoWhereUniqueInput | null;
};
