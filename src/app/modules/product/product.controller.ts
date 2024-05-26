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
    //query
    const searchTerm = req.query.searchTerm as string;
    if (searchTerm) {
      const result = await ProductServices.getAllProductsFromDB(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: result,
      });
    } else {
      const result = await ProductServices.getAllProductsFromDB();

      res.status(200).json({
        success: true,
        message: 'Products fetched successfully',
        data: result,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// get a single data
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
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { Product: updatedData } = req.body;

    const result = await ProductServices.updateProductFromDB(
      productId,
      updatedData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(404).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    console.log(err);
  }
};
// const searchProduct = async (req: Request, res: Response) => {

//   try {
//     const searchTerm = req.query.searchTerm as string;
//     const result = await ProductServices.searchProductFromDB(searchTerm);
//     res.status(200).json({
//       success: true,
//       message: `Products matching search term ${searchTerm} fetched successfully!`,
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
