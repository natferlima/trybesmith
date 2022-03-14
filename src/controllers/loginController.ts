import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import loginValidate from '../middlewares/loginValidate';
import requiredFieldsLogin from '../middlewares/requiredFieldsLogin';
import loginService from '../services/loginService';
import { Token } from '../interfaces/token';
import { NewLogin } from '../interfaces/login';

const router = express.Router();

router
  .post(
    '/',
    requiredFieldsLogin,
    loginValidate,
    async (req: Request, res: Response<Token>) => {
      const { username, password } = req.body as NewLogin;
      const result = await loginService.getLoginUser({ username, password });
      const token = jwt.sign({ id: result.id, username }, 'SECRET', {
        algorithm: 'HS256',
        expiresIn: '1d',
      });
      res.status(200).json({ token });
    },
  );

export default router;