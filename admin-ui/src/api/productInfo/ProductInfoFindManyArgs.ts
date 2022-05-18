import { ProductInfoWhereInput } from "./ProductInfoWhereInput";
import { ProductInfoOrderByInput } from "./ProductInfoOrderByInput";

export type ProductInfoFindManyArgs = {
  where?: ProductInfoWhereInput;
  orderBy?: Array<ProductInfoOrderByInput>;
  skip?: number;
  take?: number;
};
