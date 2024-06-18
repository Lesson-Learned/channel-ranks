import cors from 'cors';
import express from 'express';
import { CORS_ORIGIN, PORT } from './config';
import { router } from './routes';
import { errorHandler } from './shared';

const app = express();

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ type: ['text/plain'] }));
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`\nSERVER RUNNING ON PORT ${PORT}`));
