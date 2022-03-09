import express from 'express';
import dotenv from 'dotenv';
import userController from './controllers/userController';
// import mysql from 'mysql2/promise';
// import User from './interfaces/User';

dotenv.config();

// const connection = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'natalia',
//   password: 'Nat123456*',
//   database: 'Trybesmith',
// });

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: 'Trybesmith',
// });

const app = express();

app.use(express.json());

app.use('/users', userController);

// const getAll = async () => {
//   try {
//     const [result] = await connection.execute('SELECT * FROM Users');
//     console.log(result);
//     return result;
//   } catch (e) {
//     console.log(e);
//   }
// };

// app.use('/users', async (req, res) => {
//   try {
//     const result = await getAll();
//     res.status(200).json(result);
//   } catch (e) {
//     console.log(e);
//   }
// });

// router.get('/', async (req, res) => {
//   const result: User[] = await getAll();
//   res.status(200).json('oi');
// });

export default app;
