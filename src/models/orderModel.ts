import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, NewOrder } from '../interfaces/order'; 

const create = async (newOrder: NewOrder): Promise<Order> => {
  const { userId, products } = newOrder;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  const { insertId: id } = result;
  return { id, userId, products };
};

export default {
  create,
};