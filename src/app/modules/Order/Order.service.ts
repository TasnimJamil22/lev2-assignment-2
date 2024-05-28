import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  if (email) {
    const searchRegex = new RegExp(email, 'i');
    const result = await OrderModel.find({ email: searchRegex });
    return result;
  } else {
    const result = await OrderModel.find();
    return result;
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
