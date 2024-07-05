import { Request, Response, Router } from 'express';
import { authenticateAdmin } from './admin/middleware/authenticate-admin';
import { adminRouter } from './admin/routes';
import { profileRouter } from './profile/routes';
import { authenticateUser } from './shared/middleware/authenticate-user';
import { showRouter } from './show/routes';

const router = Router();

router.use('/admin', authenticateUser(), authenticateAdmin(), adminRouter);
router.use('/profile', profileRouter);
router.use('/shows', showRouter);
router.use('*', (req: Request, res: Response) => {
  throw new Error(`Route [${req.originalUrl}] does not exist.`);
});

export { router };
