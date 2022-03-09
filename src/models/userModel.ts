import connection from './connection';
import User from '../interfaces/user';

const getAll = async (): Promise<User[]> => {
  const [result] = await connection.execute('SELECT * FROM Users');
  return result as User[];
};

export default {
  getAll,
};