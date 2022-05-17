import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Product_Infos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="audit_status" source="auditStatus" />
        <TextField label="average_cost" source="averageCost" />
        <TextField label="bar_code" source="barCode" />
        <TextField label="brand_id" source="brandId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="descript" source="descript" />
        <TextField label="ID" source="id" />
        <TextField label="one_category_id" source="oneCategoryId" />
        <TextField label="price" source="price" />
        <TextField label="product_core" source="productCore" />
        <TextField label="production_date" source="productionDate" />
        <TextField label="product_keywords" source="productKeywords" />
        <TextField label="product_name" source="productName" />
        <TextField label="product_subtitle" source="productSubtitle" />
        <TextField label="publish_status" source="publishStatus" />
        <TextField label="purchase_price" source="purchasePrice" />
        <TextField label="shelf_life" source="shelfLife" />
        <TextField label="supplier_id" source="supplierId" />
        <TextField label="three_category_id" source="threeCategoryId" />
        <TextField label="two_category_id" source="twoCategoryId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
