import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
} from "react-admin";

import { BrandInfoTitle } from "../brandInfo/BrandInfoTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductPicInfoTitle } from "../productPicInfo/ProductPicInfoTitle";
import { SupplierInfoTitle } from "../supplierInfo/SupplierInfoTitle";

export const ProductInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="audit_status" source="auditStatus" />
        <NumberInput label="average_cost" source="averageCost" />
        <TextInput label="bar_code" source="barCode" />
        <ReferenceInput
          source="brandinfo.id"
          reference="BrandInfo"
          label="brand_id"
        >
          <SelectInput optionText={BrandInfoTitle} />
        </ReferenceInput>
        <TextInput label="descript" source="descript" />
        <ReferenceInput
          source="productcategory.id"
          reference="ProductCategory"
          label="one_category_id"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="picInfoProductId"
          reference="ProductPicInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductPicInfoTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="product_core" source="productCore" />
        <DateInput label="production_date" source="productionDate" />
        <TextInput label="product_keywords" source="productKeywords" />
        <TextInput label="product_name" source="productName" />
        <TextInput label="product_subtitle" source="productSubtitle" />
        <NumberInput step={1} label="publish_status" source="publishStatus" />
        <NumberInput label="purchase_price" source="purchasePrice" />
        <NumberInput step={1} label="shelf_life" source="shelfLife" />
        <ReferenceInput
          source="supplierinfo.id"
          reference="SupplierInfo"
          label="supplier_id"
        >
          <SelectInput optionText={SupplierInfoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productcategory.id"
          reference="ProductCategory"
          label="three_category_id"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productcategory.id"
          reference="ProductCategory"
          label="two_category_id"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
