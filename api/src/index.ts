import cors from 'cors';
import express from 'express';
import { PORT } from './config';
import router from './routes/index';

const app = express();

app.listen(PORT, () => {
  console.log(`\nSERVER RUNNING ON PORT ${ PORT }\n`);
});
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json({ type: ['text/plain'] }));
app.use(router);
