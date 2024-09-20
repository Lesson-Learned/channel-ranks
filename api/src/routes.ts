import { Request, Response, Router } from 'express';
import { profileRouter } from './profile/routes';
import { showRouter } from './show/routes';

const router = Router();

router.use('/profile', profileRouter);
router.use('/shows', showRouter);
router.use('*', (req: Request, res: Response) => {
  throw new Error(`Route [${req.originalUrl}] does not exist.`);
});

export { router };
