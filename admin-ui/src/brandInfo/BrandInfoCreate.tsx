import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductSPUInfoTitle } from "../productSpuInfo/ProductSPUInfoTitle";

export const BrandInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brand_desc" source="brandDesc" />
        <TextInput label="brand_logo" source="brandLogo" />
        <TextInput label="brand_name" source="brandName" />
        <TextInput label="brand_order" source="brandOrder" />
        <NumberInput step={1} label="brand_status" source="brandStatus" />
        <ReferenceArrayInput
          source="productBrandId"
          reference="ProductSPUInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductSPUInfoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
