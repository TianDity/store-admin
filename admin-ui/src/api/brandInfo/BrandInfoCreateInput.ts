import { ProductInfoCreateNestedManyWithoutBrandInfosInput } from "./ProductInfoCreateNestedManyWithoutBrandInfosInput";

export type BrandInfoCreateInput = {
  brandDesc?: string | null;
  brandLogo?: string | null;
  brandName?: string | null;
  brandOrder?: string | null;
  brandStatus?: number | null;
  productBrandId?: ProductInfoCreateNestedManyWithoutBrandInfosInput;
};
