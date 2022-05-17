import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SupplierInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Supplier_Infos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
