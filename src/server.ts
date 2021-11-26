import  express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import "dotenv/config";
import './database';
import {router} from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return error instanceof Error ? response.status(401).json({ error: error.message }) : response.status(500).json({ error: 'Internal Server Error!' });
})

app.listen(3000, () => console.log('Rodando liso'));