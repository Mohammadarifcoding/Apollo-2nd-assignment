import express from 'express';
import ProductController from './Product.controller';

const ProductRoute = express.Router();

ProductRoute.post('/products', ProductController.CreateProduct);
ProductRoute.get('/products', ProductController.GetProduct);
ProductRoute.get('/products/:productId', ProductController.GetProductById);
ProductRoute.put('/products/:productId', ProductController.UpdateProductById);

export default ProductRoute;
