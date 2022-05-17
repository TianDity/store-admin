import { SupplierInfoWhereInput } from "./SupplierInfoWhereInput";
import { SupplierInfoOrderByInput } from "./SupplierInfoOrderByInput";

export type SupplierInfoFindManyArgs = {
  where?: SupplierInfoWhereInput;
  orderBy?: Array<SupplierInfoOrderByInput>;
  skip?: number;
  take?: number;
};
