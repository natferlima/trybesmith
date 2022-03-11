import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../interfaces/user';
import { Login, NewLogin } from '../interfaces/login';

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

const getLoginUser = async (login: NewLogin): Promise<Login> => {
  const { username, password } = login;
  const [result] = await connection.execute(
    'SELECT id, username, password FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  const [loginUser] = result as Login[];
  return loginUser;
};

export default {
  getAll,
  create,
  getLoginUser,
};