import express from 'express';
import jwt from 'jsonwebtoken';
import loginValidate from '../middlewares/loginValidate';
import requiredFieldsLogin from '../middlewares/requiredFieldsLogin';
import userModel from '../models/userModel';

const router = express.Router();

router
  .post('/', requiredFieldsLogin, loginValidate, async (req, res) => {
    const { username, password } = req.body;
    const result = await userModel.getLoginUser({ username, password });
    console.log(result);
    const token = jwt.sign({ id: result.id, username }, 'SECRET', {
      algorithm: 'HS256',
      expiresIn: '1d',
    });
    res.status(200).json({ token });
  });

export default router;