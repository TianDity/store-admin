import { BrandInfoWhereUniqueInput } from "../brandInfo/BrandInfoWhereUniqueInput";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { ProductPicInfoCreateNestedManyWithoutProductInfosInput } from "./ProductPicInfoCreateNestedManyWithoutProductInfosInput";
import { SupplierInfoWhereUniqueInput } from "../supplierInfo/SupplierInfoWhereUniqueInput";

export type ProductInfoCreateInput = {
  auditStatus?: number | null;
  averageCost?: number | null;
  barCode?: string | null;
  brandId?: BrandInfoWhereUniqueInput | null;
  descript?: string | null;
  oneCategoryId?: ProductCategoryWhereUniqueInput | null;
  picInfoProductId?: ProductPicInfoCreateNestedManyWithoutProductInfosInput;
  price?: number | null;
  productCore?: string | null;
  productionDate?: Date | null;
  productKeywords?: string | null;
  productName?: string | null;
  productSubtitle?: string | null;
  publishStatus?: number | null;
  purchasePrice?: number | null;
  qrCode?: string | null;
  shelfLife?: number | null;
  supplierId?: SupplierInfoWhereUniqueInput | null;
  threeCategoryId?: ProductCategoryWhereUniqueInput | null;
  twoCategoryId?: ProductCategoryWhereUniqueInput | null;
};
