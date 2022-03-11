import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const tokenValidate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<string> | void> => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  if (authorization) {
    try {
      jwt.verify(authorization, 'SECRET');
    } catch (_e) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  }

  next();
};

export default tokenValidate;