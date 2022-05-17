import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ProductInfoTitle } from "../productInfo/ProductInfoTitle";

export const SupplierInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput label="bank_name" source="bankName" />
        <TextInput label="link_man" source="linkMan" />
        <TextInput label="phone_number" source="phoneNumber" />
        <ReferenceArrayInput
          source="productSupplierId"
          reference="ProductInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductInfoTitle} />
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
    </Edit>
  );
};
