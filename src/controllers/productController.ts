import express, { Request, Response } from 'express';
import { Product, NewProduct } from '../interfaces/product';
import { ItemProduct } from '../interfaces/itemProduct';
import lengthFieldsProduct from '../middlewares/lengthFieldsProduct';
import requiredFieldsProduct from '../middlewares/requiredFieldsProduct';
import tokenValidate from '../middlewares/tokenValidate';
import typeOfFieldsProduct from '../middlewares/typeOfFieldsProduct';
import productService from '../services/productService';

const router = express.Router();

router
  .post(
    '/',
    tokenValidate,
    requiredFieldsProduct,
    typeOfFieldsProduct,
    lengthFieldsProduct, 
    async (req: Request, res: Response<ItemProduct>) => {
      const { name, amount } = req.body as NewProduct;
      const result = await productService.createProduct({ name, amount });
      res.status(201).json(result);
    },
  )

  .get('/', tokenValidate, async (req: Request, res: Response<Product[]>) => {
    const result = await productService.getAll();
    res.status(200).json(result);
  });

export default router;