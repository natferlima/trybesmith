import express from 'express';
import userModel from '../models/userModel';
import User from '../interfaces/user';

const router = express.Router();

router
  .get('/', async (req, res) => {
    const result: User[] = await userModel.getAll();
    res.status(200).json(result);
  });

export default router;