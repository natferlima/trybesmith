import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   // database: process.env.MYSQL_DB_NAME,
// });

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'natalia',
  password: 'Nat123456*',
  database: 'Trybesmith',
});

export default connection;