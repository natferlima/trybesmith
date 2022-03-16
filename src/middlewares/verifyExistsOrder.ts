import { Request, Response, NextFunction } from 'express';
import orderService from '../services/orderService';

const verifyExistsOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { id } = req.params;
  const order = await orderService.getById(id);
  console.log(order);
  if (order.length === 0) {
    return res.status(404).json({ error: 'Order not found' });
  }

  next();
};

export default verifyExistsOrder;