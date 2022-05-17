import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductSPUInfoTitle } from "../productSpuInfo/ProductSPUInfoTitle";

export const ProductPicInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="is_master" source="isMaster" />
        <TextInput label="oss_key" source="ossKey" />
        <TextInput label="pic_desc" source="picDesc" />
        <TextInput label="pic_order" source="picOrder" />
        <NumberInput step={1} label="pic_status" source="picStatus" />
        <TextInput label="pic_url" source="picUrl" />
        <ReferenceInput
          source="productspuinfo.id"
          reference="ProductSPUInfo"
          label="product_id"
        >
          <SelectInput optionText={ProductSPUInfoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
