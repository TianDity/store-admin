import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductInfoTitle } from "../productInfo/ProductInfoTitle";

export const BrandInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="brand_desc" source="brandDesc" />
        <TextInput label="brand_logo" source="brandLogo" />
        <TextInput label="brand_name" source="brandName" />
        <TextInput label="brand_order" source="brandOrder" />
        <NumberInput step={1} label="brand_status" source="brandStatus" />
        <ReferenceArrayInput
          source="productBrandId"
          reference="ProductInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductInfoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
