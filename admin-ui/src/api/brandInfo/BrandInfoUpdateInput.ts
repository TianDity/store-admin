import { ProductInfoUpdateManyWithoutBrandInfosInput } from "./ProductInfoUpdateManyWithoutBrandInfosInput";

export type BrandInfoUpdateInput = {
  brandDesc?: string | null;
  brandLogo?: string | null;
  brandName?: string | null;
  brandOrder?: string | null;
  brandStatus?: number | null;
  productBrandId?: ProductInfoUpdateManyWithoutBrandInfosInput;
};
