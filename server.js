import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

async function startServer() {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}

startServer();
