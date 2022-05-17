import { BrandInfoWhereInput } from "./BrandInfoWhereInput";
import { BrandInfoOrderByInput } from "./BrandInfoOrderByInput";

export type BrandInfoFindManyArgs = {
  where?: BrandInfoWhereInput;
  orderBy?: Array<BrandInfoOrderByInput>;
  skip?: number;
  take?: number;
};
