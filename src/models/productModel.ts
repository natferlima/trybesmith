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

export default {
  create,
};