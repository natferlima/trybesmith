import express, { Request, Response } from 'express';
import { Order, OrderObject } from '../interfaces/order';
import productsArrayLength from '../middlewares/productsArrayLength';
import productsArrayValidate from '../middlewares/productsArrayValidate';
import productsIsArray from '../middlewares/productsIsArray';
import tokenValidate from '../middlewares/tokenValidate';
import verifyExistsOrder from '../middlewares/verifyExistsOrder';
import orderService from '../services/orderService';
import utilities from '../utilities/getIdUser';

const router = express.Router();

router
  .post(
    '/',
    tokenValidate,
    productsArrayValidate,
    productsIsArray,
    productsArrayLength,
    async (req: Request, res: Response<OrderObject>) => {
      const { authorization } = req.headers;
      const { products } = req.body;
      const id = utilities.getIdUser(authorization);
      const result = await orderService.create({ userId: id, products });
      res.status(201).json(result);
    },
  )
  .get(
    '/:id',
    tokenValidate,
    verifyExistsOrder,
    async (req: Request, res: Response<Order>) => {
      const { id } = req.params;
      const result = await orderService.getByIdWithProducts(id);
      res.status(200).json(result);
    },
  )
  .get(
    '/',
    tokenValidate,
    async (req:Request, res:Response<Order[]>) => {
      const result = await orderService.getAllWithProducts();
      res.status(200).json(result);
    },
  );

export default router;