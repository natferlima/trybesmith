import express from 'express';
import userController from './controllers/userController';
import logincontroller from './controllers/loginController';

const app = express();

app.use(express.json());

app.use('/users', userController);
app.use('/login', logincontroller);

export default app;
