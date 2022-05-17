import { ProductSpuInfoCreateNestedManyWithoutBrandInfosInput } from "./ProductSpuInfoCreateNestedManyWithoutBrandInfosInput";

export type BrandInfoCreateInput = {
  brandDesc?: string | null;
  brandLogo?: string | null;
  brandName?: string | null;
  brandOrder?: string | null;
  brandStatus?: number | null;
  productBrandId?: ProductSpuInfoCreateNestedManyWithoutBrandInfosInput;
};
