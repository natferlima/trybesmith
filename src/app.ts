import express from 'express';
import userController from './controllers/userController';
import logincontroller from './controllers/loginController';
import productController from './controllers/productController';
import orderController from './controllers/orderController';

const app = express();

app.use(express.json());

app.use('/users', userController);
app.use('/login', logincontroller);
app.use('/products', productController);
app.use('/orders', orderController);

export default app;
