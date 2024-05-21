import { ProductInterface } from './Product.interface';
import ProductModel from './Product.model';

const CreateProductIntoDb = async (product: ProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};

const GetProductFormDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const ProductService = {
  CreateProductIntoDb,
  GetProductFormDb,
};
export default ProductService;
