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

const GetProductByIdFromDb = async (id:string) => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};

const UpdateProductByFromId = async(id : string,body : object)=>{
  const UpdateDoc : any = {$set : {}}
  Object.entries(body).forEach(([key,value])=>{
    UpdateDoc.$set[key] = value
  })
  console.log(UpdateDoc)
  const result = await ProductModel.updateOne({_id : id},UpdateDoc)
  return result
}

const ProductService = {
  CreateProductIntoDb,
  GetProductFormDb,
  GetProductByIdFromDb,
  UpdateProductByFromId
};
export default ProductService;
