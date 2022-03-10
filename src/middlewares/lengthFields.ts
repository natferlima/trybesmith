import { Request, Response, NextFunction } from 'express';

const lengthFields = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { username, classe, level, password } = req.body;
  if (username.length <= 2) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  } 
  if (classe.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  } 
  if (level <= 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }
  if (password.length < 8) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  } 

  next();
};

export default lengthFields;