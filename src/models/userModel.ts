import connection from '../models/connection';
import User from '../interfaces/User';

const getAll = async (): Promise<User[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Users');
  return result as User[];
};

export default {
  getAll,
};