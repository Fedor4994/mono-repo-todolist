import bodyParser from 'body-parser';
import express, { ErrorRequestHandler } from 'express';
import 'dotenv/config';

import helmet from 'helmet';

import cors from 'cors';

import AppRouter from './routes';
import connectDB from './config/database';
import { ErrorWithStatus } from './types/error';

const PORT = process.env.PORT || 4200;

const app = express();
const router = new AppRouter(app);

connectDB();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

/* eslint-disable */
app.use(((err: ErrorWithStatus, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
}) as ErrorRequestHandler);

/* eslint-enable */
// eslint-disable-next-line no-console
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default server;
