import { Request, Response } from 'express';
import { z } from 'zod';
import ProductService from './Product.Service';
import { ProductValidation } from './Product.validate';

// create product
const CreateProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Zod validation
    const validatedProduct = ProductValidation.parse(productData);

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
        error,
      });
    } else {
      // Handle other errors
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
        error,
      });
    }
  }
};

const GetProduct = async (req: Request, res: Response) => {
  try {
    const searchterm: string = req.query.searchTerm as string;
    const result = await ProductService.GetProductFormDb(searchterm);
    if (searchterm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchterm} fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(400).json({
      success: false,
      messege: 'Unexpected error occurred',
      error,
    });
  }
};

const GetProductById = async (req: Request, res: Response) => {
  try {
    const Id = req.params.productId;
    const result = await ProductService.GetProductByIdFromDb(Id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Clouden't find the product!",
      });
    }
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: 'Unexpected error occurred',
      error,
    });
  }
};

const UpdateProductById = async (req: Request, res: Response) => {
  try {
    const Id = req.params.productId;
    const UpdateData = req.body;
    // const validatedProduct = ProductValidation.parse(UpdateData);
    const result = await ProductService.UpdateProductByFromId(Id, UpdateData);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Cloudn't update",
      error,
    });
  }
};

const DeleteProductById = async (req: Request, res: Response) => {
  try {
    const Id = req.params.productId;
    const result = await ProductService.DeleteProductByIdFromDb(Id);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unexpectedly product cloudn't delete!",
      error: error,
    });
  }
};

const ProductController = {
  CreateProduct,
  GetProduct,
  GetProductById,
  UpdateProductById,
  DeleteProductById,
};

export default ProductController;
