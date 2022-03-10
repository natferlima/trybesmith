import { Request, Response, NextFunction } from 'express';

const typeOfFields = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { username, classe, level, password } = req.body;
  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  } 
  if (typeof classe !== 'string') return res.status(422).json({ error: 'Classe must be a string' });
  if (typeof level !== 'number') return res.status(422).json({ error: 'Level must be a number' });
  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  } 

  next();
};

export default typeOfFields;