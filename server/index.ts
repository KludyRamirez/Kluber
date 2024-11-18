import express, { Express } from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import { promises as fs } from 'fs';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.API_PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;
const CLIENT_URI = process.env.CLIENT_URI as string;

const app: Express = express();
const server = http.createServer(app);

mongoose.set('strictQuery', true);

const setupMiddleware = () => {
  app.use(morgan('dev'));
  app.use(cors({ origin: CLIENT_URI, credentials: true }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const loadRoutes = async () => {
  try {
    const routeFiles = await fs.readdir('./routes');
    routeFiles.forEach(async (file) => {
      if (file.endsWith('.ts')) {
        const route = await import(`./routes/${file}`);
        app.use('/api', route.default);
      }
    });
  } catch (error) {
    console.error('Error loading routes:', error);
  }
};

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    setupMiddleware();
    await loadRoutes();

    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(
      'Failed to start the server or connect to the database:',
      error
    );
  }
};

startServer();
