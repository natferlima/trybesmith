import productModel from '../models/productModel';
import { NewProduct } from '../interfaces/product';

const createProduct = async (newProduct: NewProduct) => {
  const result = await productModel.create(newProduct);
  return { item: result };
};

export default {
  createProduct,
};