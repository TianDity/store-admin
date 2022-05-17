import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ProductSPUInfoTitle } from "../productSpuInfo/ProductSPUInfoTitle";

export const SupplierInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput label="bank_name" source="bankName" />
        <TextInput label="link_man" source="linkMan" />
        <TextInput label="phone_number" source="phoneNumber" />
        <ReferenceArrayInput
          source="productSupplierId"
          reference="ProductSPUInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductSPUInfoTitle} />
        </ReferenceArrayInput>
        <TextInput label="supplier_code" source="supplierCode" />
        <TextInput label="supplier_name" source="supplierName" />
        <SelectInput
          source="supplierStatus"
          label="supplier_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="supplier_type" source="supplierType" />
      </SimpleForm>
    </Create>
  );
};
