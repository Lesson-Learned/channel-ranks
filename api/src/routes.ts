import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Channel Ranks API!');
});

router.use('*', (req: Request, res: Response) => {
  console.log(`Route [${ req.originalUrl }] does not exist.`);

  res.sendStatus(400);
});

export default router;