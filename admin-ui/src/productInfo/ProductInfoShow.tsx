import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCTINFO_TITLE_FIELD } from "./ProductInfoTitle";
import { BRANDINFO_TITLE_FIELD } from "../brandInfo/BrandInfoTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { SUPPLIERINFO_TITLE_FIELD } from "../supplierInfo/SupplierInfoTitle";

export const ProductInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ProductPicInfo"
          target="ProductInfoId"
          label="Product_PicInfos"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="is_master" source="isMaster" />
            <TextField label="oss_key" source="ossKey" />
            <TextField label="pic_desc" source="picDesc" />
            <TextField label="pic_order" source="picOrder" />
            <TextField label="pic_status" source="picStatus" />
            <TextField label="pic_url" source="picUrl" />
            <ReferenceField
              label="product_id"
              source="productinfo.id"
              reference="ProductInfo"
            >
              <TextField source={PRODUCTINFO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
