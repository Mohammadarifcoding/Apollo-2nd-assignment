import { Request, Response } from "express";
import orderValidation from "./Order.validate";
import { z } from "zod";
import OrderService from "./Order.Service";

const CreateOrder = async(req:Request,res:Response)=>{
 try{
    const order = req.body
    const Validation =  orderValidation.parse(order)
    const result = await OrderService.CreateOrderToDb(Validation)
    res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });

 }catch (error: unknown) {
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
}

const OrderController = {CreateOrder}

export default OrderController