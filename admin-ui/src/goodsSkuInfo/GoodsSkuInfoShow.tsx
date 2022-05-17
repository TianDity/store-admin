import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const GoodsSkuInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="goods_code" source="goodsCode" />
        <TextField label="goods_name" source="goodsName" />
        <TextField label="ID" source="id" />
        <TextField label="product_code" source="productCode" />
        <TextField label="product_id" source="productId" />
        <TextField label="product_name" source="productName" />
        <TextField label="qr_code" source="qrCode" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
