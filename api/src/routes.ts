import { Request, Response, Router } from 'express';
import { profileRouter } from './profile/routes';

const router = Router();

router.use('/profile', profileRouter);
router.use('*', (req: Request, res: Response) => {
  throw `Route [${req.originalUrl}] does not exist.`;
});

export { router };
