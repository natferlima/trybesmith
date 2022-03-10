import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../interfaces/user';

const create = async (newUser: NewUser): Promise<User> => {
  const { username, classe, level, password } = newUser;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
    [username, classe, level, password],
  );
  const { insertId: id } = result;
  return { id, username, classe, level, password };
};

const getAll = async (): Promise<User[]> => {
  const [result] = await connection.execute('SELECT * FROM Users');
  return result as User[];
};

export default {
  getAll,
  create,
};