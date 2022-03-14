import express, { Request, Response } from 'express';
import { OrderObject } from '../interfaces/order';
import productsArrayLength from '../middlewares/productsArrayLength';
import productsArrayValidate from '../middlewares/productsArrayValidate';
import productsIsArray from '../middlewares/productsIsArray';
import tokenValidate from '../middlewares/tokenValidate';
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
  );

export default router;