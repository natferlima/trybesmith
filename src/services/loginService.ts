import userModel from '../models/userModel';
import { Login, NewLogin } from '../interfaces/login';

const getLoginUser = async (login: NewLogin): Promise<Login> => {
  const result = await userModel.getLoginUser(login);
  return result;
};

export default {
  getLoginUser,
};