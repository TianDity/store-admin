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

import { BRANDINFO_TITLE_FIELD } from "../brandInfo/BrandInfoTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { SUPPLIERINFO_TITLE_FIELD } from "./SupplierInfoTitle";

export const SupplierInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField label="bank_name" source="bankName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="link_man" source="linkMan" />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="supplier_code" source="supplierCode" />
        <TextField label="supplier_name" source="supplierName" />
        <TextField label="supplier_status" source="supplierStatus" />
        <TextField label="supplier_type" source="supplierType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductInfo"
          target="SupplierInfoId"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
