import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRANDINFO_TITLE_FIELD } from "./BrandInfoTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { SUPPLIERINFO_TITLE_FIELD } from "../supplierInfo/SupplierInfoTitle";

export const BrandInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="brand_desc" source="brandDesc" />
        <TextField label="brand_logo" source="brandLogo" />
        <TextField label="brand_name" source="brandName" />
        <TextField label="brand_order" source="brandOrder" />
        <TextField label="brand_status" source="brandStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductInfo"
          target="BrandInfoId"
          label="Product_Infos"
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
            <TextField label="production_date" source="productionDate" />
            <TextField label="product_keywords" source="productKeywords" />
            <TextField label="product_name" source="productName" />
            <TextField label="product_subtitle" source="productSubtitle" />
            <TextField label="publish_status" source="publishStatus" />
            <TextField label="purchase_price" source="purchasePrice" />
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
