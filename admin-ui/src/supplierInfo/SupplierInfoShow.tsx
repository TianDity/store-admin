import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SupplierInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField label="bank_name" source="bankName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="link_man" source="linkMan" />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="supplier_code" source="supplierCode" />
        <TextField label="supplier_name" source="supplierName" />
        <TextField label="supplier_status" source="supplierStatus" />
        <TextField label="supplier_type" source="supplierType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
