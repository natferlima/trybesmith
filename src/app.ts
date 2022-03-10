import express from 'express';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.use('/users', userController);

export default app;
