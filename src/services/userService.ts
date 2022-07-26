import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { User, NewUser } from '../interfaces/user';

dotenv.config();

const createUser = async (newUser: NewUser) => {
  const result = await userModel.create(newUser);
  const token = jwt.sign(
    { id: result.id, username: result.username }, 
    'SECRET', // por algum motivo usar a variavel JWT_SECRET do dotenv nao ta funcionado 0_0
    { algorithm: 'HS256', expiresIn: '1d' },
  );
  return token;
};

const getAll = async (): Promise<User[]> => {
  const result = await userModel.getAll();
  return result;
};

export default {
  createUser,
  getAll,
};