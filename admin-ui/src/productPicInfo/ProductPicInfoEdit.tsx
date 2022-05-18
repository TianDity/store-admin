import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductInfoTitle } from "../productInfo/ProductInfoTitle";

export const ProductPicInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="is_master" source="isMaster" />
        <TextInput label="oss_key" source="ossKey" />
        <TextInput label="pic_desc" source="picDesc" />
        <TextInput label="pic_order" source="picOrder" />
        <NumberInput step={1} label="pic_status" source="picStatus" />
        <TextInput label="pic_url" source="picUrl" />
        <ReferenceInput
          source="productinfo.id"
          reference="ProductInfo"
          label="product_id"
        >
          <SelectInput optionText={ProductInfoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
