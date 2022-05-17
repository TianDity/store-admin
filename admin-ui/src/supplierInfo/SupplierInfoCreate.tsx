import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const SupplierInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput label="bank_name" source="bankName" />
        <TextInput label="link_man" source="linkMan" />
        <TextInput label="phone_number" source="phoneNumber" />
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
