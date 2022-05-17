import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BrandInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="brand_desc" source="brandDesc" />
        <TextField label="brand_logo" source="brandLogo" />
        <TextField label="brand_name" source="brandName" />
        <TextField label="brand_order" source="brandOrder" />
        <TextField label="brand_status" source="brandStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
