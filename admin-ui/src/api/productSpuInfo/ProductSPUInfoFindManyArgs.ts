import { ProductSPUInfoWhereInput } from "./ProductSPUInfoWhereInput";
import { ProductSPUInfoOrderByInput } from "./ProductSPUInfoOrderByInput";

export type ProductSPUInfoFindManyArgs = {
  where?: ProductSPUInfoWhereInput;
  orderBy?: Array<ProductSPUInfoOrderByInput>;
  skip?: number;
  take?: number;
};
