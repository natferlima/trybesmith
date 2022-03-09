import express from 'express';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.use('/', userController);

export default app;
