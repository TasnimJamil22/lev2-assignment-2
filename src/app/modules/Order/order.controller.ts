import { Request, Response } from 'express';
import { OrderServices } from './Order.service';
import { ProductModel } from '../product/product.model';
import orderValidationSchema from './order.validation';

//Create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.Order;
    //joi validation
    const { error } = orderValidationSchema.validate(order);

    const product = await ProductModel.findById(order.productId);
    //joi validation

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      });
    }
    // Check if the product exists

    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Product not found',
      });
    }
    // Check if the product has sufficient quantity
    const quantity = product.inventory.quantity;
    console.log(quantity);
    if (quantity < order.quantity) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
    //create order
    const result = await OrderServices.createOrderIntoDB(order);
    //calculating quantity and inStock
    const remainingQuantity = quantity - order.quantity;
    const inStock = remainingQuantity > 0;
    //updating the product quantity and inStock
    const updatedProductQuantity = await ProductModel.findByIdAndUpdate(
      order.productId,
      // { $inc: { 'inventory.quantity': -order.quantity } },
      {
        'inventory.quantity': remainingQuantity,
        'inventory.inStock': inStock,
      },
      { new: true },
    );

    // Check if the product was found and updated

    if (!updatedProductQuantity) {
      return res.status(400).json({
        success: false,
        message: 'Product Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: {
        order: result,
        updated: updatedProductQuantity.inventory,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//Get All Orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (email) {
      const result = await OrderServices.getAllOrdersFromDB(email);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrdersFromDB();

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
      res.status(400).json({
        success: false,
        message: 'Order not found',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
