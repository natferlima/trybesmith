import orderModel from '../models/orderModel';
import productModel from '../models/productModel';
import { Order, NewOrder, OrderObject } from '../interfaces/order';

const create = async (newOrder: NewOrder): Promise<OrderObject> => {
  const { products } = newOrder;
  const result = await orderModel.create(newOrder);
  await Promise.all(products.map(async (productId) => {
    await productModel.orderIdUpdate(productId, result.id);
  }));
  return { order: newOrder };
};

const getById = async (id: string): Promise<[]> => {
  const result = await orderModel.getById(id);
  return result;
};

const getByIdWithProducts = async (id: string): Promise<Order> => {
  const orders = await orderModel.getByIdWithProducts(id);
  const products = orders.map((order) => order.id);
  return { id: orders[0].orderId, userId: orders[0].userId, products };
};

export default {
  create,
  getById,
  getByIdWithProducts,
};