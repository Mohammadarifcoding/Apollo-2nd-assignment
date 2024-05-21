import express from 'express';
import ProductController from './Product.controller';

const ProductRoute = express.Router();

ProductRoute.post('/products', ProductController.CreateProduct);
ProductRoute.get('/products', ProductController.GetProduct);

export default ProductRoute;
