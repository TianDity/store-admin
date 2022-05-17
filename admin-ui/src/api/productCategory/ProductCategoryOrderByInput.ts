import { SortOrder } from "../../util/SortOrder";

export type ProductCategoryOrderByInput = {
  categoryCode?: SortOrder;
  categoryLevel?: SortOrder;
  categoryName?: SortOrder;
  categoryStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parentId?: SortOrder;
  updatedAt?: SortOrder;
};
