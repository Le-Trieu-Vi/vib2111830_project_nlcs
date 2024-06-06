import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './src/config/viewEngine.js';
import userRouter from './src/routes/user.route.js';
import authRouter from './src/routes/auth.route.js';
import tableRouter from './src/routes/table.route.js';
import errorController from './src/controllers/error.controller.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route user
app.use('/api/users', userRouter);

// route auth
app.use('/api/auth', authRouter);

// route table
app.use('/api/tables', tableRouter);

// error handler
app.use(errorController.handle);

viewEngine(app);

export default app;