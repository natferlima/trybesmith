import { Request, Response, NextFunction } from 'express';

const lengthFieldsProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { name, amount } = req.body;
  if (name.length <= 2) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }
  if (amount.length <= 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  } 
  next();
};

export default lengthFieldsProduct;