import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUCTINFO_TITLE_FIELD } from "../productInfo/ProductInfoTitle";

export const ProductPicInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="is_master" source="isMaster" />
        <TextField label="oss_key" source="ossKey" />
        <TextField label="pic_desc" source="picDesc" />
        <TextField label="pic_order" source="picOrder" />
        <TextField label="pic_status" source="picStatus" />
        <TextField label="pic_url" source="picUrl" />
        <ReferenceField
          label="product_id"
          source="productinfo.id"
          reference="ProductInfo"
        >
          <TextField source={PRODUCTINFO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
