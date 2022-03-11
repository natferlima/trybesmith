import productModel from '../models/productModel';
import { Product, NewProduct } from '../interfaces/product';

const createProduct = async (newProduct: NewProduct) => {
  const result = await productModel.create(newProduct);
  return { item: result };
};

const getAll = async (): Promise<Product[]> => {
  const result = await productModel.getAll();
  return result;
};

export default {
  createProduct,
  getAll,
};