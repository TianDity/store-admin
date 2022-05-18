import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BRANDINFO_TITLE_FIELD } from "../brandInfo/BrandInfoTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { SUPPLIERINFO_TITLE_FIELD } from "../supplierInfo/SupplierInfoTitle";

export const ProductInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Product_Infos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="audit_status" source="auditStatus" />
        <TextField label="average_cost" source="averageCost" />
        <TextField label="bar_code" source="barCode" />
        <ReferenceField
          label="brand_id"
          source="brandinfo.id"
          reference="BrandInfo"
        >
          <TextField source={BRANDINFO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descript" source="descript" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="one_category_id"
          source="productcategory.id"
          reference="ProductCategory"
        >
          <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="price" source="price" />
        <TextField label="product_core" source="productCore" />
        <TextField label="product_detail" source="productDetail" />
        <TextField label="production_date" source="productionDate" />
        <TextField label="product_keywords" source="productKeywords" />
        <TextField label="product_name" source="productName" />
        <TextField label="product_subtitle" source="productSubtitle" />
        <TextField label="publish_status" source="publishStatus" />
        <TextField label="purchase_price" source="purchasePrice" />
        <TextField label="qr_code" source="qrCode" />
        <TextField label="shelf_life" source="shelfLife" />
        <ReferenceField
          label="supplier_id"
          source="supplierinfo.id"
          reference="SupplierInfo"
        >
          <TextField source={SUPPLIERINFO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="three_category_id"
          source="productcategory.id"
          reference="ProductCategory"
        >
          <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="two_category_id"
          source="productcategory.id"
          reference="ProductCategory"
        >
          <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
