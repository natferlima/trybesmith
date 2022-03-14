import { Request, Response, NextFunction } from 'express';

const productsArrayLength = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { products } = req.body;
  if (products.length === 0) {
    return res.status(422).json({ error: 'Products can\'t be empty' });
  }

  next();
};

export default productsArrayLength;