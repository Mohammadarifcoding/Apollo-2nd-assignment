import { OrderInterface } from "./Order.interface";
import OrderModel from "./Order.model";

const CreateOrderToDb = async(order:OrderInterface)=>{
  const result = await OrderModel.create(order)
  return result
}

const OrderService = {CreateOrderToDb}
 export default OrderService