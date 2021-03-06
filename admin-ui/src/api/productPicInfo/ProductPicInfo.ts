import { ProductInfo } from "../productInfo/ProductInfo";

export type ProductPicInfo = {
  createdAt: Date;
  id: string;
  isMaster: number | null;
  ossKey: string | null;
  picDesc: string | null;
  picOrder: string | null;
  picStatus: number | null;
  picUrl: string | null;
  productId?: ProductInfo | null;
  updatedAt: Date;
};
