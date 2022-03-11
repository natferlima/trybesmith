import express from 'express';
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
    async (req, res) => {
      const { name, amount } = req.body;
      const result = await productService.createProduct({ name, amount });
      res.status(201).json(result);
    },
  )

  .get('/', tokenValidate, async (req, res) => {
    const result = await productService.getAll();
    res.status(200).json(result);
  });

export default router;