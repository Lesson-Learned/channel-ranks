import cors from 'cors';
import express from 'express';
import { PORT } from './config';
import { router } from './routes';
import { errorHandler } from './shared';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json({ type: ['text/plain'] }));
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`\nSERVER RUNNING ON PORT ${PORT}`));
