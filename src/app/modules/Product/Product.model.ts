import { model, Schema } from 'mongoose';
import {
  InventoryInterface,
  ProductInterface,
  VariantsInterface,
} from './Product.interface';

// Define the Variants schema
const VariantsSchema: Schema = new Schema<VariantsInterface>({
  type: {
    type: String,
    required: [true, 'Variant type is required'],
  },
  value: {
    type: String,
    required: [true, 'Variant value is required'],
  },
});

// Create the Inventory schema
const InventorySchema: Schema = new Schema<InventoryInterface>({
  quantity: {
    type: Number,
    required: [true, 'Inventory quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In-stock status is required'],
  },
});

// Create the Product schema
const ProductSchema: Schema = new Schema<ProductInterface>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product tags are required'],
  },
  variants: {
    type: [VariantsSchema],
    required: [true, 'Product variants are required'],
  },
  inventory: {
    type: InventorySchema,
    required: [true, 'Product inventory is required'],
  },
});

const ProductModel = model<ProductInterface>('products', ProductSchema);

export default ProductModel;
