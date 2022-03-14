import { Request, Response, NextFunction } from 'express';

const productsIsArray = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { products } = req.body;
  if (!Array.isArray(products)) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }

  next();
};

export default productsIsArray;