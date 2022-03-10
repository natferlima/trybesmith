import { Request, Response, NextFunction } from 'express';

const requiredFields = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { username, classe, level, password } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (!classe) return res.status(400).json({ error: 'Classe is required' });
  if (level === undefined) return res.status(400).json({ error: 'Level is required' });
  if (!password) return res.status(400).json({ error: 'Password is required' });

  next();
};

export default requiredFields;