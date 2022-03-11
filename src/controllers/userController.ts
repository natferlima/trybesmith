import express from 'express';
import userService from '../services/userService';
import { User } from '../interfaces/user';
import requiredFields from '../middlewares/requiredFields';
import typeOfFields from '../middlewares/typeOfFields';
import lengthFields from '../middlewares/lengthFields';

const router = express.Router();

router
  .get('/', async (req, res) => {
    const result: User[] = await userService.getAll();
    res.status(200).json(result);
  })
  .post('/', requiredFields, typeOfFields, lengthFields, async (req, res) => {
    const { username, classe, level, password } = req.body;
    const token = await userService.createUser({ username, classe, level, password });
    res.status(201).json({ token });
  });

export default router;