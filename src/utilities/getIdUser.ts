import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/token';

const getIdUser = (authorization:string | undefined): number => {
  if (authorization) {
    const result = jwt.verify(authorization, 'SECRET') as TokenPayload;
    const { id } = result;
    return id;
  }
  return -1;
};

export default {
  getIdUser,
};
