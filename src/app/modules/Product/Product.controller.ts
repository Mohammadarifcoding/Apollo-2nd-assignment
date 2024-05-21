import { Request, Response } from 'express';
import { ProductValidation } from './Product.validate';
import ProductService from './Product.Service';
import { z } from 'zod';

const CreateProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Zod validation
    const validatedProduct = ProductValidation.parse(productData);

    // Assuming ProductService.CreateProductIntoDb is your function to create the product in the database
    const result = await ProductService.CreateProductIntoDb(validatedProduct);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        error, // Sending validation errors in the response
      });
    } else {
      // Handle other errors
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
        error, // Sending the error message in the response
      });
    }
  }
};

const GetProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.GetProductFormDb();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      messege: 'Unexpected error occurred',
      error,
    });
  }
};

const ProductController = { CreateProduct, GetProduct };

export default ProductController;
