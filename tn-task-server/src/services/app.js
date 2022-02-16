import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import cors from 'cors';
import mainRouter from '../routes/index';
import errorHandler from '../middleware/error';
import response from '../middleware/response';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', response, mainRouter);

app.use(errorHandler);

export default app;
