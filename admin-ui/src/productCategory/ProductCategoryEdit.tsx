import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ProductCategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category_code" source="categoryCode" />
        <TextInput label="category_level" source="categoryLevel" />
        <TextInput label="category_name" source="categoryName" />
        <SelectInput
          source="categoryStatus"
          label="category_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="parent_id" source="parentId" />
      </SimpleForm>
    </Edit>
  );
};
