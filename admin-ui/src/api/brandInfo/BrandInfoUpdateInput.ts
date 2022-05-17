import { ProductSpuInfoUpdateManyWithoutBrandInfosInput } from "./ProductSpuInfoUpdateManyWithoutBrandInfosInput";

export type BrandInfoUpdateInput = {
  brandDesc?: string | null;
  brandLogo?: string | null;
  brandName?: string | null;
  brandOrder?: string | null;
  brandStatus?: number | null;
  productBrandId?: ProductSpuInfoUpdateManyWithoutBrandInfosInput;
};
