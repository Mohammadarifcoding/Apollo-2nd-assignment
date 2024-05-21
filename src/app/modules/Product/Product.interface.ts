export type VariantsInterface = {
  type: string;
  value: string;
};
export type InventoryInterface = {
  quantity: number;
  inStock: boolean;
};
// 1. Create an interface representing a document in MongoDB.
export type ProductInterface = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: VariantsInterface[];
  inventory: InventoryInterface;
};
