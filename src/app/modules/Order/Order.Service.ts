import { OrderInterface } from './Order.interface';
import OrderModel from './Order.model';

const CreateOrderToDb = async (order: OrderInterface) => {
  const result = await OrderModel.create(order);
  return result;
};

const GetOrderByEmailFromDb = async (email: string) => {
    const filter : any = {}
    if(email){
        filter.email = email
    }
    const result = await OrderModel.find(filter);
    return result;
  };


const OrderService = { CreateOrderToDb , GetOrderByEmailFromDb};
export default OrderService;
