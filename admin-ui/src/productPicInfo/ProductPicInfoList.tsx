import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTSPUINFO_TITLE_FIELD } from "../productSpuInfo/ProductSPUInfoTitle";

export const ProductPicInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Product_PicInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
          source="productspuinfo.id"
          reference="ProductSPUInfo"
        >
          <TextField source={PRODUCTSPUINFO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
