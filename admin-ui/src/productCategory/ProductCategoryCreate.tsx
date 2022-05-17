import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductInfoTitle } from "../productInfo/ProductInfoTitle";

export const ProductCategoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category_code" source="categoryCode" />
        <TextInput label="category_level" source="categoryLevel" />
        <TextInput label="category_name" source="categoryName" />
        <SelectInput
          source="categoryStatus"
          label="category_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="parent_id" source="parentId" />
        <ReferenceArrayInput
          source="productOneCategoryId"
          reference="ProductInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productThreeCategoryId"
          reference="ProductInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productTwoCategoryId"
          reference="ProductInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductInfoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
