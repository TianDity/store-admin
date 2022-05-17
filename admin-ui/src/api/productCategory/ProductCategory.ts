export type ProductCategory = {
  categoryCode: string | null;
  categoryLevel: string | null;
  categoryName: string | null;
  categoryStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  parentId: string | null;
  updatedAt: Date;
};
