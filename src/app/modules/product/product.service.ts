import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm, 'i');
    const result = await ProductModel.find({
      $or: [{ name: searchRegex }, { description: searchRegex }],
    });
    return result;
  } else {
    const result = await ProductModel.find();
    return result;
  }
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// types of updated product data
export type ProductUpdate = {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  tags?: string[];
  variants?: {
    type: string;
    value: string;
  }[];
  inventory?: {
    quantity: number;
    inStock: boolean;
  };
};

const updateProductFromDB = async (id: string, updateValue: ProductUpdate) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name: updateValue.name,
        description: updateValue.description,
        price: updateValue.price,
        category: updateValue.category,
        tags: updateValue.tags,
        variatnts: updateValue.variants,
        inventory: updateValue.inventory,
      },
    },
    { new: true },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id }, { new: true });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
