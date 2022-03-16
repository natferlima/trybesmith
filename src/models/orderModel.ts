import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, NewOrder } from '../interfaces/order'; 
import { ProductOrder } from '../interfaces/product';

const create = async (newOrder: NewOrder): Promise<Order> => {
  const { userId, products } = newOrder;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  const { insertId: id } = result;
  return { id, userId, products };
};

const getById = async (id: string): Promise<[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Orders WHERE id = ?', [
    id,
  ]);
  return result as [];
};

const getByIdWithProducts = async (id: string): Promise<ProductOrder[]> => {
  const [result] = await connection.execute(
    `SELECT p.id, o.userId, p.orderId
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId 
      WHERE p.orderId = ?`,
    [id],
  );
  return result as ProductOrder[];
};

export default {
  create,
  getById,
  getByIdWithProducts,
};