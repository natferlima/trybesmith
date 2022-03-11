import { Request, Response, NextFunction } from 'express';

const typeOfFieldsProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { name, amount } = req.body;
  if (typeof name !== 'string') return res.status(422).json({ error: 'Name must be a string' });
  if (typeof amount !== 'string') return res.status(422).json({ error: 'Amount must be a string' });

  next();
};

export default typeOfFieldsProduct;