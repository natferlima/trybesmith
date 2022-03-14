import { Request, Response, NextFunction } from 'express';

const productsArrayValidate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { products } = req.body;
  if (!products) return res.status(400).json({ error: 'Products is required' });
  
  next();
};

export default productsArrayValidate;