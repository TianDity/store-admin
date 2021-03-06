/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupplierInfoWhereInput } from "./SupplierInfoWhereInput";
import { Type } from "class-transformer";
import { SupplierInfoOrderByInput } from "./SupplierInfoOrderByInput";

@ArgsType()
class SupplierInfoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SupplierInfoWhereInput,
  })
  @Field(() => SupplierInfoWhereInput, { nullable: true })
  @Type(() => SupplierInfoWhereInput)
  where?: SupplierInfoWhereInput;

  @ApiProperty({
    required: false,
    type: [SupplierInfoOrderByInput],
  })
  @Field(() => [SupplierInfoOrderByInput], { nullable: true })
  @Type(() => SupplierInfoOrderByInput)
  orderBy?: Array<SupplierInfoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SupplierInfoFindManyArgs };
