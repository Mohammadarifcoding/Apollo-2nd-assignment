import { z } from 'zod';

// Variants Validation
const VariantsValidation = z.object({
  type: z.string().min(1, 'Variant type is required'),
  value: z.string().min(1, 'Variant value is required'),
});

// Inventory Validation
const InventoryValidation = z.object({
  quantity: z.number().min(0, 'Inventory quantity is required'),
  inStock: z.boolean(),
});

// Product Validation
const ProductValidation = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Product description is required'),
  price: z.number().min(0, 'Product price is required'),
  category: z.string().min(1, 'Product category is required'),
  tags: z.array(z.string()).min(1, 'Product tags are required'),
  variants: z.array(VariantsValidation).min(1, 'Product variants are required'),
  inventory: InventoryValidation,
});

export { ProductValidation, VariantsValidation, InventoryValidation };
