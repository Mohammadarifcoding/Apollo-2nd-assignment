import { z } from 'zod';
const orderValidation = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: z
    .string()
    .length(24, { message: 'Product ID must be exactly 24 characters long' }),
  price: z
    .number()
    .int()
    .positive({ message: 'Price must be a positive integer' }),
  quantity: z
    .number()
    .int()
    .nonnegative({ message: 'Quantity must be a non-negative integer' }),
});

export default orderValidation;
