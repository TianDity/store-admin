import { ProductPicInfoWhereInput } from "./ProductPicInfoWhereInput";
import { ProductPicInfoOrderByInput } from "./ProductPicInfoOrderByInput";

export type ProductPicInfoFindManyArgs = {
  where?: ProductPicInfoWhereInput;
  orderBy?: Array<ProductPicInfoOrderByInput>;
  skip?: number;
  take?: number;
};
