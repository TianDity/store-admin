import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GoodsSkuInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="goods_code" source="goodsCode" />
        <TextInput label="goods_name" source="goodsName" />
        <TextInput label="product_code" source="productCode" />
        <TextInput label="product_id" source="productId" />
        <TextInput label="product_name" source="productName" />
        <TextInput label="qr_code" source="qrCode" />
      </SimpleForm>
    </Create>
  );
};
