import express from 'express';
import viewEngine from './src/config/viewEngine.js';
import userRouter from './src/routes/user.route.js';
import authRouter from './src/routes/auth.route.js';
import tableRouter from './src/routes/table.route.js';
import categoryRouter from './src/routes/category.route.js';
import { errorHandler } from './src/middlewares/error.middleware.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route user
app.use('/api/users', userRouter);

// route auth
app.use('/api/auth', authRouter);

// route table
app.use('/api/tables', tableRouter);

// route category
app.use('/api/categories', categoryRouter);

// error handler
app.use(errorHandler);

viewEngine(app);

export default app;