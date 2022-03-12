import express, { Request, Response } from 'express';
import userService from '../services/userService';
import { User, NewUser } from '../interfaces/user';
import requiredFields from '../middlewares/requiredFields';
import typeOfFields from '../middlewares/typeOfFields';
import lengthFields from '../middlewares/lengthFields';
import { Token } from '../interfaces/token';

const router = express.Router();

router
  .get('/', async (req: Request, res: Response<User[]>) => {
    const result: User[] = await userService.getAll();
    res.status(200).json(result);
  })
  .post(
    '/',
    requiredFields,
    typeOfFields,
    lengthFields,
    async (req: Request, res: Response<Token>) => {
      const { username, classe, level, password } = req.body as NewUser;
      const token = await userService.createUser({ username, classe, level, password });
      res.status(201).json({ token });
    },
  );

export default router;