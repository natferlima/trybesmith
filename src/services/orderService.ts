import orderModel from '../models/orderModel';
import productModel from '../models/productModel';
import { NewOrder, OrderObject } from '../interfaces/order';

const create = async (newOrder: NewOrder): Promise<OrderObject> => {
  const { products } = newOrder;
  const result = await orderModel.create(newOrder);
  await Promise.all(products.map(async (productId) => {
    await productModel.orderIdUpdate(productId, result.id);
  }));
  return { order: newOrder };
};

export default {
  create,
};