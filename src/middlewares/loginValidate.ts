import { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';

const loginValidate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { username, password } = req.body;
  const login = await loginService.getLoginUser({ username, password });
  if (login === undefined) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }

  next();
};

export default loginValidate;