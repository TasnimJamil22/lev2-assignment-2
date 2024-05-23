import { Request, Response } from 'express';
import { ProductServices } from './product.service';

//creat a product data
const createProduct = async (req: Request, res: Response) => {
  try {
    const { Product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product is added successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get all data

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get a single data
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
