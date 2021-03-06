/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BrandInfoWhereUniqueInput } from "../../brandInfo/base/BrandInfoWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { ProductPicInfoListRelationFilter } from "../../productPicInfo/base/ProductPicInfoListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupplierInfoWhereUniqueInput } from "../../supplierInfo/base/SupplierInfoWhereUniqueInput";
@InputType()
class ProductInfoWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  auditStatus?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  averageCost?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  barCode?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => BrandInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandInfoWhereUniqueInput)
  @IsOptional()
  @Field(() => BrandInfoWhereUniqueInput, {
    nullable: true,
  })
  brandId?: BrandInfoWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  descript?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductCategoryWhereUniqueInput, {
    nullable: true,
  })
  oneCategoryId?: ProductCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductPicInfoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductPicInfoListRelationFilter)
  @IsOptional()
  @Field(() => ProductPicInfoListRelationFilter, {
    nullable: true,
  })
  picInfoProductId?: ProductPicInfoListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  productCore?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  productionDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  productKeywords?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  productName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  productSubtitle?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  publishStatus?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  purchasePrice?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  qrCode?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  shelfLife?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SupplierInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierInfoWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierInfoWhereUniqueInput, {
    nullable: true,
  })
  supplierId?: SupplierInfoWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductCategoryWhereUniqueInput, {
    nullable: true,
  })
  threeCategoryId?: ProductCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductCategoryWhereUniqueInput, {
    nullable: true,
  })
  twoCategoryId?: ProductCategoryWhereUniqueInput;
}
export { ProductInfoWhereInput };
