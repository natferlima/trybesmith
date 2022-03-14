import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, NewProduct } from '../interfaces/product'; 

const create = async (newProduct: NewProduct): Promise<Product> => {
  const { name, amount } = newProduct;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const { insertId: id } = result;
  return { id, name, amount };
};

const getAll = async (): Promise<Product[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result as Product[];
};

const orderIdUpdate = async (productId: number, orderId: number) => {
  const [result] = await connection.execute(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
    [orderId, productId],
  );
  return result;
};

export default {
  create,
  getAll,
  orderIdUpdate,
};