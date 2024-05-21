import { ObjectId } from 'mongoose';
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

const GetProductByIdFromId = async(id : any)=>{
    const result = await ProductModel.findById({_id : id})
    return result
}


const ProductService = {
  CreateProductIntoDb,
  GetProductFormDb,
  GetProductByIdFromId
};
export default ProductService;
