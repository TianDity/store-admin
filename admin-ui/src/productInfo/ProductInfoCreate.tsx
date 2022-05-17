import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateInput,
} from "react-admin";

export const ProductInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="audit_status" source="auditStatus" />
        <NumberInput label="average_cost" source="averageCost" />
        <TextInput label="bar_code" source="barCode" />
        <NumberInput step={1} label="brand_id" source="brandId" />
        <TextInput label="descript" source="descript" />
        <NumberInput step={1} label="one_category_id" source="oneCategoryId" />
        <NumberInput label="price" source="price" />
        <TextInput label="product_core" source="productCore" />
        <DateInput label="production_date" source="productionDate" />
        <TextInput label="product_keywords" source="productKeywords" />
        <TextInput label="product_name" source="productName" />
        <TextInput label="product_subtitle" source="productSubtitle" />
        <NumberInput step={1} label="publish_status" source="publishStatus" />
        <NumberInput label="purchase_price" source="purchasePrice" />
        <NumberInput step={1} label="shelf_life" source="shelfLife" />
        <TextInput label="supplier_id" source="supplierId" />
        <NumberInput
          step={1}
          label="three_category_id"
          source="threeCategoryId"
        />
        <NumberInput step={1} label="two_category_id" source="twoCategoryId" />
      </SimpleForm>
    </Create>
  );
};
