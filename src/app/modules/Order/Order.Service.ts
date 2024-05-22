import ProductModel from '../Product/Product.model';
import { OrderInterface } from './Order.interface';
import OrderModel from './Order.model';

const CreateOrderToDb = async (order: OrderInterface) => {
    const id = order.productId;
    const ProductData = await ProductModel.findById(id)
    const NewQuantity = ProductData?.inventory.quantity as number - order.quantity
    if(!ProductData){
        throw new Error("Cloudn't found the product")
    }
    else {
        if(ProductData.inventory.inStock && ProductData.inventory.quantity > 0 && ProductData.inventory.quantity >= order.quantity ){
            const result = await OrderModel.create(order)
            const UpdateData = await ProductModel.updateOne({_id : ProductData.id},{
                    "inventory.quantity" : NewQuantity,
                    "inventory.inStock" : NewQuantity > 0

            })
            console.log(UpdateData)
            return result
        }
        else{
            throw new Error('Insufficient quantity available in inventory')
        }
    }
};

const GetOrderByEmailFromDb = async (email: string) => {
    //eslint-disable-next-line
    const filter : any = {}
    if(email){
        filter.email = email
    }
    const result = await OrderModel.find(filter);
    return result;
  };


const OrderService = { CreateOrderToDb , GetOrderByEmailFromDb};
export default OrderService;
