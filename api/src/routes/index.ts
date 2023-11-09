import { Request, Response, Router } from 'express';
import adminRouter from './admin';
import showRouter from './show';

const router = Router();

router.use('/admin', adminRouter);
router.use('/shows', showRouter);
router.use('*', (req: Request, res: Response) => {
  console.log(`Route [${ req.originalUrl }] does not exist.`);

  res.sendStatus(400);
});

export default router;
