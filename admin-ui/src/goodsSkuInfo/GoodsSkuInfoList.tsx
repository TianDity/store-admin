import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GoodsSkuInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Goods_SKU_Infos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="goods_code" source="goodsCode" />
        <TextField label="goods_name" source="goodsName" />
        <TextField label="ID" source="id" />
        <TextField label="product_code" source="productCode" />
        <TextField label="product_id" source="productId" />
        <TextField label="product_name" source="productName" />
        <TextField label="qr_code" source="qrCode" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
