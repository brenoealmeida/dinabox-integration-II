import express, { Express, Request, Response } from 'express';

const app: Express = express();

//middlewares
app.use(express.json());

//routes
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send("OK");
})

export default app;