import { Request, Response, NextFunction } from 'express';

const requiredFieldsLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { username, password } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (!password) return res.status(400).json({ error: 'Password is required' });

  next();
};

export default requiredFieldsLogin;