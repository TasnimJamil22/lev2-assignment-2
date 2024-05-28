import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/Order/order.route';

const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

//application routes
app.use('/', ProductRoutes);
app.use('/', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('The application is running');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
