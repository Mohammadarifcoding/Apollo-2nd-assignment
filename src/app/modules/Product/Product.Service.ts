import { ProductInterface } from './Product.interface';
import ProductModel from './Product.model';

const CreateProductIntoDb = async (product: ProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};

const GetProductFormDb = async (searchterm: string) => {
  //eslint-disable-next-line
  const filterDoc: any = {};

  if (searchterm) {
    filterDoc.$or = [
      { name: { $regex: searchterm, $options: 'i' } },
      { description: { $regex: searchterm, $options: 'i' } },
      { category: { $regex: searchterm, $options: 'i' } },
      { tags: { $regex: searchterm, $options: 'i' } },
    ];
  }
  const result = await ProductModel.find(filterDoc);
  return result;
};

const GetProductByIdFromDb = async (id: string) => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};

const UpdateProductByFromId = async (id: string, body: object) => {
  //eslint-disable-next-line
  const UpdateDoc: any = { $set: {} };
  Object.entries(body).forEach(([key, value]) => {
    UpdateDoc.$set[key] = value;
  });
  const result = await ProductModel.updateOne({ _id: id }, UpdateDoc);
  return result;
};

const DeleteProductByIdFromDb = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};

const ProductService = {
  CreateProductIntoDb,
  GetProductFormDb,
  GetProductByIdFromDb,
  UpdateProductByFromId,
  DeleteProductByIdFromDb,
};
export default ProductService;
