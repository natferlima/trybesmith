import { Request, Response, NextFunction } from 'express';

const requiredFieldsProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { name, amount } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (!amount) return res.status(400).json({ error: 'Amount is required' });

  next();
};

export default requiredFieldsProduct;