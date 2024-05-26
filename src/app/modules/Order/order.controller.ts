import { Request, Response } from 'express';
import { OrderServices } from './Order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.Order;
    const result = await OrderServices.createOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
};
