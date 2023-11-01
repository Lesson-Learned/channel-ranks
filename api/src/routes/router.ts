import { Request, Response, Router } from 'express';
import { showRouter } from './show';

const router = Router();

router.use('/shows', showRouter);
router.use('*', (req: Request, res: Response) => {
  console.log(`Route [${ req.originalUrl }] does not exist.`);

  res.sendStatus(400);
});

export { router };